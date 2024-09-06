import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores/store';
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
import SpecialOffers from "./components/Pages/SpecialOffers";
import TermsConditions from "./components/Pages/TermsConditions";
import Warranty from "./components/Pages/Warranty";
import WhyBuyFromUs from "./components/Pages/WhyBuyFromUs";

// import ProfileMain from "./components/Profile/ProfileMain";
// import ProfileAddresses from "./components/Profile/ProfileAddresses";
// import ProfileAffiliateProgram from './components/Profile/ProfileAffiliateProgram';
// import ProfileLastVisitedItems from "./components/Profile/ProfileLastVisitedItems";
// import ProfileLoyaltyPoints from "./components/Profile/ProfileLoyaltyPoints";
// import ProfileOrderHistory from "./components/Profile/ProfileOrderHistory";
// import ProfilePayments from './components/Profile/ProfilePayments';
// import ProfileReturns from "./components/Profile/ProfileReturns";
// import ProfileSubmittedTickets from './components/Profile/ProfileSubmittedTickets';
// import ProfileWishlist from "./components/Profile/ProfileWishlist";

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions.html" element={<TermsConditions />} />

            <Route path="/contact-us.html" element={<ContactUs />} />
            <Route path="/faqs.html" element={<FAQs />} />
            <Route path="/warranty.html" element={<Warranty />} />
            <Route path="/returns-exchanges.html" element={<ReturnsExchanges />} />
            <Route path="/shipping-information.html" element={<ShippingInformation />} />
            <Route path="/order-tracking.html" element={<OrderTracking />} />
            <Route path="/my-account.html" element={<MyAccount />} />
            <Route path="/loyalty-program.html" element={<LoyaltyProgram />} />
            <Route path="/sign-in.html" element={<SignIn />} />
            <Route path="/sign-up.html" element={<SignUp />} />
            <Route path="/about-us.html" element={<AboutUs />} />
            <Route path="/special-offers.html" element={<SpecialOffers />} />
            <Route path="/financing.html" element={<Financing />} />
            <Route path="/services.html" element={<Services />} />
            <Route path="/payment-options.html" element={<PaymentOptions />} />
            <Route path="/why-buy-from-us.html" element={<WhyBuyFromUs />} />

            {/* <Route path="/my-profile.html" element={<ProfileMain />} />
            <Route path="/my-profile-address.html" element={<ProfileAddresses />} />
            <Route path="/my-profile-affiliate.html" element={<ProfileAffiliateProgram />} />
            <Route path="/my-profile-last-visited-items.html" element={<ProfileLastVisitedItems />} />
            <Route path="/my-profile-loyalty.html" element={<ProfileLoyaltyPoints />} />
            <Route path="/my-profile-order-history.html" element={<ProfileOrderHistory />} />
            <Route path="/my-profile-payments.html" element={<ProfilePayments />} />
            <Route path="/my-profile-returns.html" element={<ProfileReturns />} />
            <Route path="/my-profile-submitted-tickets.html" element={<ProfileSubmittedTickets />} />
            <Route path="/my-profile-wishlist.html" element={<ProfileWishlist />} /> */}



          </Routes>
      </Router>
    </Provider>
  );
}

export default App;