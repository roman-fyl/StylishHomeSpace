import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setData} from "../../../store/reducers/dataSlice";
import {Link} from 'react-router-dom';


import newitem1 from "../../../assets/db/images/items/sku_01_04.png";
import newitem2 from "../../../assets/db/images/items/sku_01_05.png";
import newitem3 from "../../../assets/db/images/items/sku_01_06.png";

import logo1 from "../../../assets/db/images/brand-logos/friedrich_white.png";
import logo2 from "../../../assets/db/images/brand-logos/fulgor_milano_white.png";
import logo3 from "../../../assets/db/images/brand-logos/ge_white.png";

import "./NewArrivals.scss";
import data from "../../../assets/db/items.json";

const NewArrivals = () => {

const dispatch = useDispatch();
const bdData = useSelector((state) => state.data)
console.log(bdData); 
const [displayedItemCount, setDisplayedItemCount] = useState(6);

useEffect(() => {
  dispatch(setData(data))
},[dispatch])

const filteredData = data.filter(item => item.group === "newArrival");

const showItems = () => {
  setDisplayedItemCount((prevCount) => prevCount + 6);
};

const GenerateOldPrice = (price, percentage) => {
  return price * (1 + percentage / 100);
}

  return (
    <div className="newArrivals_main">
      <h2>New Arrivals</h2>
      <ul className="card_items">
       {filteredData.slice(0, displayedItemCount).map((item, index) => (
         <li className="card_item" data-id={index + 1}>
        <Link to={`/${item.SKU}.html`}>
        <span className="item_image"><img src={item.imageSlider[0].imageSliderLink} alt="newArrivals product 1"/>
         </span>
         <div className="item_description">
            <span className="item_brand-logo">
            <img src={item.imageLogo} alt="logo1"></img>
           </span>
          <h3 className="item_title">
            {item.description.short}
           </h3>
           <span className="item_rating"> <span className="item_rate">{item.rate}</span></span>
           <span className="item_pricing">
             <span className="item_old-price">
               <del>${GenerateOldPrice(parseFloat(item.price), 12.319).toFixed(2)}</del>
             </span>
             <span className="item_price">${item.price}</span>
           </span>
         </div>
         </Link>  
         <div className="item_actions">
             <a href="#" className="item_add-to-cart">
               Add to Cart
             </a>
             <a href="#" className="item_quick-but">
               Buy
             </a>
           </div>
       </li>
       ))}
      </ul>
      <div className="items_more"><span onClick={showItems}>Explore More</span></div>
    </div>
  );
};

export default NewArrivals;
