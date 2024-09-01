import { useEffect, useState } from "react";
import React from "react";
import "./Pages.scss";

const PrivacyPolicy = () => {

    useEffect(() => {
        document.title = 'Privacy policy';
      }, []);

return (
    <div className="container"><h1>I'm a Template</h1></div>
)
}

export default PrivacyPolicy;