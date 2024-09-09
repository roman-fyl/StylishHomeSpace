import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import WhyBuyFromUsComponent from "./WhyBuyFromUsComponent";

import "./Pages.scss";

const WhyBuyFromUs = () => {
  useEffect(() => {
    document.title = "Why Buy From Us";
  }, []);

  return (
    <Layout>
      <div className="container">
        <WhyBuyFromUsComponent />
      </div>
    </Layout>
  );
};

export default WhyBuyFromUs;
