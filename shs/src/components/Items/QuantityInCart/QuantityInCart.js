import React, {useState, useEffect} from "react";
import "./QuantityInCart.scss";

const QuantityInCart = () => {
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        } 
    }

return (
   <div className="quantity_selector">
    <button className="quantity_decrease" onClick={handleDecrease}>-</button>
    <input type="text" value={quantity} className="quantity_input" placeholder={quantity} />
    <button className="quantity_increase" onClick={handleIncrease}>+</button>

   </div>
)
}

export default QuantityInCart;