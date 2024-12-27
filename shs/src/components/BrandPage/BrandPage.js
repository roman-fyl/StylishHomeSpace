import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAddToCart from "../../hooks/useAddToCart";
import { addVisitedItem } from "../../store/actions/visitedActions";
import {addWishListItem} from "../../store/actions/wishListActions"

import {getFromLocalStorage} from "../../components/LocalStorage/getFromLocalStorage";
import {setLocalStorage} from "../../components/LocalStorage/setLocalStorage";
import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import ItemCard from "../../hooks/itemCard";

import data from "../../assets/db/items.json";
import "./BrandPage.scss";

const BrandPage = () => {
  const dispatch = useDispatch();

  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const sessionId = useSelector((state) => state.session.sessionId);


  useEffect(() => {
    console.log('Brand Name:', brandName); 
    document.title = brandName.toUpperCase();
    console.log(document.title);


    const fetchedProducts = data.filter(product => 
      product.brandText.toLowerCase() === brandName.toLowerCase()
    )

    if (fetchedProducts.length > 0) {
      setProducts(fetchedProducts);
      setError(null);
    } else {
      setProducts([]);
      setError("Products not found");
    }
  }, [brandName]);



  const showItems = () => {
    setDisplayedItemCount((prevCount) => prevCount + 6);
  };

  const GenerateOldPrice = (price, percentage) => {
    if (typeof price !== "number" || price < 0) return 0;
    return price * (1 + percentage / 100);
  };

  const calculateDiscountedAmount = (price, percentage) => {
    const oldPrice = GenerateOldPrice(price, percentage);
    return oldPrice - price;
  };

  const handleAddToCart = useAddToCart();

  const categories = [...new Set(products.map(item => item.category))];

  const filteredNewProducts = products.filter(item => item.group === "newArrival");
  const filteredBestsellerProducts = products.filter(item => item.group === "bestseller");

  const handleTrackItems = (item) => {
    const existingData = getFromLocalStorage("visitedItems");
    const alreadyVisited = existingData.some(
      (visitedItem) => visitedItem.sku === item.sku
    );

    if (!alreadyVisited) {
      const itemWithSession = { ...item, session: sessionId };
      dispatch(addVisitedItem(itemWithSession));
      console.log("Tracked item added:", itemWithSession);
    } else {
      console.log("Item already tracked:", item);
    }
  };




  return (
      <div className="container">
        <div className="brand-page_content">
          <div className="brand-page_main-logo">
            <img src={products[0]?.brandLogo} alt={`${products[0]?.brandText || 'Brand'} logo`} />
          </div>
          <section className="section brand-page_categories">
          <ul className="brand-page_list">
              {categories.map((category, index) => (
                <li className="brand-page_category" key={index}>
                  <Link to={`/category/${category}`}>
                    <img src="#" alt={category} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="items_more"><Link to="/shop-all">Shop All</Link></div>
          </section>
          <section className="section">
            <div className="newArrivals_main">
              <h2>Best-Selling Products</h2>
              <ul className="card_items">
                {filteredBestsellerProducts.sort(() => Math.random() - 0.5).slice(0, displayedItemCount).map((item, index) => (
                  <ItemCard key={item.sku} item={item} />
                ))}
              </ul>
              <div className="items_more"><span onClick={showItems}>Explore More</span></div>
            </div>
          </section>
          <section className="section">
            <div className="newArrivals_main">
              <h2>New Arrivals</h2>
              <ul className="card_items">
                {filteredNewProducts.slice(0, displayedItemCount).map((item, index) => (
                  <ItemCard key={item.sku} item={item} />
                ))}
              </ul>
              <div className="items_more"><span onClick={showItems}>Explore More</span></div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default BrandPage;
