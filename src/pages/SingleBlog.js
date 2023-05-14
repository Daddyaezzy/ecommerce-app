import React from "react";
import Meta from "../components/ourStore/Meta";
import BreadCrumb from "../components/ourStore/BreadCrumb";
import blog1 from "../images/blog-1.jpg";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                {" "}
                <HiOutlineArrowLeft className="fs-4" /> Go back to blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img src={blog1} className="img-fluid blogImg my-4" alt="blog" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur autem porro laudantium perspiciatis illo quasi
                voluptatem non praesentium nostrum dolore, pariatur libero esse?
                Maxime doloribus consequuntur ipsum ex cum odit, nisi laborum
                itaque dolor quisquam aut eum alias aliquam rem? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Possimus,
                eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
