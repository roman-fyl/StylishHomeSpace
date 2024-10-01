import React, { useState, useEffect } from "react";
import { ScrollLink as ScrollLink, Element } from "react-scroll";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Layout from "../../Layout";
import BreadcrumbComponent from "./BreadcrumbComponent";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import SpecificationsSection from "./SpecificationsSection";
import PromotionsSection from "./PromotionsSection";
import ReviewsSection from "./ReviewsSection";
import CareMaintenanceSection from "./CareMaintenanceSection";
import InstallationSection from "./InstallationSection";
import WarrantySection from "./WarrantySection";
import ShippingReturnsSection from "./ShippingReturnsSection";
import homepageLogo from "../../assets/images/icon-homepage.png";


import "./ProductPage.scss";
import productData from '../../assets/db/items.json';

const ProductDetails = () => {
  const { sku } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchedProduct = productData.find(item => item.SKU === sku);
    console.log("Fetched product: ", fetchedProduct);
    
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    } else {
      setError("Product not found");
    }

    document.title = `Product Details - SKU: ${sku}`;
  }, [sku]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container">
      <ul className="breadcrumbs">
    <li className="breadcrumbs_item"><Link to="/"><img src={homepageLogo}></img></Link></li>
    <li className="breadcrumbs_item"><Link to="/department">{product.department}</Link></li>
    <li className="breadcrumbs_item"><Link to="/subCategory">{product.subCategory}</Link></li>
    <li className="breadcrumbs_item"><Link to="/subType">{product.subType}</Link></li>
    <li className="breadcrumbs_item">{product.brandText} - {product.SKU}</li>
    </ul>
        <nav>
          <ul className="product_description_categories">
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
            <li><ScrollLink to="specifications" smooth={true} duration={500}>Specifications</ScrollLink></li>
            <li><ScrollLink to="promotions" smooth={true} duration={500} className="important">Promotions</ScrollLink></li>
            <li><ScrollLink to="care-maintenance" smooth={true} duration={500}>Care & Maintenance</ScrollLink></li>
            <li><ScrollLink to="reviews" smooth={true} duration={500}>Reviews</ScrollLink></li>
            <li><ScrollLink to="installation" smooth={true} duration={500}>Installation</ScrollLink></li>
            <li><ScrollLink to="warranty" smooth={true} duration={500}>Warranty</ScrollLink></li>
            <li><ScrollLink to="shipping-returns" smooth={true} duration={500}>Shipping & Returns</ScrollLink></li>
          </ul>
        </nav>

        <h1>Product Details for SKU: {sku}</h1>
        <Element name="about" className="section product_page">
          <AboutSection product={product} />
        </Element>

        <Element name="features" className="section product_page">
  <section className="product_category_part">
    <h3>Features</h3>
    {product.description && product.description.specifications && product.description.specifications.Features ? (
      <ul className="item_features">
        {/* Loop through the Features object and display key-value pairs */}
        {Object.entries(product.description.specifications.Features).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    ) : (
      <p>No features available for this product.</p>
    )}
  </section>
</Element>






        <Element name="specifications" className="section product_page">
          <SpecificationsSection product={product} />
        </Element>
        <Element name="promotions" className="section product_page">
          <PromotionsSection product={product} />
        </Element>
        <Element name="care-maintenance" className="section product_page">
          <CareMaintenanceSection product={product} />
        </Element>
        <Element name="reviews" className="section product_page">
          <ReviewsSection product={product} />
        </Element>
        <Element name="installation" className="section product_page">
          <InstallationSection product={product} />
        </Element>
        <Element name="warranty" className="section product_page">
          <WarrantySection product={product} />
        </Element>
        <Element name="shipping-returns" className="section product_page">
          <ShippingReturnsSection product={product} />
        </Element>
      </div>
    </Layout>
  );
};

export default ProductDetails;
