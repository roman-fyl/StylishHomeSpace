  import { useDispatch, useSelector } from "react-redux";
  import { addVisitedItem } from "../store/actions/visitedActions";
  import { addWishListItem, removeFromWishList } from "../store/actions/wishListActions";

  import { getFromLocalStorage } from "../components/LocalStorage/getFromLocalStorage";
  import { setLocalStorage } from "../components/LocalStorage/setLocalStorage";

  import useAddToCart from "./useAddToCart";

  const useItemActions = (item) => {
    const dispatch = useDispatch();
    const sessionId = useSelector((state) => state.session.sessionId);
    const handleAddToCart = useAddToCart();


    
    const handleTrackItems = () => {
      const existingData = getFromLocalStorage("visitedItems") || [];
      const alreadyVisited = existingData.some(
        (visitedItem) => visitedItem.sku === item.sku
      );

      if (!alreadyVisited) {
        const itemWithSession = { ...item, session: sessionId };
        dispatch(addVisitedItem(itemWithSession));
        console.log("Tracked item added:", itemWithSession);
      } else {
        console.log("Item already tracked:", item);
      }
    };

    const handleAddToWishlist = () => {
      const wishlistItems = getFromLocalStorage("wishListItems") || [];
      const alreadyInWishlist = wishlistItems.some(
        (wishlistItem) => wishlistItem.sku === item.sku
      );
    
      let updatedWishlist;
      if (!alreadyInWishlist) {
        updatedWishlist = [...wishlistItems, item];
        dispatch(addWishListItem(item)); // Dispatch action
      } else {
        updatedWishlist = wishlistItems.filter(
          (wishlistItem) => wishlistItem.sku !== item.sku
        );
        dispatch(removeFromWishList(item.sku)); // Dispatch action
      }
    
      setLocalStorage("wishListItems", updatedWishlist);
      return updatedWishlist;
    };

    return {
      handleTrackItems,
      handleAddToWishlist,
      handleAddToCart,
    };
  };

  export default useItemActions;

