import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description ">
          <h1>Sign In or Create an Account</h1>
          <h1>Create an Account</h1>
      <section className="existed_email">
      <p>email</p>
      </section>
      <section className="section sign_benefits">
  <h4>Why You Should Be Subscribed</h4>
  <p><strong>Access Exclusive Trade Discounts:</strong> Enjoy special trade discounts and pricing available only to account holders, helping you save more on your purchases.</p>
  <p><strong>Access and Manage Your Personal Details:</strong> Easily update and manage your personal information and addresses all in one place, making your account management seamless and straightforward.</p>
  <p><strong>Order History and Fast Tracking:</strong> Quickly view your complete order history and track the status of your orders with ease, ensuring you stay informed about your purchases.</p>
  <p><strong>Loyalty Rewards:</strong> Earn rewards points with each purchase and keep track of your accumulated points, which can be redeemed for discounts, special offers, or exclusive benefits.</p>
  <p><strong>Personalized Offers:</strong> Receive tailored offers and promotions based on your shopping preferences and history, ensuring you get deals that matter to you.</p>
</section>
<section className="section">
<form className="search_tracking">
<input type="email" className="sign_email" tabIndex="6" name="sign_email" placeholder="Enter Email"
             minLength="5" maxLength="30" id="sign_email" />

<input type="text" className="sign_name" tabIndex="7" name="sign_name" placeholder="Name"
             minLength="2" maxLength="30" id="sign_name" />

<input type="text" className="sign_lastName" tabIndex="8" name="sign_lastName" placeholder="Last Name"
             minLength="3" maxLength="30" id="sign_lastName" />

<input type="password" className="sign_password" tabIndex="9" name="sign_password" placeholder="Enter Password"
             minLength="5" maxLength="30" id="sign_password" />
      <input type="submit" className="sign_submit" value="Continue" />
      </form>
</section>
<section className="section additional_terms">
  <p>California residents: Please visit our{' '} <Link to="/privacy-policy.html">privacy policy</Link>  to learn how we use your information.</p>
  <p>By creating an account, you will be subscribed to receive promotional information. If you do not wish to receive promotional emails from us, unsubscribe. Note that it may take a few days for us to process your request.</p>
</section>
<section className="section b2b_registration">
  <h3>Become a part of our B2B network</h3>
  <p>Access exclusive trade discounts and enjoy additional perks when shopping online</p>
  <Link to="/sign-up.html" className="sign_submit">Sign Up</Link>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
