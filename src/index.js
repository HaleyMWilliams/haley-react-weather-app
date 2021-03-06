import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather.js";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode className="App">
    <Weather defaultCity="New York" />
  </React.StrictMode>,
  rootElement
);
