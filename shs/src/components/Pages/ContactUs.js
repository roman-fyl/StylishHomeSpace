import { useEffect, useState } from "react";
import React from "react";
import ContactUsComponent from "./ContactUsComponent";

import "./Pages.scss";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
      <div className="container">
      <ContactUsComponent />
      </div>
  );
};

export default ContactUs;
