import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { AiOutlineCaretDown, AiFillCaretRight } from "react-icons/ai";

const Header = () => {
  const [tap, setTap] = useState(false);
  const [tap2, setTap2] = useState(false);

  const dropDown = () => {
    setTap(!tap);
  };
  const dropDown2 = () => {
    setTap2(!tap2);
  };

  const resetTap = () => {
    setTap(false);
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel: +234 (915)-2033-235">
                  +234 (915)-2033-235
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className="text-white">Ali3n Express </Link>
              </h3>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product here..."
                  aria-label="Search Product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <div
                    onClick={dropDown2}
                    // to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0 user-point">My Account</p>
                  </div>
                  {tap2 && (
                    <div className="flex flex-col drop-down2 point2">
                      <ul className="flex flex-col gap-4 point">
                        <li>
                          <Link className="auth-link" to="/login">
                            Login
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link className="auth-link" to="/signup">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div>
                  <div className="drop-down1">
                    <button onClick={dropDown} className="the-button">
                      <img src={menu} alt="" /> <span>Shop Categories</span>
                      {tap ? (
                        <AiOutlineCaretDown className="dropdown-icon" />
                      ) : (
                        <AiFillCaretRight className="dropdown-icon" />
                      )}
                    </button>
                  </div>
                  {tap && (
                    <div className="flex flex-col drop-down point2">
                      <ul className="flex flex-col gap-4 point">
                        <li>Profile</li>
                        <hr />
                        <li>Settings</li>
                        <hr />
                        <li>Logout</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30 shift">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
