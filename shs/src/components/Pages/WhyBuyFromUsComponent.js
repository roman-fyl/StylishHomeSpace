import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Pages.scss";

const WhyBuyFromUs = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = useSelector((state) => state.content.pagesContent) || [];
  const sessionId = useSelector((state) => state.session.sessionId);

  const faqContentPage =
  content.find((item) => item.faq_contentPage) || {};
  const dbContent =
  faqContentPage?.faq_contentPage?.categories || [];

  useEffect(() => {
    document.title = "Why Buy From Us";
  }, []);

  return (
    <div className="faq">
  <h3>Why Buy From Us</h3>          
    <ul className="faq_content">
      {dbContent.map((category, index) => (
        <li key={index}>
          <strong>{category.heading}:</strong>
          {category.description}
        </li>
      ))}
    </ul>
  </div>
  )
};

export default WhyBuyFromUs;
