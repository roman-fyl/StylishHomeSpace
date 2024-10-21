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
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    groups: [],
    categories: [],
    smartFeatures: [],
    subCategories: [],
    subTypes: [],
  });
  const [priceRange, setPriceRange] = useState({min: 0, max: 100000})

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "SearchPage";
    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }

    // Check if there are any filters in the URL and apply them
    const searchParams = new URLSearchParams(location.search);
    const brands = searchParams.get("brands") ? searchParams.get("brands").split(",") : [];
    const groups = searchParams.get("groups") ? searchParams.get("groups").split(",") : [];
    const categories = searchParams.get("categories") ? searchParams.get("categories").split(",") : [];
    const smartFeatures = searchParams.get("smartFeatures") ? searchParams.get("smartFeatures").split(",") : [];
    const subCategories = searchParams.get("subCategories") ? searchParams.get("subCategories").split(",") : [];
    const subTypes = searchParams.get("subTypes") ? searchParams.get("subTypes").split(",") : [];
    const minPrice = searchParams.get("minPrice") ? parseFloat(searchParams.get("minPrice")) : 0;
    const maxPrice = searchParams.get("maxPrice") ? parseFloat(searchParams.get("maxPrice")) : 100000;
    setPriceRange({ min: minPrice, max: maxPrice });


    setSelectedFilters({ brands, groups, categories, smartFeatures, subCategories, subTypes });
  }, [location.search]);

  // Update the URL when filters are changed
  const updateURL = (filters) => {
    const searchParams = new URLSearchParams();
    if (filters.brands.length > 0) {
      searchParams.set("brands", filters.brands.join(","));
    }
    if (filters.groups.length > 0) {
      searchParams.set("groups", filters.groups.join(","));
    }
    if (filters.categories.length > 0) {
      searchParams.set("categories", filters.categories.join(","));
    }
    if (filters.smartFeatures.length > 0) {
      searchParams.set("smartFeatures", filters.smartFeatures.join(","));
    }
    if (filters.subCategories.length > 0) {
      searchParams.set("subCategories", filters.subCategories.join(","));
    }
    if (filters.subTypes.length > 0) {
      searchParams.set("subTypes", filters.subTypes.join(","));
    }
    searchParams.set("minPrice", filters.priceRange.min);
    searchParams.set("maxPrice", filters.priceRange.max === Infinity ? '' : filters.priceRange.max);

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

    if (brand) {
      updatedProducts = updatedProducts.filter(
        (product) => product.brandText === brand
      );
    }

    if (group) {
      updatedProducts = updatedProducts.filter(
        (product) => product.group === group
      );
    }

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }
    if (subCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.subCategory === subCategory
      );
    }
    if (subType) {
      updatedProducts = updatedProducts.filter(
        (product) => product.subType === subType
      );
    }

    // Apply smart features filter
    if (selectedFilters.smartFeatures.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        const isSmart = product.smart === "Yes";
        return selectedFilters.smartFeatures.includes(isSmart ? "Smart" : "No");
      });
    }

    // Apply brand filter
    if (selectedFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.brands.includes(product.brandText)
      );
    }

    // Apply group filter
    if (selectedFilters.groups.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.groups.includes(product.group)
      );
    }

    // Apply category filter
    if (selectedFilters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    }
    if (selectedFilters.subCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.subCategories.includes(product.subCategory)
      );
    }
    if (selectedFilters.subTypes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.subTypes.includes(product.subType)
      );
    }
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
    smartFeatures,
    subCategory,
    subType,
    priceRange
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
                      checked={selectedFilters.subCategories.includes(subCategory)}
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
                      onChange={() =>
                        handleFilterChange("subTypes", subType)
                      }
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
      value={priceRange.max === Infinity ? '' : priceRange.max}
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
              <h4>Sort</h4>
            </div>
            <div className="search_filters_filter">
              <h4>Change View</h4>
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
                      <h3 className="item_title">
                        {product.description.short}
                      </h3>
                      <span className="item_rating">
                        <span className="item_rate">{product.rate}</span>
                        <span className="item_rate">{product.group}</span>
                        <span className="item_rate">{product.brandText}</span>
                      </span>
                      <span className="item_pricing">
                        <span className="item_old-price">
                          <del>
                            $
                            {GenerateOldPrice(
                              parseFloat(product.price),
                              12.319
                            ).toFixed(2)}
                          </del>
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
