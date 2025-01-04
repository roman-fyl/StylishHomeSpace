import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import storedData from "../../assets/db/items.json";
import {setLocalStorage} from "../../components/LocalStorage/setLocalStorage";
import {updateLocalStorage} from "../../components/LocalStorage/updateLocalStorage";
import {getFromLocalStorage} from "../../components/LocalStorage/getFromLocalStorage";
import ManageOptions from "./ManageOptions";

import "./DashBoard.scss";
import iconEdit from "../../assets/db/images/admin/icon-edit.png";
import iconTrash from "../../assets/db/images/admin/icon-trash.png";

const ProductsManagement = () => {
const navigate = useNavigate();
const [products, setProducts] = useState([]);
const [editingProduct, setEditingProduct] = useState(null); 

useEffect(() => {
    const storedData = getFromLocalStorage('admin-products');
    if(storedData) {
        setProducts(storedData);
        setLocalStorage('admin-products', storedData);
    }
}, [])

const handleEditClick = (idN) => {
    const storedData = getFromLocalStorage('admin-products');
    const productData = storedData.find((item) => item.idN = idN)
    if(productData) {
        setEditingProduct(productData)
        console.log(productData)
        navigate(`/dashboard/edit-item/${idN}`);
    }
}

  useEffect(() => {
    document.title = 'Products Management';
  }, []);

  return (
    <div className="admin_content">
      <h1>Welcome to Products</h1>
      <ManageOptions />
      <ul>
      <li className="">
          <span className="admin_header">Index</span>
          <span className="admin_header">idN</span>
          <span className="admin_header">sku</span>
          <span className="admin_header">Category</span>
          <span className="admin_header">SubCategory</span>
          <span className="admin_header">SubType</span>
          <span className="admin_header">Color</span>
          <span className="admin_header">Title</span>
          <span className="admin_header">Price</span>
          <span className="admin_header">Quantity</span>
          <span className="admin_header">Available</span>

        </li>
        {products ? (
            products.map((item, index) => (
                <li key={item.idN} data-id={index + 1}>
                    <span>{index + 1}</span>
                    <span>{item.idN}</span>
                    <span>{item.sku}</span>
                    <span>{item.category}</span>
                    <span>{item.subCategory}</span>
                    <span>{item.subType}</span>
                    <span>{item.color}</span>
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                    <span>{item.quantity ? item.quantity : 1 }</span>
                    <span>{item.quantityAvailable ? item.quantityAvailable : 1 }</span>
                    <span className="admin_icons"><img src={iconEdit} onClick={() => handleEditClick(item.idN)}></img><img src={iconTrash}></img></span></li>
            ))
        ) :  <p>Loading...</p>}
      </ul>
    </div>
  );
};

export default ProductsManagement;
