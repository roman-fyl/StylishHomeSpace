import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";

import QuantityInCart from "../Items/QuantityInCart/QuantityInCart";
import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import itemShare from "../../assets/images/icon-share.png";

import homepageLogo from "../../assets/images/icon-homepage.png";

import "./ProductPage.scss";

import arrowUp from "../../assets/images/arrow-up.png";
import arrowBack from "../../assets/images/arrow-back.png";

import productData from "../../assets/db/items.json";

const ProductPage = () => {
  const { sku } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  

  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

  useEffect(() => {
    const fetchedProduct = productData.find((item) => item.SKU === sku);

    if (fetchedProduct) {
      setProduct(fetchedProduct);
      document.title = `Product Details - ${sku}`;
      console.log(sku)
    } else {
      setError("Product not found");
      document.title = "Product Not Found";
    }
  }, [sku]); 
  
  
  
  


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container">
        <ul className="breadcrumbs">
          <li className="breadcrumbs_item">
            <Link to="/">
              <img src={homepageLogo}></img>
            </Link>
          </li>
          <li className="breadcrumbs_item">
            <Link to="/department">{product.department}</Link>
          </li>
          <li className="breadcrumbs_item">
            <Link to="/subCategory">{product.subCategory}</Link>
          </li>
          <li className="breadcrumbs_item">
            <Link to="/subType">{product.subType}</Link>
          </li>
          <li className="breadcrumbs_item">
            {product.brandText} - {product.SKU}
          </li>
        </ul>
        <nav>
          <ul className="product_description_categories">
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="features" smooth={true} duration={500}>
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="specifications" smooth={true} duration={500}>
                Specifications
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="promotions"
                smooth={true}
                duration={500}
                className="important"
              >
                Promotions
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="care-maintenance" smooth={true} duration={500}>
                Care & Maintenance
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="reviews" smooth={true} duration={500}>
                Reviews
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="installation" smooth={true} duration={500}>
                Installation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="warranty" smooth={true} duration={500}>
                Warranty
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="shipping-returns" smooth={true} duration={500}>
                Shipping & Returns
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <Element name="about" className="section product_page">
          <section className="product_category">
            <div className="product_description_slider">
              <div className="slider_menu">
                <img
                  src={product.imageSlider[0].imageSliderLink}
                  alt={product.imageSlider[0].Alt}
                ></img>
              </div>
              <div className="slider_images">
                <img
                  src={arrowBack}
                  className="prev_arrow"
                  alt="Arrow Back"
                ></img>
                {/* <img src={product.imageSlider[0].imageSliderLink} alt={product.SKU}></img>     */}
                <img
                  src={product.imageSlider[1].imageSliderLink}
                  alt={product.SKU}
                ></img>
                <img
                  src={product.imageSlider[2].imageSliderLink}
                  alt={product.SKU}
                ></img>
                <img
                  src={product.imageSlider[3].imageSliderLink}
                  alt={product.SKU}
                ></img>
                <img
                  src={product.imageSlider[4].imageSliderLink}
                  alt={product.SKU}
                ></img>
                <img src={arrowUp} className="Arrow Up"></img>
              </div>
            </div>
            <ul className="product_description_tags">
              {product.tags.map((tag, index) => (
                <li key={index}>
                  <img
                    src={tag.iconLink}
                    alt={`${tag.value} ${product.SKU}`}
                  ></img>
                </li>
              ))}
            </ul>

            <div className="product_description_brief">
              <h1>{`${product.brandText || ""} ${product.description?.options[0]?.meanings[0]?.value || ""} ${product.subType || ""} ${product.subCategory || ""} ${product.capacity || ""}`}</h1>


              <div className="item_description_block_logo">
                <span className="item_description_logo">
                <Link to={`/brand/${product.brandText.toLowerCase()}.html`}>
                    <img src={product.brandLogo} alt="brandLogo" />
                  </Link>
                </span>
                <span className="item_description_dealer-info">
                  {product.autorizationDealer ? "AUTHORIZED DEALER" : ""}
                </span>
              </div>
              <p className="item_description_text">
                {product.description.short}
              </p>
              <ul className="item_description_important">
                <li>{product.capacity}</li>
              </ul>
              <div className="item_description_rate">
                <span>{product.rate}</span>
                <span>(113)</span>
              </div>
              <div className="item_description_model">
                <span>Model: </span>
                <span>{product.SKU}</span>
              </div>
              <div className="item_description_warranty">
                Warranty: <span>{product.warranty[0].term}</span>
              </div>
              <div className="item_description_additional-options">
                <img src={itemSaveWishList} alt=""></img>
                <img src={itemShare} alt=""></img>
              </div>
              <div className="item_description_colors">
                <ul className="item_description_colors_options">
                  {product?.description?.options?.[0]?.meanings?.length > 0 ? (
                    product.description.options[0].meanings.map((meaning, index) => (
                      <li
                        className="colors_option"
                        key={index}
                        style={{ backgroundColor: meaning.value.toLowerCase() }}
                        title={meaning.value}
                      ></li>
                    ))
                  ) : (
                    ""
                  )}

                </ul>
              </div>
            </div>
            <div className="product_description_price">
              <div className="price_list">
                <span>Was</span>
                <del>
                  $
                  {GenerateOldPrice(parseFloat(product.price), 12.319).toFixed(
                    2
                  )}
                </del>
              </div>
              <div className="price_discounts">
                <span>Save:</span>
                <span>
                  $
                  {parseFloat(
                    GenerateOldPrice(parseFloat(product.price), 12.319).toFixed(
                      2
                    ) - product.price
                  ).toFixed(2)}
                </span>
              </div>
              <div className="price_current">
                <span>Now</span>
                <span>${product.price}</span>
              </div>
              <div className="price_quantity_items">
                <QuantityInCart />
              </div>
              <div className="price_coupon">
                <a href="">Click to activate coupon</a>
              </div>

              <form className="price_financing">
                <label>
                  <input
                    type="radio"
                    className="price_financing_options"
                    name="financing"
                  />
                  <span>
                    ${parseFloat((product.price / 6) * 1.1).toFixed(2)}
                  </span>
                  <span>6-Month Financing(+10%)</span>
                </label>
                <label>
                  <input
                    type="radio"
                    className="price_financing_options"
                    name="financing"
                  />
                  <span>
                    ${parseFloat((product.price / 12) * 1.15).toFixed(2)}
                  </span>
                  <span>12-Month Financing(+15%)</span>
                </label>
                <label>
                  <input
                    type="radio"
                    className="price_financing_options"
                    name="financing"
                  />
                  <span>Pay in Full</span>
                </label>
              </form>
              <div className="product_actions">
                <a href="#" className="item_add-to-cart">
                  Add to Cart
                </a>
                <a href="#" className="item_quick-but">
                  Buy
                </a>
              </div>
            </div>
          </section>
        </Element>

        <Element name="features" className="section product_page">
          <section className="product_category_part">
            <h3>Features</h3>
            {product.description &&
              product.description.specifications &&
              product.description.specifications.Features ? (
              <ul className="item_features">
                {product.description?.specifications?.Features ? (
                  product.description.options[1]?.meanings?.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.value}:</strong> {feature.meaning}
                    </li>
                  ))
                ) : (
                  <p>Find All Features Below</p>
                )}
              </ul>

            ) : (
              <p>Find All Features Below</p>
            )}
          </section>
        </Element>
        <Element name="specifications" className="section product_page">
          <section className="product_category_part">
            <h3>Specifications</h3>
            <div className="item_specifications">
              {product?.description?.specifications ? (
                Object.entries(product.description.specifications).map(
                  ([section, data], index) => (
                    <div key={index}>
                      <h4>{section}:</h4>
                      <ul>
                        {Object.entries(data).map(([key, value], i) => (
                          <li key={i}>
                            <span className="item_specification">{key}:</span>
                            <span className="item_specification_result">
                              {typeof value === "object" ? (
                                <ul>
                                  {Object.entries(value).map(
                                    ([subKey, subValue], j) => (
                                      <li key={j}>
                                        <span className="item_specification">
                                          {subKey}:
                                        </span>
                                        <span className="item_specification_result">
                                          {subValue}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                value
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )
              ) : (
                <p>No specifications available.</p>
              )}

            </div>
          </section>
        </Element>

        <Element name="promotions" className="section product_page">
          <section className="product_category_part">
            <ul className="product_rebates">
              {product.description.options
                ?.find((option) => option.option === "Rebates")
                ?.meanings ? (
                product.description.options
                  .find((option) => option.option === "Rebates")
                  .meanings.map((rebate, index) => (
                    <li className="product_rebate" data-id={rebate.value} key={index}>
                      <div className="rebate_description">
                        <span className="rebate_images">
                          <a href="">
                            {/* <img src={logo3} alt="logo1" /> */}
                          </a>
                        </span>
                        <a href="" className="rebate_title">
                          <h5 className="rebate_title">{rebate.value}</h5>
                          <p>{rebate.meaning}</p>
                        </a>
                        <div className="rebate_actions">
                          <a href="">More</a>
                        </div>
                      </div>
                    </li>
                  ))
              ) : (
                <li>No rebates available.</li>
              )}

            </ul>

          </section>
        </Element>
        <Element name="care-maintenance" className="section product_page">
          <section className="product_category_part">
            <h3>Care & Maintenance</h3>
            <div className="product_maintenances">
              <ul className="product_maintenances_list">
                {product?.maintenance && product.maintenance.length > 0 ? (
                  product.maintenance.map((option, index) => (
                    <li className="product_maintenance" key={index}>
                      <strong>{option.case}:</strong>
                      <span>{option.value}</span>
                    </li>
                  ))
                ) : (
                  <li>No maintenance information available.</li> // Optional: Message if no maintenance options exist
                )}

              </ul>
            </div>
          </section>
        </Element>
        <Element name="reviews" className="section product_page">
          <section className="product_category_part">
            <h3>Ratings & Reviews</h3>
            <div className="product_reviews">
              <div className="product_reviews_snapshot">
                <div className="reviews_bar">
                  <span className="reviews_label">5 Stars</span>
                  <div className="reviews_bar-fill"></div>
                  <span className="reviews_count">(140)</span>
                </div>
                <div className="reviews_bar">
                  <span className="reviews_label">4 Stars</span>
                  <div className="reviews_bar-fill"></div>
                  <span className="reviews_count">(40)</span>
                </div>
                <div className="reviews_bar">
                  <span className="reviews_label">3 Stars</span>
                  <div className="reviews_bar-fill"></div>
                  <span className="reviews_count">(10)</span>
                </div>
                <div className="reviews_bar">
                  <span className="reviews_label">2 Stars</span>
                  <div className="reviews_bar-fill"></div>
                  <span className="reviews_count">(6)</span>
                </div>
                <div className="reviews_bar">
                  <span className="reviews_label">1 Star</span>
                  <div className="reviews_bar-fill"></div>
                  <span className="reviews_count">(4)</span>
                </div>
              </div>
              <div className="product_reviews_total">
                <h4>Average Customer Ratings</h4>
                <div className="product_reviews_pivot_rate">
                  <span>***** 4.9</span>
                  <span>(113)</span>
                </div>
              </div>
              <div className="product_reviews_leave">
                <span>Leave a Review</span>
              </div>
            </div>
            <ul className="product_reviews_list">
              <li className="product_review">
                <div className="review_header">
                  <span className="review_stars">*****</span>
                  <span className="review_date">09/01/2024</span>
                </div>
                <span className="review_title">
                  <strong>Amazing AC Unit for small apt</strong>
                </span>
                <span className="review_text">
                  Received this to review from Influenster and gave it a month
                  to test it out and it’s really easy to install, very small and
                  compact for my apartment. Compared to my old AC this one is
                  slightly less noisy but at a reasonable level. I have two
                  bedroom and it has a strong airflow to go around and cool my
                  whole apartment. I love the eco button to help with the energy
                  Efficiency and overall I’d highly recommend this AC unit for
                  small apartments
                </span>
                <span className="review_conclusion">
                  <strong>Conclusion: Y / N</strong>
                </span>
              </li>
            </ul>
          </section>{" "}
        </Element>

        <Element name="installation" className="section product_page">
          <section className="product_category_part">
            <h3>Installation</h3>
            <div className="product_installations">
              <ul className="product_installations_list">
                {product?.installation && product.installation.length > 0 ? (
                  product.installation.map((step, index) => (
                    <li className="product_installation" key={index}>
                      <strong>Step {index + 1}:</strong> {/* You can customize this label as needed */}
                      <span>{step.value}</span>
                    </li>
                  ))
                ) : (
                  <li>No installation instructions available.</li> // Fallback message if no installation steps exist
                )}

              </ul>
            </div>
          </section>
        </Element>

        <Element name="warranty" className="section product_page">
  <section className="product_category_part">
    <h3>Warranty</h3>
    <div className="product_warranties">
      <ul className="product_warranties_list">
        {Array.isArray(product?.warranty) && product.warranty.length > 0 ? (
          product.warranty.map((option, index) => (
            <li className="product_warranty" key={index}>
              <strong>{option.term}:</strong>
              <span>{option.description}</span>
            </li>
          ))
        ) : (
          <li>No warranty information available.</li>
        )}
      </ul>
    </div>
  </section>
</Element>

        <Element name="shipping-returns" className="section product_page">
          <section className="product_category_part">
            <h3>Shipping and returns</h3>
            <div className="product_shipping-returns">
              <ul className="product_shipping-returns_list">
                <li className="product_shipping-return">
                  <strong>Shipping:</strong><span>Read more here <Link to="/shipping-information.html">Shipping</Link></span>
                </li>
                <li className="product_shipping-return">
                  <strong>Returns:</strong><span>Read more here <Link to="/returns-exchanges.html">Returns</Link></span>
                </li>
              </ul>
            </div>
          </section>        </Element>
      </div>
    </Layout>
  );
};

export default ProductPage;
