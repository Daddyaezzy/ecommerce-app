import React from "react";
import Meta from "../components/ourStore/Meta";
import BreadCrumb from "../components/ourStore/BreadCrumb";
import watch from "../images/watch.jpg";
import cross from "../images/cross.svg";
import Color from "../components/CompareProducts/Color";
import Container from "../components/Container";

const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-products-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Kids headphones bulk 10 multi colored for students
                </h5>
                <h6 className="price mt-3">$100</h6>
                <div>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product-details">
                    <h5>Type:</h5>
                    <p className="mb-0">Watch</p>
                  </div>
                  <div className="product-details">
                    <h5>Available:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p className="mb-0">S</p>
                      <p className="mb-0">M</p>
                      <p className="mb-0">L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Kids headphones bulk 10 multi colored for students
                </h5>
                <h6 className="price mt-3">$100</h6>
                <div>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product-details">
                    <h5>Type:</h5>
                    <p className="mb-0">Watch</p>
                  </div>
                  <div className="product-details">
                    <h5>Available:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p className="mb-0">S</p>
                      <p className="mb-0">M</p>
                      <p className="mb-0">L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
