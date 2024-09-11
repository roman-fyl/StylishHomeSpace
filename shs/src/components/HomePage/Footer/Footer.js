
import React from "react";
import {Link} from "react-router-dom";
import logoFooter from "../../../assets/images/logo-no-bg.png";

import "./Footer.scss";
import SocialMediaComponent from "../../Pages/SocialMediaComponent";

const Footer = () => {
return (
    <footer class="footer">
        <div className="container">
        <div className="footer_content">
            <div className="footer_logo_block">
            <div className="footer_logo">
            <Link to ="/">
            <img src={logoFooter} alt="Main Logo Footer"></img></Link>
            </div>
           
            </div>
            <SocialMediaComponent />
            <nav className="footer_links_block">
                <ul className="footer_links_group">
                <li className="footer_links_link"><Link to="/contact-us.html">Contact Us</Link></li>
                <li className="footer_links_link"><Link to="/faqs.html">FAQs</Link></li>
                <li className="footer_links_link"><Link to="/warranty.html">Warranty</Link></li>
                </ul>
                <ul className="footer_links_group">
                <li className="footer_links_link"><Link to="/returns-exchanges.html">Returns & Exchanges</Link></li>
                <li className="footer_links_link"><Link to="/shipping-information.html">Shipping Information</Link></li>
                <li className="footer_links_link"><Link to="/order-tracking.html">Order Tracking</Link></li>
                </ul>
                <ul className="footer_links_group">
                <li className="footer_links_link"><Link to="/my-account.html">My Account</Link></li>
                <li className="footer_links_link"><Link to="/loyalty-program.html">Loyalty Program</Link></li>
                <li className="footer_links_link"><Link to="/sign-in.html">Sign In / Register</Link></li>
                </ul>
                <ul className="footer_links_group">
                <li className="footer_links_link"><Link to="/about-us.html">About Us</Link></li>
                <li className="footer_links_link"><Link to="/special-offers.html">Special Offers</Link></li>
                {/* <li className="footer_links_link"><Link to="/financing.html">Financing</Link></li> */}
                </ul>
            </nav>
            <div className="footer_subscription_block">
                <p>Subscribe to our newsletter and be the first to know about our updates</p>
                <form action="/submit" method="post" className="footer_subscription_form">
                  <input type="email" className="email__field" tabindex="10" name="email" placeholder="Enter your email"
                    minlength="5" maxlength="30" id="navtag-sigup" />
                  <input type="submit" class="footer_button__submit" value="Subscribe" />
                </form>
            </div>
        </div>
        <div className="footer_copyright">
            <p>SHS &copy; 2024</p>

<Link to="/privacy-policy.html">Privacy Policy</Link>  
<Link to="/terms-conditions.html">Terms & Conditions</Link>
<Link to="/cookie-policy.html">Cookie Policy</Link>
          </div>
        </div>
    </footer>
)
}

export default Footer;

