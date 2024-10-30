import React from "react";
import "./QuantityInCart.scss";

const QuantityInCart = ({ quantity, onQuantityChange }) => {
    const handleIncrease = () => {
        if (onQuantityChange) {
            onQuantityChange(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1 && onQuantityChange) {
            onQuantityChange(quantity - 1);
        }
    };

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        if (onQuantityChange) {
            onQuantityChange(value > 0 ? value : 1); // Ensure at least 1
        }
    };

    return (
        <div className="quantity_selector">
            <button className="quantity_decrease" onClick={handleDecrease}>-</button>
            <input 
                type="number" // Use number type for input
                value={quantity} 
                className="quantity_input" 
                onChange={handleInputChange} 
            />
            <button className="quantity_increase" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityInCart;
