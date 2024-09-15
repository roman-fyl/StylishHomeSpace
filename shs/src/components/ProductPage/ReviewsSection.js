import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ProductPage.scss";

const ReviewsSection = () => {
  return (
    <section className="product_category_part">
      <h3>Ratings & Reviews</h3>
      <div className="product_reviews">
        <div className="product_reviews_snapshot">
       
          <div className="reviews_bar">
            <span className="reviews_label">5 Stars</span>
            <div className="reviews_bar-fill"></div>
            <span className="reviews_count">(140)</span>
          </div>
          <div className="reviews_bar">
            <span className="reviews_label">4 Stars</span>
            <div className="reviews_bar-fill"></div>
            <span className="reviews_count">(40)</span>
          </div>
          <div className="reviews_bar">
            <span className="reviews_label">3 Stars</span>
            <div className="reviews_bar-fill"></div>
            <span className="reviews_count">(10)</span>
          </div>
          <div className="reviews_bar">
            <span className="reviews_label">2 Stars</span>
            <div className="reviews_bar-fill"></div>
            <span className="reviews_count">(6)</span>
          </div>
          <div className="reviews_bar">
            <span className="reviews_label">1 Star</span>
            <div className="reviews_bar-fill"></div>
            <span className="reviews_count">(4)</span>
          </div>
        </div>
        <div className="product_reviews_total">
            <h4>Average Customer Ratings</h4>
            <div className="product_reviews_pivot_rate"><span>***** 4.9</span><span>(113)</span></div>
        </div>
        <div className="product_reviews_leave">
            <span>Leave a Review</span>
        </div>
      </div>
      <ul className="product_reviews_list">
        <li className="product_review">
          <div className="review_header">
          <span className="review_stars">*****</span>
          <span className="review_date">09/01/2024</span>
          </div>
          <span className="review_title"><strong>Amazing AC Unit for small apt</strong></span>
          <span className="review_text">Received this to review from Influenster and gave it a month to test it out and it’s really easy to install, very small and compact for my apartment. Compared to my old AC this one is slightly less noisy but at a reasonable level. I have two bedroom and it has a strong airflow to go around and cool my whole apartment. I love the eco button to help with the energy Efficiency and overall I’d highly recommend this AC unit for small apartments</span>
          <span className="review_conclusion"><strong>Conclusion: Y / N</strong></span>
        </li>
        <li className="product_review">
          <div className="review_header">
          <span className="review_stars">*****</span>
          <span className="review_date">09/01/2024</span>
          </div>
          <span className="review_title"><strong>Amazing AC Unit for small apt</strong></span>
          <span className="review_text">Received this to review from Influenster and gave it a month to test it out and it’s really easy to install, very small and compact for my apartment. Compared to my old AC this one is slightly less noisy but at a reasonable level. I have two bedroom and it has a strong airflow to go around and cool my whole apartment. I love the eco button to help with the energy Efficiency and overall I’d highly recommend this AC unit for small apartments</span>
          <span className="review_conclusion"><strong>Conclusion: Y / N</strong></span>
        </li>
        <li className="product_review">
          <div className="review_header">
          <span className="review_stars">*****</span>
          <span className="review_date">09/01/2024</span>
          </div>
          <span className="review_title"><strong>Amazing AC Unit for small apt</strong></span>
          <span className="review_text">Received this to review from Influenster and gave it a month to test it out and it’s really easy to install, very small and compact for my apartment. Compared to my old AC this one is slightly less noisy but at a reasonable level. I have two bedroom and it has a strong airflow to go around and cool my whole apartment. I love the eco button to help with the energy Efficiency and overall I’d highly recommend this AC unit for small apartments</span>
          <span className="review_conclusion"><strong>Conclusion: Y / N</strong></span>
        </li>
      </ul>
    </section>
  );
};

export default ReviewsSection;
