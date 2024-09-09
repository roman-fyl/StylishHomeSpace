import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import WhyBuyFromUsComponent from "./WhyBuyFromUsComponent";
import ContactUsComponent from "./ContactUsComponent";
import SocialMediaComponent from "./SocialMediaComponent";

import Logo from "../../assets/images/logo-about-us.png";

import "./Pages.scss";


const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>About Us</h1>
          
<section className="section about_us">
  <img src={Logo} alt="Logo About Us"></img>
  <div className="about_content">
  <p>At SHS (Stylish Home Space), <strong>Your home, our passion</strong> isn't just our slogan—it's our commitment to helping you create a beautiful, functional space that reflects your unique style.</p>
  <h3>Our Story</h3>
  <p>SHS started with a simple yet powerful idea: to offer high-quality kitchen appliances, home decor, beauty essentials, and accessories that combine style with practicality. Our founders were inspired by their love of design and the belief that everyone deserves to live in a home that feels personal and well-curated. What began as a small collection of carefully selected items has grown into a brand trusted by homeowners and design enthusiasts alike. We’ve evolved over the years, but our mission remains the same—providing products that help you transform your home into a space that’s both stylish and functional.</p>
  <h3>Our Values</h3>
  <p>At the core of SHS is our passion for design, quality, and customer satisfaction. These values guide everything we do:</p>
  <ul>
  <li><strong>Quality & Affordability:</strong> Every item in our collection is handpicked to meet the highest standards of craftsmanship and durability, ensuring you get the best value for your money.</li>
  <li><strong>Customer-Centric Approach:</strong> We believe that shopping for your home should be a seamless and enjoyable experience. That’s why we strive to offer a wide selection of products that cater to the diverse tastes and needs of our customers, from chic accessories to home essentials.</li>
  <li><strong>Innovation & Flexibility:</strong> We know that achieving your dream home sometimes requires flexibility. With our easy financing options, you can shop now and pay over time, giving you the freedom to design your space at your own pace.</li>
  <li><strong>Personalized Service:</strong> Whether through our exclusive B2B program for trade professionals or our loyalty rewards program for individual customers, we’re committed to offering personalized value at every step. From tailored recommendations to special discounts, we’re here to make your shopping experience exceptional.</li>
  </ul>
  <p>At SHS, <strong>Your home, our passion</strong> is more than just a tagline—it’s the driving force behind our dedication to helping you create a space you’ll truly love. Whether you're decorating a single room or transforming your entire home, we’re here to provide the inspiration and products you need to bring your vision to life.</p>
 </div>
</section>
<section className="section">
  <WhyBuyFromUsComponent />
</section>
<section className="about_content">
  <h3>FAQs</h3>
<div className="about_content_items">
<Link to="/faqs.html">Account Management</Link>
<Link to="/faqs.html">Orders</Link>
<Link to="/faqs.html">Shipping & Delivery</Link>
<Link to="/faqs.html">Returns & Refunds</Link>
<Link to="/faqs.html">Payments & Billing</Link>
<Link to="/faqs.html">Customer Support</Link>
<Link to="/faqs.html">Products & Inventory</Link>
<Link to="/faqs.html">Website Navigation</Link>
<Link to="/faqs.html">Promotions & Discounts</Link>
<Link to="/faqs.html">Privacy & Security</Link>
</div>
</section>
<section class="section">
        <ContactUsComponent />
</section>
<section class="section">
<div className="privacy_description">
  <h1>Contact us or follow us on social media for the latest updates, promotions, and home styling tips</h1>
          
<section className="section about">
<SocialMediaComponent />
</section>
        </div>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
