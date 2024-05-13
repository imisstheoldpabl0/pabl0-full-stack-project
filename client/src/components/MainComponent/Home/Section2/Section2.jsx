import React, { useRef } from "react";
import "./Section2.css";

const Section2 = () => {

  const handleClick = (event) => {
    event.preventDefault();

    const value = event.target.getAttribute('data-value');

    if (value.startsWith("X")) {
      setCrypto(value);
    } else if (value.startsWith("Z")) {
      setFiat(value);
    } else {
      setTimeFrame(value);
  }
};

  return (
    <section id="section2">

      <h1>Check out the demo below</h1>
      <div id="buttons">

        <div className="dropdown">
          <button className="dropbtn" id="crypto_button">CRYPTOCURRENCY</button>
          <div className="dropdown-content">
            <a href="#" data-value="XXBT" onClick={(event) => handleClick(event)}>BTC</a>
            <a href="#" data-value="XETH" onClick={(event) => handleClick(event)}>ETH</a>
            <a href="#" data-value="XXLM" onClick={(event) => handleClick(event)}>XLM</a>
            <a href="#" data-value="XXRP" onClick={(event) => handleClick(event)}>XRP</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" id="fiat_button">FIAT</button>
          <div className="dropdown-content" id="dropdown-content">
            <a href="#" data-value="ZUSD" onClick={(event) => handleClick(event)}>USD</a>
            <a href="#" data-value="ZEUR" onClick={(event) => handleClick(event)}>EUR</a>
            <a href="#" data-value="ZGBP" onClick={(event) => handleClick(event)}>GBP</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" id="timeframe_button">TIME-FRAME</button>
          <div className="dropdown-content">
            <a href="#" data-value="60" onClick={(event) => handleClick(event)}>1H</a>
            <a href="#" data-value="240" onClick={(event) => handleClick(event)}>4H</a>
            <a href="#" data-value="1440" onClick={(event) => handleClick(event)}>24H</a>
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
    </section>
  );
};

export default Section2;
