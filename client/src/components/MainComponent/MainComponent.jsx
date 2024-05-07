import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../MainComponent/Home/Home";

const MainComponent = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
};

export default MainComponent;
