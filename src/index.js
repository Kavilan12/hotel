import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Form from "./Form";
ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>
  
,document.getElementById("root"));