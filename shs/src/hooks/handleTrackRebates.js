import { useDispatch, useSelector } from "react-redux";
import {getFromLocalStorage} from "../components/LocalStorage/getFromLocalStorage";
import {setLocalStorage} from "../components/LocalStorage/setLocalStorage";


export const HandleTrackRebates = (item) => {
    const sessionId = useSelector((state) => state.session.sessionId);
    const existingData = getFromLocalStorage("visitedRebates");
    const updatedData = [...existingData, { ...item, session: sessionId }];

    setLocalStorage("visitedRebates", updatedData);
    console.log([item]);
  };