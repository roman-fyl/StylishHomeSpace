import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQPaymentsBilling = () => {
  useEffect(() => {
    document.title = "FAQ Payments & Billing";
  }, []);

  return (
    <div className="faq">
    <h3>Have Questions About Payments & Billing?</h3>
<section className="section">
    <h4>How can I update my payment information?</h4>
    <p>You can update your payment information in the "Payment Methods" section of your account settings. Here, you can add, edit, or remove credit/debit cards and other payment options.</p>
</section>

<section className="section">
    <h4>Why was my payment declined?</h4>
    <p>Payment declines can happen for various reasons, such as incorrect card information, insufficient funds, or issues with your bank. Contact your bank or payment provider for more details.</p>
</section>

<section className="section">
    <h4>Can I split my payment between multiple payment methods?</h4>
    <p>Some stores allow you to split payments between different methods, such as a credit card and a gift card. This option is typically available during checkout.</p>
</section>

<section className="section">
    <h4>How do I apply store credit or a gift card to my order?</h4>
    <p>During checkout, there will be a field where you can enter your gift card code or apply store credit. The amount will be deducted from your total order cost.</p>
</section>

<section className="section">
    <h4>Will I be charged sales tax?</h4>
    <p>Sales tax is calculated based on your shipping address and applicable local laws. The tax amount will be displayed during checkout before you complete your purchase.</p>
</section>

<section className="section">
    <h4>How can I view my billing history?</h4>
    <p>Your billing history is available in the "My Orders" or "Billing" section of your account. Here, you can view past transactions and download invoices.</p>
</section>

<section className="section">
    <h4>Do you offer financing or payment plans?</h4>
    <p>Some stores partner with financing services like Afterpay, Klarna, or PayPal Credit to offer payment plans. If available, you can choose this option during checkout.</p>
</section>

<section className="section">
    <h4>What currencies do you accept?</h4>
    <p>We accept payments in various currencies depending on your location. The available currencies will be shown during checkout.</p>
</section>

<section className="section">
    <h4>How do I get a copy of my receipt or invoice?</h4>
    <p>You can download a copy of your receipt or invoice from the "My Orders" section of your account. It’s also typically emailed to you after the purchase.</p>
</section>

<section className="section">
    <h4>Can I get a refund if the price drops after my purchase?</h4>
    <p>Price adjustment policies vary by store. Contact customer support to see if you’re eligible for a refund or store credit if the price drops shortly after your purchase.</p>
</section>
    </div>
  );
};

export default FAQPaymentsBilling;
