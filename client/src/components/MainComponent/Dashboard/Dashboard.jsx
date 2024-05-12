import React, { useEffect } from "react";
import axios from "axios";

const Dashboard = ({ id_crypto, crypto_amount }) => {

  const [chart, setChart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get('http://localhost:3000/admin/first');
        let data = await res.json();
        console.log(data);
        setChart(data);
      } catch (e) {
        setChart([]);

      }
    }
    fetchData();
  }, [id_crypto, crypto_amount]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{chart.id_crypto}</p>
      <p>{chart.crypto_amount}</p>
    </div>
  );
};

export default Dashboard;
