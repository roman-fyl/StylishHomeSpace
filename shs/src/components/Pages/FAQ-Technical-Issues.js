import { useEffect, useState } from "react";
import React from "react";
// import Layout from "../../Layout";

import "./Pages.scss";

const FAQTechnicalIssues = () => {
  useEffect(() => {
    document.title = "FAQ Technical Issues";
  }, []);

  return (
    <div className="faq">
     <h3>Have Questions About Technical Issues?</h3>
<section className="section">
    <h4>What should I do if I forget my password?</h4>
    <p>Click the "Forgot Password" link on the login page. Enter your email address, and we’ll send you instructions to reset your password.</p>
</section>

<section className="section">
    <h4>How do I update my browser to ensure the website works properly?</h4>
    <p>Update your browser by visiting the official website of your browser provider (e.g., Chrome, Firefox, Safari) and following the update instructions.</p>
</section>

<section className="section">
    <h4>Why am I having trouble viewing certain pages on your website?</h4>
    <p>Issues with viewing pages can be due to outdated browsers, slow internet connections, or cache problems. Try clearing your cache, updating your browser, or contacting customer support.</p>
</section>

<section className="section">
    <h4>How do I enable cookies in my browser?</h4>
    <p>Enable cookies in your browser settings. This option is usually found under "Privacy" or "Security" settings. Cookies must be enabled to use all features on our website.</p>
</section>

<section className="section">
    <h4>Can I shop on your website using a VPN?</h4>
    <p>Yes, you can shop using a VPN, but some features might be restricted due to security protocols. If you encounter issues, try disabling your VPN or contacting customer support.</p>
</section>

<section className="section">
    <h4>What should I do if the website is down?</h4>
    <p>If our website is down, please wait a few minutes and try again. If the issue persists, check our social media channels for updates or contact customer support.</p>
</section>

<section className="section">
    <h4>How do I clear my browser cache?</h4>
    <p>To clear your browser cache, go to your browser’s settings or preferences, find the "Clear Browsing Data" option, and select "Cached Images and Files." Then, click "Clear Data."</p>
</section>

<section className="section">
    <h4>Why can’t I log in to my account?</h4>
    <p>Login issues can occur due to incorrect credentials, browser issues, or account-related problems. Try resetting your password, clearing your browser cache, or contacting customer support.</p>
</section>

<section className="section">
    <h4>How do I disable ad blockers to view content on your website?</h4>
    <p>To disable ad blockers, access the settings in your ad blocker extension or browser. Whitelist our website or temporarily disable the ad blocker to view content.</p>
</section>

<section className="section">
    <h4>What should I do if I receive an error message during checkout?</h4>
    <p>If you receive an error message during checkout, try refreshing the page, using a different payment method, or contacting customer support for assistance.</p>
</section>
    </div>
  );
};

export default FAQTechnicalIssues;
