import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.scss";

const ProfileAddresses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionId = useSelector((state) => state.session.sessionId);
  const customer = useSelector((state) => state.customer.customer || []);
  const firstCustomer = customer.find(value => value.firstName);
  const customer_streetAddress = firstCustomer.address || "No data";
  const customer_unitAddress = firstCustomer.address || "No data";
  const customer_cityAddress = firstCustomer.address || "No data";
  const customer_StateAddress = firstCustomer.address || "No data";
  const customer_ZipAddress = useSelector((state) => state.location.zipCode)




  return (
        <div className="account_content_block" id="profile-addresses">
          <h1>Address</h1>
          <div className="account_content_section">
          <div className="profile_element">Street Address:<span className="profile_element_meaning">{customer_streetAddress}</span></div>
          <div className="profile_element">Apt/Suit/Unit(Optional):<span className="profile_element_meaning">{customer_unitAddress}</span></div>
          <div className="profile_element">City:<span className="profile_element_meaning">{customer_cityAddress}</span></div>
          <div className="profile_element">State:<span className="profile_element_meaning">{customer_StateAddress}</span></div>
          <div className="profile_element">Zip:<span className="profile_element_meaning">{customer_ZipAddress}</span></div>

          </div>
      </div>
  );
};

export default ProfileAddresses;
