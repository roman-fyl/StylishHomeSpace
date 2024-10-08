
import React, {useEffect, useState} from "react";
import Layout from "../../Layout";

import MainSlider from "../HomePage/MainSlider/MainSlider";
import BannersGroup from "../HomePage/Banners/BannersGroup";
import FlashOffers from "../HomePage/FlashOffers/FlashOffers";
import ItemSection from "./ItemSection/ItemSection";
import Trends from "../HomePage/Trends/Trends";
import DailyDeals from "../HomePage/DailyDeals/DailyDeals";





import "./HomePage.scss";

const HomePage = () => {

     useEffect(() => {
          document.title = 'Stylish Home Space';
        }, []);

    return (
       <div className="wrapper">
         <Layout>
           <div className="container">
           <section className="section_slider">
            <MainSlider />
           </section>
            <section className="section">
         <BannersGroup />
            </section>
            <section className="section">
               <FlashOffers />
            </section>
            <section className="section">
            <ItemSection category="bestseller" subject="Best-Selling Items" />
               {/* <BestSelling /> */}
            </section>
            <section className="section">
            <Trends />
            </section>
            <section className="section">
               <ItemSection category="newArrival" subject="New Arrivals"/>
            </section>
            <section className="section">
               <DailyDeals />
            </section>
            <section className="section">
            <ItemSection category="outlet" subject="Outlets"/>
            </section>
           </div>
       </Layout>
       </div>
    );
}
export default HomePage;