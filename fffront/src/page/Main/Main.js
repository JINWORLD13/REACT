import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// 사용할 컴포넌트 import
import { ROUTE_ARR } from "../../components/Routers/ROUTE"
import Header from '../../components/Header.js';

const Main = () => {
  // 처음 페이지(App.js) 들어가면 localStorage에 빈데이터 형식만 저장하다록 셋.
  useEffect(() => {
    // 비어있지 않으면 []로 초기화 하지 말라고.
    if (
      localStorage.getItem("token") === [] ||
      localStorage.getItem("token") == null
    ) {
      localStorage.setItem("token", JSON.stringify([]));
    }
  }, []);
  
  return (
    <div>
      <Router>
        <Header />
        <div>
        <Routes>
          {ROUTE_ARR.map((route, index) => {
            return (
              <Route path={route.path} element={<route.element />} key={index} />
            );
          })}
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
