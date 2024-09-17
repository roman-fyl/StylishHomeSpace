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


import "./CategoryPage.scss";

const CategoryPage = () => {
    
    useEffect(() => {
        document.title = 'CATEGORY';
      }, []);

return (
   <Layout>
     <div className="container">
     CATEGORY PAGE
     </div>
   </Layout>
)
}

export default CategoryPage;