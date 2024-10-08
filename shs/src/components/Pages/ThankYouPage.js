import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";

import "./Pages.scss";

const ThankYouPage = () => {

  return (
    <Layout>
      <div className="container">
        <div className="privacy_description">
          <h1>Thank you for the registration. We will contact you soon</h1>        
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
