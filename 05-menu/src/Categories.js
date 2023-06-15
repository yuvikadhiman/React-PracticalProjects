import React from "react";

const Categories = ({ category, filter }) => {
  return (
    <div className="btn-container">
      {category.map((categories) => {
        return (
          <button type="button" 
          className="btn" 
          key={categories}
          onClick={()=>filter(categories)}>
            {categories}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
