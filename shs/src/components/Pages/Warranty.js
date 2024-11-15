import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";

const Warranty = () => {
  useEffect(() => {
    document.title = "Warranty";
  }, []);

  return (
      <div className="container">
        <div className="privacy_description">
          <h1>Warranty</h1>
          <p>September 01, 2024</p>
          
          <section className="section">
    <h4>Manufacturer’s Warranty</h4>
    <p>As an authorized dealer, SHS (Stylish Home Space) ensures that all appliances purchased from us are protected by the manufacturer's warranty. Most manufacturer warranties cover parts and labor for one year, but the duration and coverage may vary by manufacturer.</p>
    <p>You will receive your warranty information either with your product or by mail shortly after delivery. Often, manufacturers require you to complete and mail a warranty form, which will specify when the warranty period starts—typically from the date of submission or purchase. For some products, you can find the warranty form on the product page.</p>
</section>
<section className="section">
    <h4>Extended Warranties</h4>
    <p>SHS offers extended warranties through a third party companies. These extended warranties cover parts and labor for up to five years (excluding commercial products, sinks, faucets, and a few other items). Unlike most manufacturer extended warranties, which only cover parts, the Protection Plan extends both parts and labor coverage. To purchase a Protection Plan, click the Logo on the product page and select the plan that best fits your needs.</p>
</section>
<section className="section">
    <h4>Important Warranty Tips</h4>
    <ul>
        <li>Avoid Alterations: Never make aftermarket modifications to your appliances, as these can void your warranty. Manufacturers typically outline what constitutes warranty voidance in their agreements.</li>
        <li>Keep Documentation: Always save copies of your warranty documents and original proof of purchase. These are essential for receiving warranty service.</li>
        <li>Regular Maintenance: Perform light maintenance on your appliances to keep them in good condition. While you hope never to need it, having a warranty provides peace of mind.</li>
    </ul>
    <p>For more information or to address any warranty-related questions, please contact our customer service team.</p>
</section>
        </div>
      </div>
  );
};

export default Warranty;
