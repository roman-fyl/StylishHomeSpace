import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./ProductPage.scss";

const ShippingReturnsSection = () => {


return (
<section className="product_category_part">
    <h3>Shipping and returns</h3>
<div className="product_shipping-returns">
<ul className="product_shipping-returns_list">
<li className="product_shipping-return">
    <strong>Shipping:</strong><span>Read more here <Link to="/shipping-information.html">Shipping</Link></span>
</li>
<li className="product_shipping-return">
    <strong>Returns:</strong><span>Read more here <Link to="/returns-exchanges.html">Returns</Link></span>
</li>
</ul>
</div>
</section>
)
}

export default ShippingReturnsSection;