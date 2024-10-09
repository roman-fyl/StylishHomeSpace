import { useEffect, useState } from "react";
import React from "react";

import "./Pages.scss";

const ContactUsComponent = () => {
 

  return (
        <div className="privacy_description">
          <h1>Need advice? We’re here to help!</h1>
          
<section className="section">
    <h4>How can we help?</h4>
    <p>Call Us</p>
    <p>Email Us</p>
    <p>Live Chat</p>
    <p>Working Hours</p>
</section>
<section className="section">
  <h4>Title Specific Inquiries</h4>
  <p>Check Order Status</p>
  <p>Product Repair Service</p>
  <p>Pay Your Bill</p>
  <p>General Customer Service</p>
  <p>Credit Application Inquires</p>
  <p>Online Orders</p>
  </section>
        </div>
  );
};

export default ContactUsComponent;
