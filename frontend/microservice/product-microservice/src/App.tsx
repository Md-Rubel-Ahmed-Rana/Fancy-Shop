import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Banner from "./components/Banner";

const App = () => (
  <div>
    <Banner />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
