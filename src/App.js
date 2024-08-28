import React from "react";
import "./App.css";
import { Footer, Header, Blog, Features, Possibility, WhatGPT3 } from "./containers";
import { Brand, Cta, Navbar } from "./components";


function App() {
  return (
    <div className="App">
  <div className="gradient__bg">
    <Navbar />
    <Header />
  </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
    </div>
  );
}

export default App;
