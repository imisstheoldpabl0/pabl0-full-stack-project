import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Candlestick = ({ charts }) => {

  /* RESIZE CHART BASE ON WINDOW SIZE */
  let newWidth = Math.round(window.innerWidth * 0.8);
  let newHeight = Math.round(window.innerHeight * 0.75);

  let firstKey = Object.keys(charts)[0];

  const candles = charts[firstKey].map(candle => {
    const [timestamp, open, high, low, close] = candle.slice(0, 5); // Extract first five values
    return {
      x: new Date(timestamp * 1000), // Convert timestamp to milliseconds
      y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)] // Convert OHLC values to numbers
    };
  });

  const [state, setState] = useState({
    series: [{
      data: candles // Use the converted candlestick data
    }],
    options: {
      chart: {
        type: 'candlestick',
        width: newWidth,
        height: newHeight,
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: `This is a chart`,
        align: 'left'
      },
      noData: {
        text: 'Fetching data...',
        style: {
          fontSize: '14px',
          fontFamily: 'SFProMedium'
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#BCA695ff', // OG: #3C90EB yellow: fCCE36
            downward: '#CA7A55' // OG: #DF7D46
          }
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    }
  }
  );

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="candlestick"
      />
    </div>
  );
};

export default Candlestick;
