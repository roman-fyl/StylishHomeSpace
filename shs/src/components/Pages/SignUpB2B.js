import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";

import "./Pages.scss";

const SignUpB2B = () => {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Become a part of our B2B network</h1>
          <section className="existed_email">
      <p>email</p>
      </section>
      <section className="section sign_benefits">
  <h4>Why You Should Be a Part of B2B Community</h4>
  <p>Become a member of our exclusive B2B program and enjoy discounted pricing on our brands. Simply complete the application form below, and we'll get back to you within 2-3 business days. As part of the registration, you'll be asked to sign in or create an SHS shopping account.</p>
  <p><strong>To finalize your application, please have the following ready:</strong>
  <ul>
    <li>A business email address – required for membership.</li>
    <li>An existing SHS account, or you can create one during the application process.</li>
    <li>Relevant qualifying documents.</li>
    </ul></p>
</section>
          <section className="section">
<form className="sign_form">
<input type="email" className="sign_b2b" tabIndex="6" name="sign_email_b2b" placeholder="Enter Email"
             minLength="5" maxLength="30" id="sign_email_b2b" />

<input type="text" className="sign_b2b" tabIndex="7" name="sign_name_b2b" placeholder="Name"
             minLength="2" maxLength="30" id="sign_name_b2b" />

<input type="text" className="sign_b2b" tabIndex="8" name="sign_lastName_b2b" placeholder="Last Name"
             minLength="3" maxLength="30" id="sign_lastName_b2b" />

<input type="password" className="sign_b2b" tabIndex="9" name="sign_password_b2b" placeholder="Enter Password"
             minLength="5" maxLength="30" id="sign_password_b2b" />

<input type="password" className="sign_b2b" tabIndex="10" name="sign_password_b2b_confirm" placeholder="Confirm Password"
             minLength="5" maxLength="30" id="sign_password_b2b_confirm" />

<input type="text" className="sign_b2b" tabIndex="11" name="sign_phone_b2b" placeholder="Enter Phone Number"
             minLength="10" id="sign_phone_b2b" />

<input type="text" className="sign_b2b" tabIndex="12" name="sign_company_b2b" placeholder="Company Name"
             minLength="3" id="sign_company_b2b" />

<input type="text" className="sign_b2b" tabIndex="13" name="sign_ien" placeholder="IEN Number"
             minLength="9" id="sign_ien" />
      
      <Link to="/success.html" className="sign_submit">Submit</Link>
      </form>
</section>
<section className="section additional_terms">
  <p>California residents: Please visit our{' '} <Link to="/privacy-policy.html">privacy policy</Link>  to learn how we use your information.</p>
  <p>By creating an account, you will be subscribed to receive promotional information. If you do not wish to receive promotional emails from us, unsubscribe. Note that it may take a few days for us to process your request.</p>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpB2B;
