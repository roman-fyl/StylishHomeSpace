import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeFromCart, setCartItems } from "../../store/actions/cartActions";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import QuantityInCart from "../Items/QuantityInCart/QuantityInCart";
import { setZipCode, setError } from "../../store/actions/locationActions";
import { setCoupon, clearCoupon } from "../../store/actions/couponActions";
import Notification from "../../components/Notification/Notification";
import { getSessionNumber } from "../Sessions/getSessionNumber";
import { setSessionId} from "../../store/actions/sessionActions";


import "./CartComponent.scss";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const zipCode = useSelector((state) => state.location.zipCode);
  const sessionId = useSelector((state) => state.session.sessionId);
  const { discountAmount, code: appliedCouponCode, minOrderValue } = useSelector((state) => state.coupon);  
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [inputZipCode, setInputZipCode] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true); 
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [totalBeforeTaxCollected, setTotalBeforeTaxCollected] = useState("")

  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    let localSessionId = sessionId;
  
    if (!localSessionId) {
      localSessionId = getFromLocalStorage("abnd-session");
      if (!localSessionId) {
        localSessionId = getSessionNumber();  
        setLocalStorage("abnd-session", localSessionId);
      }
    }
  
    if (queryParams.get("session") !== localSessionId) {
      queryParams.set("session", localSessionId);
      navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
    }
  
    dispatch(setSessionId(localSessionId));

  
    if (!cartItems.length) {
      const storedCartItems = getFromLocalStorage("cartItems");
      if (storedCartItems && storedCartItems.length > 0) {
        dispatch(setCartItems(storedCartItems, localSessionId));
  

      }
    }
  
  
    import("../../assets/db/coupons.json")
      .then((data) => {
        setCoupons(data.default || data);
      })
      .catch((error) => {
        console.error("Error loading coupons:", error);
      });
  
    const savedCoupon = getFromLocalStorage("couponDetails");
    if (savedCoupon) {
      const coupon = Array.isArray(savedCoupon) ? savedCoupon[0] : savedCoupon;
      if (coupon) {
        dispatch(setCoupon(coupon));
        // console.log(savedCoupon)
      }
    }
  
    setIsInitialLoad(false);  
  }, [location, navigate, sessionId, dispatch, cartItems.length]);
  
  useEffect(() => {
    const storedDeliveryType = getFromLocalStorage("deliveryType");

    if (storedDeliveryType && Array.isArray(storedDeliveryType)) {
      setDeliveryType(storedDeliveryType[0]); 
    } else if (storedDeliveryType) {
      setDeliveryType(storedDeliveryType); 
    }

    // console.log("Loaded deliveryType from local storage:", storedDeliveryType);
  }, []);

  const handleTypeDelivery = (e) => {
    const selectedType = e.target.value; 
    setDeliveryType(selectedType); 
    setLocalStorage("deliveryType", selectedType); 
    console.log("Updated deliveryType:", selectedType);
  };

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      setTotalAmount(0);

  
      if (!isInitialLoad) {
        setLocalStorage("couponDetails", null);
        dispatch(clearCoupon());
      }
      return;
    }
  
    const calculateTotal = () => {
      const calculatedTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      let discountedTotal = calculatedTotal;
      const validDiscountAmount = discountAmount || 0;
      
      if (discountedTotal < minOrderValue) {
        dispatch(clearCoupon());
        setLocalStorage("couponDetails", null);
        setNotification({ message: "Your order value is below the minimum required for this coupon, and it has been removed", type: 'error' });
      }
  
      if (validDiscountAmount > 0) {
        discountedTotal = calculatedTotal - validDiscountAmount;
      }
  
      if (appliedCouponCode) {
        const matchingCoupon = coupons.find(coupon => coupon.code.trim() === appliedCouponCode.trim());
  
        if (matchingCoupon) {
          let newTotal = calculatedTotal;
          let appliedDiscountAmount = 0;
  
          if (matchingCoupon.isPercentage) {
            appliedDiscountAmount = (calculatedTotal * matchingCoupon.discountAmount) / 100;
            newTotal = calculatedTotal - appliedDiscountAmount;
          } else {
            appliedDiscountAmount = matchingCoupon.discountAmount;
            newTotal = calculatedTotal - appliedDiscountAmount;
          }
  
          if (newTotal + appliedDiscountAmount >= matchingCoupon.minOrderValue) {
            dispatch(setCoupon({
              code: matchingCoupon.code,
              discountAmount: appliedDiscountAmount,
              isPercentage: matchingCoupon.isPercentage,
              minOrderValue: matchingCoupon.minOrderValue
            }));
  
            setLocalStorage("couponDetails", {
              code: matchingCoupon.code,
              discountAmount: appliedDiscountAmount,
              isPercentage: matchingCoupon.isPercentage,
              minOrderValue: matchingCoupon.minOrderValue,
              session: sessionId
            });
  
            discountedTotal = newTotal;
          } else {
            dispatch(clearCoupon());
            setLocalStorage("couponDetails", null);
            setNotification({ message: "Your order does not meet the minimum spend for this coupon, and it has been removed", type: 'error' });
          }
        }
      }
  
      setTotalAmount(discountedTotal.toFixed(2));
      setTotalBeforeTaxCollected(discountedTotal);
    };
  
    calculateTotal();
  }, [cartItems, appliedCouponCode, discountAmount, coupons, minOrderValue, dispatch, sessionId, isInitialLoad]);
  

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    const updatedCartItems = cartItems.filter((item) => item.idN !== productId);
    setLocalStorage("cartItems", updatedCartItems);

    if (updatedCartItems.length === 0) {
      dispatch(clearCoupon());
      setTotalBeforeTaxCollected(0);
      setDeliveryType("");
      setLocalStorage("couponDetails", null); 
    }
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
  
    setNotification({ message: "", type: "" });
  
    if (couponCode.length >= 5 && couponCode.length <= 30) {
      const matchingCoupon = coupons.find(coupon => coupon.code.trim() === couponCode.trim());
  
      if (matchingCoupon) {
        const calculatedTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        let newTotal = calculatedTotal;
        let appliedDiscountAmount = 0;
  
        if (matchingCoupon.isPercentage) {
          appliedDiscountAmount = (calculatedTotal * matchingCoupon.discountAmount) / 100;
          newTotal = calculatedTotal - appliedDiscountAmount;
        } else {
          appliedDiscountAmount = matchingCoupon.discountAmount;
          newTotal = calculatedTotal - appliedDiscountAmount;
        }
  
        // console.log("calculatedTotal", calculatedTotal);
        // console.log("New Total", newTotal);
  
        if (calculatedTotal >= matchingCoupon.minOrderValue) {
          dispatch(setCoupon({
            code: couponCode,
            discountAmount: appliedDiscountAmount,
            isPercentage: matchingCoupon.isPercentage,
            minOrderValue: matchingCoupon.minOrderValue
          }));
  
          setLocalStorage("couponDetails", {
            code: couponCode,
            discountAmount: appliedDiscountAmount,
            isPercentage: matchingCoupon.isPercentage,
            minOrderValue: matchingCoupon.minOrderValue,
            session: sessionId,
          });
  
        } else {
          dispatch(clearCoupon());
          setLocalStorage("couponDetails", null);
          setNotification({ message: "Your order total is below the required minimum for this coupon", type: 'error' });
        }
      } else {
        dispatch(clearCoupon());
        setLocalStorage("couponDetails", null);
        setNotification({ message: "This coupon code is invalid. Please check and try again", type: 'error' });
      }
    } else {
      dispatch(clearCoupon());
      setLocalStorage("couponDetails", null);
    }
  
    setCouponCode("");
  };
  
  

  const handleQuantityInCart = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.idN === itemId ? { ...item, quantity: newQuantity } : item
    );
    dispatch(setCartItems(updatedCart, sessionId));
    setLocalStorage("cartItems", updatedCart);
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setInputZipCode(value);
    }
  };

  const handleZipCodeSubmit = (e) => {
    e.preventDefault();
    if (inputZipCode.length === 5) {
      dispatch(setZipCode(inputZipCode));
      dispatch(setError(""));
      setInputZipCode('');
    } else {
      setInputZipCode('');
      dispatch(setError(""));
    }
  };


  const totalOldAmount = cartItems.reduce((total, item) => {
    const oldPrice = parseFloat(item.price) * 1.12;
    return total + oldPrice * item.quantity;
  }, 0).toFixed(2);

  const handleRemoveCoupon = () => {
    dispatch(clearCoupon());
    setLocalStorage("couponDetails", null); 

    const calculatedTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalAmount(calculatedTotal.toFixed(2));
  };

  const calculateShippingCost = (deliveryType) => {
    switch(deliveryType) {
      case "White Glove Delivery":
        return 69.99;
      case "In-Home Delivery":
        return 39.99;
      default:
        return 0
    }
  }

  const shippingCost = calculateShippingCost(deliveryType)
  const totalBeforeTax = shippingCost + totalBeforeTaxCollected;
  // console.log(totalBeforeTaxCollected)



  return (
    <div className="container cart_container">
      <h2>Your Cart (Session ID: {sessionId})</h2>
      <div className="cart_main">
        <ul className="cart_elements">
          {cartItems.length ? (
            cartItems.map((item) => (
              <li className="cart_element" key={item.idN}>
                <div className="cartItem_image_element">
                  <span className="cartItem_image">
                    <img src={item.imageSlider} alt={item.imageAlt} />
                  </span>
                </div>
                <div className="cartItem_description">
                  <div className="cartItem_header">
                    <span className="cartItem_brand-logo">
                      <img src={item.brandLogo} alt={item.brand} />
                    </span>
                    <ul className="cartItem_tags">
                      {item.tags.map((tag, index) => (
                        <li key={index}>
                          <img src={tag.iconLink} alt={`${tag.value} ${item.sku}`} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="cartItem_sku">{item.sku}</span>
                  <Link to={`/item/${item.sku}`}>
                    <h3 className="cartItem_subject">{`${item.brandText} ${item.subType}`}</h3>
                  </Link>
                  <span>{item?.description?.short || "Q"}</span>
                </div>
                <div className="cartItem_controls">
                  <div className="cartItem_controls_element">
                    <QuantityInCart
                      quantity={item.quantity}
                      itemId={item.idN}
                      onQuantityChange={handleQuantityInCart}
                    />
                    <button className="cart_button_remove" onClick={() => handleRemove(item.idN)}>Remove</button>
                  </div>
                </div>
                <div className="cartItem_pricing">
                  <div className="cartItem_old-price">
                    <del>${(parseFloat(item.price) * 1.12).toFixed(2)}</del>
                    <span className="cartItem_discount">
                      ${parseFloat((parseFloat(item.price) * 1.12).toFixed(2) - item.price).toFixed(2)}
                    </span>
                  </div>
                  <span className="item_price">${parseFloat(item.price).toFixed(2)}</span>
                </div>
              </li>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </ul>
        <div className="cart_summary">
          <h3>Order Summary</h3>
          <div className="cart_total">
            <div className="cart_total_old-amount"><span>Was:</span><del>${totalOldAmount}</del></div>
            <div className="cart_total_discounted-amount"><span>Savings:</span>${(totalOldAmount - totalAmount).toFixed(2)}</div>
            <div className="cart_total_subtotal"><span>SubTotal:</span>${totalAmount}</div>
            <form onSubmit={handleCouponSubmit} className="cart_form">
              <input
                type="text"
                className="cart_field"
                name="couponCode"
                placeholder="Enter your coupon code"
                minLength="5"
                maxLength="30"
                id="coupon-code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                tabIndex="10"
                required
              />
              <input type="submit" className="cart_button" value="Apply Coupon" />
            </form>
            {notification && <Notification message={notification.message} type={notification.type} />}
            {discountAmount > 0 && appliedCouponCode && (
        <div className="cart_total_coupon">Applied Coupon: {appliedCouponCode}
        <button onClick={handleRemoveCoupon}>Remove Coupon</button>
          </div>)}
            <form onSubmit={handleZipCodeSubmit} className="cart_form">
              <input
                type="text"
                className="cart_field"
                name="zipCode"
                placeholder="Enter your zip code"
                id="zipCode"
                value={inputZipCode}
                onChange={handleZipCodeChange}
                tabIndex="11"
                required
              />
              <input type="submit" className="cart_button" value={zipCode ? "Update Zip Code" : "Add Zip Code"} />
            </form>
            <div className="cart_total_shipping"><span>Shipping to:</span><span>{zipCode}</span></div>
            <form className="cart_form">
            <div className="cart_total_subtotal"><span>Select Shipping Options:</span></div>
            <label>
                <input
                  type="radio"
                  value="White Glove Delivery"
                  name="payment"
                  checked={deliveryType === "White Glove Delivery"}
                  onChange={handleTypeDelivery}
                />
                White Glove Delivery - $69.99
              </label>
              <label>
                <input
                  type="radio"
                  value="In-Home Delivery"
                  name="payment"
                  checked={deliveryType === "In-Home Delivery"}
                  onChange={handleTypeDelivery}
                />
                In-Home Delivery - $39.99
              </label>
            </form>
            <div className="cart_total_total-amount"><span>Total Before Tax:</span>${totalBeforeTax}</div>
          </div>
          <button className="cart_button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;