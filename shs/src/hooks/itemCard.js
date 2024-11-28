import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useItemActions from "./useItemActions";
import itemRemoveWishList from "../assets/images/icon-remove-wishlist.png";
import itemSaveWishList from "../assets/images/icon-save-wishlist.png";


import {getFromLocalStorage} from "../components/LocalStorage/getFromLocalStorage";
import {setLocalStorage} from "../components/LocalStorage/setLocalStorage"

const ItemCard = ({ item }) => {
  const [isInWishList, setIsInWishList] = useState(false);
  const [isActive, setIsActive] = useState(false); 

  const { handleTrackItems, handleAddToWishlist, handleAddToCart, handleRemoveWishlistItem } = useItemActions(item);

  useEffect(() => {
    const storedWishlist = getFromLocalStorage("wishListItems") || [];
    const itemExists = storedWishlist.some((wishlistItem) => wishlistItem.sku === item.sku);
    setIsInWishList(itemExists);
  }, [item.sku]);

  const toggleWishlist = () => {
    const storedWishlist = getFromLocalStorage("wishListItems") || [];
    let updatedWishlist;

    if (isInWishList) {
      updatedWishlist = storedWishlist.filter((wishlistItem) => wishlistItem.sku !== item.sku);
      handleRemoveWishlistItem(item)
    } else {
      updatedWishlist = [...storedWishlist, item];
      handleAddToWishlist(item)
    }

    setLocalStorage("wishListItems", updatedWishlist);
    setIsInWishList(!isInWishList); 
  };

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false); 

  const GenerateOldPrice = (price, percentage) => price * (1 + percentage / 100);
  const calculateDiscountedAmount = (price, percentage) =>
    GenerateOldPrice(price, percentage) - price;

  return (
    <li
      className="card_item"
      data-id={item.sku}
      key={item.sku}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isActive && (
        <span
          className="wishlist-icon"
          onClick={toggleWishlist}
          title={isInWishList ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <img
            src={isInWishList ? itemRemoveWishList : itemSaveWishList}
            alt={isInWishList ? "Remove from Wishlist" : "Save to Wishlist"}
          />
        </span>
      )}
      <Link to={`/item/${item.sku}`} onClick={handleTrackItems}>
        <span className="item_image">
          <img
            src={item.imageSlider[0]?.imageSliderLink}
            alt={`${item.description.short || "product"}`}
          />
        </span>
        <div className="item_description">
          <span className="item_brand-logo">
            <img src={item.brandLogo} alt={item.brand} />
          </span>
          <h3 className="item_title">{item.description.short}</h3>
          <ul className="item_tags">
              {item.tags.map((tag, index) => (
                <li key={index}>
                  <img src={tag.iconLink} alt={`${tag.value} ${item.sku}`}
                  ></img>
                </li>
              ))}
            </ul>
          <span className="item_rating">
            <span className="item_rate">{item.sku}</span>
            <span className="item_rate">{item.rate}</span>
            <span className="item_rate">{item.group}</span>
            <span className="item_rate">{item.color}</span>
            <span className="item_rate">{item.brandText}</span>
          </span>
          <span className="item_pricing">
            <span className="item_old-price">
              <del>
                ${GenerateOldPrice(parseFloat(item.price), 12.319).toFixed(2)}
              </del>
            </span>
            <div>
              $
              {parseFloat(calculateDiscountedAmount(item.price, 12.319)).toFixed(2)}
            </div>
            <span className="item_price">${item.price}</span>
          </span>
        </div>
      </Link>
      <div className="item_actions">
        <button
          onClick={() => handleAddToCart(item)}
          className="item_add-to-cart"
        >
          Add To Cart
        </button>
      </div>
    </li>
  );
};

export default ItemCard;
