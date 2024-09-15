import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./ProductPage.scss";

const CareMaintenanceSection = () => {


return (
<section className="product_category_part">
    <h3>Care & Maintenance</h3>
<div className="product_maintenances">
<ul className="product_maintenances_list">
    <li className="product_maintenance">
    <strong>Filter:</strong><span>The air filter should be cleaned every 30 days or as needed. The filter is removable and washable</span>
    </li>
    <li className="product_maintenance">
    <strong>Annual Maintenance:</strong><span>It's recommended to clean the coils and check the overall condition of the unit at least once a year​</span>
    </li>
</ul>
</div>
</section>
)
}

export default CareMaintenanceSection;