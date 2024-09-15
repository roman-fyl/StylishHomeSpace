import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./ProductPage.scss";

const FeaturesSection = () => {


return (
<section className="product_category_part">
    <h3>Features</h3>
<ul className="item_features">
<li><strong>Smart Connectivity:</strong>Control the unit remotely via smartphone app or through voice assistants</li>
<li><strong>Energy Star Certified:</strong>Meets energy efficiency guidelines to reduce electricity bills</li>
<li><strong>Quiet Operation:</strong>Designed to run quietly even at high cooling levels</li>
<li><strong>Eco Mode & Sleep Mode:</strong>Conserves energy and provides comfort during sleep</li>
<li><strong>Three Fan Speeds:</strong>Allows customization of cooling and fan settings</li>
<li><strong>Filter Reminder:</strong>Alerts you when the filter needs to be cleaned for optimal performance</li>
</ul>
</section>
)
}

export default FeaturesSection;