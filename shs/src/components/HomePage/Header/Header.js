import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import LocationComponent from "./LocationComponent";
import SetLocationManually from "./SetLocationManually";
import  {setCartItems} from "../../../store/actions/cartActions";

import logo from '../../../assets/images/logo-no-bg.png';
import iconLogo from '../../../assets/images/icon-call64.png';
import iconLocation from '../../../assets/images/icon-location64.png';
import iconLogIn from '../../../assets/images/icon-log-in64.png';
import iconOrderStatus from '../../../assets/images/icon-order-status64.png';
import iconCart from '../../../assets/images/icon-cart64.png';

import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || {});
  const customer = useSelector((state) => state.customer.customer || []);
  const firstCustomer = customer.find(c => c.firstName);  
  const firstName = firstCustomer.firstName || "";

  console.log("Customer firstName during render:", firstName);

    const cartItems = cart.items || [];
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedSessionId = localStorage.getItem("abnd-session");

    if (storedCartItems && storedSessionId) {
      dispatch(setCartItems(JSON.parse(storedCartItems), storedSessionId));
    }
  }, [dispatch]);

  const handleCloseForm = () => {
    setFormVisible(false); 
  };

  return (
    <header className="header">
      <div className="container_header">
        <div className="header_content">
          <Link to="/">
            <img src={logo} alt="HomePage Logo" className="logo_homepage" />
          </Link>
          <form>
            <input 
              type="text" 
              className="search_field" 
              tabIndex="2" 
              name="search" 
              placeholder="What you're looking for?" 
              minLength="3" 
              maxLength="30" 
              id="search" 
            />
          </form>
          <a href="tel:8001234567">
            <div className="header_block">
              <img src={iconLogo} alt="Call Icon" />
              <span className="header_call">
                <span>1-800-123-4567</span>
              </span>
            </div>
          </a>
          <div className="header_block" onClick={() => setFormVisible(!isFormVisible)}>
            <img src={iconLocation} alt="Location Icon" />
            <span className="header_location">
              Delivering to <LocationComponent />
              {isFormVisible && <SetLocationManually onClose={handleCloseForm} />}
            </span>
          </div>
          <Link to="/order-tracking">
            <div className="header_block">
              <img src={iconOrderStatus} alt="Order Status Icon" />
              <span className="header_call">
                <span>Order Tracking</span>
              </span>
            </div>
          </Link>
          <Link to="/sign-in">
            <div className="header_block">
              <img src={iconLogIn} alt="Sign In Icon" />
              <span className="header_account">
              {firstName ? (
                  <span>
                    Hello, <span>{firstName}</span>
                  </span>
                ) : (
                  <span>SIGN IN</span>
                )}
              </span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="header_block header_cart">
              <img src={iconCart} alt="Cart Icon" />
              {itemCount > 0 && (
                <span className="header_cart_count">{itemCount}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
