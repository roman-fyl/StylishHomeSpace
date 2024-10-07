import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import SpecialOfferSimilarItemsComponent from "./SpecialOfferSimilarItemsComponent";
import SpecialOfferSimilarPriceComponent from "./SpecialOfferSimilarPriceComponent";
import SpecialOfferBrandComponent from "./SpecialOfferBrandComponent";
import SpecialOfferCategoryComponent from "./SpecialOfferCategoryComponent";

import "./Pages.scss";

const SpecialOffers = () => {
  useEffect(() => {
    document.title = "Special Offers";
  }, []);

  return (
    <Layout>
      <div className="container">
      <div className="personal_offers_block">
          <h1>We have found several more exclusive deals tailored for you</h1>
          <h4>Similar Items</h4>
         <SpecialOfferSimilarItemsComponent />
         <h4>Brands</h4>
         <SpecialOfferBrandComponent />
         <h4>Similar Price</h4>
         <SpecialOfferSimilarPriceComponent />
         <h4>Category</h4>
         <SpecialOfferCategoryComponent />
        </div>
      </div>
    </Layout>
  );
};

export default SpecialOffers;
