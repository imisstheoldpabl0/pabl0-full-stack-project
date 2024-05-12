import React from "react";
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="nav-link active"><Link to='/'>Home</Link></li>
        <li className="nav-link active"><Link to='/how-to-use'>How to use</Link></li>
        <li className="nav-link active"><Link to='/Dashboard'>Dashboard</Link></li>
        <li className="nav-link active"><Link to='/account'>My Account</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
