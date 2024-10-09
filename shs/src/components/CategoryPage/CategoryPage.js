import React, {useEffect, useState} from "react";
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
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        document.title = 'CATEGORY';
        const fetchedProducts = data.filter(product => 
          product.department.toLowerCase() === categoryName.toLowerCase()
        )
    
        if (fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
          setError(null);
        } else {
          setProducts([]);
          setError("Products not found");
        }
        console.Console.og(fetchedProducts)
      },[categoryName]);

return (
     <div className="container">
    <div className="category-page_content">
   <div className="category-header_block">
    <CategorySlider />
 <div>
  <h2>Popular Categories</h2>
 <ul className="category-header_popular">
      <li className="category-header_popular_item"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={laundryPair} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={range} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={refrigerator} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={wallOven} alt="image"></img></Link></li>
      <li className="category-header_popular_item"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
   </ul>
 </div>
   </div>
   <section className="section category-content_categories">
            <ul className="category-content_list">
            <li className="category-content_category"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={laundryPair} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={range} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={refrigerator} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={wallOven} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
            <li className="category-content_category"><Link to="/"><img src={gastop} alt="image"></img></Link></li>
            </ul>
            <div className="items_more"><a href="#">Shop All</a></div>
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
        <ItemSection category="bestseller" subject="Best-Selling Items" department="Home" />
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