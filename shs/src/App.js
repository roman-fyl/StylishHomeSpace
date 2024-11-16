import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store/stores/store';
import { getFromLocalStorage } from './components/LocalStorage/getFromLocalStorage';
import { getSessionNumber } from './components/Sessions/getSessionNumber';
import {setSessionId} from "./store/actions/sessionActions";

import ScrollToTop from "./components/ScrollToTop";
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
import CartComponent from './components/CartComponent/CartComponent';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const sessionId = useSelector((state) => state.session.sessionId);

  useEffect(() => {
    if (!sessionId) {
      let localSessionId = sessionId;
        if(!localSessionId) {
          localSessionId = getFromLocalStorage("abnd-session");

          if(!localSessionId) {
            const newSessionId = getSessionNumber();
            dispatch(setSessionId(newSessionId));
          }
        }

      
    }
  }, [sessionId, dispatch]);


  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
          <Route path="/shipping-information" element={<ShippingInformation />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/loyalty-program" element={<LoyaltyProgram />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up-professional" element={<SignUpProfessional />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/why-buy-from-us" element={<WhyBuyFromUs />} />
          <Route path="/success" element={<ThankYouPage />} />
          <Route path="/item/:skuText" element={<ProductPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/brand/:brandName" element={<BrandPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartComponent />} />
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
