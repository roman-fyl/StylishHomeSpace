import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../Layout";

import "./Profile.scss";

const ProfileSubmittedTickets = () => {
  return (
    // <Layout>
        <div className="account_content_block" id="profile-submitted-tickets">
          <h1>Submitted Tickets</h1>
    <div className="account_content_section">
    <ul className="profile_element order_history">
      <li className="profile_element_meaning">
      <span className="profile_element_meaning">12/01/2023</span>
      <span className="profile_element_meaning ticket_subject">Question about Warranty</span>
      <span className="profile_element_meaning">Closed</span>
      <span className="profile_element_meaning"><a href="">More Details</a></span>
      </li>
      <li className="profile_element_meaning">
      <span className="profile_element_meaning">09/01/2024</span>
      <span className="profile_element_meaning ticket_subject">Service Maintenance</span>
      <span className="profile_element_meaning">Closed</span>
      <span className="profile_element_meaning"><a href="">More Details</a></span>
      </li>
      </ul>
    </div>
        </div>
    // </Layout>
  );
};

export default ProfileSubmittedTickets;
