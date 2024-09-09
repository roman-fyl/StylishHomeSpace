import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Pages.scss";

const SignInComponent = () => {

  return (
        <div className="privacy_description ">
          <h1>Sign In or Create an Account</h1>
          <h1>Create an Account</h1>
      <section className="existed_email">
      <p>email</p>
      </section>
      
<section className="section sign_benefits"><h4>Why You Should Be Subscribed</h4></section>
      <section className="section sign_benefits">
  <p><strong>Access Exclusive Trade Discounts:</strong> Enjoy special trade discounts and pricing available only to account holders, helping you save more on your purchases.</p>
  <p><strong>Access and Manage Your Personal Details:</strong> Easily update and manage your personal information and addresses all in one place, making your account management seamless and straightforward.</p>
  <p><strong>Order History and Fast Tracking:</strong> Quickly view your complete order history and track the status of your orders with ease, ensuring you stay informed about your purchases.</p>
  <p><strong>Loyalty Rewards:</strong> Earn rewards points with each purchase and keep track of your accumulated points, which can be redeemed for discounts, special offers, or exclusive benefits.</p>
  <p><strong>Personalized Offers:</strong> Receive tailored offers and promotions based on your shopping preferences and history, ensuring you get deals that matter to you.</p>
</section>
<section className="section sign_benefits_calc">
<p><strong>Main Categories : </strong>Spend $10 = 1 point</p>
<p><strong>Accessories : </strong>Spend $10 = 1.5 points</p>
<p><strong>Services : </strong>Spend $10 = 2 points</p>
<p><strong>Main Categories + Accessories + Services : </strong>(Earned) * 5%</p>


</section>
<section className="section">
<form className="sign_form">
<input type="email" className="sign_personal" tabIndex="6" name="sign_email" placeholder="Enter Email"
             minLength="5" maxLength="30" id="sign_email" />

<input type="text" className="sign_personal" tabIndex="7" name="sign_name" placeholder="Name"
             minLength="2" maxLength="30" id="sign_name" />

<input type="text" className="sign_personal" tabIndex="8" name="sign_lastName" placeholder="Last Name"
             minLength="3" maxLength="30" id="sign_lastName" />

<input type="password" className="sign_personal" tabIndex="9" name="sign_password" placeholder="Enter Password"
             minLength="5" maxLength="30" id="sign_password" />

<input type="password" className="sign_personal" tabIndex="10" name="sign_password_confirm" placeholder="Confirm Password"
             minLength="5" maxLength="30" id="sign_password_confirm" />
      
      <Link to="/success.html" className="sign_submit">Continue</Link>
      </form>
</section>
<section className="section additional_terms">
  <p>California residents: Please visit our{' '} <Link to="/privacy-policy.html">privacy policy</Link>  to learn how we use your information.</p>
  <p>By creating an account, you will be subscribed to receive promotional information. If you do not wish to receive promotional emails from us, unsubscribe. Note that it may take a few days for us to process your request.</p>
</section>
<section className="section b2b_registration">
  <h3>Become a part of our B2B network</h3>
  <p>Access exclusive trade discounts, enjoy additional perks when shopping online, and take advantage of our affiliate program to earn rewards for referrals</p>
  <Link to="/sign-up-professional.html" className="sign_submit">Sign Up</Link>
</section>
        </div>
  );
};

export default SignInComponent;
