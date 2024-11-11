import React, { useState, useEffect } from "react";

const QuantityItems = ({ quantity, onQuantityChange }) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);

  useEffect(() => {
    setInputQuantity(quantity);
  }, [quantity]);

  const handleIncrease = () => {
    const newQuantity = inputQuantity + 1;
    setInputQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (inputQuantity > 1) {
      const newQuantity = inputQuantity - 1;
      setInputQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setInputQuantity(value);
      onQuantityChange(value);
    }
  };

  return (
    <div className="quantity_selector">
      <button className="quantity_decrease" onClick={handleDecrease}>-</button>
      <input
        type="number"
        value={inputQuantity}
        className="quantity_input"
        onChange={handleInputChange}
      />
      <button className="quantity_increase" onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantityItems;
