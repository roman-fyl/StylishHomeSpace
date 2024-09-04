import { useEffect, useState } from "react";
import React from "react";

import "./Pages.scss";

const FAQAccountManagement = () => {
  useEffect(() => {
    document.title = "FAQ Account Management";
  }, []);

  return (
    <div className="faq">
      {/* <section className="section"> */}
    <h3>Account Management</h3>
{/* </section> */}
<section className="section">
    <h4>How do I create an account?</h4>
    <p>To create an account, click on the "Sign Up" or "Create Account" button typically found in the top right corner of the homepage. Fill in your email address, create a password, and provide the required personal information. Once submitted, you’ll receive a confirmation email to verify your account.</p>
</section>
<section className="section">
    <h4>How do I reset my password?</h4>
    <p>To reset your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and you'll receive a password reset link. Click the link and follow the instructions to create a new password.</p>
</section>
<section className="section">
    <h4>Can I change my email address on my account?</h4>
    <p>Yes, you can change your email address in the account settings section. After logging in, go to "My Account" or "Profile" and update your email address. You may need to verify the new email before the change is complete.</p>
</section>
<section className="section">
    <h4>How do I update my personal information? </h4>
    <p>To update your personal information, log in to your account and navigate to the "My Account" or "Profile" section. Here, you can update your name, address, phone number, and other personal details.</p>
</section>
<section className="section">
    <h4>How do I subscribe/unsubscribe to the newsletter?</h4>
    <p> You can manage your newsletter preferences in your account settings. If you're subscribed, you'll see an option to unsubscribe. If you want to subscribe, enter your email in the subscription box usually found at the bottom of the homepage or during checkout.</p>
</section>
<section className="section">
    <h4>How can I delete my account?</h4>
    <p>To delete your account, contact customer support with your request. Some sites may also offer an option in the account settings to permanently delete your account.</p>
</section>
<section className="section">
    <h4>How can I view my order history?</h4>
    <p>Your order history can be viewed in the "My Orders" or "Order History" section of your account dashboard. Here you can see details of all your past orders.</p>
</section>
<section className="section">
    <h4>What should I do if I forget my username or password? </h4>
    <p>If you forget your username, try using your email address to log in. If you forget your password, click on the "Forgot Password" link on the login page and follow the instructions to reset it.</p>
</section>
<section className="section">
    <h4>How can I manage my saved addresses? </h4>
    <p>You can manage your saved addresses in the "Address Book" or "Shipping Addresses" section of your account. Here, you can add new addresses, update existing ones, or delete those you no longer need.</p>
</section>
<section className="section">
    <h4>How do I add a new payment method to my account?</h4>
    <p>To add a new payment method, go to the "Payment Methods" section of your account settings. Here, you can add a credit/debit card, PayPal account, or other payment options.</p>
</section>
<section className="section">
    <h4>How do I change my account password?</h4>
    <p>To change your password, log in and go to the "Account Settings" or "Profile" section. Select "Change Password," enter your current password, and then your new password. Save the changes.</p>
</section>
<section className="section">
    <h4>What should I do if my account is locked or suspended?</h4>
    <p>If your account is locked or suspended, contact customer support for assistance. They will guide you through the process of unlocking your account or provide information on why it was suspended.</p>
</section>
<section className="section">
    <h4>How do I manage my payment methods?</h4>
    <p>You can manage your payment methods in the "Payment Methods" section of your account. Here, you can add, edit, or remove credit/debit cards and other payment options.</p>
</section>
<section className="section">
    <h4>Can I link my social media accounts to my store account?</h4>
    <p>Yes, many stores allow you to link your social media accounts, like Facebook or Google, for easier login. This option is usually available in the "Account Settings" section.</p>
</section>
<section className="section">
    <h4>How do I log out of my account?</h4>
    <p>To log out, click on your account name or icon at the top of the page and select "Log Out" from the dropdown menu.</p>
</section>
<section className="section">
    <h4>Can I have multiple accounts with the same email address?</h4>
    <p>No, typically each email address is associated with one account. If you try to create a new account with an email already in use, you'll be prompted to log in instead.</p>
</section>
<section className="section">
    <h4>How do I update my email preferences?</h4>
    <p>You can update your email preferences in the "Account Settings" or "Communication Preferences" section. Here, you can choose which types of emails you'd like to receive or opt-out of certain communications.</p>
</section>
<section className="section">
    <h4>How can I close my account?</h4>
    <p>To close your account, contact customer support with your request. They may ask for verification before closing the account.</p>
</section>
<section className="section">
    <h4>Can I merge two accounts into one?</h4>
    <p>Most stores do not allow account merging. However, you can contact customer support to see if they can assist you with transferring information from one account to another.</p>
</section>
    </div>
  );
};

export default FAQAccountManagement;
