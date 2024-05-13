import React, { useEffect } from "react";
import "./Section2.css";
import Chart from "./Chart/Chart";
import axios from "axios";

const Section2 = () => {

/*   const [chart, setChart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://api.kraken.com/0/public/OHLC?pair=${cryptoCoin}${cryptoPair}&interval=${timeFrameInterval}&since=${sinceInterval}`
        console.log(url);
        let response = await fetch(url); // Fetches the provided URL with parameters from the user
        let data = await response.data; // Stores the response data in a variable
        setChart(data.result); // Return only the result data

      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }
    fetchData();
  }, [chart]); */

  return (
    <section id="section2">

      <h1>Check out the demo below</h1>
      <div id="buttons">

        <div className="dropdown">
          <button className="dropbtn" id="crypto_button">CRYPTOCURRENCY</button>
          <div className="dropdown-content">
            <a href="#" data-value="XXBT">BTC</a>
            <a href="#" data-value="XETH">ETH</a>
            <a href="#" data-value="XXLM">XLM</a>
            <a href="#" data-value="XXRP">XRP</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" id="fiat_button">FIAT</button>
          <div className="dropdown-content" id="dropdown-content">
            <a href="#" data-value="ZUSD">USD</a>
            <a href="#" data-value="ZEUR">EUR</a>
            <a href="#" data-value="ZGBP">GBP</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" id="timeframe_button">TIME-FRAME</button>
          <div className="dropdown-content">
            <a href="#" data-value="60">1H</a>
            <a href="#" data-value="240">4H</a>
            <a href="#" data-value="1440">24H</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" id="chartlength_button">CHART LENGTH</button>
          <div className="dropdown-content">
            <a href="#" data-value="604800">1 WEEK</a>
            <a href="#" data-value="1209600">2 WEEKS</a>
            <a href="#" data-value="2629743">1 MONTH</a>
            <a href="#" data-value="31556926">1 YEAR</a>
            <a href="#" data-value="63113852">2 YEARS</a>
          </div>
        </div>

      </div>

      <section>
        <Chart />
      </section>

      <script src="./index.js"></script>
    </section>
  );
};

export default Section2;
