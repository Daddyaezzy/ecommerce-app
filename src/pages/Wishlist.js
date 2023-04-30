import React from "react";
import Meta from "../components/ourStore/Meta";
import BreadCrumb from "../components/ourStore/BreadCrumb";
import watch from "../images/watch.jpg";
import cross from "../images/cross.svg";

const Wishlist = () => {
  return (
    <>
      <Meta title={"wishlist"} />
      <BreadCrumb title="wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className=" w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Kids headphones bulk 10 multi colored for students
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
