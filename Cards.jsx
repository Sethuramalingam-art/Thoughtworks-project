import React from "react";

const Cards = ({ metricText, metricValue }) => {
  return (
    <div className="card shadow-2">
      <h3>{metricText}</h3>
      <p>
        {metricText === "cost"
          ? `$${metricValue.toFixed(2)}`
          : metricText === "footprint"
          ? metricValue.toFixed(4)
          : metricValue}
      </p>
    </div>
  );
};

export default Cards;
