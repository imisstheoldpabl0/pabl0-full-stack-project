import React from "react";
import "./Account.css";

const Account = () => {

  async function fetchData() {
    try {
      let res = await axios.post('http://localhost:3000/users');
      let data = res.data;
      setChart(data);
    } catch (e) {
      throw new Error(e);
    }
  }
  fetchData();

  return (
    <div id="account">
      <section id="section_account">
        <div id="forms-container">
          <div>
            <h3>Create an account</h3>
            <form id="form1" action="#" method="POST">
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your username..."></input>
                <label for="pass">Password:</label>
                <input type="password" id="pass" name="pass" placeholder="Enter your password..."></input>
                <label for="pass2">Repite password:</label>
                <input type="password" id="pass2" name="pass2" placeholder="Repeat your password..."></input>
                <input type="submit" value="Create account"></input>
              </div>
            </form>
          </div>
        </div>

        <div id="forms-container">
          <div>
            <h3>Login to an existing account</h3>
            <form id="form2" action="#" method="POST">
              <div>
                <label for="email2">Email:</label>
                <input type="email" id="email2" name="email2" placeholder="Introduce email..."></input>
                <label for="pass3">Password:</label>
                <input type="password" id="pass3" name="pass3" placeholder="Introduce password..."></input>
                <input type="submit" value="Login"></input>
                <div id="logout">
                  <button id="salir">Logout</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Account;
