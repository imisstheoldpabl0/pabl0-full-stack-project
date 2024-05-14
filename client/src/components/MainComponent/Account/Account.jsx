import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div>
      <section id="section_account">
        <h1>Login or Create an account</h1>

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
            <h3>Create an account</h3>
            <form id="form2" action="#" method="POST">
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your username..."></input>
                <label for="pass">Password:</label>
                <input type="password" id="pass" name="pass" placeholder="Enter your password..."></input>
                <input type="submit" value="Create account"></input>
              </div>
            </form>
          </div>
        </div>










      </section>
    </div>
  );
};

export default Account;
