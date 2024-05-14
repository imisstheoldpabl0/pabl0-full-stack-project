import React, {useEffect, useState} from "react";
import Candlestick from "./Candlestick/Candlestick";
import axios from "axios";
import "./Chart.css";

const Chart = (props) => {
  
  const [charts, setChart] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const crypto = props.crypto;
        const fiat = props.fiat;
        const timeFrame = props.timeFrame;

        //const url = `https://api.kraken.com/0/public/OHLC?pair=${crypto}${fiat}&interval=${timeFrame}&since=${sinceInterval}`
        //const url = `https://api.kraken.com/0/public/OHLC?pair=XETHZUSD&interval=1440&since=1704067200`
        const url = `https://api.kraken.com/0/public/OHLC?pair=${crypto}${fiat}&interval=${timeFrame}&since=1704067200`

        console.log(url);
        let res = await axios.get(url); // Fetches the provided URL with parameters from the user
        let data = await res.data.result; // Stores the response data in a variable
        console.log(data);
        setChart({});
        setChart(data); // Return only the result data

      } catch (e) {
        setChart([]);
      }
    }
    fetchData();
    console.log("holaaaaaa");
  }, [props.crypto, props.fiat, props.timeFrame]);


  return (
    <section id="chart-section">
      {charts["last"] !== undefined ? <Candlestick
      info={charts}
      /> : <p>No data</p>}
    </section>
  );
};

export default Chart;
