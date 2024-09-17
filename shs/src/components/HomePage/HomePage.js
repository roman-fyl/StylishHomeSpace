
import React, {useEffect, useState} from "react";
import Layout from "../../Layout";

import MainSlider from "../HomePage/MainSlider/MainSlider";
import BannersGroup from "../HomePage/Banners/BannersGroup";
import FlashOffers from "../HomePage/FlashOffers/FlashOffers";
import BestSelling from "./BestSelling/BestSelling";
import NewArrivals from "./NewArrivals/NewArrivals";
import Trends from "../HomePage/Trends/Trends";
import DailyDeals from "../HomePage/DailyDeals/DailyDeals";
import Outlets from "../HomePage/Outlets/Outlets";





import "./HomePage.scss";

const HomePage = () => {
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
               <BestSelling />
            </section>
            <section className="section">
            <Trends />
            </section>
            <section className="section">
               <NewArrivals />
            </section>
            <section className="section">
               <DailyDeals />
            </section>
            <section className="section">
               <Outlets />
            </section>
           </div>
       </Layout>
       </div>
    );
}
export default HomePage;