
import React from "react";

import Header from "../HomePage/Header/Header";
import Benefits from "../HomePage/Benefits/Benefits";
import MainSlider from "../HomePage/MainSlider/MainSlider"



import "./HomePage.scss";

const HomePage = () => {
    return (
       <div className="wrapper">
    <Header />
        <nav>
           <div className="container">
           <ul className="header_menu">
                <li><a href="#">Flash Sales</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">ITEM</a></li>
                <li><a href="#">Rebates</a></li>
            </ul>
           </div>
        </nav>
        <Benefits />
        <main className="main">
           <div className="container">
           <section className="section">
            <MainSlider />
           </section>
            <section className="section">2</section>
            <section className="section">3</section>
            <section className="section">4</section>
           </div>
        </main>
        <footer className="footer">
        <div className="container"><p>&copy; 2024.All rights reserved.</p>
        <nav></nav>
        </div>
        </footer>
       </div>
    );
}
export default HomePage;