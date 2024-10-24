import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import homepageLogo from "../../assets/images/icon-homepage.png";
import data from "../../assets/db/items.json";
import "./SearchPage.scss";

const SearchPage = ({
  group = null,
  brand = null,
  category = null,
  smartFeatures = null,
  subCategory = null,
  subType = null,
  color = null,
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [shuffled, setShuffled] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    groups: [],
    categories: [],
    smartFeatures: [],
    subCategories: [],
    subTypes: [],
    colors: [],
  });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "SearchPage";
    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }

    // Get filters from the URL
    const searchParams = new URLSearchParams(location.search);
    const brands = searchParams.get("brands")
      ? searchParams.get("brands").split(",")
      : [];
    const groups = searchParams.get("groups")
      ? searchParams.get("groups").split(",")
      : [];
    const categories = searchParams.get("categories")
      ? searchParams.get("categories").split(",")
      : [];
    const smartFeatures = searchParams.get("smartFeatures")
      ? searchParams.get("smartFeatures").split(",")
      : [];
    const subCategories = searchParams.get("subCategories")
      ? searchParams.get("subCategories").split(",")
      : [];
    const subTypes = searchParams.get("subTypes")
      ? searchParams.get("subTypes").split(",")
      : [];
    const minPrice = searchParams.get("minPrice")
      ? parseFloat(searchParams.get("minPrice"))
      : 0;
    const maxPrice = searchParams.get("maxPrice")
      ? parseFloat(searchParams.get("maxPrice"))
      : 100000;
    const colors = searchParams.get("colors")
      ? searchParams.get("colors").split(",")
      : [];

    setPriceRange({ min: minPrice, max: maxPrice });
    setSelectedFilters({
      brands,
      groups,
      categories,
      smartFeatures,
      subCategories,
      subTypes,
      colors,
    });
  }, [location.search]);

  // Update the URL when filters are changed
  const updateURL = (filters) => {
    const searchParams = new URLSearchParams();
    if (filters.brands.length > 0)
      searchParams.set("brands", filters.brands.join(","));
    if (filters.groups.length > 0)
      searchParams.set("groups", filters.groups.join(","));
    if (filters.categories.length > 0)
      searchParams.set("categories", filters.categories.join(","));
    if (filters.smartFeatures.length > 0)
      searchParams.set("smartFeatures", filters.smartFeatures.join(","));
    if (filters.subCategories.length > 0)
      searchParams.set("subCategories", filters.subCategories.join(","));
    if (filters.subTypes.length > 0)
      searchParams.set("subTypes", filters.subTypes.join(","));
    if (filters.colors.length > 0)
      searchParams.set("colors", filters.subTypes.join(","));
    searchParams.set("minPrice", filters.priceRange.min);
    searchParams.set(
      "maxPrice",
      filters.priceRange.max === Infinity ? "" : filters.priceRange.max
    );

    navigate(`?${searchParams.toString()}`);
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      const updatedFilters = { ...prevFilters, [filterType]: updatedFilter };
      updateURL({ ...updatedFilters, priceRange }); // Include price range in the URL update
      return updatedFilters;
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      brands: [],
      groups: [],
      categories: [],
      smartFeatures: [],
      subCategories: [],
      subTypes: [],
      colors: [],
    });
    setPriceRange({ min: 0, max: 100000 });
    navigate(location.pathname); // Reset URL by removing query parameters
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    const newPriceRange = {
      ...priceRange,
      [name === "min" ? "min" : "max"]: value ? parseFloat(value) : 0,
    };
    setPriceRange(newPriceRange);
    updateURL({ ...selectedFilters, priceRange: newPriceRange }); // Include updated price range
  };

  useEffect(() => {
    let updatedProducts = products;

    // Apply filters from selectedFilters
    if (selectedFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.brands.includes(product.brandText)
      );
    } else if (brand) {
      updatedProducts = updatedProducts.filter(
        (product) => product.brandText === brand
      );
    }

    if (selectedFilters.groups.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.groups.includes(product.group)
      );
    } else if (group) {
      updatedProducts = updatedProducts.filter(
        (product) => product.group === group
      );
    }

    if (selectedFilters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    } else if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (selectedFilters.subCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.subCategories.includes(product.subCategory)
      );
    } else if (subCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.subCategory === subCategory
      );
    }

    if (selectedFilters.subTypes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.subTypes.includes(product.subType)
      );
    } else if (subType) {
      updatedProducts = updatedProducts.filter(
        (product) => product.subType === subType
      );
    }

    if (selectedFilters.colors.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.colors.includes(product.color)
      );
    } else if (color) {
      updatedProducts = updatedProducts.filter(
        (product) => product.color === color
      );
    }

    // Apply smart features filter
    if (selectedFilters.smartFeatures.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        const isSmart = product.smart === "Yes";
        return selectedFilters.smartFeatures.includes(isSmart ? "Smart" : "No");
      });
    }

    // Apply price filter
    updatedProducts = updatedProducts.filter((product) => {
      const price = parseFloat(product.price);
      return price >= priceRange.min && price <= priceRange.max;
    });

    setFilteredProducts(updatedProducts);
  }, [
    selectedFilters,
    products,
    group,
    brand,
    category,
    subCategory,
    subType,
    priceRange,
    color,
  ]);

  const uniqueBrands = Array.from(
    new Set(products.map((product) => product.brandText))
  );
  const uniqueGroups = Array.from(
    new Set(products.map((product) => product.group))
  );
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const uniqueSubCategories = Array.from(
    new Set(products.map((product) => product.subCategory))
  );
  const uniqueSubTypes = Array.from(
    new Set(products.map((product) => product.subType))
  );
  const uniqueColors = Array.from(
    new Set(products.map((product) => product.color))
  );

  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

  const calculateDiscountedAmount = (price, percentage) => {
    const oldPrice = GenerateOldPrice(price, percentage);
    return oldPrice - price
  }
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setShuffled(false); // Reset shuffle flag when sort option changes
  };

    // Sorting products when the sortOption changes
    useEffect(() => {
      if (filteredProducts.length > 0) {
        let sortedProducts = [...filteredProducts];
    
        switch (sortOption) {
          case "priceLowToHigh":
            sortedProducts.sort((a, b) => a.price - b.price);
            setShuffled(false); // Reset shuffle flag
            break;
          case "priceHighToLow":
            sortedProducts.sort((a, b) => b.price - a.price);
            setShuffled(false); // Reset shuffle flag
            break;
            case "bestSeller":
              sortedProducts.sort((a, b) => b.rate - a.rate);
              setShuffled(false); // Reset shuffle flag
              break;          
            case "sortDiscount":
              sortedProducts.sort((a, b) => calculateDiscountedAmount(b.price, 12.319) - calculateDiscountedAmount(a.price, 12.319));
              setShuffled(false); // Reset shuffle flag
              break;
          case "mostVisited":
            if (!shuffled) {
              // Only shuffle once
              sortedProducts.sort(() => Math.random() - 0.5);
              setShuffled(true); // Mark as shuffled
            }
            break;
          default:
            break;
        }
    
        setFilteredProducts(sortedProducts);
      }
    }, [sortOption, filteredProducts, shuffled]);

  return (
    <div className="container">
      <ul className="breadcrumbs">
        <li className="breadcrumbs_item">
          <Link to="/">
            <img src={homepageLogo} alt="Home" />
          </Link>
        </li>
        {selectedFilters.categories.length > 0 && selectedFilters.categories.length < 2 && (
          <li className="breadcrumbs_item">
            <Link to={`?categories=${selectedFilters.categories.join(",")}`}>
              {selectedFilters.categories.join(", ")}
            </Link>
          </li>
        )}
        {selectedFilters.subCategories.length > 0 && selectedFilters.subCategories.length < 2 && (
          <li className="breadcrumbs_item">
            <Link
              to={`?subCategories=${selectedFilters.subCategories.join(",")}`}>
              {selectedFilters.subCategories.join(", ")}
            </Link>
          </li>
        )}
        {selectedFilters.subTypes.length > 0 && selectedFilters.subTypes.length < 2 && (
          <li className="breadcrumbs_item">
            <Link to={`?subTypes=${selectedFilters.subTypes.join(",")}`}>
              {selectedFilters.subTypes.join(", ")}
            </Link>
          </li>
        )}
        {filteredProducts.length > 0 && filteredProducts.length < 2 && (
          <li className="breadcrumbs_item">
            {filteredProducts.length} Results
          </li>
        )}
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
                      onChange={() =>
                        handleFilterChange("categories", category)
                      }
                      checked={selectedFilters.categories.includes(category)}
                    />
                    <label htmlFor={`category-checkbox-${index}`}>
                      {category}
                    </label>
                  </span>
                ))}
              </form>
            </div>
            <div className="search_filters_filter">
              <h4>Filter by subCategory</h4>
              <form>
                {uniqueSubCategories.map((subCategory, index) => (
                  <span key={index}>
                    <input
                      type="checkbox"
                      className="category-navigation_item"
                      id={`category-checkbox-${index}`}
                      value={subCategory}
                      onChange={() =>
                        handleFilterChange("subCategories", subCategory)
                      }
                      checked={selectedFilters.subCategories.includes(
                        subCategory
                      )}
                    />
                    <label htmlFor={`subCategory-checkbox-${index}`}>
                      {subCategory}
                    </label>
                  </span>
                ))}
              </form>
            </div>
            <div className="search_filters_filter">
              <h4>Filter by subType</h4>
              <form>
                {uniqueSubTypes.map((subType, index) => (
                  <span key={index}>
                    <input
                      type="checkbox"
                      className="category-navigation_item"
                      id={`category-checkbox-${index}`}
                      value={subType}
                      onChange={() => handleFilterChange("subTypes", subType)}
                      checked={selectedFilters.subTypes.includes(subType)}
                    />
                    <label htmlFor={`subType-checkbox-${index}`}>
                      {subType}
                    </label>
                  </span>
                ))}
              </form>
            </div>
            <div className="search_filters_filter">
              <h4>Filter by Color</h4>
              <form>
                {uniqueColors.map((color, index) => (
                  <span key={index}>
                    <input
                      type="checkbox"
                      className="category-navigation_item"
                      id={`category-checkbox-${index}`}
                      value={color}
                      onChange={() => handleFilterChange("colors", color)}
                      checked={selectedFilters.colors.includes(color)}
                    />
                    <label htmlFor={`subType-checkbox-${index}`}>{color}</label>
                  </span>
                ))}
              </form>
            </div>
            <div className="search_filters_filter">
              <h4>Filter by Price</h4>
              <div>
                <label htmlFor="min-price">Min Price:</label>
                <input
                  type="number"
                  id="min-price"
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceRangeChange}
                />
              </div>
              <div>
                <label htmlFor="max-price">Max Price:</label>
                <input
                  type="number"
                  id="max-price"
                  name="max"
                  value={priceRange.max === Infinity ? "" : priceRange.max}
                  onChange={handlePriceRangeChange}
                />
              </div>
            </div>
            <div className="search_filters_filter">
              <h4>Smart Features</h4>
              <form>
                <span>
                  <input
                    type="checkbox"
                    className="category-navigation_item"
                    id="smart-true"
                    value="Yes"
                    onChange={() =>
                      handleFilterChange("smartFeatures", "Smart")
                    }
                    checked={selectedFilters.smartFeatures.includes("Smart")}
                  />
                  <label htmlFor="smart-true">Yes</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    className="category-navigation_item"
                    id="smart-false"
                    value="No"
                    onChange={() => handleFilterChange("smartFeatures", "No")}
                    checked={selectedFilters.smartFeatures.includes("No")}
                  />
                  <label htmlFor="smart-false">No</label>
                </span>
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
              <div className="sort-options">
        <label htmlFor="sort"><strong>Sort by:</strong></label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="sortDiscount">Sort By Discount</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="bestSeller">Best Sellers</option>
          <option value="mostVisited">Most Visited</option>
        </select>
      </div>
            </div>
            <div className="search_filters_filter">
              <h4>Change View</h4>
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
                      <h3 className="item_title">
                        {product.description.short}
                      </h3>
                      <span className="item_rating">
                        <span className="item_rate">{product.rate}</span>
                        <span className="item_rate">{product.group}</span>
                        <span className="item_rate">{product.color}</span>
                        <span className="item_rate">{product.brandText}</span>
                      </span>
                      <span className="item_pricing">
                        <span className="item_old-price">
                          <del>${GenerateOldPrice(parseFloat(product.price), 12.319).toFixed(2)}
                          </del>
                          <div>${parseFloat(calculateDiscountedAmount(product.price, 12.319)).toFixed(2)}</div>
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
