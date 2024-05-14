import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../MainComponent/Home/Home";
import Use from "../MainComponent/Use/Use"
import Dashboard from "../MainComponent/Dashboard/Dashboard"
import Account from "../MainComponent/Account/Account"


const MainComponent = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-to-use' element={<Use />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </main>
  );
};

export default MainComponent;
