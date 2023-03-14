import axios from "axios";
import { getCookie } from "react-cookie";

// baseURL을 생성하면 api 호출시 공통되는 기본 URL을 반복해서 입력하지 않아도 된다.
const api = axios.create({
  // !
  baseURL: "http://localhost:8080/api",
  //쿼리로 넘길 키들을 headers 객체에 키밸류로 순서대로 넣어준다.
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

// ! cookie에서 토큰을 가져옴. -> cookie에 토큰 저장하는 법 및 데이터(토큰)형식 벡엔드와 상의
// const access_token = getCookie("access_token");
// const refresh_token = getCookie("refresh_token");

// 로컬스토리지에서 토큰을 가져옴.
const access_token = localStorage.getItem("token");
// const refresh_token = localStorage.getItem("token").refreshToken;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// &

// 위에서 설정한 api에 method를 포함시켜서 간결하게 호출할 수 있게 된다.
export const userApi = {
  signUp: async (form) => {
    // form은 obj여야 함.
    return await api.post("/register", {
      ...form,
    });
  },
  modify: async (form) => {
    // header에 token이 필요한 api를 호출할 경우 자동으로 header에 값이 들어가게 된다.
    api.interceptors.request.use((config) => {
      config.headers.common["Authorization"] = access_token;
      // !
      // config.headers.common["Refresh-Token"] = refresh_token;
      return config;
    });
    return await api.post("/user", {
      ...form,
    });
  },
  // ! cookie로 할건지 말지 결정해야. 이건 로컬스토리지.
  logIn: async (form) => {
    return await api
      .post("/login", { ...form })
      .then((data) => {
        // localStorage 내 키값이 'token'인 항목에 추가(getItem->처리(수정, set화, array화)->setItem)
        // setItem 은 덮어씌우니 getItem으로 불러서 추가
        let tokens = localStorage.getItem("token"); // 배열 & json 형태임.
        tokens = JSON.parse(tokens);
        tokens.unshift(data.token); // ! 배열 앞에다 생성된 토큰 추가
        localStorage.setItem("token", JSON.stringify(tokens));
      })
      .catch((err) => alert(err));
  },
};

export const districtsApi = {
  getData: async () => {
    return await api.get("/districts");
  },
};

export default api;
