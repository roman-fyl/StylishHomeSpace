import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

  const handleAddToCart = useAddToCart();

  const handleAddAllToCart = () => {
    const storedWishlist = getFromLocalStorage("wishListItems") || [];
    storedWishlist.forEach((item) => {
      handleAddToCart(item);
    });
    console.log("All items added to cart:", storedWishlist);
  };


  return (
    <div className="account_content_block" id="profile-wishlist">
      <div>
      <h1>Wishlist</h1>
      {wishListItems.length > 0 && (
        <button className="cart_button" onClick={handleAddAllToCart}>Add All to Cart</button>
      )}   
      </div>
      <ul className="profile_wishlist">
      {wishListItems.length > 0 && wishListItems ? (
        wishListItems.map((item, index) =>
          item?.sku ? <ItemCard key={item.sku} item={item} /> : null
        )
      ): (<span>No data</span>)}
      </ul>
       
    </div>
  );
};

export default ProfileWishlist;
