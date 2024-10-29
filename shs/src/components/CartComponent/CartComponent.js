import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';

const CartComponent = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className='container'>
            <h2>Your Cart</h2>
            {cartItems.length ? (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <span>{item.name} - ${item.price}</span>
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