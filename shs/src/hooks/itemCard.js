import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useItemActions from "./useItemActions";
import itemSaveWishList from "../assets/images/icon-save-wishlist.png";

const ItemCard = ({ item }) => {
  const { handleTrackItems, handleAddToWishlist, handleAddToCart } =
    useItemActions(item);

  const GenerateOldPrice = (price, percentage) => price * (1 + percentage / 100);
  const calculateDiscountedAmount = (price, percentage) =>
    GenerateOldPrice(price, percentage) - price;

  return (
    <li className="card_item" data-id={item.sku} key={item.sku}>
       <span
          className="wishlist-icon"
          onClick={handleAddToWishlist}
          title="Add to Wishlist"
        >
          <img src={itemSaveWishList} alt="Save to wishlist" />
        </span>
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
              {parseFloat(
                calculateDiscountedAmount(item.price, 12.319)
              ).toFixed(2)}
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
