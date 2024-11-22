import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/actions/cartActions';
import { getSessionNumber } from "../../Sessions/getSessionNumber";
import {setLocalStorage} from "../../LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../../LocalStorage/getFromLocalStorage";
import { updateLocalStorage } from "../../LocalStorage/updateLocalStorage";
import { addVisitedItem } from "../../../store/actions/visitedActions";
import useAddToCart from "../../../hooks/useAddToCart";

import "./ItemSection.scss";
import data from "../../../assets/db/items.json"; 

const ItemSection = ({ group = null, subject = null, brand = null, category = null, smartFeatures = null, subCategory = null, subType = null }) => {
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const sessionId = useSelector((state) => state.session.sessionId)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let filteredData = [...data]; 

  if (brand) {
    filteredData = filteredData.filter(item => item.brandText === brand);
  }

  if (group) {
    filteredData = filteredData.filter(item => item.group === group);
  }
  if (category) {
    filteredData = filteredData.filter(item => item.category === category);
  }

  const handleClick = (event) => {
    const group = event.target.dataset.group;
    const category = event.target.dataset.category;
    const brand = event.target.dataset.brand;
    const smartFeatures = event.target.dataset.smartFeatures;
    const subCategory = event.target.dataset.subcategory;
    const subType = event.target.dataset.subtype;

    const params = new URLSearchParams();

    if (group) params.set('groups', group);
    if (category) params.set('categories', category);
    if (brand) params.set('brands', brand);
    if (smartFeatures) params.set('smartFeatures', smartFeatures);
    if (subCategory) params.set('subCategories', subCategory);
    if (subType) params.set('subTypes', subType);

    navigate(`/search?${params.toString()}`);
  };

  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

  const calculateDiscountedAmount = (price, percentage) => {
    const oldPrice = GenerateOldPrice(price, percentage);
    return oldPrice - price;
  }

  const handleAddToCart = useAddToCart()

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
    <div className="item-section_main">
      <h2>{subject}</h2>
      <ul className="card_items">
        {filteredData
          .sort(() => Math.random() - 0.5)
          .slice(0, displayedItemCount)
          .map((item, index) => (
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
      <div className="items_more">
        <span 
          data-group={group} 
          data-category={category} 
          data-brand={brand}
          data-smartFeatures={smartFeatures}
          data-subcategory={subCategory}
          data-subtype={subType}
          onClick={handleClick}
        >
          Explore More
        </span>
      </div>
    </div>
  );
};

export default ItemSection;
