import React, { useState } from "react";

const SingleItems = ({ name, id, complete, removeId }) => {
  const [isChecked, setIsChecked] = useState(complete);
  return (
    <div key={id} className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
            textTransform: 'capitalize',
          textDecoration: isChecked && "line-through",
        }}
      >
        {name}
      </p>
      <button className="btn" type="button" onClick={() => removeId(id)}>
        Remove
      </button>
    </div>
  );
};

export default SingleItems;
