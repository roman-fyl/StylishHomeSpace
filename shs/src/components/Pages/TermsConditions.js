import { useEffect, useState } from "react";
import React from "react";
import "./Pages.scss";

const TermsConditions = () => {

    useEffect(() => {
        document.title = 'Terms & Conditions';
      }, []);

return (
    <div><h1>Terms & Conditions</h1></div>
)
}

export default TermsConditions;