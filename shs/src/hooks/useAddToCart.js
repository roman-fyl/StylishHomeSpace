
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
      group: item.group,
      smart: item.smart,
      category: item.category,
      subCategory: item.subCategory,
      subType: item.subType,
      brandLogo: item.brandLogo,
      color: item.color,
      brandText: item.brandText,
      capacity: item.capacity,
      imageSlider: item.imageSlider[0].imageSliderLink,
      imageAlt: item.imageSlider[0].Alt,
      sku: item.sku,
      autorizationDealer: item.autorizationDealer,
      tags: item.tags,
      title: item.title,
      rate: item.rate,
      price: item.price,
      idN: item.idN,
      warranty: item.warranty,
      description: item.description,
      maintenance: item.maintenance,
      installation: item.installation,
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
