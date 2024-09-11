import React from "react";
import { Link } from "react-router-dom";


import bestseller1 from "../../../assets/db/images/items/sku_01_01.png";
import bestseller2 from "../../../assets/db/images/items/sku_01_02.png";
import bestseller3 from "../../../assets/db/images/items/sku_01_03.png";

import logo1 from "../../../assets/db/images/brand-logos/friedrich_white.png";
import logo2 from "../../../assets/db/images/brand-logos/fulgor_milano_white.png";
import logo3 from "../../../assets/db/images/brand-logos/ge_white.png";

import "./BestSelling.scss";

const BestSelling = () => {
  return (
    <div className="bestselling_main">
      <h2>Best-Selling Products</h2>
      <ul className="card_items">
        <li className="card_item" data-id="#">
          <span className="item_image"><Link to="/item.html"><img src={bestseller3} alt="Bestselling product 1"/></Link>
          </span>
          <div className="item_description">
            <span className="item_brand-logos">
             <a href="#" className="item_brand-logo">
             <img src={logo3} alt="logo1"></img>
             </a>
            </span>
           <a href="#" className="item_title"> <h3 className="item_title">
              30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
            </h3></a>
            <span className="item_rating"> <span className="item_rate">4.7</span></span>
            <span className="item_pricing">
              <span className="item_old-price">
                <del>$4999</del>
              </span>
              <span className="item_price">$2999</span>
            </span>
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">
                Add to Cart
              </a>
              <a href="#" className="item_quick-but">
                Buy
              </a>
            </div>
          </div>
        </li>

        <li className="card_item" data-id="#">
          <span className="item_image"><a href="#" > <img src={bestseller2} alt="Bestselling product 1"/></a>
          </span>
          <div className="item_description">
            <span className="item_brand-logos">
             <a href="#" className="item_brand-logo">
             <img src={logo2} alt="logo1"></img>
             </a>
            </span>
           <a href="#" className="item_title"> <h3 className="item_title">
              30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
            </h3></a>
            <span className="item_rating"> <span className="item_rate">4.7</span></span>
            <span className="item_pricing">
              <span className="item_old-price">
                <del>$4999</del>
              </span>
              <span className="item_price">$2999</span>
            </span>
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">
                Add to Cart
              </a>
              <a href="#" className="item_quick-but">
                Buy
              </a>
            </div>
          </div>
        </li>



        <li className="card_item" data-id="#">
          <span className="item_image"><a href="#" > <img src={bestseller1} alt="Bestselling product 1"/></a>
          </span>
          <div className="item_description">
            <span className="item_brand-logos">
             <a href="#" className="item_brand-logo">
             <img src={logo1} alt="logo1"></img>
             </a>
            </span>
           <a href="#" className="item_title"> <h3 className="item_title">
              30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
            </h3></a>
            <span className="item_rating"> <span className="item_rate">4.7</span></span>
            <span className="item_pricing">
              <span className="item_old-price">
                <del>$4999</del>
              </span>
              <span className="item_price">$2999</span>
            </span>
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">
                Add to Cart
              </a>
              <a href="#" className="item_quick-but">
                Buy
              </a>
            </div>
          </div>
        </li>

        <li className="card_item" data-id="#">
          <span className="item_image"><a href="#" > <img src={bestseller2} alt="Bestselling product 1"/></a>
          </span>
          <div className="item_description">
            <span className="item_brand-logos">
             <a href="#" className="item_brand-logo">
             <img src={logo3} alt="logo1"></img>
             </a>
            </span>
           <a href="#" className="item_title"> <h3 className="item_title">
              30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
            </h3></a>
            <span className="item_rating"> <span className="item_rate">4.7</span></span>
            <span className="item_pricing">
              <span className="item_old-price">
                <del>$4999</del>
              </span>
              <span className="item_price">$2999</span>
            </span>
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">
                Add to Cart
              </a>
              <a href="#" className="item_quick-but">
                Buy
              </a>
            </div>
          </div>
        </li>



        <li className="card_item" data-id="#">
          <span className="item_image"><a href="#" > <img src={bestseller3} alt="Bestselling product 1"/></a>
          </span>
          <div className="item_description">
            <span className="item_brand-logos">
             <a href="#" className="item_brand-logo">
             <img src={logo2} alt="logo1"></img>
             </a>
            </span>
           <a href="#" className="item_title"> <h3 className="item_title">
              30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
            </h3></a>
            <span className="item_rating"> <span className="item_rate">4.7</span></span>
            <span className="item_pricing">
              <span className="item_old-price">
                <del>$4999</del>
              </span>
              <span className="item_price">$2999</span>
            </span>
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">
                Add to Cart
              </a>
              <a href="#" className="item_quick-but">
                Buy
              </a>
            </div>
          </div>
        </li>



        <li className="card_item" data-id="#">
          <span className="item_image"><a href="#" > <img src={bestseller2} alt="Bestselling product 1"/></a>
          </span>
          <div className="item_description">
            <span className="item_brand-logos">
             <a href="#" className="item_brand-logo">
             <img src={logo1} alt="logo1"></img>
             </a>
            </span>
           <a href="#" className="item_title"> <h3 className="item_title">
              30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
            </h3></a>
            <span className="item_rating"> <span className="item_rate">4.7</span></span>
            <span className="item_pricing">
              <span className="item_old-price">
                <del>$4999</del>
              </span>
              <span className="item_price">$2999</span>
            </span>
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">
                Add to Cart
              </a>
              <a href="#" className="item_quick-but">
                Buy
              </a>
            </div>
          </div>
        </li>

      </ul>
      <div className="items_more"><a href="#">Explore More</a></div>
    </div>
  );
};

export default BestSelling;
