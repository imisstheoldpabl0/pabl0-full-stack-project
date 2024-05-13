import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart/Chart";

const Dashboard = ({ chart }) => {

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
  }, [chart]);

  return (
    <div>
      {charts.length > 0 ? <Chart charts={charts} /> : <p>No data</p>}
    </div>
  );
}

  export default Dashboard;
