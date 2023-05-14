import React, { useState } from "react";
import { Link } from "react-router-dom";
import Meta from "../components/ourStore/Meta";
import BreadCrumb from "../components/ourStore/BreadCrumb";
import ProductCard from "../components/homeComponents/ProductCard";
import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/CompareProducts/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const orderedProduct = true;
  const [rating, setRating] = useState(2);

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const handleStarRating = (rate) => {
    setRating(rate);
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-image d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids headphones bulk 10 multi colored for students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <StarRatings
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    rating={3}
                    activeColor="#ffd700"
                    starRatedColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <Link className="mt-1 review-brn" href="#review">
                  Write Link review
                </Link>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-header">Type:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-header">Brand:</h3>
                  <p className="product-data">Havel</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-header">Category:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-header">Tags:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-header">Availability:</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-header">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-header">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row my-3">
                  <div className="d-flex flex-row align-items-center gap-10">
                    <h3 className="product-header">Quantity:</h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Add to Cart
                      </button>
                      <button to="/signup" className="button signup border-0">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <Link to="/compare-product">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </Link>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-3 my-3">
                  <h3 className="product-header">Shipping & Returns:</h3>
                  <p className="product-data">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br /> Iure, accusamus eveniet. Delectus{" "}
                    <b>5-10 business days</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-header">Product Link:</h3>
                  <Link
                    to="javascript:void(0);"
                    onClick={copyToClipboard(
                      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    )}
                  >
                    Copy Product Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                aperiam ullam vitae dolorum velit, nisi autem corporis maxime
                doloremque quisquam praesentium aut qui explicabo incidunt
                expedita. Sit dolorum accusamus architecto?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <StarRatings
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      rating={3}
                      activeColor="#ffd700"
                      starRatedColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <Link className="text-dark text-decoration-underline">
                      Write Link Review
                    </Link>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write Link Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="pb-3">
                    <Rating
                      count={5}
                      size={20}
                      activeColor="#ffd700"
                      value={rating}
                      onClick={handleStarRating}
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Dapo</h6>
                    <StarRatings
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      rating={3}
                      activeColor="#ffd700"
                      starRatedColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia, facere consectetur porro adipisci nobis inventore
                    obcaecati libero tempora ipsa tenetur blanditiis ipsum?
                    Maiores, modi distinctio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1Container="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
