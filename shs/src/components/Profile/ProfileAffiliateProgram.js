import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../Layout";

import "./Profile.scss";

const ProfileAffiliateProgram = () => {
  return (
    // <Layout>
        <div className="account_content_block" id="profile-affiliate-program">
          <h1>Affiliate Program</h1>
          <div className="account_content_section element_affiliate">
          <span>Is not a member</span>
          <span><strong>Join Us Now and Start Earning Today</strong></span>
          </div>
          <div className="account_content_section element_affiliate">
          <span><Link to="/sign-up-professional.html">Sign Up</Link></span>
          </div>
        </div>
    // </Layout>
  );
};

export default ProfileAffiliateProgram;
