import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.scss";

const ProfileLoyaltyPoints = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionId = useSelector((state) => state.session.sessionId);
  const customer = useSelector((state) => state.customer.customer || []);
  const firstCustomer = customer.find(value => value.firstName);
  const customer_points = firstCustomer.points || "No data";
  const [purchasesPoints, setPurchasesPoints] = useState(0);
  const [invitesPoints, setInvitesPoints] = useState(0);



  return (
        <div className="account_content_block" id="profile-loyalty-points">
          <h1>Loyalty Points</h1>
          <div className="account_content_section">
          <span>Purchases: {purchasesPoints}</span>
          <span>Invites: {invitesPoints}</span>
          <span><strong>Total: {customer_points}</strong></span>
          </div>
        </div>
  );
};

export default ProfileLoyaltyPoints;
