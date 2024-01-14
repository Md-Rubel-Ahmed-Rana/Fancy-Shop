import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <BrowserRouter>
      <RouterProvider router={router}></RouterProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
