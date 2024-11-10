import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeFromCart, setCartItems } from "../../store/actions/cartActions";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import QuantityInCart from "../Items/QuantityInCart/QuantityInCart";
import "./CartComponent.scss";

const CartComponent = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      let sessionId = queryParams.get("session");
    
      if (!sessionId) {
        sessionId = getFromLocalStorage("abnd-session") || Date.now();
        setLocalStorage("abnd-session", sessionId);
        queryParams.set("session", sessionId);
        navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
      }
      setSession(sessionId);
    
      if (!cartItems.length) {
        const storedCartItems = getFromLocalStorage("cartItems");
        if (storedCartItems && storedCartItems.length > 0) {
          dispatch(setCartItems(storedCartItems, sessionId));
        }
      }
    }, [location, navigate, session, dispatch, cartItems.length]);
  
    const handleRemove = (productId) => {
      // Step 1: Dispatch remove action to Redux
      dispatch(removeFromCart(productId));
    
      // Step 2: Update localStorage with the new cart items after removal
      const updatedCartItems = cartItems.filter((item) => item.idN !== productId);
      setLocalStorage("cartItems", updatedCartItems);
    };
  
    const handleQuantityChange = (itemId, newQuantity) => {
      const updatedCart = cartItems.map((item) => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    
      dispatch(setCartItems(updatedCart, session));
      setLocalStorage("cartItems", updatedCart);
    
      console.log("Updated Cart:", updatedCart);
    };
  
    const totalAmount = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  
    return (
      <div className="container cart_container">
        <h2>Your Cart (Session ID: {session})</h2>
        <div className="cart_main">
          <ul className="cart_elements">
            {cartItems.length ? (
              cartItems.map((item) => (
                <li className="cart_element" key={item.id}>
                  <span className="cartItem_image">
                    <img src={item.imageSlider} alt={item.imageAlt} />
                  </span>
                  <div className="cartItem_description">
                    <span className="cartItem_sku">{item.sku}</span>
                    <h3 className="cartItem_subject">{`${item.brandText} ${item.subType}`}</h3>
                    <span>{item?.description?.short || "Q"}</span>
                  </div>
                  <QuantityInCart 
                    quantity={item.quantity} 
                    itemId={item.idN} 
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                  />
                  <button onClick={() => handleRemove(item.idN)}>Remove</button>
                  <div className="cartItem_pricing">
                    <div className="cartItem_old-price">
                      <del>${(parseFloat(item.price) * 1.12).toFixed(2)}</del>
                      <span className="cartItem_discount">
                        ${(parseFloat(item.price) * 0.88).toFixed(2)}
                      </span>
                    </div>
                    <span className="item_price">${parseFloat(item.price).toFixed(2)}</span>
                  </div>
                </li>
              ))
            ) : (
              <p>No items in your cart.</p>
            )}
          </ul>
          <div className="cart_summary">
            <h3>Order Summary</h3>
            <span className="total_price">
              Total: ${totalAmount}
            </span>
          </div>
        </div>
        <div className="cart_additional">Additional Information</div>
      </div>
    );
  };
  

export default CartComponent;
