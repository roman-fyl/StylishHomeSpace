import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../Layout";

import "./Profile.scss";

const ProfileReturns = () => {
  return (
    <div className="account_content_block" id="profile-returns">
    <h1>Returns</h1>
    <div className="account_content_section element_delivery">
    <ul className="profile_element order_returns">
      <li className="profile_element_meaning">
      <span className="profile_element_meaning">12/01/2023</span>
      <span className="profile_element_meaning">$ 1499</span>
      <span className="profile_element_meaning">Refunded</span>
      <span className="profile_element_meaning"><a href="">More Details</a></span>
      </li>
      <li className="profile_element_meaning">
      <span className="profile_element_meaning">09/09/2023</span>
      <span className="profile_element_meaning">$ 569.63</span>
      <span className="profile_element_meaning">Refunded</span>
      <span className="profile_element_meaning"><a href="">More Details</a></span>
      </li>
      </ul>
    </div>
  </div>
  );
};

export default ProfileReturns;
