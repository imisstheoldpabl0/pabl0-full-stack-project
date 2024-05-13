import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart/Chart";

const Dashboard = ({ id_crypto, crypto_amount }) => {

  const [charts, setChart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get('http://localhost:3000/holdings/admin/first');
        let money = res.data;
        setChart(money.data);
      } catch (e) {
        setChart([]);
      }
    }
    fetchData();
  }, [id_crypto, crypto_amount]);

  const paintCharts = () => {
    return charts.length !== 0 ?
      charts.map((chart, index) => {
        return <Chart
          key={index}
          crypto={chart.id_crypto}
          amount={chart.crypto_amount}
        />
      }) : <p>No data</p>
  }

  return (
    <div>
      <h1>This is the dash</h1>
      {paintCharts()}
    </div>
  );
}

  export default Dashboard;
