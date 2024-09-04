import { useEffect, useState } from "react";
import React from "react";

import "./Pages.scss";

const FAQOrders = () => {
  useEffect(() => {
    document.title = "FAQ Orders";
  }, []);

  return (
    <div className="faq">
   <h3>Orders</h3>
<section className="section">
    <h4>How do I place an order?</h4>
    <p>To place an order, browse the products on the website, select the items you want, and add them to your cart. Once you're ready, proceed to checkout, fill in your shipping and payment details, and confirm the order.</p>
</section>

<section className="section">
    <h4>Can I change my order after it’s been placed?</h4>
    <p>Once an order is placed, it might not be possible to make changes. Contact customer support as soon as possible to see if they can assist with modifications.</p>
</section>

<section className="section">
    <h4>How can I track my order?</h4>
    <p>You can track your order by logging into your account and navigating to the "My Orders" section. You'll find tracking information for each order there, or you may receive tracking details via email.</p>
</section>

<section className="section">
    <h4>What should I do if I receive a damaged or incorrect item?</h4>
    <p>If you receive a damaged or incorrect item, contact customer support immediately. Provide them with your order number and photos of the damaged or incorrect item, and they’ll assist you with a replacement or refund.</p>
</section>

<section className="section">
    <h4>How do I cancel my order?</h4>
    <p>To cancel your order, go to the "My Orders" section in your account and check if cancellation is still possible. If the order has not yet been processed or shipped, you can cancel it. Otherwise, you may need to return the item once you receive it.</p>
</section>

<section className="section">
    <h4>Can I place an order over the phone?</h4>
    <p>Yes, some stores offer the option to place an order over the phone. Check the store’s contact details for their phone order service.</p>
</section>

<section className="section">
    <h4>Why was my order canceled?</h4>
    <p>Orders can be canceled for various reasons, such as payment issues, out-of-stock items, or address verification problems. You’ll typically receive an email explaining why your order was canceled.</p>
</section>

<section className="section">
    <h4>Can I place an order as a guest?</h4>
    <p>Yes, most eCommerce stores allow you to place an order as a guest without creating an account. However, creating an account can make future purchases faster and easier.</p>
</section>

<section className="section">
    <h4>How do I use a promo code or discount during checkout?</h4>
    <p>During checkout, you’ll see a field labeled "Promo Code" or "Discount Code." Enter your code there and click "Apply" to see the discount reflected in your order total.</p>
</section>

<section className="section">
    <h4>What payment methods do you accept?</h4>
    <p>We accept various payment methods, including credit/debit cards, PayPal, and store-specific gift cards.</p>
</section>
    </div>
  );
};

export default FAQOrders;
