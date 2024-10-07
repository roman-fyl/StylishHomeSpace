import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQWebsiteNavigation = () => {
  useEffect(() => {
    document.title = "FAQ Website & Navigation";
  }, []);

  return (
    <div className="faq">
     <h3>Have Questions About Website & Navigation?</h3>
<section className="section">
    <h4>How do I search for products on your website?</h4>
    <p>Use the search bar at the top of the page to enter keywords, product names, or item numbers. You can also browse categories and use filters to refine your search results.</p>
</section>

<section className="section">
    <h4>What browsers are supported on your website?</h4>
    <p>Our website supports the latest versions of major browsers, including Chrome, Firefox, Safari, and Edge. Ensure your browser is updated for the best experience.</p>
</section>

<section className="section">
    <h4>How do I create a wishlist?</h4>
    <p>To create a wishlist, log in to your account and click on the "Wishlist" icon or button on product pages. You can add, remove, or share items from your wishlist.</p>
</section>

<section className="section">
    <h4>Can I compare products on your website?</h4>
    <p>Yes, many eCommerce websites offer a product comparison feature. Use the "Compare" button on product pages to view and compare specifications side by side.</p>
</section>

<section className="section">
    <h4>How do I change the currency or language on the website?</h4>
    <p>Currency and language options are typically available in the footer or top right corner of the website. Select your preferred currency or language from the dropdown menu.</p>
</section>

<section className="section">
    <h4>How do I subscribe to your newsletter?</h4>
    <p>To subscribe to our newsletter, enter your email address in the subscription box located in the website’s footer or during account registration.</p>
</section>

<section className="section">
    <h4>What should I do if the website is not loading properly?</h4>
    <p>If the website is not loading properly, try refreshing the page, clearing your browser cache, or using a different browser. If the issue persists, contact customer support.</p>
</section>

<section className="section">
    <h4>How do I update my account information on the website?</h4>
    <p>Log in to your account and go to the "Account Settings" section. Here, you can update your personal information, address, and payment details.</p>
</section>

<section className="section">
    <h4>How do I report a bug or issue on the website?</h4>
    <p>If you encounter a bug or issue, contact customer support with details about the problem. Provide screenshots if possible to help us resolve the issue quickly.</p>
</section>

<section className="section">
    <h4>Can I view your website on my mobile device?</h4>
    <p>Yes, our website is mobile-friendly and can be accessed on smartphones and tablets. You can browse products, place orders, and manage your account on the go.</p>
</section>
    </div>
  );
};

export default FAQWebsiteNavigation;
