import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "./page/Login/LoginForm";
import RegisterForm from "./page/Register/RegisterForm";
import UserForm from "./page/User/UserForm";
import Main from "./page/Main/Main";

import Happiness from "./components/classify/Happiness";

function App() {
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
      <Main />
      {/* <Routes>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/mypage" element={<UserForm />}/>
      </Routes> */}
    </div>
  );
}

export default App;
