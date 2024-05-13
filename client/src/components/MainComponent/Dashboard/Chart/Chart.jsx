import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ crypto, amount }) => {

  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });


  return (
    <div>
      <h1>Chart</h1>
      <ReactApexChart
        options={state.options}
        series={state.series} type="donut" />
      <p>{crypto}</p>
      <p>{amount}</p>
    </div>
  );
};

export default Chart;
