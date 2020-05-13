import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app/components/app/App";
import * as serviceWorker from "./serviceWorker";
import history from "./app/constants/history";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
