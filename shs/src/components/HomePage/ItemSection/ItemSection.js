import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/actions/cartActions';
import {getSessionNumber} from "../../Sessions/getSessionNumber";
import {setLocalStorage} from "../../LocalStorage/setLocalStorage";
import {updateLocalStorage} from "../../LocalStorage/updateLocalStorage";

import "./ItemSection.scss";
import data from "../../../assets/db/items.json"; 

const ItemSection = ({ group = null, subject = null, brand = null, category = null, smartFeatures = null, subCategory = null, subType = null }) => {
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
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
    return oldPrice - price
  }

  const handleAddToCart = (item) => {
    const sessionNumber = getSessionNumber();
    const itemToAdd = {
        sku: item.sku,
        quantity: 1,
        session: sessionNumber,
    };
    updateLocalStorage('cartItems', itemToAdd);
    dispatch(addToCart(itemToAdd));
    navigate(`/cart?session=${sessionNumber}`); 
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
              <Link to={`/item/${item.sku}`}>
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
                </button>                {/* <Link to={`/search?category=${category}&group=${group}`} className="item_add-to-cart">Shop More</Link> */}
                {/* <a href="#" className="item_quick-buy">Buy</a> */}
              </div>
            </li>
          ))}
      </ul>
      <div className="items_more">
        <span 
          data-group={group} 
          data-category={category} 
          data-brand={brand}
          data-smartfeatures={smartFeatures}
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
