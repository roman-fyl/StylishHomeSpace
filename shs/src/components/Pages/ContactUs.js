import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import ContactUsComponent from "./ContactUsComponent";

import "./Pages.scss";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <Layout>
      <div className="container">
      <ContactUsComponent />
      </div>
    </Layout>
  );
};

export default ContactUs;
