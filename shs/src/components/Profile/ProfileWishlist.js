import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVisitedItem } from "../../store/actions/visitedActions";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";

import useAddToCart from "../../hooks/useAddToCart";
import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import ItemCard from "../../hooks/itemCard";

import "./Profile.scss";

const ProfileWishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListItems = useSelector((state) => state.wishList.items || []);
  const sessionId = useSelector((state) => state.session.sessionId);
  // console.log(wishListItems)


  return (
    <div className="account_content_block" id="profile-wishlist">
      <h1>Wishlist</h1>
      <ul className="profile_wishlist">
      {wishListItems.map((item, index) =>
  item?.sku ? <ItemCard key={item.sku} item={item} /> : null
)}
      </ul>
    </div>
  );
};

export default ProfileWishlist;
