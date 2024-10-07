import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../Layout";

import "./Profile.scss";

const ProfileMain = () => {
  return (
        <div className="account_content_block" id="profile-info">
          <h1>My Profile</h1>
          <div className="account_content_section">
            <div className="profile_element">Login: <span>Login</span></div>
          <div className="profile_element">First Name: <span className="profile_element_meaning">First-Name</span></div>
          <div className="profile_element">Last Name: <span className="profile_element_meaning">Last-Name</span></div>
          </div>
          <div className="account_content_section">
          <div className="profile_element">Email: <span className="profile_element_meaning">roman.if.ko@gmail.com</span></div>
          <div className="profile_element">Phone Number: <span className="profile_element_meaning">929-234-2323</span></div>
          </div>

        </div>
  );
};

export default ProfileMain;
