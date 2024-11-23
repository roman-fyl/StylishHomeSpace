import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVisitedItem } from "../../store/actions/visitedActions";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";

import useAddToCart from "../../hooks/useAddToCart";
import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import ItemCard from "../../hooks/itemCard";




import "./Profile.scss";

const ProfileLastVisitedItems = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const visitedItems = useSelector((state) => state.visited.items || [])
  const sessionId = useSelector((state) => state.session.sessionId);
  const handleAddToCart = useAddToCart()


  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };
  

  return (
  
        <div className="account_content_block" id="profile-last-visited-items">
          <h1>Recently viewed</h1>
          <ul className="profile_lastVisited">
          {visitedItems.slice(-4).map((item, index) => (
              <ItemCard key={item.sku} item={item} />
            ))}
      </ul>
        </div>
  );
};

export default ProfileLastVisitedItems;
