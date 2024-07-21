import React from "react";

const Miles = ({ min_business_miles, min_business_tax }) => {
  return (
    <div className="MilesCountContainner">
      <p>{min_business_miles}</p>

      <div className="money">
        <span className="plus">+</span>
        <span style={{ marginLeft: "3px", color: "white", opacity: "0.9" }}>
          &#36;
        </span>
        <p>{min_business_tax}</p>
      </div>
    </div>
  );
};

export default Miles;
