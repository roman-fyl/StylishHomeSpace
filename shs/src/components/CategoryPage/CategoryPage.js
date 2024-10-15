import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/db/items.json";


import CategorySlider from "./CategorySlider";
import ItemSection from "../HomePage/ItemSection/ItemSection";

import "./CategoryPage.scss";


const CategoryPage = () => {
  const { categoryName } = useParams();
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [uniqueFeatures, setUniqueFeatures] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});



  useEffect(() => {
    const filteredProducts = data.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
      setError(null);
    } else {
      setProducts([]);
      setError("No products found for this category.");
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

  const showItems = () => {
    setDisplayedItemCount((prevCount) => prevCount + 6);
  };
  // useEffect(() => {
  //     document.title = 'CATEGORY';
  //     const fetchedProducts = data.filter(product => 
  //       product.department.toLowerCase() === categoryName.toLowerCase()
  //     )

  //     if (fetchedProducts.length > 0) {
  //       setProducts(fetchedProducts);
  //       setError(null);
  //     } else {
  //       setProducts([]);
  //       setError("Products not found");
  //     }
  //     console.Console.og(fetchedProducts)
  //   },[categoryName]);
  console.log(data)


  console.log(products)
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
          <Link to="/">
            <p>{product.subType}</p>
          </Link>
        </li>
      ))}
  </ul>
</div>

        </div>
        <section className="section category-content_categories">
        <ul className="category-content_all">
          {products.filter((product, index, self) =>
          self.findIndex(p => p.subCategory === product.subCategory) === index)
          .map((product, index) => (
            <li className="category-content_category" key={index}>
              <Link to="/">{product.subCategory}</Link></li>
          ))}
          </ul>
          <div className="items_more"><a href="#">Shop All</a></div>
        </section>
        <section className="section">
          <ItemSection group="newArrival" subject="New Arrivals" category="kitchen" />
        </section>
        <section className="section category-navigation_lists">
          <ul className="category-navigation_list important">
            <li className="category-navigation_item"><Link to="/">In Stock</Link></li>
            <li className="category-navigation_item"><Link to="/">On Sale</Link></li>
            {products.filter((product, index, self) =>
          self.findIndex(p => p.subType === product.subType) === index)
          .map((product, index) => (
            <li className="category-navigation_item" key={index}>
              <Link to="/">{product.subType}</Link></li>
          ))}
            <li className="category-navigation_item"><Link to="/">Limited Availability</Link></li>
          </ul>
          <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Shop By Color</li>
            {products.filter((product, index, self) =>
          self.findIndex(p => p.color === product.color) === index)
          .map((product, index) => (
            <li className="category-navigation_item" key={index}>
              <Link to="/">{product.color}</Link></li>
          ))}
          </ul>
          <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Tailored for Your Convenience</li>
            
            {uniqueFeatures.length > 0 ? (
          uniqueFeatures.map((feature, index) => (
            <li  className="category-navigation_item" key={index}>{feature}</li>
          ))
        ) : (
          <li>No features found</li>
        )}  
          </ul>
          <ul className="category-navigation_list shop-by-brand">
            <li title="99" className="category-navigation_title">Shop By Brand</li>
            {products.filter((product, index, self) =>
          self.findIndex(p => p.brandText === product.brandText) === index)
          .map((product, index) => (
            <li className="category-navigation_item" key={index}>
              <Link to="/">{product.brandText}</Link></li>
          ))}
          </ul>
        </section>
        <section className="section">
          <ItemSection group="bestseller" subject="Best-Selling Items" category="kitchen" />
        </section>
        <section className="category-subcategories_list">
          <ul className="category-subcategory">
            {Object.keys(groupedProducts).map((subCategory, index) => (
              <li className="category-subcategory_element" key={index}>
                <Link to="/">
                  {subCategory}
                  <ul>
                    {groupedProducts[subCategory].map((subType, idx) => (
                      <li key={idx}>{subType}</li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default CategoryPage;