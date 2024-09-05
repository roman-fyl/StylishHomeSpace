import { useEffect, useState } from "react";
import React from "react";

import orderStatusPlaced from "../../assets/images/icon-order-placed.png";
import orderStatusProcessed from "../../assets/images/icon-order-processed.png";
import orderStatusHold from "../../assets/images/icon-order-hold.png";
import orderStatusCanceled from "../../assets/images/icon-order-canceled.png";
import orderStatusConfirmed from "../../assets/images/icon-order-confirmed.png";



import "./Orders.scss";

const OrderTrackingResults = () => {

  return (
        <div className="privacy_description">
<section className="section">
  <h1>Order Tracking Results</h1>
  <div className="order_summary">
  <span>Order Number: 1234567890987654321</span><span>Destination: Austin, TX</span><span>Status: Confirmed</span><span>Order Date: 09/01/2024</span><span>ETA: 12/31/2024</span>
  </div>
  <ul className="order_steps">
    <li className="order_step"><span className="order_step_icon"><img src={orderStatusCanceled} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/04/2024 06:19</span>
    <span className="order_step_status">Order Canceled</span>
    <span className="order_step_comments">Client replacing the Order</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusHold} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/03/2024 19:43</span>
    <span className="order_step_status">Order On Hold</span>
    <span className="order_step_comments">Item has Defect</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusProcessed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/03/2024 15:17</span>
    <span className="order_step_status">Order Processed</span>
    <span className="order_step_comments">Success</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusConfirmed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/01/2024 12:02</span>
    <span className="order_step_status">Order Confirmed</span>
    <span className="order_step_comments">Billing & Shiiping Address Confirmed</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusPlaced} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/01/2024 12:01</span>
    <span className="order_step_status">Order Placed</span>
    <span className="order_step_comments">Success</span></li>
  </ul>
</section>
      </div>
  );
};

export default OrderTrackingResults;
