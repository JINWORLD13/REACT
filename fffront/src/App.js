import './App.css';
import { Routes, Route} from 'react-router-dom';
import LoginForm from './page/Login/LoginForm';
import RegisterForm from './page/Register/RegisterForm';
import UserForm from './page/User/UserForm';

import Happiness from './components/classify/Happiness';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/join" element={<RegisterForm/>} />
        <Route path="/mypage" element={<UserForm/>} />
      </Routes>
      <Happiness />
    </div>
  );
}


export default App;
