import React from "react";
// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
// import components
import ProductDetails from "./pages/product-details";
import Store from "./pages/store";
import { URLS } from "./constants/routes";
import WebWrap from "./tools/components/web-wrap/web-wrap";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={URLS.store.route} element={<WebWrap />}>
            <Route path={URLS.store.route} element={<Store />} />
            {/* <Route
              path={URLS.productDetails.route}
              element={<ProductDetails />}
            /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
