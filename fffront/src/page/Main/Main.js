import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 사용할 컴포넌트 import
import { ROUTE_ARR } from "../../components/Routers/ROUTE";
import Header from "../../components/Header.js";

const Main = () => {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            {ROUTE_ARR.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<route.element />}
                  key={index}
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
