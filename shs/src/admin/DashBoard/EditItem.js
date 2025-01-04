import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";

import "./DashBoard.scss";

const EditItem = () => {
  const { idN } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: "",
    sku: "",
    description: {
      short: "",
      options: [],
      specifications: {},
    },
    imageSlider: [],
    tags: [],
    maintenance: [],
    installation: [],
  });
  const [productFound, setProductFound] = useState(true);

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

  useEffect(() => {
    const allProducts = getFromLocalStorage("admin-products");
    const productData = allProducts.find((item) => item.idN === idN);

    if (productData) {
      setProduct({ ...productData, tags: productData.tags || [] });
      setProductFound(true);
    } else {
      setProductFound(false);
    }
  }, [idN]);

  const handleSave = () => {
    const allProducts = getFromLocalStorage("admin-products");
    const updatedProducts = allProducts.map((item) =>
      item.idN === product.idN ? product : item
    );
    // setLocalStorage("admin-products", updatedProducts);
    // navigate("/dashboard/products");
    console.log(updatedProducts);
  };

  const handleChange = (e, index = null, field = null, meaningIndex = null) => {
    const { name, value } = e.target;
    console.log("Current value:", value);

    const updateNestedArray = (array, idx, fieldKey, fieldValue) => {
      const updatedArray = [...array];
      updatedArray[idx] = { ...updatedArray[idx], [fieldKey]: fieldValue };
      return updatedArray;
    };

    if (name.startsWith("description.")) {
      const key = name.split(".")[1];

      setProduct((prev) => ({
        ...prev,
        description: {
          ...prev.description,
          [key]: value,
        },
      }));
      console.log(key)
    } 
    else if (field === "imageSliderLink" && index !== null) {
      setProduct((prev) => ({
        ...prev,
        imageSlider: updateNestedArray(
          prev.imageSlider,
          index,
          "imageSliderLink",
          value
        ),
      }));
    } else if (field === "Alt" && index !== null) {
      setProduct((prev) => ({
        ...prev,
        imageSlider: updateNestedArray(prev.imageSlider, index, "Alt", value),
      }));
    } else if (field === "case" && index !== null) {
      setProduct((prev) => ({
        ...prev,
        maintenance: updateNestedArray(
          prev.maintenance,
          index,
          "case",
          value
        ),
      }));
    } 
    else if (field === "step" && index !== null) {
      setProduct((prev) => ({
        ...prev,
        installation: updateNestedArray(prev.installation, index, "step", value),
      }));
    } else if (field === "stepExplain" && index !== null) {
      setProduct((prev) => ({
        ...prev,
        installation: updateNestedArray(prev.installation, index, "stepExplain", value),
      }));
    }
    else if (field === "option" && index !== null) {
      setProduct((prev) => ({
        ...prev,
        description: {
          ...prev.description,
          options: updateNestedArray(
            prev.description.options,
            index,
            "option",
            value
          ),
        },
      }));
    } else if (field === "value" && meaningIndex !== null && index !== null) {
      setProduct((prev) => {
        const updatedOptions = [...prev.description.options];
        updatedOptions[index] = {
          ...updatedOptions[index],
          meanings: updateNestedArray(
            updatedOptions[index].meanings,
            meaningIndex,
            "value",
            value
          ),
        };
        return {
          ...prev,
          description: { ...prev.description, options: updatedOptions },
        };
      });
    } else if (field === "meaning" && meaningIndex !== null && index !== null) {
      setProduct((prev) => {
        const updatedOptions = [...prev.description.options];
        updatedOptions[index] = {
          ...updatedOptions[index],
          meanings: updateNestedArray(
            updatedOptions[index].meanings,
            meaningIndex,
            "meaning",
            value
          ),
        };
        return {
          ...prev,
          description: { ...prev.description, options: updatedOptions },
        };
      });
    } 
    else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const allProducts = getFromLocalStorage("admin-products");
    const foundProduct = allProducts.find((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    if (foundProduct) {
      setProduct(foundProduct);
      setProductFound(true);
      setQuery("");
    } else {
      setProductFound(false);
    }
  };

  const addOption = () => {
    const newOption = { option: "", meanings: [] };
    setProduct({
      ...product,
      description: {
        ...product.description,
        options: [...product.description.options, newOption],
      },
    });
  };

  const removeOption = (optionIndex) => {
    const updatedOptions = product.description.options.filter(
      (_, index) => index !== optionIndex
    );
    setProduct({
      ...product,
      description: {
        ...product.description,
        options: updatedOptions,
      },
    });
  };

  const addMeaning = (optionIndex) => {
    const updatedOptions = [...product.description.options];
    updatedOptions[optionIndex].meanings.push({ value: "", meaning: "" });
    setProduct({
      ...product,
      description: {
        ...product.description,
        options: updatedOptions,
      },
    });
  };

  const removeMeaning = (optionIndex, meaningIndex) => {
    const updatedOptions = [...product.description.options];
    updatedOptions[optionIndex].meanings = updatedOptions[
      optionIndex
    ].meanings.filter((_, index) => index !== meaningIndex);
    setProduct({
      ...product,
      description: {
        ...product.description,
        options: updatedOptions,
      },
    });
  };

  const handleSpecificationChange = (e, category, subcategory, key, value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: {
        ...prevProduct.description,
        specifications: {
          ...prevProduct.description.specifications,
          [category]: {
            ...prevProduct.description.specifications[category],
            [subcategory]: {
              ...prevProduct.description.specifications[category][subcategory],
              [key]: value,
            }
          }
        }
      }
    }));
  };
  

  return (
    <div className="admin_content">
      {!productFound && (
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

      {productFound && product && (
        <>
          <h1>Edit: {idN}</h1>
          <form>
            <label>
              Group:
              <select
                name="group"
                value={product.group || ""}
                onChange={handleChange}
              >
                {groups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Category:
              <select
                name="category"
                value={product.category || ""}
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
                value={product.subCategory || ""}
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
              Smart:
              <select
                name="smart"
                value={product.smart || "No"}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              SubType:
              <input
                type="text"
                name="subType"
                value={product.subType || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              SKU:
              <input
                type="text"
                name="sku"
                value={product.sku || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={product.title || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={product.price || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              BrandLogo:
              <input
                type="text"
                name="brandLogo"
                value={product.brandLogo || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              BrandText:
              <input
                type="text"
                name="brandText"
                value={product.brandText || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Dealer Authorization:
              <select
                name="autorizationDealer"
                value={product.autorizationDealer || "No"}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={product.color || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Capacity:
              <input
                type="text"
                name="capacity"
                value={product.capacity || ""}
                onChange={handleChange}
              />
            </label>
            <label>Image Slider</label>
            <div className="admin_sliders">
              {product?.imageSlider?.map((image, index) => (
                <div key={index} className="admin_slider">
                  <span>
                    Image Link:
                    <input
                      type="text"
                      value={image.imageSliderLink || ""}
                      onChange={(e) =>
                        handleChange(e, index, "imageSliderLink")
                      }
                      placeholder="Enter image URL"
                    />
                  </span>
                  <span>
                    Alt Text:
                    <input
                      type="text"
                      value={image.Alt || ""}
                      onChange={(e) => handleChange(e, index, "Alt")}
                      placeholder="Enter alt text"
                    />
                  </span>
                  <button
                    type="button"
                    className="admin_features_button"
                    onClick={() => {
                      const updatedImageSlider = product.imageSlider.filter(
                        (_, i) => i !== index
                      );
                      setProduct({
                        ...product,
                        imageSlider: updatedImageSlider,
                      });
                    }}
                  >
                    Remove Image
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="admin_features_button"
                onClick={() => {
                  setProduct({
                    ...product,
                    imageSlider: [
                      ...product.imageSlider,
                      { imageSliderLink: "", Alt: "" },
                    ],
                  });
                }}
              >
                Add New Image
              </button>
            </div>

            <label>Tags:</label>
            <div className="admin_checkbox_group">
              {tags.map((tag) => (
                <label key={tag} className="admin_checkbox">
                  <input
                    type="checkbox"
                    name={tag}
                    checked={product?.tags?.includes(tag) || false}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedTags = isChecked
                        ? [...(product.tags || []), tag]
                        : (product.tags || []).filter((t) => t !== tag);
                      setProduct({ ...product, tags: updatedTags });
                    }}
                  />
                  {tag}
                </label>
              ))}
            </div>
            <div>
              <label>Description</label>

              <label>
                Short:
                <input
                  type="text"
                  name="description.short"
                  value={product.description.short || ""}
                  onChange={handleChange}
                />
              </label>
              <label>Features</label>
              <button
                type="button"
                className="admin_features_button"
                onClick={addOption}
              >
                Add New 
              </button>
              {product?.description?.options?.map((optionGroup, index) => (
                <div key={index} className="admin_features">
                  <div className="admin_features_section">
                    <span className="admin_features_title">
                      Option:
                      <input
                        type="text"
                        value={optionGroup.option || ""}
                        onChange={(e) => handleChange(e, index, "option")}
                        placeholder="Option name (e.g., Color, Feature)"
                      />
                    </span>
                    <button
                      type="button"
                      className="admin_features_button"
                      onClick={() => removeOption(index)}
                    >
                      Remove Option
                    </button>
                  </div>

                  {optionGroup.meanings.map((meaning, meaningIndex) => (
                    <div key={meaningIndex} className="admin_features_section">
                      <span className="admin_features_title">
                        Feature:
                        <input
                          type="text"
                          value={meaning.value || ""}
                          onChange={(e) =>
                            handleChange(e, index, "value", meaningIndex)
                          }
                          placeholder="Feature (e.g., white, durable)"
                        />
                      </span>
                      <span className="admin_features_title">
                        Meaning:
                        <input
                          type="text"
                          value={meaning.meaning || ""}
                          onChange={(e) =>
                            handleChange(e, index, "meaning", meaningIndex)
                          }
                          placeholder="Meaning (e.g., light color, robust)"
                        />
                      </span>
                      <button
                        type="button"
                        className="admin_features_button"
                        onClick={() => removeMeaning(index, meaningIndex)}
                      >
                        Remove Meaning
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="admin_features_button"
                    onClick={() => addMeaning(index)}
                  >
                    Add Meaning
                  </button>
                </div>
              ))}
            </div>

            <div>
              <label>Specifications:</label>
              <button
                type="button"
                className="admin_features_button"
               
              >
                Add New Specification
              </button>
              {product?.description?.specifications &&
                Object.entries(product.description.specifications).map(
                  ([key, value], index) => (
                    <div key={key} className="admin_features">
                      <div className="admin_features_section">
                        <h4>
                          <input
                            type="text"
                            value={key}
                           
                            placeholder="Specification Key"
                          />
                        </h4>
                        <button
                          type="button"
                          className="admin_features_button"
                          onClick={() =>
                            setProduct((prev) => {
                              const updatedSpecifications = {
                                ...prev.description.specifications,
                              };
                              delete updatedSpecifications[key];
                              return {
                                ...prev,
                                description: {
                                  ...prev.description,
                                  specifications: updatedSpecifications,
                                },
                              };
                            })
                          }
                        >
                          Remove Specification
                        </button>
                      </div>

                      {typeof value === "object" && !Array.isArray(value) ? (
                        Object.entries(value).map(
                          ([nestedKey, nestedValue], nestedIndex) => (
                            <div
                              key={nestedKey}
                              className="admin_features_section"
                            >
                              <input
                                type="text"
                                value={nestedKey}
                               
                                placeholder="Nested Key"
                              />
                              <input
                                type="text"
                                value={nestedValue}
                              
                                placeholder="Nested Value"
                              />
                              <button
                                type="button"
                                className="admin_features_button"
                                onClick={() =>
                                  setProduct((prev) => {
                                    const updatedSpecifications = {
                                      ...prev.description.specifications,
                                    };
                                    const parentKey = Object.keys(
                                      updatedSpecifications
                                    )[index];
                                    const parentObject = {
                                      ...updatedSpecifications[parentKey],
                                    };
                                    delete parentObject[nestedKey];
                                    updatedSpecifications[parentKey] =
                                      parentObject;
                                    return {
                                      ...prev,
                                      description: {
                                        ...prev.description,
                                        specifications: updatedSpecifications,
                                      },
                                    };
                                  })
                                }
                              >
                                Remove Field
                              </button>
                            </div>
                          )
                        )
                      ) : (
                        <input
                          type="text"
                          // value={value}
                          // onChange={(e) =>
                          //   handleChange(e, index, "specificationValue")
                          // }
                          placeholder="Specification Value"
                        />
                      )}

                      <button
                        type="button"
                        className="admin_features_button"
                       
                      >
                        Add Field
                      </button>
                    </div>
                  )
                )}
            </div>

            <label>Maintenance</label>
            <div className="admin_sliders">
              {product?.maintenance?.map((i, index) => (
                <div key={index} className="admin_slider">
                  <span>
                    Case:
                    <input
                      type="text"
                      value={i.case || ""}
                      onChange={(e) => handleChange(e, index, "case")}
                      placeholder="Enter case"
                    />
                  </span>
                  <span>
                    Value:
                    <input
                      type="text"
                      value={i.value || ""}
                      onChange={(e) => handleChange(e, index, "value")}
                      placeholder="Enter value text"
                    />
                  </span>
                  <button
                    type="button"
                    className="admin_features_button"
                    onClick={() => {
                      const updatedMaintenance = product.maintenance.filter(
                        (_, i) => i !== index
                      );
                      setProduct({ ...product, maintenance: updatedMaintenance });
                    }}
                  >
                    Remove Case
                  </button>
                </div>
              ))}
              <button
                type="button" className="admin_features_button"
                onClick={() => {
                  setProduct({
                    ...product,
                    maintenance: [
                      ...product.maintenance,
                      { case: "", value: "" },
                    ],
                  });
                }}
              >
                Add New
              </button>
            </div>
                <label>Installation</label>
            <div className="admin_sliders">
              {product?.installation?.map((i, index) => (
                <div key={index} className="admin_slider">
                  <span>
                    Step:
                    <input
                      type="text"
                      value={i.step || ""}
                      onChange={(e) => handleChange(e, index, "step")}
                      placeholder="Enter Step"
                    />
                  </span>
                  <span>
                    Value:
                    <input
                      type="text"
                      value={i.stepExplain || ""}
                      onChange={(e) => handleChange(e, index, "stepExplain")}
                      placeholder="Enter value text"
                    />
                  </span>
                  <button
                    type="button"
                    className="admin_features_button"
                    onClick={() => {
                      const updatedInstallation = product.installation.filter(
                        (_, i) => i !== index
                      );
                      setProduct({ ...product, installation: updatedInstallation });
                    }}
                  >
                    Remove Step
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="admin_features_button"
                onClick={() => {
                  setProduct({
                    ...product,
                    installation: [
                      ...product.installation,
                      { step: "", stepExplain: "" },
                    ],
                  });
                }}
              >
                Add New Step
              </button>
            </div>


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
              onClick={() => navigate("/dashboard/products")}
            >
              Cancel
            </button>
          </form>
        </>
      )}

      {!productFound && !query && (
        <p>Product not found. Please try searching again.</p>
      )}
    </div>
  );
};

export default EditItem;
