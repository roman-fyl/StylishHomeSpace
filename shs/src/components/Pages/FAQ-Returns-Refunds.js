import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Pages.scss";

const FAQReturnsRefunds = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const content = useSelector((state) => state.content.pagesContent) || [];
    const sessionId = useSelector((state) => state.session.sessionId);
  
    const faqContentPage =
    content.find((item) => item.faq_ReturnsRefundsSupportPage) || {};
    const dbContent =
    faqContentPage?.faq_ReturnsRefundsSupportPage?.categories || [];

    const [openSections, setOpenSections] = useState({});
    const toggleAnswer = (index) => {
        setOpenSections((prevState) => ({
          ...prevState,
          [index]: !prevState[index],
        }));
      };


  useEffect(() => {
    document.title = "FAQ Returns & Refunds";
  }, []);

  return (
    <div className="faq">
      <h3>Have Questions About Returns & Refunds?</h3>
      {dbContent.map((category, index) => (
      <section className="section" key={index}>
        <h4 onClick={() => toggleAnswer(index)}>{category.heading}</h4>
        <p className={openSections[index] ? "open" : ""}>
          {category.description}
        </p>
      </section>
    ))}
    </div>
  );
};

export default FAQReturnsRefunds;
