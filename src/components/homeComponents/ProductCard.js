import React from "react";
import watch from "../../images/watch.jpg";
import watch1 from "../../images/watch-1.avif";
import addCart from "../../images/add-cart.svg";
import view from "../../images/view.svg";
import compare from "../../images/prodcompare.svg";
import wishlist from "../../images/wish.svg";
import StarRatings from "react-star-ratings";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ grid }) => {
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname !== "/product"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/1"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wishlist} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product img" />
            <img src={watch1} className="img-fluid" alt="product img" />
          </div>
          <div className="product-detail">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi colored for students
            </h5>
            <StarRatings
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              rating={3}
              activeColor="#ffd700"
              starRatedColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur praesentium ipsam enim adipisci rem sapiente dolore,
              quae nulla blanditiis! Autem.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent" on>
                <img src={compare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addCart} alt="" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname !== "/product"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishlist} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product img" />
            <img src={watch1} className="img-fluid" alt="product img" />
          </div>
          <div className="product-detail">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi colored for students
            </h5>
            <StarRatings
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              rating={3}
              activeColor="#ffd700"
              starRatedColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur praesentium ipsam enim adipisci rem sapiente dolore,
              quae nulla blanditiis! Autem.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={compare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addCart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
