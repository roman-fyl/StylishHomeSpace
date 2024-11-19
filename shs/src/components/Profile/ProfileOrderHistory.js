import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.scss";

const ProfileOrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionId = useSelector((state) => state.session.sessionId);
  const customer = useSelector((state) => state.customer.customer || []);
  const firstCustomer = customer.find(value => value.firstName);
  const customer_streetAddress = firstCustomer.address || "No data";
  const [orderHistory, setOrderHistory] = useState(null)


  return (
        <div className="account_content_block" id="profile-order-history">
    <h1>Order History</h1>
    <div className="account_content_section element_delivery">
   {orderHistory ? ( <ul className="profile_element order_history">
      <li className="profile_element_meaning">
      <span className="profile_element_meaning">12/01/2023</span>
      <span className="profile_element_meaning">$ 1499</span>
      <span className="profile_element_meaning">Delivered</span>
      <span className="profile_element_meaning"><a href="">More Details</a></span>
      </li>
      </ul>) : (<span>No data</span>)}
    </div>
  </div>
  );
};

export default ProfileOrderHistory;
