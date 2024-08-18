import "./category-item.styles.scss";
import React from "react";

const CategoryItem = ({ category }) => {
  const { img, title } = category;
  return (
    <div className="category-container">
      <img className="background-image" src={img} alt="My Image" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>View Books</p>
      </div>
    </div>
  );
};

export default CategoryItem;
