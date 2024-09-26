import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {apiKeyLocation} from "../../../store/api/Location";
import {setZipCode, setError} from "../../../store/actions/locationActions";

import {setLocalStorage} from "../../LocalStorage/SetLocaStorage";
import { getFromLocalStorage } from "../../LocalStorage/getFromLocalStorage";

const LocationComponent = () => {
  const dispatch = useDispatch();
  const zipCode = useSelector((state) => state.location.zipCode);
  const error = useSelector((state) => state.location.error);

  useEffect(() => {

    const storedZipCode = getFromLocalStorage("Customer_zipCode");
    if (storedZipCode) {
      dispatch(setZipCode(storedZipCode));
      return
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKeyLocation}`;

          axios
            .get(geocodeUrl)
            .then((response) => {
              if (response.data && response.data.results.length > 0) {
                const addressComponents = response.data.results[0].address_components;
                const zip = addressComponents.find((component) =>
                  component.types.includes("postal_code")
                );

                console.log("ZIP Component: ", zip);

                if (zip) {
                  dispatch(setZipCode(zip.long_name));
                } else {
                  dispatch(setError("ZIP code not found."));
                }
              } else {
                dispatch(setError("No results found."));
              }
            })
            .catch((err) => {
              dispatch(setError("Error with reverse geocoding: " + err.message));
            });
        },
        (err) => {
          dispatch(setError(err.message));
        }
      );
    } else {
      dispatch(setError("Geolocation is not supported by this browser."));
    }
  }, [dispatch]);

  console.log(zipCode);

  useEffect(() => {
    if (zipCode) {
      setLocalStorage("Customer_zipCode", zipCode);
    }
  }, [zipCode]);

  return (
<span>
{error ? (
        <p>Error: {error}</p>
      ) : zipCode ? (
        <p>{zipCode}</p>
      ) : (
        <p className="header_location_error">Update</p>
      )}
</span>
  );
};

export default LocationComponent;