import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import storedData from "../../assets/db/rebates.json";
import {setLocalStorage} from "../../components/LocalStorage/setLocalStorage";
import {updateLocalStorage} from "../../components/LocalStorage/updateLocalStorage";
import {getFromLocalStorage} from "../../components/LocalStorage/getFromLocalStorage";
// import ManageOptions from "./ManageOptions";

import "./DashBoard.scss";
import iconEdit from "../../assets/db/images/admin/icon-edit.png";
import iconTrash from "../../assets/db/images/admin/icon-trash.png";

const RebatesManagement = () => {
const navigate = useNavigate();
const [rebates, setRebates] = useState([]);
const [editingProduct, setEditingProduct] = useState(null); 

useEffect(() => {
    // const storedData = getFromLocalStorage('admin-rebates');
    if(storedData) {
        setRebates(storedData);
        setLocalStorage('admin-rebates', storedData);
        // console.log(storedData)
    }
}, [])

const handleEditClick = (idN) => {
    const storedData = getFromLocalStorage('admin-rebates');
    const productData = storedData.find((item) => item.idN = idN)
    if(productData) {
        setEditingProduct(productData)
        // console.log(productData)
        navigate(`/dashboard/edit-rebate/${idN}`);
    }
}

  useEffect(() => {
    document.title = 'Products Management';
  }, []);

  return (
    <div className="admin_content">
      <h1>Welcome to Rebates</h1>
      {/* <ManageOptions /> */}
      <ul>
      <li className="">
          <span className="admin_header">Index</span>
          <span className="admin_header">idN</span>
          <span className="admin_header">Category</span>
          <span className="admin_header">SubCategory</span>
          <span className="admin_header">Rebate Value</span>
          <span className="admin_header">Rebate Type</span>
          <span className="admin_header">Start Date</span>
          <span className="admin_header">End Date</span>
          <span className="admin_header">Name</span>

        </li>
        {rebates ? (
            rebates.map((item, index) => (
                <li key={item.idN} data-id={index + 1}>
                    <span>{index + 1}</span>
                    <span>{item.idN}</span>
                    <span>{item.category}</span>
                    <span>{item.subCategory}</span>
                    <span>{item.rebateValue}</span>
                    <span>{item.rebateType}</span>
                    <span>{item.startDate.slice(0,10)}</span>
                    <span>{item.endDate.slice(0,10)}</span>
                    <span>{item.name}</span>

                    <span className="admin_icons"><img src={iconEdit} onClick={() => handleEditClick(item.idN)}></img><img src={iconTrash}></img></span></li>
            ))
        ) :  <p>Loading...</p>}
      </ul>
    </div>
  );
};

export default RebatesManagement;
