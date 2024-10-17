import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homepageLogo from "../../assets/images/icon-homepage.png";
import data from "../../assets/db/items.json";
import "./SearchPage.scss";

const SearchPage = ({ group = null, brand = null, category = null }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    groups: [],
    categories: [],
  });

  useEffect(() => {
    document.title = "SearchPage";
    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }
  }, []);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  const resetFilters = () => {
    setSelectedFilters({ brands: [], groups: [], categories: [] });
  };

  useEffect(() => {
    let updatedProducts = products;

    if (brand) {
      updatedProducts = updatedProducts.filter((product) => product.brandText === brand);
    }

    if (group) {
      updatedProducts = updatedProducts.filter((product) => product.group === group);
    }

    if (category) {
      updatedProducts = updatedProducts.filter((product) => product.category === category);
    }

    if (selectedFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.brands.includes(product.brandText)
      );
    }

    if (selectedFilters.groups.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.groups.includes(product.group)
      );
    }

    if (selectedFilters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedFilters, products, group, brand, category]);

  const uniqueBrands = Array.from(new Set(products.map((product) => product.brandText)));
  const uniqueGroups = Array.from(new Set(products.map((product) => product.group)));
  const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));

  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

  return (
    <div className="container">
      <ul className="breadcrumbs">
        <li className="breadcrumbs_item">
          <Link to="/">
            <img src={homepageLogo} alt="Home" />
          </Link>
        </li>
        <li className="breadcrumbs_item">
          <Link to="/category">Department</Link>
        </li>
        <li className="breadcrumbs_item">
          <Link to="/subCategory">SubCategory</Link>
        </li>
        <li className="breadcrumbs_item">
          <Link to="/subType">SubType</Link>
        </li>
        <li className="breadcrumbs_item">BrandText - SKU</li>
      </ul>

      <div className="search_container">
        <aside className="search_aside">
        <button onClick={resetFilters}>Clear Filters</button>
        <div className="search_filter">
        <div className="search_filters_filter">
            <h4>Filter by Group</h4>
            <form>
              {uniqueGroups.map((group, index) => (
                <span key={index}>
                  <input
                    type="checkbox"
                    className="category-navigation_item"
                    id={`group-checkbox-${index}`}
                    value={group}
                    onChange={() => handleFilterChange("groups", group)}
                    checked={selectedFilters.groups.includes(group)}
                  />
                  <label htmlFor={`group-checkbox-${index}`}>{group}</label>
                </span>
              ))}
            </form>
          </div>
          <div className="search_filters_filter">
            <h4>Filter by Category</h4>
            <form>
              {uniqueCategories.map((category, index) => (
                <span key={index}>
                  <input
                    type="checkbox"
                    className="category-navigation_item"
                    id={`category-checkbox-${index}`}
                    value={category}
                    onChange={() => handleFilterChange("categories", category)}
                    checked={selectedFilters.categories.includes(category)}
                  />
                  <label htmlFor={`category-checkbox-${index}`}>{category}</label>
                </span>
              ))}
            </form>
          </div>
        </div>
        </aside>

        <main className="search_main_content">
          <div className="search_filters">
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
          <div className="search_filters_filter">
            <h4>({filteredProducts.length})</h4>
          </div>

          
          </div>
          <ul className="card_items">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <li className="card_item" data-id={index + 1} key={product.sku}>
                  <Link to={`/item/${product.sku}`}>
                    <span className="item_image">
                      <img
                        src={product.imageSlider[0]?.imageSliderLink}
                        alt={`${product.title}`}
                      />
                    </span>
                    <div className="item_description">
                      <span className="item_brand-logo">
                        <img src={product.brandLogo} alt={product.brand} />
                      </span>
                      <h3 className="item_title">{product.description.short}</h3>
                      <span className="item_rating">
                        <span className="item_rate">{product.rate}</span>
                        <span className="item_rate">{product.group}</span>
                        <span className="item_rate">{product.brandText}</span>
                      </span>
                      <span className="item_pricing">
                        <span className="item_old-price">
                          <del>${GenerateOldPrice(parseFloat(product.price), 12.319).toFixed(2)}</del>
                        </span>
                        <span className="item_price">${product.price}</span>
                      </span>
                    </div>
                  </Link>
                  <div className="item_actions">
                    <a href="#" className="item_add-to-cart">
                      Add to Cart
                    </a>
                    <a href="#" className="item_quick-buy">
                      Buy
                    </a>
                  </div>
                </li>
              ))
            ) : (
              <p>No products match your selected filters.</p>
            )}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
