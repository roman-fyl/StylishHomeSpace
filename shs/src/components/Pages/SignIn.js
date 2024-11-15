import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import SignInComponent from "./SignInComponent";

import "./Pages.scss";

const SignIn = () => {
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
      <div className="container">
      <SignInComponent />
      </div>
  );
};

export default SignIn;
