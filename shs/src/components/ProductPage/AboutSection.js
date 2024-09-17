import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import QuantityInCart from "../Items/QuantityInCart/QuantityInCart";


import arrowUp from "../../assets/images/arrow-up.png";
import arrowBack from "../../assets/images/arrow-back.png";

import brandLogo from "../../assets/db/images/brand-logos/ge_white.png";
import image1 from "../../assets/db/images/items/GE/123456789/ge_123456789-1.png";
import image2 from "../../assets/db/images/items/GE/123456789/ge_123456789-2.png";
import image3 from "../../assets/db/images/items/GE/123456789/ge_123456789-3.png";
import image4 from "../../assets/db/images/items/GE/123456789/ge_123456789-4.png";
import image5 from "../../assets/db/images/items/GE/123456789/ge_123456789-5.png";

import itemTagBestDeal from "../../assets/images/itemTags/item-best-deal.png";
import itemTagCyberMonday from "../../assets/images/itemTags/item-cyber-monday.png";
import itemTagExclusive from "../../assets/images/itemTags/item-exclusive.png";
import itemTagLastOffer from "../../assets/images/itemTags/item-last-offer.png";
import itemTagNewProductAlert from "../../assets/images/itemTags/item-new-product-alert.png";
import itemTagSale from "../../assets/images/itemTags/item-sale.png";

import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import itemShare from "../../assets/images/icon-share.png";


import "./ProductPage.scss";

const AboutSection = () => {


return (
<section className="product_category">
<div className="product_description_slider">
    <div className="slider_menu">
        <img src={image2} alt="image1"></img>
    </div>
    <div className="slider_images">
    <img src={arrowBack} className="prev_arrow" alt="1"></img>
    {/* <img src={image1} alt="image1"></img> */}
    <img src={image1} alt="image2"></img>
    <img src={image3} alt="image3"></img>
    <img src={image4} alt="image4"></img>
    <img src={image5} alt="image5"></img>
    <img src={arrowUp} className="next_arrow"></img>
    </div>

</div>
<ul className="product_description_tags">
<li><img src={itemTagBestDeal} alt=""></img></li>
<li><img src={itemTagCyberMonday} alt=""></img></li>
<li><img src={itemTagExclusive} alt=""></img></li>
<li><img src={itemTagLastOffer} alt=""></img></li>
<li><img src={itemTagNewProductAlert} alt=""></img></li>
<li><img src={itemTagSale} alt=""></img></li>
</ul>
<div className="product_description_brief">
    <h1> GE Smart Window Air Conditioner - 350 Sq. Ft. 8000 BTU - White</h1>
    <div className="item_description_block_logo">
        <span className="item_description_logo"><Link to="/ge-appliances.html"><img src={brandLogo} alt="brandLogo"/></Link></span>
        <span className="item_description_dealer-info">authorized dealer</span>
    </div>
    <p className="item_description_text">The GE AHY08LZ is a smart window air conditioner designed for medium-sized rooms up to 350 square feet. It provides 8,000 BTU of cooling power, comes with built-in Wi-Fi, and can be controlled through the SmartHQ app, allowing for remote operation. This model is ENERGY STAR® certified, ensuring energy efficiency, and has a sleek white finish</p>
    <ul className="item_description_important">
        <li>8000 BTU</li>
        <li>350 sq.ft</li>
    </ul>
    <div className="item_description_rate"><span>***** 4.9</span><span>(113)</span></div>
    <div className="item_description_model"><span>Model: </span><span>GE123456789</span></div>
    <div className="item_description_warranty">Warranty: <span>12 Months</span></div>
    <div className="item_description_additional-options">
        <img src={itemSaveWishList} alt=""></img>
        <img src={itemShare} alt=""></img>
        </div>
    <div className="item_description_colors">
        <h3 className="item_description_selected">Stainless Steel</h3>
       <div className="item_description_colors_options">
       <img src={image2} alt="image2" className="colors_option"></img>
        <img src={image3} alt="image3" className="colors_option"></img>
        <img src={image4} alt="image4" className="colors_option"></img>
        <img src={image5} alt="image5" className="colors_option"></img>
       </div>
    </div>


    </div>
<div className="product_description_price">
<div className="price_list"><span>Was</span><span>$499</span></div>
<div className="price_discounts"><span>Save:</span><span>$100</span></div>
<div className="price_current"><span>Now</span><span>$399</span></div>
<div className="price_quantity_items">
    <QuantityInCart />
</div>
<div className="price_coupon">
    <a href="">Click to activate coupon</a>
</div>

    <form className="price_financing">
        <label>
            <input type="radio" className="price_financing_options" name="financing" value="6-month" />
            <span>$66.5/m</span><span>6-Month Financing</span>
        </label>
        <label>
            <input type="radio" className="price_financing_options" name="financing" value="12-month" />
            <span>$33.35/m</span><span>12-Month Financing</span>
        </label>
        <label>
            <input type="radio" className="price_financing_options" name="financing" value="pay-full" checked />
            <span>Pay in Full</span>
        </label>
    </form>
    <div className="product_actions"><a href="#" className="item_add-to-cart">Add to Cart</a><a href="#" className="item_quick-but">Buy</a></div>
</div>


</section>
)
}

export default AboutSection;