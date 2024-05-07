import React from "react";
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="nav-link active"><Link to='/'>Home</Link></li>
        <li className="nav-link active"><Link to='/'>How to use</Link></li>
        <li className="nav-link active"><Link to='/'>Contact</Link></li>
        <li className="nav-link active"><Link to='/'>My Account</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
