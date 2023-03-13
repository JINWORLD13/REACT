import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// 사용할 컴포넌트 import
import ROUTE from "../../components/Routers"
// import Header from '../../components/Header.js';
// import CulturalEnv from '../../components/classify/CulturalEnv';
// import Happiness from '../../components/classify/Happiness';
// import LoginForm from "../Login/LoginForm.js";
// import RegisterForm from "../Register/RegisterForm.js";
// import UserForm from "../../page/User/UserForm";
// import Home from '../Home.js';

const Main = () => {
  
  return (
    <div>
      <Router>
        <Header />
        <div>
        <ROUTE />
        </div>
      </Router>
    </div>
  );
};

export default Main;
