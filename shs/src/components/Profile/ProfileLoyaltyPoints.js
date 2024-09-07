import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../Layout";

import "./Profile.scss";

const ProfileLoyaltyPoints = () => {
  return (
    // <Layout>
        <div className="account_content_block" id="profile-loyalty-points">
          <h1>Loyalty Points</h1>
          <div className="account_content_section">
          <span>Purchases: 1350</span>
          <span>Invites: 100</span>
          <span><strong>Total: 1450</strong></span>
          </div>
        </div>
    // </Layout>
  );
};

export default ProfileLoyaltyPoints;
