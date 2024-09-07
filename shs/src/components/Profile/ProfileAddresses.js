import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../Layout";

import "./Profile.scss";

const ProfileAddresses = () => {
  return (
        <div className="account_content_block" id="profile-addresses">
          <h1>Address</h1>
          <div className="account_content_section">
          <div className="profile_element">Street Address:<span className="profile_element_meaning">9225 N Lake Creek Pkwy</span></div>
          <div className="profile_element">Apt/Suit/Unit(Optional):<span className="profile_element_meaning">1</span></div>
          <div className="profile_element">City:<span className="profile_element_meaning">Austin</span></div>
          <div className="profile_element">State:<span className="profile_element_meaning">TX</span></div>
          <div className="profile_element">Zip:<span className="profile_element_meaning">78717</span></div>

          </div>
      </div>
  );
};

export default ProfileAddresses;
