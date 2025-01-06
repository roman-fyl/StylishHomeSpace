import React from "react";

const ReturnsExchanges = React.lazy(
  () => import("../components/Pages/ReturnsExchanges")
);

const Warranty = React.lazy(() => import("../components/Pages/Warranty"));

const PrivacyPolicy = React.lazy(
  () => import("../components/Pages/PrivacyPolicy")
);

const TermsConditions = React.lazy(
  () => import("../components/Pages/TermsConditions")
);

const AboutUs = React.lazy(() => import("../components/Pages/AboutUs"));
const ContactUs = React.lazy(() => import("../components/Pages/ContactUs"));
const FAQs = React.lazy(() => import("../components/Pages/FAQs"));

export {
  ReturnsExchanges,
  Warranty,
  PrivacyPolicy,
  TermsConditions,
  AboutUs,
  ContactUs,
  FAQs,
};
