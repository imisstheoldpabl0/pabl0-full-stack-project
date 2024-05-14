import React, { useRef, useEffect } from "react";
import "./Section1.css";

const Section1 = () => {

  useEffect(() => {
    const scrollRotate = () => {
      let image = document.getElementById('cube');
      if (image) {
        image.style.transform = 'rotate(' + window.scrollY / 2 + 'deg)';
      }
    };

    window.addEventListener('scroll', scrollRotate);

    return () => {
      window.removeEventListener('scroll', scrollRotate);
    };
  }, []);

  return (
    <section id="section1">
      <article id="article1">
        <h1>What is TradeBoyAI?</h1>
        <div id="div1">
          <ul>
            <li>
              <p>Reliable and lighting-fast market prices</p>
            </li>
            <li>
              <p>Keep track of your cryptocurrency assets</p>
            </li>
            <li>
              <p>View candlestick charts that date back up to 2 years</p>
            </li>
            <li>
              <p>Get AI trading suggestions with ground-breaking technology</p>
            </li>
            <li>
              <p>Use on the go with our mobile-friendly version</p>
            </li>
          </ul>
        </div>
      </article>
      {<img src="./images/cube_only2.png" alt="cube" id="cube" />}
    </section>
  );
};

export default Section1;
