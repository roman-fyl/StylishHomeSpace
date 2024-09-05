import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQShippingDelivery = () => {
  useEffect(() => {
    document.title = "FAQ Shipping Delivery";
  }, []);

  return (
    <div className="faq">
    <h3>Have Questions About Shipping & Delivery?</h3>
<section className="section">
    <h4>What are your shipping options?</h4>
    <p>We offer several shipping options, including standard, expedited, and overnight shipping. The available options and costs will be displayed during checkout.</p>
</section>

<section className="section">
    <h4>How long does shipping take?</h4>
    <p>Shipping times vary based on the method selected and your location. Standard shipping typically takes 3-7 business days, while expedited options are faster.</p>
</section>

<section className="section">
    <h4>Do you offer international shipping?</h4>
    <p>Yes, we ship to many countries worldwide. International shipping options and costs will be available during checkout.</p>
</section>

<section className="section">
    <h4>How can I qualify for free shipping?</h4>
    <p>Free shipping is often available for orders that meet a minimum purchase threshold. Check our promotions page or during checkout for details on qualifying for free shipping.</p>
</section>

<section className="section">
    <h4>Can I ship my order to a P.O. Box or APO/FPO address?</h4>
    <p>Yes, we can ship to P.O. Boxes and APO/FPO addresses. However, some restrictions may apply depending on the shipping carrier.</p>
</section>

<section className="section">
    <h4>What should I do if my package is delayed?</h4>
    <p>If your package is delayed, check the tracking information for updates. If the delay exceeds the expected delivery window, contact customer support for assistance.</p>
</section>

<section className="section">
    <h4>How can I change my shipping address after placing an order?</h4>
    <p>Changing a shipping address after an order is placed may not be possible if the order has already been processed. Contact customer support immediately to see if they can update the address.</p>
</section>

<section className="section">
    <h4>Do you offer in-store pickup?</h4>
    <p>Yes, if we have physical store locations, you may have the option to pick up your order in-store. Select "In-Store Pickup" during checkout if available.</p>
</section>

<section className="section">
    <h4>What should I do if my package is lost?</h4>
    <p>If your package is marked as delivered but you haven't received it, check with your neighbors or building management first. If you still can't find it, contact customer support for help with locating the package or initiating a replacement.</p>
</section>

<section className="section">
    <h4>Can I schedule a specific delivery date?</h4>
    <p>While most standard shipping does not allow scheduling a specific delivery date, some carriers offer this option. Check during checkout or with customer support for availability.</p>
</section>
    </div>
  );
};

export default FAQShippingDelivery;
