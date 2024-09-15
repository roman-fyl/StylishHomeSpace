import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import { Link, Element } from "react-scroll";
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


import "./ProductPage.scss";

const ProductPage = () => {
    
    useEffect(() => {
        document.title = 'Air Conditioner - GE123456780';
      }, []);

return (
    <Layout>

    <div className="container">
    <BreadcrumbComponent />
    <nav>
      <ul className="product_description_categories">
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
        <li><Link to="specifications" smooth={true} duration={500}>Specifications</Link></li>
        <li><Link to="promotions" smooth={true} duration={500}>Promotions</Link></li>
        <li><Link to="care-maintenance" smooth={true} duration={500}>Care & Maintenance</Link></li>
        <li><Link to="reviews" smooth={true} duration={500}>Reviews</Link></li>
        <li><Link to="installation" smooth={true} duration={500}>Installation</Link></li>
        <li><Link to="warranty" smooth={true} duration={500}>Warranty</Link></li>
        <li><Link to="shipping-returns" smooth={true} duration={500}>Shipping & Returns</Link></li>
      </ul>
    </nav>
    <Element name="about" className="section product_page">
      <AboutSection />
    </Element>
    <Element name="features" className="section product_page">
      <FeaturesSection />
    </Element>
    <Element name="specifications" className="section product_page">
      <SpecificationsSection />
    </Element>
    <Element name="promotions" className="section product_page">
      <PromotionsSection />
    </Element>
    <Element name="care-maintenance" className="section product_page">
      <CareMaintenanceSection />
    </Element>
    <Element name="reviews" className="section product_page">
      <ReviewsSection />
    </Element>
    <Element name="installation" className="section product_page">
      <InstallationSection />
    </Element>
    <Element name="warranty" className="section product_page">
      <WarrantySection />
    </Element>
    <Element name="shipping-returns" className="section product_page">
      <ShippingReturnsSection />
    </Element>
    </div>
    </Layout>
)
}

export default ProductPage;