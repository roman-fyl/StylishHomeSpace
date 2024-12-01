import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../../hooks/itemCard";
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
  viewButton = false
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
      {/* <h2>{subject}</h2> */}
      <ul className="card_items">
        {filteredData
          .sort(() => Math.random() - 0.5)
          .slice(0, displayedItemCount)
          .map((item, index) => (
            <ItemCard key={item.sku} item={item} />
          ))}
      </ul>
      <div className="items_more">
        {viewButton ? (<span
          data-group={group}
          data-category={category}
          data-brand={brand}
          data-smartFeatures={smartFeatures}
          data-subcategory={subCategory}
          data-subtype={subType}
          data-viewButton={viewButton}
          onClick={handleClick}
        >
          Explore More
        </span>) : null}
      </div>
    </div>
  );
};

export default ItemSection;
