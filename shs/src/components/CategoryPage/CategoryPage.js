import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/db/items.json";

import CategorySlider from "./CategorySlider";
import ItemSection from "../ItemSection/ItemSection";

import "./CategoryPage.scss";

const CategoryPage = ({ group = null, subject = null, brand = null, category = null, smartFeatures = null, subCategory = null, subType = null, color = null }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [uniqueFeatures, setUniqueFeatures] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});

  let filteredData = [...data]; 

  if (brand) {
    filteredData = filteredData.filter(item => item.brandText === brand);
  }

  if (group) {
    filteredData = filteredData.filter(item => item.group === group);
  }
  
  if (category) {
    filteredData = filteredData.filter(item => item.category === category);
  }
  if (color) {
    filteredData = filteredData.filter(item => item.color === color);
  }

  const generateQueryParams = (additionalParams = {}) => {
    const params = new URLSearchParams();

    if (group) params.set('groups', group);
    if (category) params.set('categories', category);
    if (brand) params.set('brands', brand);
    if (smartFeatures) params.set('smartFeatures', smartFeatures);
    if (subCategory) params.set('subCategories', subCategory);
    if (subType) params.set('subTypes', subType);
    if (color) params.set('colors', color);


    Object.keys(additionalParams).forEach(key => {
        if (additionalParams[key]) { 
            params.set(key, additionalParams[key]);
        }
    });
    
    console.log(params)
    return params.toString();

};

  useEffect(() => {
    try {
      if (typeof data !== "undefined" && Array.isArray(data)) {
        const filteredProducts = data.filter(
          (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );
        document.title = categoryName.toUpperCase();

        if (filteredProducts.length > 0) {
          setProducts(filteredProducts);
        } else {
          setError("No products found for this category.");
        }
      } else {
        setError("Data is not available.");
      }
    } catch (err) {
      setError("An error occurred while loading the data.");
    }
  }, [categoryName]);

  useEffect(() => {
    const featuresSet = new Set();
    products.forEach((product) => {
      product.description?.options?.forEach((option) => {
        if (option.option === "Features") {
          option.meanings.forEach((feature) => {
            featuresSet.add(feature.value);
          });
        }
      });
    });
    setUniqueFeatures(Array.from(featuresSet));
  }, [products]);

  useEffect(() => {
    const grouped = products.reduce((acc, product) => {
      if (!acc[product.subCategory]) {
        acc[product.subCategory] = new Set();
      }
      acc[product.subCategory].add(product.subType);
      return acc;
    }, {});

    const groupedArray = Object.keys(grouped).reduce((acc, key) => {
      acc[key] = Array.from(grouped[key]);
      return acc;
    }, {});

    setGroupedProducts(groupedArray);
  }, [products]);

  return (
    <div className="container">
      <div className="category-page_content">
        <div className="category-header_block">
          <CategorySlider />
          <div>
            <h2>Most-Visited Categories</h2>
            <ul className="category-content_all_list">
              {products
                .filter((product, index, self) =>
                  self.findIndex(p => p.subType === product.subType) === index)
                .sort(() => Math.random() - 0.5)
                .slice(0, 6)
                .map((product, index) => (
                  <li className="category-header_popular_item" key={index}>
                    <Link to={`/search?${generateQueryParams({ categories: product.category, subTypes: product.subType })}`}>
                      <p>{product.subType}</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <section className="section">
        <h2>Best-Selling Items</h2>
          <ItemSection group="bestseller" subject="Best-Selling Items" category={categoryName} />
        </section>
        <section className="section">
        <h2>New Arrivals</h2>
          <ItemSection group="newArrival" subject="New Arrival" category={categoryName} />
        </section>

        <section className="section category-navigation_lists">
          <ul className="category-navigation_list important">
            <li className="category-navigation_item"><Link to="/">In Stock</Link></li>
            <li className="category-navigation_item"><Link to="/">On Sale</Link></li>
            {products.filter((product, index, self) =>
              self.findIndex(p => p.subType === product.subType) === index)
              .map((product, index) => (
                <li className="category-navigation_item" key={index}>
                  <Link to={`/search?${generateQueryParams({ categories: product.category, subTypes: product.subType })}`}>
                    {product.subType}
                  </Link>
                </li>
              ))}
            <li className="category-navigation_item"><Link to="/">Limited Availability</Link></li>
          </ul>

          <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Shop By Color</li>
            {products.filter((product, index, self) =>
              self.findIndex(p => p.color === product.color) === index)
              .map((product, index) => (
                <li className="category-navigation_item" key={index}>
                  <Link to={`/search?${generateQueryParams({ categories: product.category, colors: product.color })}`}>
                    {product.color}
                  </Link>
                </li>
              ))}
          </ul>

          <ul className="category-navigation_list">
    <li title="99" className="category-navigation_title">Tailored for Your Convenience</li>
</ul>


          <ul className="category-navigation_list shop-by-brand">
            <li title="99" className="category-navigation_title">Shop By Brand</li>
            {products.filter((product, index, self) =>
              self.findIndex(p => p.brandText === product.brandText) === index)
              .map((product, index) => (
                <li className="category-navigation_item" key={index}>
                  <Link to={`/search?${generateQueryParams({ categories: product.category, brands: product.brandText })}`}>
                    {product.brandText}
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <section className="category-subcategories_list">
          <ul className="category-subcategory">
            {Object.keys(groupedProducts).map((subCategory, index) => (
              <li className="category-subcategory_element" key={index}>
                <Link to={`/search?${generateQueryParams({ subCategories: subCategory })}`}>
                  {subCategory}
                  <ul>
                    {groupedProducts[subCategory].map((subType, idx) => (
                      <li key={idx}>
                        <Link to={`/search?${generateQueryParams({subCategories : subCategory, subTypes : subType})}`}>{subType}</Link>
                        </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;
