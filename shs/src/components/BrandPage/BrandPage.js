import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Layout from "../../Layout";

import BestSelling from "../HomePage/BestSelling/BestSelling";
import NewArrivals from "../HomePage/NewArrivals/NewArrivals";

import brandLogo from "../../assets/db/images/brand-logos/ge_white.png";
import gastop from "../../assets/db/images/items/GE/categories/gastop.png";
import laundryPair from "../../assets/db/images/items/GE/categories/laundry-pair.png";
import range from "../../assets/db/images/items/GE/categories/range.png";
import refrigerator from "../../assets/db/images/items/GE/categories/refrigerator.png";
import wallOven from "../../assets/db/images/items/GE/categories/wall-oven.png";


import "./BrandPage.scss";

const BrandPage = () => {
    
    useEffect(() => {
        document.title = 'GE Main Page';
      }, []);

return (
   <Layout>
     <div className="container">
     <div className="brand-page_content">
        <div className="brand-page_main-logo"><img src={brandLogo}></img></div>
        <section className="section brand-page_categories">
            <ul className="brand-page_list">
            <li className="brand-page_category"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={laundryPair} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={range} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={refrigerator} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={wallOven} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
            <li className="brand-page_category"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
            </ul>
            <div className="items_more"><a href="#">Shop All</a></div>
        </section>
        <section className="section">
            <BestSelling />
        </section>
        <section className="section brand-page_rebates">
    <h2>Rebates</h2>
    <ul className="brand-page_rebates_list">
        <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>
      <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>  <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>
      <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>  <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>
      <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>  <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>
      <li className="brand-page_rebate" data-id="">
        {/* <span className="item_image"><a href="" > <img src={bestseller1} alt="Bestselling product 1"/></a>
        </span> */}
        <div className="rebate_description">
          <span className="rebate_images">
           <a href="">
           {/* <img src={logo3} alt="logo1"></img> */}
           </a>
          </span>
         <a href="" className="rebate_title"> <h5 className="rebate_title">
            30" Single Electric Wall Oven, 4.59 cu. ft. Capacity
          </h5></a>
          <div className="rebate_actions">
            <a href="" className="">
              More
            </a>
          </div>
        </div>
      </li>
    </ul>
</section>
        <section className="section">
            <NewArrivals />
        </section> 
     </div>
     </div>
   </Layout>
)
}

export default BrandPage;