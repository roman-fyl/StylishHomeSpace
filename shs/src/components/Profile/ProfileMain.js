import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.scss";

const ProfileMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionId = useSelector((state) => state.session.sessionId);
  const customer = useSelector((state) => state.customer.customer || []);
  const firstCustomer = customer.find(value => value.firstName)
  const customer_firstName = firstCustomer.firstName || "No data";
  const customer_lastName = firstCustomer.lastName || "No data";
  const customer_email = firstCustomer.email || "No data";
  const customer_phoneNumber = firstCustomer.phoneNumber || "No data";

  
  return (
        <div className="account_content_block" id="profile-info">
          <h1>My Profile</h1>
          <div className="account_content_section">
          <div className="profile_element">First Name: <span className="profile_element_meaning">{customer_firstName}</span></div>
          <div className="profile_element">Last Name: <span className="profile_element_meaning">{customer_lastName}</span></div>
          </div>
          <div className="account_content_section">
          <div className="profile_element">Email: <span className="profile_element_meaning">{customer_email}</span></div>
          <div className="profile_element">Phone Number: <span className="profile_element_meaning">{customer_phoneNumber}</span></div>
          </div>

        </div>
  );
};

export default ProfileMain;
