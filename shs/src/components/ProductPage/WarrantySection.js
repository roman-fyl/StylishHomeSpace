import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./ProductPage.scss";

const WarrantySection = () => {


return (
<section className="product_category_part">
    <h3>Warranty</h3>
<div className="product_warranties">
<ul className="product_warranties_list">
    <li className="product_warranty">
    <strong></strong><span>Standard 1-year limited warranty on parts and labor. Optional extended warranties are available</span>
    </li>
</ul>
</div>
</section>
)
}

export default WarrantySection;