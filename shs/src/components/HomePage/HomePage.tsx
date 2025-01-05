import { FC, useEffect } from "react";

import MainSlider from "./MainSlider/MainSlider";
import FlashOffers from "./FlashOffers/FlashOffers";
import ItemSection from "../ItemSection/ItemSection";
import Trends from "./Trends/Trends";
import DailyDeals from "./DailyDeals/DailyDeals";

import "./HomePage.scss";

const HomePage: FC = () => {
  useEffect(() => {
    document.title = "Stylish Home Space";
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <section className="section_slider">
          <MainSlider />
        </section>
        <section className="section">
          <FlashOffers />
        </section>
        <section className="section">
          <h2>Best-Selling Items</h2>
          <ItemSection group="bestseller" subject="" viewbutton={true} />
        </section>
        <section className="section">
          <Trends />
        </section>
        <section className="section">
          <h2>New Arrivals</h2>
          <ItemSection group="newArrival" subject="" viewbutton={true} />
        </section>
        <section className="section">
          <DailyDeals />
        </section>
        <section className="section">
          <h2>Outlets</h2>
          <ItemSection group="outlet" subject="" viewbutton={true} />
        </section>
      </div>
    </div>
  );
};
export default HomePage;
