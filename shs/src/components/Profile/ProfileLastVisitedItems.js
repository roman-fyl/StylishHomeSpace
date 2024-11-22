import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVisitedItem } from "../../store/actions/visitedActions";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import useAddToCart from "../../hooks/useAddToCart";



import "./Profile.scss";

const ProfileLastVisitedItems = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const visitedItems = useSelector((state) => state.visited.items || [])
  const sessionId = useSelector((state) => state.session.sessionId);
  const handleAddToCart = useAddToCart()
  console.log(visitedItems);


  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

  const calculateDiscountedAmount = (price, percentage) => {
    const oldPrice = GenerateOldPrice(price, percentage);
    return oldPrice - price;

    
  }

  const handleTrackItems = (item) => {
    const existingData = getFromLocalStorage('visitedItems');
    const alreadyVisited = existingData.some((visitedItem) => visitedItem.sku === item.sku);
  
    if (!alreadyVisited) {
      const itemWithSession = { ...item, session: sessionId };
      dispatch(addVisitedItem(itemWithSession));
      console.log("Tracked item added:", itemWithSession);
    } else {
      console.log("Item already tracked:", item);
    }
  };

  

  return (
  
        <div className="account_content_block" id="profile-last-visited-items">
          <h1>Recently viewed</h1>
          <ul className="profile_lastVisited">
          {visitedItems.slice(0, 4).map((item, index) => (
              <li className="card_item" data-id={index + 1} key={item.sku}>
              <Link to={`/item/${item.sku}`} onClick={() => handleTrackItems(item)}>
                <span className="item_image">
                  <img src={item.imageSlider[0]?.imageSliderLink} alt={`${item.description.short || 'product'}`} />
                </span>
                <div className="item_description">
                  <span className="item_brand-logo">
                    <img src={item.brandLogo} alt={item.brand} />
                  </span>
                  <h3 className="item_title">
                    {item.description.short}
                  </h3>
                  <span className="item_rating">
                  <span className="item_rate">{item.sku}</span>
                    <span className="item_rate">{item.rate}</span>
                    <span className="item_rate">{item.group}</span>
                    <span className="item_rate">{item.color}</span>
                    <span className="item_rate">{item.brandText}</span>
                  </span>
                  <span className="item_pricing">
                    <span className="item_old-price">
                      <del>${GenerateOldPrice(parseFloat(item.price), 12.319).toFixed(2)}</del>
                    </span>
                    <div>${parseFloat(calculateDiscountedAmount(item.price, 12.319)).toFixed(2)}</div>
                    <span className="item_price">${item.price}</span>
                  </span>
                </div>
              </Link>  
              <div className="item_actions">
                <button onClick={() => handleAddToCart(item)} className="item_add-to-cart">
                  Add To Cart
                </button> 
              </div>
            </li>
            ))}
      </ul>
        </div>
  );
};

export default ProfileLastVisitedItems;
