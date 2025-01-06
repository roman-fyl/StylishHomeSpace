import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {
  ReturnsExchanges,
  Warranty,
  PrivacyPolicy,
  TermsConditions,
  AboutUs,
  ContactUs,
  FAQs,
} from "./LazyComponents";
import { ROUTER_PATHS } from "./RoutePaths";

export const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route
        path={ROUTER_PATHS.RETURNS_EXCHANGES}
        element={<ReturnsExchanges />}
      />
      <Route path={ROUTER_PATHS.WARRANTY} element={<Warranty />} />
      <Route path={ROUTER_PATHS.PRIVACY_POLICY} element={<PrivacyPolicy />} />
      <Route
        path={ROUTER_PATHS.TERMS_CONDITIONS}
        element={<TermsConditions />}
      />
      <Route path={ROUTER_PATHS.ABOUT_US} element={<AboutUs />} />
      <Route path={ROUTER_PATHS.CONTACT_US} element={<ContactUs />} />
      <Route path={ROUTER_PATHS.FAQS} element={<FAQs />} />
    </Routes>
  </Suspense>
);
