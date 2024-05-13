import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ charts }) => {

  const amounts = charts.map(chart => chart.crypto_amount);
  console.log(`These are the amounts: ${amounts}`);

  const names = charts.map(chart => chart.crypto_name);
  console.log(`These are the names: ${names}`);

  const [state, setState] = useState({
    series: amounts,
    options: {
      chart: {
        type: 'donut',
      },
      labels: names,
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
    </div>
  );
};

export default Chart;
