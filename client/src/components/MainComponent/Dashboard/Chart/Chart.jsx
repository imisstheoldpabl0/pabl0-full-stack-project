import React from "react";

const Chart = ({ crypto, crypto_amount }) => {
  return (
    <div>
      <h1>Chart</h1>
      <p>{crypto}</p>
      <p>{crypto_amount}</p>
    </div>
  );
};

export default Chart;
