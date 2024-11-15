import { useEffect, useState } from "react";
import React from "react";
import Layout from "../../Layout";
import FAQAccountManagement from "./FAQ-Account-Management";
import FAQOrders from "./FAQ-Orders";
import FAQShippingDelivery from "./FAQ-Shipping-Delivery"
import FAQReturnRefund from "./FAQ-Returns-Refunds";
import FAQPaymentsBilling from "./FAQ-Payments-Billing";
import FAQCustomerSupport from "./FAQ-Customer-Support";
import FAQProductsInventory from "./FAQ-Products-Inventory";
import FAQWebsiteNavigation from "./FAQ-Website-Navigation";
import FAQPromotionsDiscounts from "./FAQ-Promotions-Discounts";
import FAQSecurityPrivacy from "./FAQ-Security-Privacy";
import FAQTechnicalIssues from "./FAQ-Technical-Issues";

import "./Pages.scss";

const FAQs = () => {
  useEffect(() => {
    document.title = "FAQs";
  }, []);

  return (
      <div className="container">
        <div className="privacy_description">
          <h1>FAQs</h1>          
<section className="section">
  <FAQAccountManagement />
  <FAQOrders />
  <FAQShippingDelivery />
  <FAQReturnRefund />
  <FAQPaymentsBilling />
  <FAQCustomerSupport />
  <FAQProductsInventory />
  <FAQWebsiteNavigation />
  <FAQPromotionsDiscounts />
  <FAQSecurityPrivacy />
  <FAQTechnicalIssues />
</section>
        </div>
      </div>
  );
};

export default FAQs;
