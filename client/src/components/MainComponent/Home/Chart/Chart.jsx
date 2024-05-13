import React, {useEffect, useState} from "react";
import Candlestick from "./Candlestick/Candlestick";
import axios from "axios";
// import css

const Chart = ({ crypto, fiat, timeFrame, sinceInterval }) => {
  
  const [charts, setChart] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        //const url = `https://api.kraken.com/0/public/OHLC?pair=${crypto}${fiat}&interval=${timeFrame}&since=${sinceInterval}`
        const url = `https://api.kraken.com/0/public/OHLC?pair=XETHZUSD&interval=1440&since=1704067200`
        console.log(url);
        let res = await axios.get(url); // Fetches the provided URL with parameters from the user
        let data = res.data.result; // Stores the response data in a variable
        console.log(data);
        setChart(data); // Return only the result data

      } catch (e) {
        setChart([]);
      }
    }
    fetchData();
  }, []);


  return (
    <section>
      <h1>I am the chart</h1>
      {charts.length ? <Candlestick
      info={charts}
      /> : <p>No data</p>}
    </section>
  );
};

export default Chart;
