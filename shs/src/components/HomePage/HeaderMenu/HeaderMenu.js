import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.scss";
import data from "../../../assets/db/items.json";

const HeaderMenu = memo(() => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryList = data
      .map((item) => item.category && item.category.toLowerCase())
      .filter((category, index, self) => category && self.indexOf(category) === index);

    setCategories(categoryList);
  }, []);

  return (
    <nav>
      <div className="container">
        <ul className="header_menu">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
            </li>
          ))}
          <li><Link to="/rebates">Rebates</Link></li>
        </ul>
      </div>
    </nav>
  );
});

export default HeaderMenu;
