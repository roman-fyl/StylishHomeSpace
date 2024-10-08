import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import LocationComponent from "./LocationComponent";
import SetLocationManually from "./SetLocationManually";

import logo from '../../../assets/images/logo-no-bg.png';
import iconLogo from '../../../assets/images/icon-call64.png';
import iconLocation from '../../../assets/images/icon-location64.png';
import iconLogIn from '../../../assets/images/icon-log-in64.png';
import iconOrderStatus from '../../../assets/images/icon-order-status64.png';
import iconCart from '../../../assets/images/icon-cart64.png';


import "./Header.scss"

const Header = () => {
const [isFormVisible, setFormVisible] = useState(false);

      const handleCloseForm = () => {
        setFormVisible(false); 
      };

return (
    <header className="header">
    <div className="container_header">
     <div className="header_content">
    <Link to="/">
    <img src={logo} alt="HomePage Logo" className="logo_homepage"/>
    </Link>
     <form>
           <input type="text" className="search_field" tabIndex="2" name="search" placeholder="What you're looking for?"
             minLength="3" maxLength="30" id="search" />
     </form>
         <a href="tel:8001234567"><div className="header_block"><img src={iconLogo}></img><span className="header_call"><span>1-800-123-4567</span></span></div></a>
         <div className="header_block" onClick={() => setFormVisible(!isFormVisible)}><img src={iconLocation}></img><span className="header_location">Delivering to<LocationComponent />
         {isFormVisible && (<SetLocationManually onClose={handleCloseForm} />)}</span></div>
         <Link to="/order-tracking.html"><div className="header_block"><img src={iconOrderStatus}></img><span className="header_call"><span>Order Tracking</span></span></div></Link>
         <Link to="/sign-in.html"><div className="header_block"><img src={iconLogIn}></img><span className="header_account"><span>Hello, <span>Roman</span></span><span>SIGN IN</span></span></div></Link>
         <a href="#"><div className="header_block"><img src={iconCart}></img><span className="header_call"></span></div></a>
     </div>
    </div>
 </header>
)
}

export default Header;