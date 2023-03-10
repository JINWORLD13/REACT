import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import  Header from '../../components/Header.js';
import Home from '../Home.js';
// import LoginForm from '../Login/LoginForm.js';
       

const Main = () => {
  return (
    <div>
      <Router>
        <Header />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
