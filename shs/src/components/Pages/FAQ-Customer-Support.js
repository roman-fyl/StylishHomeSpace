import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQCustomerSupport = () => {
  useEffect(() => {
    document.title = "FAQ Customer Support";
  }, []);

  return (
    <div className="faq">
<h3>Have Questions About Customer Support?</h3>
<section className="section">
    <h4>How can I contact customer support?</h4>
    <p>You can contact customer support via phone, email, or live chat. The contact details are usually available on our "Contact Us" page.</p>
</section>

<section className="section">
    <h4>What are your customer support hours?</h4>
    <p>Our customer support hours are typically listed on the "Contact Us" page. We offer support during business hours and may also provide 24/7 assistance for urgent issues.</p>
</section>

<section className="section">
    <h4>How do I report an issue with my order?</h4>
    <p>To report an issue, log in to your account, find the relevant order, and select the "Report Issue" or "Contact Support" option. Provide details about the issue, and our team will assist you.</p>
</section>

<section className="section">
    <h4>Can I speak with a manager or escalate my issue?</h4>
    <p>If you need to escalate an issue, request to speak with a manager when contacting customer support. They will assist you with resolving the matter.</p>
</section>

<section className="section">
    <h4>How can I provide feedback on my shopping experience?</h4>
    <p>You can provide feedback through surveys, product reviews, or by contacting customer support directly. We value your input and use it to improve our services.</p>
</section>

<section className="section">
    <h4>Do you offer live chat support?</h4>
    <p>Yes, we offer live chat support. You can access it by clicking the chat icon on our website during business hours.</p>
</section>

<section className="section">
    <h4>How can I track my support ticket or inquiry?</h4>
    <p>After contacting support, you’ll receive a confirmation with a ticket number. You can track your inquiry by referencing this number when you follow up.</p>
</section>

<section className="section">
    <h4>What languages do you offer customer support in?</h4>
    <p>We offer customer support in multiple languages. The available languages depend on your location and will be indicated on our "Contact Us" page.</p>
</section>

<section className="section">
    <h4>How can I resolve an issue if I’m not satisfied with customer support?</h4>
    <p>If you're not satisfied with the resolution provided by customer support, you can escalate the issue by requesting a higher level of assistance or providing feedback through our survey process.</p>
</section>

<section className="section">
    <h4>Can I leave a review for customer support?</h4>
    <p>Yes, you may be prompted to leave a review or feedback after your interaction with customer support. This helps us improve our services.</p>
</section>
    </div>
  );
};

export default FAQCustomerSupport;
