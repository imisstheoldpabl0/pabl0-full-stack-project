import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart/Chart";

const Dashboard = ({ id_crypto, crypto_amount }) => {

  const [charts, setChart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get('http://localhost:3000/holdings/admin/first');
        let data = res.data[0];
        setChart(charts.data);
      } catch (e) {
        setChart([]);
      }
    }
    fetchData();
  }, [id_crypto, crypto_amount]);

  return (
    <div>
      <h1>This is the dash</h1>
    </div>
  );
}

  export default Dashboard;
