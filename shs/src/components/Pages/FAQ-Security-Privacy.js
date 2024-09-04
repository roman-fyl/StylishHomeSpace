import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQSecurityPrivacy = () => {
  useEffect(() => {
    document.title = "FAQ Security & Privacy";
  }, []);

  return (
    <div className="faq">
      <h3>Security & Privacy</h3>
<section className="section">
    <h4>How do you protect my personal information?</h4>
    <p>We use advanced encryption and security protocols to protect your personal information. Our privacy policy details how we handle and safeguard your data.</p>
</section>

<section className="section">
    <h4>What should I do if I suspect fraudulent activity on my account?</h4>
    <p>If you suspect fraudulent activity, change your password immediately and contact customer support. We’ll help secure your account and investigate the issue.</p>
</section>

<section className="section">
    <h4>How do I update my privacy settings?</h4>
    <p>You can update your privacy settings in the "Account Settings" section. Here, you can manage data sharing, marketing preferences, and other privacy-related options.</p>
</section>

<section className="section">
    <h4>What is your policy on cookies and tracking?</h4>
    <p>We use cookies and tracking technologies to enhance your shopping experience. You can manage your cookie preferences in your browser settings or through our website’s cookie policy.</p>
</section>

<section className="section">
    <h4>How do I opt out of marketing emails?</h4>
    <p>To opt out of marketing emails, click the "Unsubscribe" link at the bottom of any promotional email or update your preferences in the "Account Settings" section.</p>
</section>

<section className="section">
    <h4>Can I delete my account?</h4>
    <p>Yes, you can request account deletion by contacting customer support. Please note that deleting your account is permanent and cannot be undone.</p>
</section>

<section className="section">
    <h4>How do you handle my payment information?</h4>
    <p>We do not store your full payment details. Payments are processed securely through our payment gateway partners, and your information is encrypted during the transaction.</p>
</section>

<section className="section">
    <h4>What are my rights under GDPR or CCPA?</h4>
    <p>Under GDPR or CCPA, you have the right to access, correct, or delete your personal data. You can also request information on how your data is used. Contact customer support for assistance.</p>
</section>

<section className="section">
    <h4>How do I verify my identity for account-related requests?</h4>
    <p>To verify your identity, we may ask for additional information or documentation when making account-related requests, such as password resets or account deletions.</p>
</section>

<section className="section">
    <h4>What is your data retention policy?</h4>
    <p>We retain your data only as long as necessary for legal, business, or customer service purposes. You can request data deletion by contacting customer support.</p>
</section>
    </div>
  );
};

export default FAQSecurityPrivacy;
