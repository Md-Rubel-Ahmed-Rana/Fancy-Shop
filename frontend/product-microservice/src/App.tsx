import React, {Suspense} from "react";
import ReactDOM from "react-dom";
const Header = React.lazy(() => import("common/Header"))
const Footer = React.lazy(() => import("common/Footer"))

import "./index.scss";


const App = () => {
  return (
 <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Header Loading...</div>} >
    <Header app={{name: "Home"}} />
    </Suspense>
    <Suspense fallback={<div>Footer Loading...</div>} >
    <Footer />
    </Suspense>
  </div>
  )
}

  

ReactDOM.render(<App />, document.getElementById("app"));
