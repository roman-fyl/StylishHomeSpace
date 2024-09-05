import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQReturnsRefunds = () => {
  useEffect(() => {
    document.title = "FAQ Returns & Refunds";
  }, []);

  return (
    <div className="faq">
      <h3>Have Questions About Returns & Refunds?</h3>
<section className="section">
    <h4>What is your return policy?</h4>
    <p>Our return policy typically allows returns within 30 days of purchase, provided the item is in its original condition and packaging. Some restrictions may apply, so check the policy details on our website.</p>
</section>

<section className="section">
    <h4>How do I initiate a return?</h4>
    <p>To initiate a return, log in to your account and go to the "My Orders" section. Select the order you want to return and follow the prompts to generate a return label and instructions.</p>
</section>

<section className="section">
    <h4>How long does it take to process a refund?</h4>
    <p>Refunds are usually processed within 5-10 business days after we receive and inspect your returned item. The time may vary depending on your payment method.</p>
</section>

<section className="section">
    <h4>Can I exchange an item instead of returning it?</h4>
    <p>Yes, exchanges are often available. Follow the return process and select the exchange option if it's offered, or contact customer support for assistance.</p>
</section>

<section className="section">
    <h4>What should I do if I received a defective item?</h4>
    <p>If you receive a defective item, contact customer support immediately. Provide your order number and details about the defect, and we’ll assist you with a replacement or refund.</p>
</section>

<section className="section">
    <h4>Who pays for return shipping?</h4>
    <p>Return shipping costs may be the responsibility of the customer unless the return is due to a defective or incorrect item. Some stores offer free returns, so check our return policy.</p>
</section>

<section className="section">
    <h4>Can I return an item to a physical store?</h4>
    <p>If we have physical store locations, you may be able to return items in-store. Check our return policy or contact customer support for details.</p>
</section>

<section className="section">
    <h4>How will I be refunded?</h4>
    <p>Refunds are typically issued to the original payment method used for the purchase. If you paid with a gift card, the refund may be credited back to the gift card.</p>
</section>

<section className="section">
    <h4>What items are non-returnable?</h4>
    <p>Non-returnable items typically include perishable goods, personalized products, and final sale items. Check our return policy for a full list of exclusions.</p>
</section>

<section className="section">
    <h4>How do I return a gift?</h4>
    <p>To return a gift, contact customer support with the order number or details of the gift. We may offer a gift receipt or store credit as a refund option.</p>
</section>
    </div>
  );
};

export default FAQReturnsRefunds;
