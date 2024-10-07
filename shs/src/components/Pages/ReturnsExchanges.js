import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";

const ReturnsExchanges = () => {
  useEffect(() => {
    document.title = "Returns & Exchanges";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Returns & Exchanges</h1>          
          <section className="section">
    <h4>Return/Exchange Window:</h4>
    <p>Standard: Must be reported within 14 days of the delivery date.
        No Returns/Exchanges: _.</p>
</section>
<section className="section">
    <h4>Restocking Fee:</h4>
    <p>A minimum 5% restocking fee applies to all returns and exchanges.
        Refer to the brand-specific restocking fees listed below.</p>
</section>
<section className="section">
    <h4>Cancellation or Refusal:</h4>
    <p>If you cancel or refuse an order after it has shipped, a restocking fee will be charged.</p>
</section>
<section className="section">
    <h4>Incorrect Shipping Information:</h4>
    <p>If incorrect address or phone number leads to delivery failure, you will be responsible for the restocking fee.</p>
</section>
<section className="section">
    <h4>Product Condition:</h4>
    <p>Only uninstalled, unused products in original packaging (including box and pallet) are eligible for returns and exchanges.
        No returns/exchanges for products without original packaging or that have been used/installed.</p>
</section>
<section className="section">
    <h4>Restocking Fees by Brand</h4>
    <p>ZLINE, Thor Kitchen, Kucht, Fotile, KubeBath: 15%</p>
</section>
<section className="section">
    <h4>Non-Returnable/Non-Exchangeable Products</h4>
    <p>Modified products.
        Products not in resalable condition.
        Products without an Order Number.
        Products without original packaging.
        Installed, used, or plugged-in items.
        Accessories (e.g., range hood extensions, trim kits, filters).
        Air conditioners, special order merchandise, and commercial laundry equipment.</p>
</section>
<section className="section">
    <h3>Inspection Upon Delivery</h3>
    <h4>Check Your Product:</h4>
    <p>Inspect your product thoroughly before signing for delivery. Look for both internal and external damage.</p>
</section>
<section className="section">
    <h4>Report Damage Immediately:</h4>
    <p>If you notice damage, refuse the delivery, take photos, and notify the delivery driver.
        Contact us at (111) 123 4567 or email support@stylishhomespace.com immediately.
        If you discover damage after delivery, report it within 24 hours.</p>
</section>
<section className="section">
    <h3>Defective Merchandise</h3>
    <h4>Immediate Defects:</h4>
    <p>Report defective products within 24 hours of receipt. For defects found after 24 hours, contact the product’s manufacturer directly for service. Manufacturer contact info is in the product literature.</p>
</section>
<section className="section">
    <h4>Warranty Requirements:</h4>
    <p>Most products include a one-year parts and labor warranty. Some manufacturers may require a service call to diagnose issues before authorizing returns/replacements.</p>
</section>
<section className="section">
    <h3>Warranty Information</h3>
    <h4>Warranty Voidance:</h4>
    <p>Warranty is void if a residential appliance is installed in a commercial location or taken outside the continental United States. SHS follows manufacturer warranties and policies.</p>
</section>
<section className="section">
    <h3>Return Authorization & Refunds</h3>
    <h4>Return Authorization (RA):</h4>
    <p>Contact customer service to receive an RA number for returns. Returns without an RA will not be accepted.</p>
</section>
<section className="section">
    <h4>Shipping Costs:</h4>
    <p>Shipping and handling charges to and from the warehouse are non-refundable. Returns must be shipped back prepaid using the original method of shipment.</p>
</section>
<section className="section">
    <h4>Refunds:</h4>
    <p>Refunds to the original payment method will be issued within 90 days. After 90 days, store credit will be provided. Refunds are processed after inspection and approval of returned/exchanged products.</p>
</section>
<section className="section">
    <h4>Important Notes</h4>
    <p>Returns must be in brand-new condition with all packaging, product literature, and blank warranty cards enclosed.
        Items moved from their original delivery location cannot be returned.
        Contact the manufacturer for missing or damaged parts that are covered under warranty.
        SHS reserves the right to refuse returns for any reason.</p>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnsExchanges;
