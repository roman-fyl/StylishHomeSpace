import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import { getSessionNumber } from "../Sessions/getSessionNumber";
import { setSessionId} from "../../store/actions/sessionActions";

const lastVisitedItems = () => {

    const sessionId = useSelector((state) => state.session.sessionId)
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { skuText } = useParams();

const fetchedProduct = 

}

export default lastVisitedItems