import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemCard from "../../hooks/itemCard";
import data from "../../assets/db/rebates.json";
import products from "../../assets/db/items.json";
import "./Rebates.scss";

const RebatePage = () => {
  const { idN } = useParams();
  const [rebate, setRebate] = useState({});

  const findRebate = data.find((rebate) => rebate.idN === idN);

  useEffect(() => {
    if (findRebate) {
      setRebate(findRebate);
      document.title = findRebate.name;
    }
  }, [idN]);

  const filteredProducts = rebate.items
    ? rebate.items
        .map((sku) => {
          const product = products.find((item) => item.sku === sku); 
          return product;
        })
        .filter(Boolean)
    : [];

  const groupedByCategory = filteredProducts.reduce((groups, product) => {
    const category = product.category; 
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product); 
    return groups;
  }, {});

  return (
    <div className="container">
      <div className="rebate_content">
        <div className="brand-page_main-logo">
          <img
            src={rebate?.brandLogo}
            className="item_brand-logo"
            alt={`${rebate?.brandText} Rebate`}
          />
        </div>
        <h1 className="rebate_header">{rebate?.name}</h1>
        <span className="rebate_date">
          {rebate?.startDate?.slice(0, 10)} - {rebate?.endDate?.slice(0, 10)}
        </span>

        {rebate?.rebateMainImage && (
          <img
            src={rebate?.rebateMainImage}
            className="rebate_main_image"
            alt={`${rebate?.brandText} - ${rebate?.name}`}
          />
        )}
        <span className="rebate_text">
          {rebate?.description}
          <a href={rebate?.rebateFile} className="rebate_link">
            Open Rebate Form >>
          </a>
        </span>

        <div className="card_section">
         <div className="card_section_element">
         {Object.keys(groupedByCategory).map((category) => (
            <div key={category} className="category_group">
              <h2 className="category_title">{category}</h2>
              <ul className="card_items">
                {groupedByCategory[category].map((item) => (
                  <ItemCard key={item.sku} item={item} />
                ))}
              </ul>
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default RebatePage;
