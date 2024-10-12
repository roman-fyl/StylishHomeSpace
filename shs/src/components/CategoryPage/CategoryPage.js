import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/db/items.json";


import CategorySlider from "./CategorySlider";
import ItemSection from "../HomePage/ItemSection/ItemSection";


import gastop from "../../assets/db/images/items/GE/categories/gastop.png";
import laundryPair from "../../assets/db/images/items/GE/categories/laundry-pair.png";
import range from "../../assets/db/images/items/GE/categories/range.png";
import refrigerator from "../../assets/db/images/items/GE/categories/refrigerator.png";
import wallOven from "../../assets/db/images/items/GE/categories/wall-oven.png";

import "./CategoryPage.scss";


const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from URL
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Filter products by category
    const filteredProducts = data.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
      setError(null);
    } else {
      setProducts([]);
      setError("No products found for this category.");
    }
  }, [categoryName]);

  const showItems = () => {
    setDisplayedItemCount((prevCount) => prevCount + 6);
  };
  // useEffect(() => {
  //     document.title = 'CATEGORY';
  //     const fetchedProducts = data.filter(product => 
  //       product.department.toLowerCase() === categoryName.toLowerCase()
  //     )

  //     if (fetchedProducts.length > 0) {
  //       setProducts(fetchedProducts);
  //       setError(null);
  //     } else {
  //       setProducts([]);
  //       setError("Products not found");
  //     }
  //     console.Console.og(fetchedProducts)
  //   },[categoryName]);
  console.log(data)


  console.log(products)
  return (
    <div className="container">
      <div className="category-page_content">
        <div className="category-header_block">
          <CategorySlider />
          <div>
  <h2>Most-Visited Categories</h2>
  <ul className="category-content_all_list">
    {products
      .filter((product, index, self) =>
        self.findIndex(p => p.subType === product.subType) === index)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
      .map((product, index) => (
        <li className="category-header_popular_item" key={index}>
          <Link to="/">
            <p>{product.subType}</p>
          </Link>
        </li>
      ))}
  </ul>
</div>

        </div>
        <section className="section category-content_categories">
        <ul className="category-content_all">
          {products.filter((product, index, self) =>
          self.findIndex(p => p.subCategory === product.subCategory) === index)
          .map((product, index) => (
            <li className="category-content_category" key={index}>
              <Link to="/">{product.subCategory}</Link></li>
          ))}
          </ul>
          <div className="items_more"><a href="#">Shop All</a></div>
        </section>
        <section className="section">
          <ItemSection group="newArrival" subject="New Arrivals" category="kitchen" />
        </section>
        <section className="section category-navigation_lists">
          <ul className="category-navigation_list important">
            <li className="category-navigation_item"><Link to="/">In Stock</Link></li>
            <li className="category-navigation_item"><Link to="/">On Sale</Link></li>
            <li className="category-navigation_item"><Link to="/">New Products</Link></li>
            <li className="category-navigation_item"><Link to="/">Best Sellers</Link></li>
            <li className="category-navigation_item"><Link to="/">Limited Availability</Link></li>
          </ul>
          <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Shop By Color</li>
            <li className="category-navigation_item"><Link to="/">black</Link></li>
            <li className="category-navigation_item"><Link to="/">white</Link></li>
            <li className="category-navigation_item"><Link to="/">gray</Link></li>
            <li className="category-navigation_item"><Link to="/">yellow</Link></li>
          </ul>
          <ul className="category-navigation_list">
            <li title="99" className="category-navigation_title">Tailored for Your Convenience</li>
            <li className="category-navigation_item"><Link to="/">Smart</Link></li>
            <li className="category-navigation_item"><Link to="/">Energy Saving</Link></li>
            <li className="category-navigation_item"><Link to="/">Compact size</Link></li>
            <li className="category-navigation_item"><Link to="/"></Link></li>
          </ul>
          <ul className="category-navigation_list shop-by-brand">
            <li title="99" className="category-navigation_title">Shop By Brand</li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
            <li className="category-navigation_item"><Link to="/">Lorem</Link></li>
          </ul>
        </section>
        <section className="section">
          <ItemSection group="bestseller" subject="Best-Selling Items" category="kitchen" />
        </section>
        <section className="category-subcategories_list">
          <ul className="category-subcategory">
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={gastop} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={laundryPair} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={range} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={refrigerator} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={wallOven} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={gastop} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
            <li className="category-subcategory_element">
              <Link to="/">
                <img src={gastop} alt="image"></img>
                <ul>
                  <li>Subcategory 1</li>
                  <li>Subcategory 2</li>
                  <li>Subcategory 3</li>
                  <li>Subcategory 4</li>
                  <li>Subcategory 5</li>
                  <li>Subcategory 6</li>
                  <li>Subcategory 7</li>
                </ul>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default CategoryPage;