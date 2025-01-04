import React, { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";

const ManageOptions = () => {
  const [groupInput, setGroupInput] = useState(""); 
  const [categoryInput, setCategoryInput] = useState(""); 
  const [subCategoryInput, setSubCategoryInput] = useState("");
  const [tagInput, setTagInput] = useState('') 

  const [groups, setGroups] = useState([]);       
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]); 
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setGroups(getFromLocalStorage("admin-groups") || []);
    setCategories(getFromLocalStorage("admin-categories") || []);
    setSubCategories(getFromLocalStorage("admin-subCategories") || []);
    setTags(getFromLocalStorage("admin-tags") || []);
  }, []);

  const capitalizeWords = (str) => {
    return str
      .trim()
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleSave = (inputValue, listName, setList, storageKey) => {
    const formattedInput = capitalizeWords(inputValue); 
    if (formattedInput === "" || listName.includes(formattedInput)) return; 

    const updatedList = [...listName, formattedInput]; 
    setList(updatedList); 
    setLocalStorage(storageKey, updatedList); 
  };

  const renderInputForm = (label, inputValue, setInput, listName, setList, storageKey) => (
    <div className="admin_form_input">
      <h3>{label}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Add new ${label.toLowerCase()}...`}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave(inputValue, listName, setList, storageKey);
            setInput(""); 
          }
        }}
      />
      <button
        className="cart_button"
        onClick={() => {
          handleSave(inputValue, listName, setList, storageKey);
          setInput(""); 
        }}
      >
        Save
      </button>
      <ul>
        {listName.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="admin_form_container">
      {renderInputForm("Groups", groupInput, setGroupInput, groups, setGroups, "admin-groups")}
      {renderInputForm("Categories", categoryInput, setCategoryInput, categories, setCategories, "admin-categories")}
      {renderInputForm("Subcategories", subCategoryInput, setSubCategoryInput, subCategories, setSubCategories, "admin-subCategories")}
      {renderInputForm("Tags", tagInput, setTagInput, tags, setTags, "admin-tags")}
    </div>
  );
};

export default ManageOptions;
