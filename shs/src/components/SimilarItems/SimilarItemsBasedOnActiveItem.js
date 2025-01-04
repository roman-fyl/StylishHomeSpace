import React, { useState, useEffect, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import ItemCard from "../../hooks/itemCard";
import ItemSection from "../../components/ItemSection/ItemSection";
import { excludeDuplicates } from "../../hooks/excludeDuplicates";
import data from "../../assets/db/items.json";
import "./SimilarItems.scss";

const SimilarItemsBasedOnActiveItem = memo(({ product }) => {
  // console.log("Active product:", product);

  const [updatedProducts, setUpdatedProducts] = useState([]);
  const visitedItems = useSelector((state) => state.visited.items || []);
  const cart = useSelector((state) => state.cart || {});
  const cartItems = cart.items || [];

  const minPriceRange = useMemo(() => (product.price * 0.6).toFixed(2), [product.price]);
  const maxPriceRange = useMemo(() => (product.price * 1.4).toFixed(2), [product.price]);

  // console.log("Price range:", minPriceRange, maxPriceRange);

  const generateCombinations = () => {
    const uniqueBrands = Array.from(new Set(visitedItems.map((item) => item.brandText)));
    const uniqueCategories = Array.from(new Set(visitedItems.map((item) => item.category)));
    const uniqueSubCategories = Array.from(new Set(visitedItems.map((item) => item.subCategory)));

    const combinations = [];

    combinations.push({
      brandText: product.brandText,
      category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
      subCategory: uniqueSubCategories[Math.floor(Math.random() * uniqueSubCategories.length)],
    });

    combinations.push({
      brandText: product.brandText,
      category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
      subCategory: null,
    });

    combinations.push({
      brandText: product.brandText,
      category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
      subCategory: uniqueSubCategories[Math.floor(Math.random() * uniqueSubCategories.length)],
    });

    combinations.push({
      brandText: uniqueBrands[Math.floor(Math.random() * uniqueBrands.length)],
      category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
      subCategory: uniqueSubCategories[Math.floor(Math.random() * uniqueSubCategories.length)],
    });

    combinations.push({
      brandText: uniqueBrands[Math.floor(Math.random() * uniqueBrands.length)],
      category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
      subCategory: null,
    });

    combinations.push({
      brandText: uniqueBrands[Math.floor(Math.random() * uniqueBrands.length)],
      category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
      subCategory: uniqueSubCategories[Math.floor(Math.random() * uniqueSubCategories.length)],
    });

    return combinations;
  };

  const similarItems = useMemo(() => {
    if (!product) return [];

    const { brandText, category, subCategory, price } = product;
    const priceRange = {
      min: (parseFloat(price) * 0.6).toFixed(2),
      max: (parseFloat(price) * 1.4).toFixed(2),
    };

    const combinations = generateCombinations();

    const filteredItems = combinations.flatMap(({ brandText, category, subCategory }) => {
      return data.filter((item) => {
        const itemPrice = parseFloat(item.price);
        const isBrandMatch = brandText ? item.brandText === brandText : true;
        const isCategoryMatch = category ? item.category === category : true;
        const isSubCategoryMatch = subCategory ? item.subCategory === subCategory : true;

        return (
          isBrandMatch &&
          isCategoryMatch &&
          isSubCategoryMatch &&
          itemPrice >= priceRange.min &&
          itemPrice <= priceRange.max &&
          !cartItems.some((cartItem) => cartItem.sku === item.sku) && 
          !visitedItems.some((visitedItem) => visitedItem.sku === item.sku) &&
          item.sku !== product.sku 
        );
      });
    });

    // console.log("Filtered items:", filteredItems);

    const uniqueItems = excludeDuplicates(filteredItems);
    return uniqueItems.slice(0, 6); 
  }, [product, visitedItems, cartItems, minPriceRange, maxPriceRange]);

  useEffect(() => {
    if (similarItems.length > 0) {
      const existingData = getFromLocalStorage("matchedProduct") || [];
      const updatedData = excludeDuplicates([...existingData, ...similarItems]);

      // console.log("Saving data to localStorage:", updatedData);
      setLocalStorage("matchedProduct", updatedData);
      setUpdatedProducts(updatedData);
    }
  }, [similarItems]);

  // console.log("Updated products:", updatedProducts);

  return (
    <div className="similar-items-container">
      <h2>You may also like</h2>
      <div className="card_items">
        {updatedProducts.length > 0 ? (
          updatedProducts
            .sort(() => Math.random() - 0.5)
            .slice(0, 6)
            .map((item) => <ItemCard key={item.sku} item={item} />)
        ) : (
          <ItemSection group="bestseller"/>
        )}
      </div>
    </div>
  );
});

export default SimilarItemsBasedOnActiveItem;
