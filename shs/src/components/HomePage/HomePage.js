
import React, {useEffect, useState} from "react";

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
               <h2>Best-Selling Items</h2>
            <ItemSection group="bestseller" subject="" />
            </section>
            <section className="section">
            <Trends />
            </section>
            <section className="section">
               <h2>New Arrivals</h2>
               <ItemSection group="newArrival" subject=""/>
            </section>
            <section className="section">
               <DailyDeals />
            </section>
            <section className="section">
               <h2>Outlets</h2>
            <ItemSection group="outlet" subject=""/>
            </section>
           </div>
       </div>
    );
}
export default HomePage;