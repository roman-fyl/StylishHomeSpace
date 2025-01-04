
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/actions/cartActions"; 
import { updateLocalStorage } from "../components/LocalStorage/updateLocalStorage"; 
import { getSessionNumber } from "../components/Sessions/getSessionNumber"; 

const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const sessionNumber = getSessionNumber();

    const itemToAdd = {
      ...item,
      quantity: 1,
      session: sessionNumber,
      payment: "Pay in Full"
    };
      
    
    updateLocalStorage('cartItems', itemToAdd);
    dispatch(addToCart(itemToAdd));

    navigate(`/cart?session=${sessionNumber}`);
  };

  return handleAddToCart;
};

export default useAddToCart;
