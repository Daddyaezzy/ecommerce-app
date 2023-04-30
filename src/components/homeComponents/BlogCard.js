import React from "react";
import blog1 from "../../images/blog-1.jpg";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-img">
        <img src={blog1} alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date"></p>
        <h5 className="title">A beautiful Sunday Morning Renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit
          explicabo corrupti{" "}
        </p>
        <Link className="button">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
