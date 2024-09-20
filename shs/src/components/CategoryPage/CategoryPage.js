import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Layout from "../../Layout";

import BreadcrumbComponent from "../ProductPage/BreadcrumbComponent";
import CategorySlider from "./CategorySlider";

import brandLogo from "../../assets/db/images/brand-logos/ge_white.png";
import gastop from "../../assets/db/images/items/GE/categories/gastop.png";
import laundryPair from "../../assets/db/images/items/GE/categories/laundry-pair.png";
import range from "../../assets/db/images/items/GE/categories/range.png";
import refrigerator from "../../assets/db/images/items/GE/categories/refrigerator.png";
import wallOven from "../../assets/db/images/items/GE/categories/wall-oven.png";

import newitem1 from "../../assets/db/images/items/sku_01_07.png";
import newitem2 from "../../assets/db/images/items/sku_01_08.png";
import newitem3 from "../../assets/db/images/items/sku_01_09.png";

import logo1 from "../../assets/db/images/brand-logos/miele_original.png";
import logo2 from "../../assets/db/images/brand-logos/weber_original.png";
import logo3 from "../../assets/db/images/brand-logos/lg_white.png";


import "./CategoryPage.scss";

const CategoryPage = () => {
    
    useEffect(() => {
        document.title = 'CATEGORY';
      }, []);

return (
   <Layout>
     <div className="container">
    <div className="category-page_content">
    <BreadcrumbComponent />
   <div className="category-header_block">
    <CategorySlider />
 <div>
  <h2>Popular Categories</h2>
 <ul className="category-header_popular">
      <li className="category-header_popular_item"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={laundryPair} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={range} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={refrigerator} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={wallOven} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
   </ul>
 </div>
   </div>
   <section className="section category-content_categories">
            <ul className="category-content_list">
            <li className="category-content_category"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={laundryPair} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={range} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={refrigerator} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={wallOven} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={brandLogo} alt="image"></img></Link></li>
            </ul>
            <div className="items_more"><a href="#">Shop All</a></div>
        </section>
        <section className="section category-navigation_lists">
            <ul className="category-navigation_list important">
            <li className="category-navigation_item"><Link to="/">In Stock</Link></li>
            <li className="category-navigation_item"><Link to="/">On Sale</Link></li>
            <li className="category-navigation_item"><Link to="/">New Products</Link></li>
            <li className="category-navigation_item"><Link to="/">Best Sellers</Link></li>
            <li className="category-navigation_item"><Link to="/">Limited Availability</Link></li>
            </ul>
            <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Shop By Color</li>
            <li className="category-navigation_item"><Link to="/">black</Link></li>
            <li className="category-navigation_item"><Link to="/">white</Link></li>
            <li className="category-navigation_item"><Link to="/">gray</Link></li>
            <li className="category-navigation_item"><Link to="/">yellow</Link></li>
            </ul>
            <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Tailored for Your Convenience</li>
            <li className="category-navigation_item"><Link to="/">Smart</Link></li>
            <li className="category-navigation_item"><Link to="/">Energy Saving</Link></li>
            <li className="category-navigation_item"><Link to="/">Compact size</Link></li>
            <li className="category-navigation_item"><Link to="/"></Link></li>
            </ul>
            <ul className="category-navigation_list shop-by-brand">
            <li title="99" className="category-navigation_title">Shop By Brand</li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
     </ul>
        </section>
        <section className="section">
        <div className="category-popular">
      <h2>Popular Items</h2>
      <ul className="card_items">
        <li className="card_item" data-id="#">
          <span className="item_image"><a href="#" > <img src={newitem1} alt="outlets product 1"/></a>
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
          <span className="item_image"><a href="#" > <img src={newitem2} alt="outlets product 1"/></a>
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
          <span className="item_image"><a href="#" > <img src={newitem3} alt="outlets product 1"/></a>
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
          <span className="item_image"><a href="#" > <img src={newitem1} alt="outlets product 1"/></a>
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
          <span className="item_image"><a href="#" > <img src={newitem3} alt="outlets product 1"/></a>
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
          <span className="item_image"><a href="#" > <img src={newitem2} alt="outlets product 1"/></a>
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
      </ul>
      <div className="items_more"><a href="#">Explore More</a></div>
    </div>
        </section>
        <section className="category-subcategories_list">
          <ul className="category-subcategory">
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={gastop} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={laundryPair} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={range} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={refrigerator} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={wallOven} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={gastop} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          <li className="category-subcategory_element">
            <Link to="/">
            <img src={gastop} alt="image"></img>
            <ul>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
              <li>Subcategory 4</li>
              <li>Subcategory 5</li>
              <li>Subcategory 6</li>
              <li>Subcategory 7</li>
            </ul>
            </Link>
          </li>
          </ul>
        </section>
    </div>
     </div>
   </Layout>
)
}

export default CategoryPage;