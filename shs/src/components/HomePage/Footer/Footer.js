
import React from "react";
import logoFooter from "../../../assets/images/logo-no-bg.png";
import icon_fb from "../../../assets/images/icon-sm-facebook.png";
import icon_x from "../../../assets/images/icon-sm-x.png";
import icon_youtube from "../../../assets/images/icon-sm-youtube.png";
import icon_instagram from "../../../assets/images/icon-sm-instagram.png";
import icon_whatsapp from "../../../assets/images/icon-sm-whatsapp.png";

import "./Footer.scss";

const Footer = () => {
return (
    <footer class="footer">
        <div className="container">
        <div className="footer_content">
            <div className="footer_logo_block">
            <div className="footer_logo">
            <a href="#"><img src={logoFooter} alt="Main Logo Footer"></img></a>
            </div>
           
            </div>
            <div className="footer_social_media_block">
            <a href="#"><img src={icon_x} alt="#"></img></a>
            <a href="#"><img src={icon_fb} alt="#"></img></a>
            <a href="#"><img src={icon_youtube} alt="#"></img></a>
            <a href="#"><img src={icon_instagram} alt="#"></img></a>
            <a href="#"><img src={icon_whatsapp} alt="#"></img></a>
            </div>
            <nav className="footer_links_block">
                <ul className="footer_links_group">
                <li className="footer_links_link"><a href="#">Lorem</a></li>
                <li className="footer_links_link"><a href="#">Lorem Ispum</a></li>
                <li className="footer_links_link"><a href="#">Lorem Lorem</a></li>
                </ul>
                <ul className="footer_links_group">
                <li className="footer_links_link"><a href="#">Lorem</a></li>
                <li className="footer_links_link"><a href="#">Lorem Ispum</a></li>
                <li className="footer_links_link"><a href="#">Lorem Lorem</a></li>
                </ul>
                <ul className="footer_links_group">
                <li className="footer_links_link"><a href="#">Lorem</a></li>
                <li className="footer_links_link"><a href="#">Lorem Ispum</a></li>
                <li className="footer_links_link"><a href="#">Lorem Lorem</a></li>
                </ul>
                <ul className="footer_links_group">
                <li className="footer_links_link"><a href="#">Lorem</a></li>
                <li className="footer_links_link"><a href="#">Lorem Ispum</a></li>
                <li className="footer_links_link"><a href="#">Lorem Lorem</a></li>
                </ul>
            </nav>
            <div className="footer_subscription_block">
                <p>Subscribe to our newsletter and be the first to know about our updates</p>
                <form action="/submit" method="post" className="footer_subscription_form">
                  <input type="email" class="email__field" tabindex="10" name="email" placeholder="Enter your email"
                    minlength="5" maxlength="30" id="navtag-sigup" />
                  <input type="submit" class="footer_button__submit" value="Subscribe" />
                </form>
            </div>
        </div>
        <div className="footer_copyright">
            <p>SHS &copy; 2024</p>
          </div>
        </div>
    </footer>
)
}

export default Footer;

