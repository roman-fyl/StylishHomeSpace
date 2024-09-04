import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";

const ShippingInformation = () => {
  useEffect(() => {
    document.title = "Shipping Information";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Shipping Information</h1>
          <p>September 01, 2024</p>
          
          <section className="section">
    <h4>Free Shipping</h4>
    <p>SHS (Stylish Home Space) offers free shipping on all orders cost $399 and more. Deliveries are made curbside only—please arrange for assistance if needed to bring items into your home.</p>
</section>
<section className="section">
    <h4>Shipping Address Adjustments</h4>
    <p>If you need to adjust your shipping address after placing your order, an additional fee will apply. This covers carrier charges and the time needed to make the change.</p>
</section>
<section className="section">
    <h4>Shipping Times</h4>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>
<section className="section">
    <h4>LTL Shipments</h4>
    <p>Large items like ranges or refrigerators will be shipped via __. The carrier will schedule a delivery appointment. A person aged 18 or older must be present to sign for the delivery. Additional charges may apply for rescheduled deliveries or refused shipments. All LTL deliveries are curbside.</p>
</section>
<section className="section">
    <h4>Damaged Packages</h4>
    <ul>
        <li>Upon Delivery: If you see damage to the box, take photos, refuse the package, and note the damage on the Bill of Lading or Freight Bill. Contact us at support@stylishhomespace.com with your issue and photos.</li>
        <li>After Delivery: Inspect your package immediately. Report any damage within 24 hours with clear photos to support@stylishhomespace.com. Keep all packaging for returns or exchanges. A return authorization requires a warranty claim and inspection by our service team.</li>
    </ul>
</section>
<section className="section">
    <h4>Returns & Refunds</h4>
    <p>Products must be in original condition, unused, and with all packaging and documentation. Refunds are processed after inspection and may take up to 72 hours to appear on your statement. Return shipping charges are not refundable.</p>
</section>
<section className="section">
    <h4>Shipping Zones</h4>
    <p>Free shipping is available within the 48 contiguous states. We do not ship to Alaska, Hawaii, Puerto Rico, Guam, Northern Mariana Islands, U.S. Virgin Islands, or other U.S. islands. International shipping, including to Canada, is not available. We do not accept returns for shipments outside our normal shipping range.</p>
</section>
<section className="section">
    <h4>Installation</h4>
    <p>Installation is not included with your purchase. Please arrange and cover the cost of any necessary installation services.</p>
</section>
<section className="section">
    <h4>International Shipping & Warranty Voidance</h4>
    <p>Shipping products outside the U.S. or taking them outside the country after delivery will void the warranty. Our warranty is valid only for products used within the United States. Contact customer support if you have questions about international shipping or warranty coverage.</p>
    <p>For any questions related to shipping or to inquire about out-of-zone delivery, please reach out to support@stylishhomespace.com.
    </p>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingInformation;
