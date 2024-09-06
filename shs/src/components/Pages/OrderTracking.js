import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import OrderTrackingResults from "./OrderTrackingResults";
import FAQOrders from "./FAQ-Orders";

import "./Pages.scss";

const OrderTracking = () => {
  useEffect(() => {
    document.title = "Order Tracking";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description" id="profile-order-status">
          <h1>Order Tracking</h1>
          
<section className="section">
<p className="search_tracking">Enter your tracking number and email address below to track your order. We will send you an email with the latest updates on your order</p>
      <form className="search_tracking">
           <input type="number" className="search_tracking_number" tabIndex="5" name="search_tracking_number" placeholder="Enter Tracking Number*"
             minlength="9" maxlength="20" id="search_tracking_number" />
           <input type="email" className="search_tracking_email" tabIndex="6" name="search_tracking_email" placeholder="Enter Email*"
             minlength="5" maxlength="30" id="search_tracking_email" />
      <input type="submit" class="search_tracking_submit" value="Search"></input>
      </form>
</section>
<section className="section">
  <OrderTrackingResults />
  <FAQOrders />
</section>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
