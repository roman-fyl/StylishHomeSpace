import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";


import icon_x from "../../assets/images/icon-sm-x-primary-color.png";
import icon_fb from "../../assets/images/icon-sm-facebook-primary-color.png";
import icon_youtube from "../../assets/images/icon-sm-youtube-primary-color.png";
import icon_instagram from "../../assets/images/icon-sm-instagram-primary-color.png";
import icon_whatsapp from "../../assets/images/icon-sm-whatsapp-primary-color.png";

// import "./Pages.scss";

const SocialMediaComponent = () => {
 

  return (
        <div className="privacy_description">          
<section className="section">
<div className="footer_social_media_block">
  <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon_x} alt="Icon X"></img></a>
  <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon_fb} alt="Facebook"></img></a>
  <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon_youtube} alt="YouTube"></img></a>
  <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon_instagram} alt="Instagram"></img></a>
  <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon_whatsapp} alt="WhatsApp"></img></a>
</div>
</section>
        </div>
  );
};

export default SocialMediaComponent;
