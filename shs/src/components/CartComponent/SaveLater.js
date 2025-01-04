import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";
import useAddToCart from "../../hooks/useAddToCart";
import ItemCard from "../../hooks/itemCard";
import  {addLaterItem, removeLaterItem} from "../../store/actions/laterActions"


import "../Profile/Profile.scss";

const SaveLater = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const laterItems = useSelector((state) => state.later.items || []);
  const sessionId = useSelector((state) => state.session.sessionId);

  const handleAddToCart = useAddToCart();


  const handleAddAllToCart = (item) => {
    const storedLater = getFromLocalStorage("laterItems") || [];
    storedLater.forEach((item) => {
      handleAddToCart(item);
    });
    dispatch(removeLaterItem(item))
    console.log("All items added to cart:", storedLater);
  };


  return (
    <div className="account_content_block" id="profile-wishlist">
      <div>
      {laterItems.length > 0 && (<h1>Saved for Later</h1>)}
      </div>
      <ul className="profile_wishlist">
      {laterItems.length > 0 && laterItems && (
        laterItems.map((item, index) =>
          item?.sku ? <ItemCard key={item.sku} item={item} /> : null
        )
      )}
      </ul>
       
    </div>
  );
};

export default SaveLater;
