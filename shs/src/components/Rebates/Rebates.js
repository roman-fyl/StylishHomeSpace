import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { addWishListItem } from "../../store/actions/wishListActions";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { getSessionNumber } from "../Sessions/getSessionNumber";
import homepageLogo from "../../assets/images/icon-homepage.png";
import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import ItemCard from "../../hooks/itemCard";
import {HandleTrackRebates} from "../../hooks/handleTrackRebates";

import data from "../../assets/db/rebates.json";
import "./Rebates.scss";

const Rebates = () => {
  const sessionId = useSelector((state) => state.session.sessionId);
  const [rebates, setRebates] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    groups: [],
    categories: [],
    smartFeatures: [],
    subCategories: [],
    subTypes: [],
    colors: [],
  });

  useEffect(() => {
    document.title = "Rebates";
        // const data = getFromLocalStorage('admin-rebates');
    
    if (data) {
      setRebates(data);
    }
  }, []);
  const uniqueBrands = Array.from(
    new Set(rebates.map((rebate) => rebate.brandText))
  );

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      const updatedFilters = { ...prevFilters, [filterType]: updatedFilter };
      //   updateURL({ ...updatedFilters, priceRange });
      return updatedFilters;
    });
  };



  const filteredRebates = rebates.filter((rebate) => {
    if (
      selectedFilters.brands.length > 0 &&
      !selectedFilters.brands.includes(rebate.brandText)
    ) {
      return false;
    }
    return true;
  });

  const isRebateValid = (rebate) => {
    const currentDate = new Date();
    const endDate = new Date(rebate.endDate);
  
    return endDate >= currentDate;
  };
  const validRebates = filteredRebates.filter(isRebateValid);


  return (
    <div className="container">
      <div className="rebates_content">
      <h1>Rebates</h1>
      <div className="search_filters_filter">
        <h4>Filter by Brand</h4>
        <form>
          {uniqueBrands.map((brand, index) => (
            <span key={index}>
              <input
                type="checkbox"
                className="category-navigation_item"
                id={`brand-checkbox-${index}`}
                value={brand}
                onChange={() => handleFilterChange("brands", brand)}
                checked={selectedFilters.brands.includes(brand)}
              />
              <label htmlFor={`brand-checkbox-${index}`}>{brand}</label>
            </span>
          ))}
        </form>
      </div>
      <ul className="list_card_items">
        {validRebates.length > 0 ? (
          validRebates
          .sort()
          .map((rebate, index) => (
            <li className="list_card_item" data-id={index + 1} key={rebate.idN}>
              <Link
                to={`/rebate/${rebate.idN}`}
                onClick={() => HandleTrackRebates(rebate)}
              >
                <div className="rebate_container">
                    <img src={rebate.rebateImage} className="rebate_image" alt={`${rebate.brandText} - ${rebate.name}`} />
                   <div className="rebate_description">
                   <span><img src={rebate.brandLogo} className="item_brand-logo" alt={`${rebate.brandText} Rebate`}></img></span>
                   <span className="rebate_header">{rebate.brandText} - {rebate.name}</span>
                   <span className="rebate_date">{rebate.startDate.slice(0,10)} - {rebate.endDate.slice(0,10)}</span>
                   <span>{rebate.description}</span>
                   </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>No products match your selected filters.</p>
        )}
      </ul>
      </div>
    </div>
  );
};

export default Rebates;
