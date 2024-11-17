import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCustomer } from "../../store/reducers/customerSlice";
import { loadContent } from "../../store/reducers/contentSlice";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";

import "./Pages.scss";

const SignInComponent = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.pagesContent) || [];
  const sessionId = useSelector((state) => state.session.sessionId);

  useEffect(() => {
    dispatch(loadContent());
  }, [content]);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkEmailForm, setCheckEmailForm] = useState(true);

  const [signUpForm, setSignUpForm] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signBenefitsContent =
    content.find((item) => item.SignUpPage_benefits) || {};
  const signBenefitsPointsContent =
    content.find((item) => item.SignUpPage_benefitsPoints) || {};

  const signBenefits = signBenefitsContent?.SignUpPage_benefits?.details || [];
  const signBenefitsPoints =
    signBenefitsPointsContent?.SignUpPage_benefitsPoints?.categories || [];

  const handleCheckEmailSubmit = (e) => {
    e.preventDefault();

    const storedCustomerData = getFromLocalStorage("customerData");

    console.log("Stored customer data:", storedCustomerData);

    if (
      storedCustomerData &&
      Array.isArray(storedCustomerData) &&
      storedCustomerData.length > 0
    ) {
      const foundCustomer = storedCustomerData.find(
        (customer) => customer.email === email
      );
      console.log("Found customer:", foundCustomer);

      if (foundCustomer) {
        setFirstName(foundCustomer.firstName);
        setEmailExists(true);
        setSignUpForm(false);
        setEmail("");
        setCheckEmailForm(false)
        setLoginForm(true)

      } else {
        setEmailExists(false);
        setSignUpForm(true);
        setCheckEmailForm(false)
      }
    } else {
      console.error("Local storage data is invalid or empty.");
      setEmailExists(false);
      setSignUpForm(true);
      setCheckEmailForm(false)
    }

    console.log("Email exists state after check: ", emailExists);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const customerData = {
      email,
      firstName,
      lastName,
      password,
      sessionId,
    };

    dispatch(addCustomer([customerData]));
    alert("Account created successfully!");

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setSignUpForm(false);
    setEmailExists(false);
    setLoginForm(true);
  };

  return (
    <div className="privacy_description ">
      <section className="section sign_benefits">
        <h4>Why You Should Be Subscribed</h4>
      </section>
      <section className="section sign_benefits">
        {signBenefits.map((benefit, index) => (
          <p key={index}>
            <strong>{benefit.heading}:</strong>
            {benefit.description}
          </p>
        ))}
      </section>
      <section className="section sign_benefits_calc">
        {signBenefitsPoints.map((category, index) => (
          <p key={index}>
            <strong>{category.name}:</strong>
            {category.rule}
          </p>
        ))}
      </section>
      <h1>Enter an Email</h1>
      {checkEmailForm && (
       <section className="existed_email">
       <form className="sign_form" onSubmit={handleCheckEmailSubmit}>
         <input
           type="email"
           className="sign_personal"
           tabIndex="6"
           name="sign_email"
           placeholder="Enter Email"
           minLength="5"
           maxLength="30"
           id="sign_email_initial"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
         <input type="submit" className="cart_button" value={"Check Email"} />
       </form>
     </section> 
      )}
      {emailExists && (
        <section className="section welcome_message">
          <h3>Welcome Back, {firstName}!</h3>
          <p>It seems like you already have an account with us. Please Log In</p>
        </section>
      )}
      {loginForm && (
        <section className="section welcome_message">
          <form className="sign_form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="sign_personal"
                tabIndex="6"
                name="sign_email"
                placeholder="Enter Email"
                minLength="5"
                maxLength="30"
                id="sign_email_signin"
                value={email}
                onChange={(e) => signInEmail(e.target.value)}
              />
              <input
                type="password"
                className="sign_personal"
                tabIndex="9"
                name="sign_password"
                placeholder="Enter Password"
                minLength="5"
                maxLength="30"
                id="sign_password_signin"
                value={password}
                onChange={(e) => signInPassword(e.target.value)}
              />
             
              <input
                type="submit"
                className="cart_button"
                value={"Sign In"}
              />
            </form>
        </section>
      )}

      <section className="section">
        {signUpForm && (
          <section className="section">
            <form className="sign_form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="sign_personal"
                tabIndex="6"
                name="sign_email"
                placeholder="Enter Email"
                minLength="5"
                maxLength="30"
                id="sign_email_signup"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="sign_personal"
                tabIndex="7"
                name="sign_name"
                placeholder="Name"
                minLength="2"
                maxLength="30"
                id="sign_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="sign_personal"
                tabIndex="8"
                name="sign_lastName"
                placeholder="Last Name"
                minLength="3"
                maxLength="30"
                id="sign_lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="password"
                className="sign_personal"
                tabIndex="9"
                name="sign_password"
                placeholder="Enter Password"
                minLength="5"
                maxLength="30"
                id="sign_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="sign_personal"
                tabIndex="10"
                name="sign_password_confirm"
                placeholder="Confirm Password"
                minLength="5"
                maxLength="30"
                id="sign_password_confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="submit"
                className="cart_button"
                value={"Create Account"}
              />
            </form>
          </section>
        )}
      </section>

      <section className="section additional_terms">
        <p>
          California residents: Please visit our{" "}
          <Link to="/privacy-policy.html">privacy policy</Link> to learn how we
          use your information.
        </p>
        <p>
          By creating an account, you will be subscribed to receive promotional
          information. If you do not wish to receive promotional emails from us,
          unsubscribe. Note that it may take a few days for us to process your
          request.
        </p>
      </section>
      <section className="section b2b_registration">
        <h3>Become a part of our B2B network</h3>
        <p>
          Access exclusive trade discounts, enjoy additional perks when shopping
          online, and take advantage of our affiliate program to earn rewards
          for referrals
        </p>
        <Link to="/sign-up-professional.html" className="sign_submit">
          Sign Up
        </Link>
      </section>
    </div>
  );
};

export default SignInComponent;
