import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import SignInComponent from "./SignInComponent";

import "./Pages.scss";

const LoyaltyProgram = () => {
  useEffect(() => {
    document.title = "Loyalty Program";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Loyalty Program</h1>
          
<section className="section">
    <p>Join our SHS Loyalty Program automatically when you create an account! As a member, you’ll earn points with every purchase, which can be redeemed for exclusive discounts, rewards, and special offers. Points are earned based on your spending, with additional bonuses for special categories like seasonal promotions or product launches. The program includes tiered levels, where you can unlock higher rewards and benefits as you accumulate more points. Enjoy perks such as early access to sales, birthday rewards, and personalized offers, all just by shopping with us!</p>
</section>
<section className="section">
<SignInComponent />
</section>
        </div>
      </div>
    </Layout>
  );
};

export default LoyaltyProgram;
