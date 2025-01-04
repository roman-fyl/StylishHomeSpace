import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";

import "./DashBoard.scss";

const EditRebate = () => {
  const { idN } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [rebate, setRebate] = useState({});
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
  const [rebateFound, setRebateFound] = useState(true);

  useEffect(() => {
    const allRebates = getFromLocalStorage("admin-rebates");
    const rebateData = allRebates.find((item) => item.idN === idN);
    setCategories(getFromLocalStorage("admin-categories") || []);
      setSubCategories(getFromLocalStorage("admin-subCategories") || []);
    
    if (rebateData) {
      setRebate({ ...rebateData, validregions: rebateData.validregions || [] });
    } else {
      setRebateFound(false);
    }
    console.log(rebateData);
  }, [idN]);

    // useEffect(() => {
    //   setCategories(getFromLocalStorage("admin-categories") || []);
    //   setSubCategories(getFromLocalStorage("admin-subCategories") || []);
    // }, []);

  const handleSave = () => {
    const allRebates = getFromLocalStorage("admin-rebates");
    const updatedRebates = allRebates.map((item) =>
      item.idN === rebate.idN ? rebate : item
    );
    setLocalStorage("admin-rebates", updatedRebates);
    navigate("/dashboard/rebates");
    console.log(updatedRebates);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const allProducts = getFromLocalStorage("admin-rebates");
    const foundRebate = allProducts.find((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    if (foundRebate) {
      setRebate(foundRebate);
      setRebateFound(true);
      setQuery("");
    } else {
      setRebateFound(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRebate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleItemChange = (index, value) => {
  setRebate((prev) => {
    const updatedItems = [...prev.items];
    updatedItems[index] = value;
    return {...prev, items: updatedItems}
  })
}

const handleAddItem = () => {
  setRebate((prev) => ({...prev, items: [...(prev.items || []), ""]}))
}

const handleRemoveItem = (index) => {
  
  setRebate((prev) => {
    const updatedItems = [...prev.items];
    updatedItems.splice(index, 1);
    return {...prev, items: updatedItems}
  })

}

const handleAddRegion = () => {
  setRebate((prev) => ({...prev, validregions: [...(prev.validregions || []), ""]}))
}

const handleRemoveRegion = (index) => {
  setRebate((prev) => {
    const updatedRegions = [...prev.validregions];
    updatedRegions.splice(index, 1)
    return {...prev, validregions: updatedRegions}
  })
}

  return (
    <div className="admin_content">
      {!rebateFound && (
        <form onSubmit={handleSubmitSearch}>
          <label htmlFor="search">
            Search for product:
            <input
              type="text"
              id="search"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search for products..."
            />
          </label>
          <button type="submit">Search</button>
        </form>
      )}

      {rebateFound && rebate && (
        <>
          <h1>Edit: {idN}</h1>
          <form>

          <label>
              Category:
              <select
                name="category"
                value={rebate.category || ""}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Subcategory:
              <select
                name="subCategory"
                value={rebate.subCategory || ""}
                onChange={handleChange}
              >
                {subCategories.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={rebate.name || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={rebate.description || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            Rebate Image:
              <input
                type="text"
                name="rebateImage"
                value={rebate.rebateImage || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            Start Date:
              <input
                type="date"
                name="startDate"
                value={rebate.startDate || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            End Date:
              <input
                type="date"
                name="endDate"
                value={rebate.endDate || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            Redemption Instructions:
              <input
                type="text"
                name="redemptionInstructions"
                value={rebate.redemptionInstructions || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            Rebate Value:
              <input
                type="text"
                name="rebateValue"
                value={rebate.rebateValue || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            Rebate Type:
              <input
                type="text"
                name="rebateType"
                value={rebate.rebateType || ""}
                onChange={handleChange}
              />
            </label>
            <label>
            Valid Regions:
             <div className="admin_rebate_items">
              {rebate.validregions && rebate.validregions.map((item, index) => (
                <span key={index} className="admin_rebate_item">
                   <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
              />
              <button type="button" className="cart_button" onClick={() => handleRemoveRegion(index)}>Remove</button>
                </span>
              ))}
              <button type="button" className="cart_button" onClick={handleAddRegion}>Add</button>
             </div>
            </label>
            <label>
              Items SKU:
              <div className="admin_rebate_items">
              {rebate.items && rebate.items.map((item, index) => (
                <span key={index} className="admin_rebate_item">
                  <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
              />
              <button type="button" className="cart_button" onClick={() => handleRemoveItem(index)}>Remove</button>
                </span>
              ))}
              <button type="button" className="cart_button" onClick={handleAddItem}>Add</button>

              </div>
              
            </label>
            <button
              type="button"
              className="cart_button cart_button_success"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="cart_button cart_button_attention"
              onClick={() => navigate("/dashboard/rebates")}
            >
              Cancel
            </button>
          </form>
        </>
      )}

      {!rebateFound && !query && (
        <p>Product not found. Please try searching again.</p>
      )}
    </div>
  );
};

export default EditRebate;
