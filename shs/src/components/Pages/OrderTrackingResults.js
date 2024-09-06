import { useEffect, useState } from "react";
import React from "react";

import orderStatusPlaced from "../../assets/images/icon-order-placed.png";
import orderStatusProcessed from "../../assets/images/icon-order-processed.png";
import orderStatusHold from "../../assets/images/icon-order-hold.png";
import orderStatusCanceled from "../../assets/images/icon-order-canceled.png";
import orderStatusConfirmed from "../../assets/images/icon-order-confirmed.png";
import orderStatusDelivered from "../../assets/images/icon-order-delivered.png";
import orderStatusOutForDelivery from "../../assets/images/icon-order-out-for-delivery.png";
import orderStatusPaymentFailed from "../../assets/images/icon-order-payment-failed.png";
import orderStatusRefundProcessed from "../../assets/images/icon-order-refund-processed.png";
import orderStatusReturned from "../../assets/images/icon-order-returned.png";
import orderStatusShipped from "../../assets/images/icon-order-shipped.png";
import orderStatusVerificationFailed from "../../assets/images/icon-order-verification-failed.png";
import orderStatusVerified from "../../assets/images/icon-order-verified.png";




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
  <li className="order_step"><span className="order_step_icon"><img src={orderStatusDelivered} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/19/2024 19:16</span>
    <span className="order_step_status">Order Delivered</span>
    <span className="order_step_comments"></span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusOutForDelivery} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/18/2024 12:55</span>
    <span className="order_step_status">Order Out For Delivery</span>
    <span className="order_step_comments"></span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusShipped} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/13/2024 10:18</span>
    <span className="order_step_status">Order Shipped</span>
    <span className="order_step_comments">Through Amazon</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusProcessed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/12/2024 15:17</span>
    <span className="order_step_status">Order Processed</span>
    <span className="order_step_comments">Success</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusConfirmed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/09/2024 18:02</span>
    <span className="order_step_status">Order Confirmed</span>
    <span className="order_step_comments">Billing & Shipping Address Confirmed</span></li>
    
    <li className="order_step"><span className="order_step_icon"><img src={orderStatusVerified} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/09/2024 17:12</span>
    <span className="order_step_status">Order Verified</span>
    <span className="order_step_comments">Success</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusReturned} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/05/2024 12:01</span>
    <span className="order_step_status">Order Returned</span>
    <span className="order_step_comments">Warehouse confirmed</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusRefundProcessed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/05/2024 09:10</span>
    <span className="order_step_status">Refund Processed</span>
    <span className="order_step_comments">Wait 3-10 business days</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusCanceled} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/04/2024 06:19</span>
    <span className="order_step_status">Order Canceled</span>
    <span className="order_step_comments">Client replacing the Order</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusHold} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/04/2024 19:43</span>
    <span className="order_step_status">Order On Hold</span>
    <span className="order_step_comments">Investigation</span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusVerificationFailed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/03/2024 12:03</span>
    <span className="order_step_status">Verification Failed</span>
    <span className="order_step_comments"></span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusPaymentFailed} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/03/2024 12:02</span>
    <span className="order_step_status">Order Payment Failed</span>
    <span className="order_step_comments"></span></li>

    <li className="order_step"><span className="order_step_icon"><img src={orderStatusPlaced} alt="Order Placed" className="logo_icon_status"/></span>
    <span className="order_step_date">09/01/2024 12:01</span>
    <span className="order_step_status">Order Placed</span>
    <span className="order_step_comments"></span></li>
  </ul>
</section>
      </div>
  );
};

export default OrderTrackingResults;
