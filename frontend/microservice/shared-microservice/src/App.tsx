import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Header />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
