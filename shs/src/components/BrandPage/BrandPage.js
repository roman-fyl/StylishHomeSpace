import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout";
import brandLogo from "../../assets/db/images/brand-logos/ge_white.png";
import gastop from "../../assets/db/images/items/GE/categories/gastop.png";
import laundryPair from "../../assets/db/images/items/GE/categories/laundry-pair.png";
import range from "../../assets/db/images/items/GE/categories/range.png";
import refrigerator from "../../assets/db/images/items/GE/categories/refrigerator.png";
import wallOven from "../../assets/db/images/items/GE/categories/wall-oven.png";
import productData from "../../assets/db/items.json";
import "./BrandPage.scss";

const BrandPage = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  
  
  useEffect(() => {
    console.log(productData);

    const fetchedProducts = productData.filter(product => product.brandText.toLowerCase() === brandName.toLowerCase());
    console.log("Fetched Products: ", fetchedProducts);
    const fetchedLogo = productData.filter(product => product.brandLogo === brandLogo);
    console.log("Fetched Products: ", fetchedLogo);
    
    if (fetchedProducts.length > 0) {
      setProducts(fetchedProducts);
    } else {
      setError("Products not found");
    }

    if (brandName) {
      document.title = brandName.toUpperCase();
    }
  }, [brandName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const showItems = () => {
    setDisplayedItemCount((prevCount) => prevCount + 6);
  };

  const GenerateOldPrice = (price, percentage) => {
    if (typeof price !== "number" || price < 0) return 0; // Prevent negative prices
    return price * (1 + percentage / 100);
  };

  // Assuming you want to filter by a specific group (e.g., "newArrival")

  const filteredNewProducts = products.filter(item => item.group === "newArrival");
  const filteredBestsellerProducts = products.filter(item => item.group === "bestseller");


  return (
    <Layout>
      <div className="container">
        <div className="brand-page_content">
          <div className="brand-page_main-logo">
          <img src={products[0]?.brandLogo} alt={`${products[0]?.brandText || 'Brand'} logo`} />
          </div>
          <section className="section brand-page_categories">
            <ul className="brand-page_list">
              <li className="brand-page_category"><Link to="/"><img src={gastop} alt="Gastop" /></Link></li>
              <li className="brand-page_category"><Link to="/"><img src={laundryPair} alt="Laundry Pair" /></Link></li>
              <li className="brand-page_category"><Link to="/"><img src={range} alt="Range" /></Link></li>
              <li className="brand-page_category"><Link to="/"><img src={refrigerator} alt="Refrigerator" /></Link></li>
              <li className="brand-page_category"><Link to="/"><img src={wallOven} alt="Wall Oven" /></Link></li>
            </ul>
            <div className="items_more"><Link to="/shop-all">Shop All</Link></div>
          </section>
          <section className="section">
            <div className="newArrivals_main">
              <h2>Best-Selling Products</h2> {/* Update the title to reflect the brand */}
              <ul className="card_items">
                {filteredBestsellerProducts.slice(0, displayedItemCount).map((item, index) => (
                  <li className="card_item" data-id={index + 1} key={item.SKU}>
                    <Link to={`/item/${item.SKU}.html`}>
                      <span className="item_image">
                        <img src={item.imageSlider[0]?.imageSliderLink} alt={`${item.description.short || 'product'}`} />
                      </span>
                      <div className="item_description">
                        <span className="item_brand-logo">
                          <img src={item.brandLogo} alt={item.brand} />
                        </span>
                        <h3 className="item_title">{item.description.short}</h3>
                        <span className="item_rating">
                          <span className="item_rate">{item.rate}</span>
                          <span className="item_rate">{item.group}</span>
                          <span className="item_rate">{item.brandText}</span>
                        </span>
                        <span className="item_pricing">
                          <span className="item_old-price">
                            <del>${GenerateOldPrice(parseFloat(item.price), 12.319).toFixed(2)}</del>
                          </span>
                          <span className="item_price">${item.price}</span>
                        </span>
                      </div>
                    </Link>
                    <div className="item_actions">
                      <a href="#" className="item_add-to-cart">Add to Cart</a>
                      <a href="#" className="item_quick-buy">Buy</a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="items_more"><span onClick={showItems}>Explore More</span></div>
            </div>
          </section>
          <section className="section">
            <div className="newArrivals_main">
              <h2>New Arrivals</h2> {/* Update the title to reflect the brand */}
              <ul className="card_items">
                {filteredNewProducts.slice(0, displayedItemCount).map((item, index) => (
                  <li className="card_item" data-id={index + 1} key={item.SKU}>
                    <Link to={`/item/${item.SKU}.html`}>
                      <span className="item_image">
                        <img src={item.imageSlider[0]?.imageSliderLink} alt={`${item.description.short || 'product'}`} />
                      </span>
                      <div className="item_description">
                        <span className="item_brand-logo">
                          <img src={item.brandLogo} alt={item.brand} />
                        </span>
                        <h3 className="item_title">{item.description.short}</h3>
                        <span className="item_rating">
                          <span className="item_rate">{item.rate}</span>
                          <span className="item_rate">{item.group}</span>
                          <span className="item_rate">{item.brandText}</span>
                        </span>
                        <span className="item_pricing">
                          <span className="item_old-price">
                            <del>${GenerateOldPrice(parseFloat(item.price), 12.319).toFixed(2)}</del>
                          </span>
                          <span className="item_price">${item.price}</span>
                        </span>
                      </div>
                    </Link>
                    <div className="item_actions">
                      <a href="#" className="item_add-to-cart">Add to Cart</a>
                      <a href="#" className="item_quick-buy">Buy</a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="items_more"><span onClick={showItems}>Explore More</span></div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default BrandPage;
