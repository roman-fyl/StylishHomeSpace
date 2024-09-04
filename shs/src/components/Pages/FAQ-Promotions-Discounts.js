import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQPromotionsDiscounts = () => {
  useEffect(() => {
    document.title = "FAQ Promotions & Discounts";
  }, []);

  return (
    <div className="faq">
       <h3>Promotions & Discounts</h3>
<section className="section">
    <h4>How do I find out about current promotions?</h4>
    <p>Current promotions are usually displayed on the homepage, in the "Promotions" section, or announced through our newsletter. Sign up to stay informed about the latest deals.</p>
</section>

<section className="section">
    <h4>Can I use multiple promo codes on one order?</h4>
    <p>Typically, only one promo code can be applied per order. Check the promotion's terms and conditions for details on usage.</p>
</section>

<section className="section">
    <h4>What should I do if my promo code isn’t working?</h4>
    <p>If your promo code isn’t working, check the code for errors, ensure it hasn’t expired, and confirm it applies to the items in your cart. If you still have trouble, contact customer support.</p>
</section>

<section className="section">
    <h4>Do you offer a loyalty program?</h4>
    <p>Yes, we offer a loyalty program where you can earn points for purchases, referrals, and other activities. Points can be redeemed for discounts on future orders.</p>
</section>

<section className="section">
    <h4>How do I earn and redeem loyalty points?</h4>
    <p>You can earn loyalty points by making purchases, writing reviews, and other activities. Redeem points at checkout for discounts on your order.</p>
</section>

<section className="section">
    <h4>Do you offer student, military, or senior discounts?</h4>
    <p>Yes, we offer special discounts for students, military personnel, and seniors. Verify your status through our partner platforms or contact customer support for more information.</p>
</section>

<section className="section">
    <h4>How can I find out if a product is on sale?</h4>
    <p>Sale items are usually marked with a discount badge on the product page. You can also browse the "Sale" section on our website to find discounted products.</p>
</section>

<section className="section">
    <h4>Are there any exclusions to your promotions?</h4>
    <p>Promotions may have exclusions, such as specific brands or product categories. Check the terms and conditions of each promotion for details.</p>
</section>

<section className="section">
    <h4>How do I sign up for exclusive member discounts?</h4>
    <p>To receive exclusive member discounts, create an account on our website and opt-in to receive promotional emails during registration.</p>
</section>

<section className="section">
    <h4>Do you price match with other retailers?</h4>
    <p>We may offer price matching with other retailers. Contact customer support with details about the lower price to see if you qualify for a match.</p>
</section>
    </div>
  );
};

export default FAQPromotionsDiscounts;
