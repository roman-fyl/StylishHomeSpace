import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setZipCode, setError } from "../../../store/actions/locationActions";
import { setLocalStorage } from "../../LocalStorage/SetLocaStorage";
import { getFromLocalStorage } from "../../LocalStorage/getFromLocalStorage";

const SetLocationManually = ({onClose}) => {
  const dispatch = useDispatch();
  const [inputZipCode, setInputZipCode] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);

  useEffect(() => {
    const storedZipCode = getFromLocalStorage("Customer_zipCode");
    if (storedZipCode) {
      setInputZipCode(storedZipCode);
      setIsInputVisible(false);
    }
  }, []);

  const handleZipCodeChange = (e) => {
    setInputZipCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputZipCode.length === 5) {
      dispatch(setZipCode(inputZipCode));
      setLocalStorage("Customer_zipCode", inputZipCode);
      setIsInputVisible(false);
      // console.log(inputZipCode);
      if (onClose) onClose();
    } else {
      dispatch(setError(""));
      setInputZipCode('');
    }
  };

  const handleClickInside = (e) => {
    e.stopPropagation();
  };

  return (
    <form onSubmit={handleSubmit} className="header_location_form" onClick={handleClickInside}>
      <label>
        <input
          type="text"
          value={inputZipCode} 
          onChange={handleZipCodeChange}
          placeholder="Enter Zip"
        />
      </label>
    </form>
  );
};

export default SetLocationManually;
