import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Layout from "../../Layout";

import BreadcrumbComponent from "../ProductPage/BreadcrumbComponent";
import CategorySlider from "./CategorySlider";

import BestSelling from "../HomePage/BestSelling/BestSelling";
import NewArrivals from "../HomePage/NewArrivals/NewArrivals";

import brandLogo from "../../assets/db/images/brand-logos/ge_white.png";
import gastop from "../../assets/db/images/items/GE/categories/gastop.png";
import laundryPair from "../../assets/db/images/items/GE/categories/laundry-pair.png";
import range from "../../assets/db/images/items/GE/categories/range.png";
import refrigerator from "../../assets/db/images/items/GE/categories/refrigerator.png";
import wallOven from "../../assets/db/images/items/GE/categories/wall-oven.png";


import "./CategoryPage.scss";

const CategoryPage = () => {
    
    useEffect(() => {
        document.title = 'CATEGORY';
      }, []);

return (
   <Layout>
     <div className="container">
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
     </div>
   </Layout>
)
}

export default CategoryPage;