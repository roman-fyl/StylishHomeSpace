import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import {addWishListItem} from "../../store/actions/wishListActions"
import { updateLocalStorage } from "../../components/LocalStorage/updateLocalStorage";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";

import QuantityItems from "./QuantityItems";
import productData from "../../assets/db/items.json";
import { getSessionNumber } from "../Sessions/getSessionNumber";
import itemSaveWishList from "../../assets/images/icon-save-wishlist.png";
import itemShare from "../../assets/images/icon-share.png";
import homepageLogo from "../../assets/images/icon-homepage.png";
import arrowUp from "../../assets/images/arrow-up.png";
import arrowBack from "../../assets/images/arrow-back.png";
import "./ProductPage.scss";

const ProductPage = () => {
  const { skuText } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("Pay in Full");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sliderImage, setSliderImage] = useState(0)
  const [reviews, setReviews] = useState(false)
  const sessionId = useSelector((state) => state.session.sessionId);


  useEffect(() => {
    setProduct(null);
    if (!skuText) return;

    const fetchedProduct = productData.find(
      (item) => item.sku.toLowerCase() === skuText.toLowerCase()
    );

    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setError(null);
    } else {
      setError("Product not found");
    }

    document.title = `Product Details - ${skuText.toUpperCase()}`;
  }, [skuText]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!product) {
    return <div>Loading...</div>;
  }

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleQuantityChangePP = (newQuantity) => {
    setQuantity(newQuantity);
    
  };

  const handleAddToCart = (item) => {
    const sessionNumber = getSessionNumber();
    const itemToAdd = {
      group: item.group,
      smart: item.smart,
      category: item.category,
      subCategory: item.subCategory,
      subType: item.subType,
      brandLogo: item.brandLogo,
      color: item.color,
      brandText: item.brandText,
      capacity: item.capacity,
      imageSlider: item.imageSlider[0].imageSliderLink,
      imageAlt: item.imageSlider[0].Alt,
      sku: item.sku,
      autorizationDealer: item.autorizationDealer,
      tags: item.tags,
      title: item.title,
      rate: item.rate,
      price: item.price,
      idN: item.idN,
      warranty: item.warranty,
      description: item.description,
      maintenance: item.maintenance,
      installation: item.installation,
      quantity, 
      session: sessionNumber,
      payment,
    };
    updateLocalStorage("cartItems", itemToAdd);
    dispatch(addToCart(itemToAdd, sessionNumber));
    navigate(`/cart?session=${sessionNumber}`);
  };

  const GenerateOldPrice = (price, percentage) => {
    return price * (1 + percentage / 100);
  };

const handleChangeImageIncrease = () => {
  setSliderImage((prev) => (prev + 1) % product.imageSlider.length)
}

const handleChangeImageDecrease = () => {
  setSliderImage((prev) => (prev - 1) % product.imageSlider.length)
}

const handleAddToWishlist = (item) => {
  const existingData = getFromLocalStorage("wishListItems");
  const alreadyVisited = existingData.some(
    (wishListItem) => wishListItem.sku === item.sku
  );

  if (!alreadyVisited) {
    const itemWithSession = { ...item, session: sessionId };
    dispatch(addWishListItem(itemWithSession));
    console.log("Tracked item added:", itemWithSession);
  } else {
    console.log("Item already tracked:", item);
  }
};

  return (
      <div className="container">
 <ul className="breadcrumbs">
  <li className="breadcrumbs_item">
    <Link to="/">
      <img src={homepageLogo} alt="Homepage" />
    </Link>
  </li>
  {product.category && (
    <li className="breadcrumbs_item">
      <Link to={`/search?categories=${product.category}`}>
        {product.category}
      </Link>
    </li>
  )}
  {product.subCategory && (
    <li className="breadcrumbs_item">
      <Link to={`/search?subCategories=${product.subCategory}`}>
        {product.subCategory}
      </Link>
    </li>
  )}
  {product.subType && (
    <li className="breadcrumbs_item">
      <Link to={`/search?subTypes=${product.subType}`}>
        {product.subType}
      </Link>
    </li>
  )}
  <li className="breadcrumbs_item">
    {product.brandText} - {product.sku}
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
                  src={product.imageSlider[sliderImage].imageSliderLink}
                  alt={product.imageSlider[sliderImage].Alt}
                ></img>
              </div>
              <div className="slider_images">
                <img
                  src={arrowBack}
                  className="prev_arrow"
                  alt="Arrow Back" onClick={handleChangeImageDecrease}
                ></img>
                {product.imageSlider.map((image, index) => (
                  <img
                    key={index}
                    src={image.imageSliderLink}
                    alt={image.Alt} 
                    className={`thumbnail ${sliderImage === index ? 'active' : ''}`}
                    onClick={() => setSliderImage(index)}
                  />
                ))}
                <img src={arrowUp} className="Arrow Up" onClick={handleChangeImageIncrease}></img>
              </div>
            </div>
            <ul className="product_description_tags">
              {product.tags.map((tag, index) => (
                <li key={index}>
                  <img
                    src={tag.iconLink}
                    alt={`${tag.value} ${product.sku}`}
                  ></img>
                </li>
              ))}
            </ul>

            <div className="product_description_brief">
              <h1>{`${product.brandText || ""} ${product.description?.options[0]?.meanings[0]?.value || ""} ${product.subType || ""} ${product.subCategory || ""} ${product.capacity || ""}`}</h1>


              <div className="item_description_block_logo">
                <span className="item_description_logo">
                <Link to={`/brand/${product.brandText.toLowerCase()}`}>
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
                <span>{product.sku}</span>
              </div>
              <div className="item_description_warranty">
                Warranty: <span>{product.warranty[0].term}</span>
              </div>
              <div className="item_description_additional-options">
                <img src={itemSaveWishList} alt="" onClick={() => handleAddToWishlist(product)}></img>
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
          {GenerateOldPrice(parseFloat(product.price), 12.319).toFixed(2)}
        </del>
      </div>
      <div className="price_discounts">
        <span>Save:</span>
        <span>
          ${parseFloat(GenerateOldPrice(parseFloat(product.price), 12.319).toFixed(2) - product.price).toFixed(2)}
        </span>
      </div>
      <div className="price_current">
        <span>Now</span>
        <span>${product.price}</span>
      </div>
      <div className="price_quantity_items">
      <QuantityItems
        quantity={quantity}
        onQuantityChange={handleQuantityChangePP}
      />
      </div>
      {/* <div className="price_coupon">
        <a href="">Click to activate coupon</a>
      </div> */}

      <div className="price_financing">
        <form>
          <label>
            <input
              type="radio"
              value="6-Month Financing (+10%)"
              name="payment"
              checked={payment === "6-Month Financing (+10%)"}
              onChange={handlePaymentChange}
            />
            6-Month Financing (+10%)
          </label>
          <label>
            <input
              type="radio"
              value="12-Month Financing (+15%)"
              name="payment"
              checked={payment === "12-Month Financing (+15%)"}
              onChange={handlePaymentChange}
            />
            12-Month Financing (+15%)
          </label>
          <label>
            <input
              type="radio"
              value="Pay in Full"
              name="payment"
              checked={payment === "Pay in Full"}
              onChange={handlePaymentChange}
            />
            Pay in Full
          </label>
        </form>
      </div>
      <div className="product_actions">
      <button onClick={() => handleAddToCart(product)} className="item_add-to-cart">
          Add To Cart
        </button> 
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
                  <li>No maintenance information available.</li>
                )}

              </ul>
            </div>
          </section>
        </Element>
        <Element name="reviews" className="section product_page">
          <section className="product_category_part">
            <h3>Ratings & Reviews</h3>
            <div className="product_reviews">
              {/* <div className="product_reviews_snapshot">
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
              </div> */}
              {/* <div className="product_reviews_total">
                <h4>Average Customer Ratings</h4>
                <div className="product_reviews_pivot_rate">
                  <span>***** 4.9</span>
                  <span>(113)</span>
                </div>
              </div> */}

              {/* <div className="product_reviews_leave">
                <span>Leave a Review</span>
              </div> */}
              {reviews ? (<span>1</span>) : (<span>No reviews provided</span>)}
              
            </div>
            {/* <ul className="product_reviews_list">
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
            </ul> */}
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
                      <strong>Step {index + 1}:</strong>
                      <span>{step.value}</span>
                    </li>
                  ))
                ) : (
                  <li>No installation instructions available.</li> 
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
                  <strong>Shipping:</strong><span>Read more here <Link to="/shipping-information">Shipping</Link></span>
                </li>
                <li className="product_shipping-return">
                  <strong>Returns:</strong><span>Read more here <Link to="/returns-exchanges">Returns</Link></span>
                </li>
              </ul>
            </div>
          </section>        </Element>
      </div>
  );
};

export default ProductPage;
