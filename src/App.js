import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LutDemo from "./pages/lutDemo.js";
import Footer from "./components/Footer";
import Home from "./pages/Home.js";
import "./App.css";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <LutDemo></LutDemo> */}
        <Home></Home>
      </div>
      <footer className="footer-home">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
