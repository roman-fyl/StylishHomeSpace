import React from 'react';
import Header from "./components/HomePage/Header/Header";
import Benefits from "./components/HomePage/Benefits/Benefits";
import Footer from "./components/HomePage/Footer/Footer";
import HeaderMenu from "./components/HomePage/HeaderMenu/HeaderMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <HeaderMenu />
      <Benefits />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
