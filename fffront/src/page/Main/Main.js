import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// 사용할 컴포넌트 import
import { ROUTE_ARR } from "../../components/Routers/ROUTE"
import Header from '../../components/Header.js';
import ProtectedRoute from '../../components/Routers/ProtectedRoute';
import UserForm from "../User/UserForm";

const Main = () => {
  
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
          <Route path='/UserForm' element={<ProtectedRoute element={<UserForm />} />}/>
        </Routes>

        </div>
      </Router>
    </div>
  );
};

export default Main;
