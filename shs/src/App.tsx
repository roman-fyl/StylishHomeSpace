import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";

import { getFromLocalStorage } from "./components/LocalStorage/getFromLocalStorage";
import { getSessionNumber } from "./components/Sessions/getSessionNumber";
import { setSessionId } from "./store/actions/sessionActions";
import { updateCustomer } from "./store/reducers/customerSlice";
import { loadContent } from "./store/reducers/contentSlice";

import Layout from "./Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";
import FAQs from "./components/Pages/FAQs";
import Financing from "./components/Pages/Financing";
import LoyaltyProgram from "./components/Pages/LoyaltyProgram";
import MyAccount from "./components/Pages/MyAccount";
import OrderTracking from "./components/Pages/OrderTracking";
import PaymentOptions from "./components/Pages/PaymentOptions";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import ReturnsExchanges from "./components/Pages/ReturnsExchanges";
import Services from "./components/Pages/Services";
import ShippingInformation from "./components/Pages/ShippingInformation";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import SignUpProfessional from "./components/Pages/SignUpB2B";
import SpecialOffers from "./components/Pages/SpecialOffers";
import TermsConditions from "./components/Pages/TermsConditions";
import Warranty from "./components/Pages/Warranty";
import WhyBuyFromUs from "./components/Pages/WhyBuyFromUs";
import ThankYouPage from "./components/Pages/ThankYouPage";
import ProductPage from "./components/ProductPage/ProductPage";
import BrandPage from "./components/BrandPage/BrandPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import SearchPage from "./components/SearchPage/SearchPage";
import CartComponent from "./components/CartComponent/CartComponent";
import Rebates from "./components/Rebates/Rebates";
import RebatePage from "./components/Rebates/RebatePage";
import DashBoard from "./admin/DashBoard/DashBoard";

import "./App.scss";
import { store } from "store";
import { ScrollToTop } from "components/base";


const App: FC = () => {
  const dispatch = useDispatch();
  const sessionId = useSelector((state: any) => state.session.sessionId);
  const customer = useSelector((state: any) => state.customer.customer);
  const content = useSelector((state: any) => state.content.pagesContent);

  useEffect(() => {
    dispatch(loadContent());
  }, []);

  useEffect(() => {
    // dispatch(loadContent())
    if (!sessionId) {
      let localSessionId = getFromLocalStorage("abnd-session");

      if (!localSessionId) {
        const newSessionId = getSessionNumber();
        dispatch(setSessionId(newSessionId));
      }
    }

    if (!customer) {
      const storedCustomer = getFromLocalStorage("customer");

      if (!storedCustomer || storedCustomer.length === 0) {
        // console.log("Hello");  // Log for debugging purposes
      }

      if (storedCustomer && storedCustomer.length > 0) {
        dispatch(updateCustomer(storedCustomer));
        // console.log('Loaded customer from localStorage:', storedCustomer);
      }
    }

    // console.log("useEffect triggered:", { sessionId, customer });
    // dispatch(addCustomer({ id: 1, name: 'John Doe' }));
    // console.log("Content", content)
  }, [content, sessionId, dispatch, customer]);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/item/:skuText" element={<ProductPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/rebate/:idN" element={<RebatePage />} />
          <Route path="/brand/:brandName" element={<BrandPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/loyalty-program" element={<LoyaltyProgram />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/success" element={<ThankYouPage />} />

          <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/why-buy-from-us" element={<WhyBuyFromUs />} />
          <Route path="/rebates" element={<Rebates />} />

          <Route
            path="/sign-up-professional"
            element={<SignUpProfessional />}
          />

          <Route
            path="/shipping-information"
            element={<ShippingInformation />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
