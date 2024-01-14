import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "shared/Header";
import Footer from "shared/Footer";
import Banner from "product/Banner";

const App = () => (
  <div style={{ width: "100%", maxWidth: "1440px" }}>
    <Header />
    <Banner />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
