import { FC, useEffect, useState } from "react";
import React from "react";
import ContactUsComponent from "./ContactUsComponent";

import "./Pages.scss";

const ContactUs: FC = () => {
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
