import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LutDemo from "./lutDemo.js";
import Home from "./components/Home.js";
import "./App.css";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <LutDemo></LutDemo> */}
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
