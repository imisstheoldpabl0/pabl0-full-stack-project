import React, {useState} from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Chart from "./Chart/Chart";

const Home = () => {
  const [crypto, setCrypto] = useState('XXBT');
  const [fiat, setFiat] = useState('ZUSD');
  const [timeFrame, setTimeFrame] = useState('1440');
  const [sinceInterval, setSinceInterval] = useState('1704067200');
  return (
    <section id="home">
      <Section1 />
      <Section2 setCrypto={setCrypto} setFiat={setFiat} setTimeFrame={setTimeFrame} setSinceInterval={setSinceInterval} />
      <Chart crypto={crypto} fiat={fiat} timeFrame={timeFrame} sinceInterval={sinceInterval}/>
    </section>
  );
};

export default Home;