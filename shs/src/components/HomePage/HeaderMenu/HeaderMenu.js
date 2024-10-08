import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation
import "./HeaderMenu.scss";
import data from "../../../assets/db/items.json";

const HeaderMenu = memo(() => {
     const [categories, setCategories] = useState([]);
   
     useEffect(() => {
       const categoryList = data
         .map((item) => item.category.toLowerCase()) 
         .filter((category, index, self) => self.indexOf(category) === index);
   
       setCategories(categoryList);
       console.log(categoryList)
     }, []);
   
     return (
       <nav>
         <div className="container">
           <ul className="header_menu">
             <li><Link to="/">NEW</Link></li>
             {categories.map((category, index) => (
               <li key={index}>
                 <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
               </li>
             ))}
             <li><Link to="/rebates">Rebates</Link></li>
           </ul>
         </div>
       </nav>
     );
   });

export default HeaderMenu;
