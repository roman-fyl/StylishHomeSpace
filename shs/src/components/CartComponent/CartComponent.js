import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { removeFromCart, addToCart } from '../../store/actions/cartActions';
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import QuantityInCart from "../Items/QuantityInCart/QuantityInCart";

const CartComponent = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        let sessionId = queryParams.get('session');

        if (!sessionId) {
            sessionId = getFromLocalStorage('abnd-session') || Date.now();
            setLocalStorage('abnd-session', sessionId);
            queryParams.set('session', sessionId);
            navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
        }
        setSession(sessionId);
    }, [location, navigate]);

    useEffect(() => {
        const initialQuantities = {};
        cartItems.forEach(item => {
            initialQuantities[item.id] = item.quantity;
        });
        setQuantities(initialQuantities);
    }, [cartItems]);

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        console.log("Item ID:", itemId, "New Quantity:", newQuantity);
        setQuantities(prev => ({
            ...prev,
            [itemId]: newQuantity 
        }));
        
        const updatedItem = cartItems.find(item => item.id === itemId);
        if (updatedItem) {
            dispatch(addToCart({ ...updatedItem, quantity: newQuantity }, session));
        }
    };

    return (
        <div className='container'>
            <h2>Your Cart (Session ID: {session})</h2>
            {cartItems.length ? (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <span>{item.name} - ${item.price}</span>
                        <QuantityInCart 
                            quantity={quantities[item.id] || item.quantity}
                            onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)} 
                        />
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No items in your cart.</p>
            )}
        </div>
    );
};

export default CartComponent;
