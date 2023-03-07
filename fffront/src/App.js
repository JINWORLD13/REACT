import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './page/Login/LoginForm';
import RegisterForm from './page/Register/RegisterForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/join" element={<RegisterForm/>} />
      </Routes>
    </div>
  );
}


export default App;
