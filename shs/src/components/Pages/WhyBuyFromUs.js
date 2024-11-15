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
      <div className="container">
        <WhyBuyFromUsComponent />
      </div>
  );
};

export default WhyBuyFromUs;
