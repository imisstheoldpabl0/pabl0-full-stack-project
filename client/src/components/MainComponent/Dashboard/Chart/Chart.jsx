import React from "react";

const Chart = ({ crypto, amount }) => {
  return (
    <div>
      <h1>Chart</h1>
      <p>{crypto}</p>
      <p>{amount}</p>
    </div>
  );
};

export default Chart;
