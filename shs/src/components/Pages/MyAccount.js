import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import Profile from "../../components/Profile/Profile";

import "./Pages.scss";

const MyAccount = () => {
  useEffect(() => {
    document.title = "My Account";
  }, []);

  return (
    <Layout>
      <div className="container">
         <Profile />
      </div>
    </Layout>
  );
};

export default MyAccount;
