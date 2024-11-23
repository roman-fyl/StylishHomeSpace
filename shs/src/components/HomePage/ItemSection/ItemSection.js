import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/actions/cartActions";
import { getSessionNumber } from "../../Sessions/getSessionNumber";
import { setLocalStorage } from "../../LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../../LocalStorage/getFromLocalStorage";
import { updateLocalStorage } from "../../LocalStorage/updateLocalStorage";
import { addVisitedItem } from "../../../store/actions/visitedActions";
import { addWishListItem } from "../../../store/actions/wishListActions";
import ItemCard from "../../../hooks/itemCard";

import useAddToCart from "../../../hooks/useAddToCart";
import itemSaveWishList from "../../../assets/images/icon-save-wishlist.png";

import "./ItemSection.scss";
import data from "../../../assets/db/items.json";

const ItemSection = ({
  group = null,
  subject = null,
  brand = null,
  category = null,
  smartFeatures = null,
  subCategory = null,
  subType = null,
}) => {
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const sessionId = useSelector((state) => state.session.sessionId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let filteredData = [...data];

  if (brand) {
    filteredData = filteredData.filter((item) => item.brandText === brand);
  }

  if (group) {
    filteredData = filteredData.filter((item) => item.group === group);
  }
  if (category) {
    filteredData = filteredData.filter((item) => item.category === category);
  }

  const handleClick = (event) => {
    const group = event.target.dataset.group;
    const category = event.target.dataset.category;
    const brand = event.target.dataset.brand;
    const smartFeatures = event.target.dataset.smartFeatures;
    const subCategory = event.target.dataset.subcategory;
    const subType = event.target.dataset.subtype;

    const params = new URLSearchParams();

    if (group) params.set("groups", group);
    if (category) params.set("categories", category);
    if (brand) params.set("brands", brand);
    if (smartFeatures) params.set("smartFeatures", smartFeatures);
    if (subCategory) params.set("subCategories", subCategory);
    if (subType) params.set("subTypes", subType);

    navigate(`/search?${params.toString()}`);
  };

 

  return (
    <div className="item-section_main">
      <h2>{subject}</h2>
      <ul className="card_items">
        {filteredData
          .sort(() => Math.random() - 0.5)
          .slice(0, displayedItemCount)
          .map((item, index) => (
            <ItemCard key={item.sku} item={item} />
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
