import React from "react";
import "./App.css";

import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>

      <div className="About">
        <About></About>
      </div>
      <div className="work">
        <Work></Work>
      </div>
    </div>
  );
}

export default Home;
