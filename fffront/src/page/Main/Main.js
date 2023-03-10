import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// 사용할 컴포넌트 import
import Header from '../../components/Header.js';
import CulturalEnv from '../../components/classify/CulturalEnv';
import Happiness from '../../components/classify/Happiness';
import Home from '../Home.js';

const Main = () => {
  return (
    <div>
      <Router>
        <Header />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CulturalEnv" element={<CulturalEnv />} />
          <Route path="/Happiness" element={<Happiness />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
