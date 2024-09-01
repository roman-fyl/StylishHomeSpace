import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores/store';
import HomePage from "./components/HomePage/HomePage";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsConditions from "./components/Pages/TermsConditions";




import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions.html" element={<TermsConditions />} />


          </Routes>
      </Router>
    </Provider>
  );
}

export default App;