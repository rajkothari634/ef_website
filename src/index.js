import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <BrowserRouter basename="https://rajkothari634.github.io/ef_website/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
