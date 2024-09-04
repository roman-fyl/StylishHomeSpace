import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQProductsInventory = () => {
  useEffect(() => {
    document.title = "FAQ Products & Inventory";
  }, []);

  return (
    <div className="faq">
    <h3>Products & Inventory</h3>
<section className="section">
    <h4>How do I find specific products on your website?</h4>
    <p>Use the search bar at the top of the page to enter keywords, product names, or item numbers. You can also browse by category or use filters to narrow down your search.</p>
</section>

<section className="section">
    <h4>What should I do if a product is out of stock?</h4>
    <p>If a product is out of stock, you can sign up for restock notifications or check back later. Some stores also offer the option to pre-order or place a backorder.</p>
</section>

<section className="section">
    <h4>How can I check if a product is available in-store?</h4>
    <p>If we have physical store locations, you can check product availability in-store by using the store locator feature on our website or contacting the store directly.</p>
</section>

<section className="section">
    <h4>Do you offer product warranties?</h4>
    <p>Yes, many products come with a manufacturer’s warranty. Warranty details are usually listed on the product page or included with the item upon purchase.</p>
</section>

<section className="section">
    <h4>How do I know if a product is authentic?</h4>
    <p>We guarantee the authenticity of all products sold on our website. If you have concerns, contact customer support for more information.</p>
</section>

<section className="section">
    <h4>What should I do if I have a question about a product?</h4>
    <p>If you have a question, check the product description, specifications, and customer reviews on the product page. You can also contact customer support for more information.</p>
</section>

<section className="section">
    <h4>Can I request a product that’s not listed on your website?</h4>
    <p>You can suggest products by contacting customer support. While we can’t guarantee availability, we value customer input for expanding our inventory.</p>
</section>

<section className="section">
    <h4>How do I find sizing information?</h4>
    <p>Sizing information is available on the product page under the "Size Guide" or "Size Chart" section. Make sure to check the guide before making a purchase to ensure the best fit.</p>
</section>

<section className="section">
    <h4>What is your policy on discontinued products?</h4>
    <p>If a product is discontinued, it will no longer be available for purchase. We recommend checking for similar items on our website.</p>
</section>

<section className="section">
    <h4>How do I search for products by brand?</h4>
    <p>You can search for products by brand using the search bar or by navigating to the "Brands" section of our website. This will display all products available from that specific brand.</p>
</section>
    </div>
  );
};

export default FAQProductsInventory;
