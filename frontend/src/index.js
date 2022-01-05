import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

import {RecoilRoot} from "recoil"

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
