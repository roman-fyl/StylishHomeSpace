import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {addCustomer} from "../../store/reducers/customerSlice";
import {setLocalStorage} from "../../components/LocalStorage/setLocalStorage";

import "./Pages.scss";

const SignInComponent = () => {
  const dispatch = useDispatch();
  const sessionId = useSelector((state) => state.session.sessionId)

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const content  = useSelector((state) => state.content.pagesContent);

  const signBenefitsContent = Array.isArray(content) ? content.find(item => item.SignUpPage_benefits) : null;
const signBenefitsPointsContent = Array.isArray(content) ? content.find(item => item.SignUpPage_benefitsPoints) : null;

  const signBenefits = signBenefitsContent?.SignUpPage_benefits?.details || [];
  const signBenefitsPoints = signBenefitsPointsContent?.SignUpPage_benefitsPoints?.categories || [];

 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const customerData = {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      sessionId,
    }
    dispatch(addCustomer([customerData]))
  }


  return (
        <div className="privacy_description ">
          <h1>Sign In or Create an Account</h1>
          <h1>Create an Account</h1>
      <section className="existed_email">
      <p>email</p>
      </section>
      
<section className="section sign_benefits"><h4>Why You Should Be Subscribed</h4></section>
      <section className="section sign_benefits">
        {signBenefits.map((benefit, index) => (
          <p key={index}><strong>{benefit.heading}:</strong>{benefit.description}</p>
        ))}
  
</section>
<section className="section sign_benefits_calc">
{signBenefitsPoints.map((category, index) => (
          <p key={index}><strong>{category.name}:</strong>{category.rule}</p>
        ))}

</section>
<section className="section">
<form className="sign_form" onSubmit={handleSubmit}>
<input type="email" className="sign_personal" tabIndex="6" name="sign_email" placeholder="Enter Email"
             minLength="5" maxLength="30" id="sign_email" value={email} onChange={(e) => setEmail(e.target.value)} />

<input type="text" className="sign_personal" tabIndex="7" name="sign_name" placeholder="Name"
             minLength="2" maxLength="30" id="sign_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

<input type="text" className="sign_personal" tabIndex="8" name="sign_lastName" placeholder="Last Name"
             minLength="3" maxLength="30" id="sign_lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

<input type="password" className="sign_personal" tabIndex="9" name="sign_password" placeholder="Enter Password"
             minLength="5" maxLength="30" id="sign_password" value={password} onChange={(e) => setPassword(e.target.value)} />

<input type="password" className="sign_personal" tabIndex="10" name="sign_password_confirm" placeholder="Confirm Password"
             minLength="5" maxLength="30" id="sign_password_confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      
      {/* <Link to="/success.html" className="sign_submit">Continue</Link> */}
      <button type="submit" className="sign_submit">Continue</button>

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
