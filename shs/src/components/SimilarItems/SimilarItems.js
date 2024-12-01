import React, { useState, useEffect, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import ItemCard from "../../hooks/itemCard";
import ItemSection from "../../components/HomePage/ItemSection/ItemSection";
import { excludeDuplicates } from "../../hooks/excludeDuplicates";
import data from "../../assets/db/items.json";
import "./SimilarItems.scss";

const SimilarItems = memo(({ product }) => {
  const [products, setProducts] = useState([]);
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const visitedItems = useSelector((state) => state.visited.items || []);
  const [displayedItemCount, setDisplayedItemCount] = useState(3);
  const cart = useSelector((state) => state.cart || {});
  const cartItems = cart.items || [];

  useEffect(() => {
    setProducts(data);
  }, []);

  const similarItems = useMemo(() => {
    if (!product) return [];

    const { brandText, category, subCategory, idN, price } = product;

    const filteredProducts = products.filter(
      (item) =>
        item.brandText === brandText &&
        item.category === category &&
        item.subCategory === subCategory &&
        item.idN !== idN
    );

    const priceRange = {
      min: (parseFloat(price) * 0.6).toFixed(2),
      max: (parseFloat(price) * 1.4).toFixed(2),
    };

    const filteredByPrice = filteredProducts.filter((item) => {
      const itemPrice = parseFloat(item.price);
      return itemPrice >= priceRange.min && itemPrice <= priceRange.max;
    });

    const filteredByCart = filteredByPrice.filter(
      (item) => !cartItems.some((cartItem) => cartItem.sku === item.sku)
    );

    const existingData = getFromLocalStorage("matchedProducts");
    const updatedData = excludeDuplicates(
      Array.isArray(existingData) ? [...existingData, ...filteredByCart] : filteredByCart
    );

    setLocalStorage("matchedProducts", updatedData);
    return updatedData;
  }, [product, products, cartItems]);


  const uniquePriceRange = useMemo(() => {
    if (visitedItems.length === 0) return 0;
    return (
      visitedItems
        .map((product) => Number(product.price))
        .reduce((sum, price) => sum + price, 0) / visitedItems.length + 1
    ).toFixed(2);
  }, [visitedItems]);

  const minUniquePriceRange = (uniquePriceRange * 0.6).toFixed(2);
  const maxUniquePriceRange = (uniquePriceRange * 1.4).toFixed(2);

  const finalSelectedItems = useMemo(() => {
    if (visitedItems.length === 0) return [];

    const uniqueBrands = Array.from(new Set(visitedItems.map((p) => p.brandText)));
    const uniqueCategories = Array.from(new Set(visitedItems.map((p) => p.category)));
    const uniqueSubCategories = Array.from(new Set(visitedItems.map((p) => p.subCategory)));
    const uniqueIdNs = Array.from(new Set(visitedItems.map((p) => p.idN)));

    const generatedItems = Array.from(
      { length: visitedItems.length * visitedItems.length },
      () => ({
        randomBrand: uniqueBrands[Math.floor(Math.random() * uniqueBrands.length)] || null,
        randomCategory:
          uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)] || null,
        randomSubCategory:
          uniqueSubCategories[Math.floor(Math.random() * uniqueSubCategories.length)] || null,
        randomIdN: uniqueIdNs[Math.floor(Math.random() * uniqueIdNs.length)] || null,
      })
    );

    const uniqueSet = new Set(generatedItems.map(JSON.stringify));
    return Array.from(uniqueSet).map(JSON.parse);
  }, [visitedItems]);

  useEffect(() => {
    setUpdatedProducts(similarItems);
  }, [similarItems]);

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
          product.subCategory === item.randomSubCategory &&
          product.idN === item.randomIdN
      )
    );

    const filteredByPrice = matchedProducts.filter((product) => {
      const price = parseFloat(product.price);
      return price >= minUniquePriceRange && price <= maxUniquePriceRange;
    });

    const filteredByCart = filteredByPrice.filter(
      (product) => !cartItems.some((cartItem) => cartItem.sku === product.sku)
    );

    const existingData = getFromLocalStorage("matchedProducts");

    const updatedData = excludeDuplicates(
      Array.isArray(existingData) ? [...existingData, ...filteredByCart] : filteredByCart
    );

    setLocalStorage("matchedProducts", updatedData);
    setUpdatedProducts(updatedData);
  }, [finalSelectedItems, products, minUniquePriceRange, maxUniquePriceRange]);

  return (
    <div>
        <h2>You may also like</h2>
      <div className="card_items">
      {updatedProducts.length > 3 ? (
        updatedProducts
          .sort(() => Math.random() - 0.5) 
          .slice(0, displayedItemCount) 
          .map((item) => <ItemCard key={item.sku} item={item} />)
      ) : (
        <ItemSection group="bestseller"/>
      )}
    </div>
    </div>
  );
});

export default SimilarItems;
