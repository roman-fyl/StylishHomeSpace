import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import data from "../../assets/db/items.json";
import "./SimilarItems.scss";

const SimilarItems = ({
  group = null,
  brand = null,
  category = null,
  subCategory = null,
  subType = null,
}) => {
  const [products, setProducts] = useState([]);
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const visitedItems = useSelector((state) => state.visited.items || []);

  useEffect(() => {
    setProducts(data);
  }, []);

  const finalSelectedItems = useMemo(() => {
    if (visitedItems.length === 0) return [];
    
    const uniqueBrands = Array.from(new Set(visitedItems.map((p) => p.brandText)));
    const uniqueCategories = Array.from(new Set(visitedItems.map((p) => p.category)));
    const uniqueSubCategories = Array.from(new Set(visitedItems.map((p) => p.subCategory)));

    const generatedItems = Array.from({ length: visitedItems.length * 4 }, () => ({
      randomBrand: uniqueBrands[Math.floor(Math.random() * uniqueBrands.length)] || null,
      randomCategory: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)] || null,
      randomSubCategory: uniqueSubCategories[Math.floor(Math.random() * uniqueSubCategories.length)] || null,
    }));

    const uniqueSet = new Set(generatedItems.map(JSON.stringify));
    return Array.from(uniqueSet).map(JSON.parse);
  }, [visitedItems]);

  const excludeDuplicates = (array) => {
    const uniqueSet = new Set();
    return array.filter((item) => {
      const key = JSON.stringify(item);
      if (!uniqueSet.has(key)) {
        uniqueSet.add(key);
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    if (finalSelectedItems.length === 0 || products.length === 0) {
      setUpdatedProducts([]);
      return;
    }

    const matchedProducts = finalSelectedItems.flatMap((item) =>
      products.filter(
        (product) =>
          product.brandText === item.randomBrand &&
          product.category === item.randomCategory &&
          product.subCategory === item.randomSubCategory
      )
    );

    const existingData = getFromLocalStorage("matchedProducts");

    const updatedData = excludeDuplicates(
      Array.isArray(existingData) ? [...existingData, ...matchedProducts] : matchedProducts
    );

    setLocalStorage("matchedProducts", updatedData);

    setUpdatedProducts(updatedData);
  }, [finalSelectedItems, products]);

  return (
    <div className="similar-items">
      {updatedProducts.length > 0 ? (
        updatedProducts.map((product) => (
          <div className="similar-item" key={product.idN}>
            <p>
              <strong>idN:</strong> {product.idN} <br />
              <strong>Brand:</strong> {product.brandText} <br />
              <strong>Category:</strong> {product.category} <br />
              <strong>Sub-Category:</strong> {product.subCategory} <br />
              <strong>Type:</strong> {product.subType} <br />
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
        ))
      ) : (
        <p>No similar items found.</p>
      )}
    </div>
  );
};

export default SimilarItems;
