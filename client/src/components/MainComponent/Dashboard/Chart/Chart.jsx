import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ crypto, amount }) => {


  const [state, setState] = useState({
    series: [crypto, amount],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 500,
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

      <section>
      <ReactApexChart
        options={state.options}
        series={state.series} type="donut" />
        </section>

        <section>
          
        </section>
      <p>{crypto}</p>
      <p>{amount}</p>
    </div>
  );
};

export default Chart;
