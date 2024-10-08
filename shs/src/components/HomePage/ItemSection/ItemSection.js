import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./ItemSection.scss";
import data from "../../../assets/db/items.json"; 

const ItemSection = ({ category = null, subject = null, brand = null }) => {
  const [displayedItemCount, setDisplayedItemCount] = useState(6);


  let filteredData = [...data]; 

  if (brand) {
    filteredData = filteredData.filter(item => item.brandText === brand);
    console.log("Filtered by brand:", filteredData);
  }

  if (category) {
    filteredData = filteredData.filter(item => item.group === category);
  }

  const showItems = () => {
    setDisplayedItemCount((prevCount) => prevCount + 6);
  };

  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

  return (
    <div className="newArrivals_main">
      <h2>{subject}</h2>
      <ul className="card_items">
        {filteredData.slice(0, displayedItemCount).map((item, index) => (
          <li className="card_item" data-id={index + 1} key={item.sku}>
            <Link to={`/item/${item.sku}`}>
              <span className="item_image">
                <img src={item.imageSlider[0]?.imageSliderLink} alt={`${category || 'product'}`} />
              </span>
              <div className="item_description">
                <span className="item_brand-logo">
                  <img src={item.brandLogo} alt={item.brand} />
                </span>
                <h3 className="item_title">
                  {item.description.short}
                </h3>
                <span className="item_rating">
                  <span className="item_rate">{item.rate}</span>
                  <span className="item_rate">{item.group}</span>
                  <span className="item_rate">{item.brandText}</span>
                </span>
                <span className="item_pricing">
                  <span className="item_old-price">
                    <del>${GenerateOldPrice(parseFloat(item.price), 12.319).toFixed(2)}</del>
                  </span>
                  <span className="item_price">${item.price}</span>
                </span>
              </div>
            </Link>  
            <div className="item_actions">
              <a href="#" className="item_add-to-cart">Add to Cart</a>
              <a href="#" className="item_quick-buy">Buy</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="items_more"><span onClick={showItems}>Explore More</span></div>
    </div>
  );
};

export default ItemSection;
