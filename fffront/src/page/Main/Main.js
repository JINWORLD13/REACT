import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import  Header from '../../components/Header.js';
import App from '../../App.js';


const Main = () => {
  return (
    <div>
      <Header />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          {/* <Route>this is Main Page.</Route>
          <Route>this is Main Page.</Route> */}
        {/* </Routes> */}
      {/* </Router> */} 
    </div>
  );
};

export default Main;
