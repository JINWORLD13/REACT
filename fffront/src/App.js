/*eslint-disable*/
import { useEffect } from "react";
import Main from "./page/Main/Main";


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
    </div>
  );
}

export default App;
