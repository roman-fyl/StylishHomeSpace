import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Contact Us</h1>
          <p>September 01, 2024</p>
          
<section className="section">
  <p>Check Order Status</p>
  <p>Product Repair Service</p>
  <p>Pay Your Bill</p>
  <p>General Customer Service</p>
  <p>Credit Application Inquires</p>
  <p>Online Orders</p>
  </section>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
