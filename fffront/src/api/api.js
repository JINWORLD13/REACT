import axios from "axios";
import { setToken } from "../utils/tokenFunction";
import { getCookie } from "react-cookie";

// baseURL을 생성하면 api 호출시 공통되는 기본 URL을 반복해서 입력하지 않아도 된다.
export const api = axios.create({
  baseURL: "http://localhost:8080",
  //쿼리로 넘길 키들을 headers 객체에 키밸류로 순서대로 넣어준다.
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export const apiWithToken = (token) => {
  axios.create({
    baseURL: "http://localhost:8080",
    //쿼리로 넘길 키들을 headers 객체에 키밸류로 순서대로 넣어준다.
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });
};

// ! cookie에서 토큰을 가져옴. -> cookie에 토큰 저장하는 법 및 데이터(토큰)형식 벡엔드와 상의
// const access_token = getCookie("access_token");
// const refresh_token = getCookie("refresh_token");

// 로컬스토리지에서 토큰을 가져옴.
const access_token = localStorage.getItem("token");
// const refresh_token = localStorage.getItem("token").refreshToken;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// &

// 위에서 설정한 api에 method를 포함시켜서 간결하게 호출할 수 있게 된다.
export const usersApi = {
  signUp: async (form) => {
    // form은 obj여야 함.
    await api
      .post("/register", {
        ...form,
      })
      .then((data) => {
        setToken(data.token);
        alert("회원가입 완료!");
      })
      .catch((err) => alert("회원가입에 실패했습니다. 다시 시도해주세요."));
  },
  modify: async (form) => {
    // interceptors 이용하는 방식 : header에 token이 필요한 api를 호출할 경우 자동으로 header에 값이 들어가게 된다.
    // api.interceptors.request.use((config) => {
    //   config.headers.common["Authorization"] = access_token;
    //   // !
    //   // config.headers.common["Refresh-Token"] = refresh_token;
    //   return config;
    // });

    await apiWithToken
      .post("/user", {
        ...form,
      })
      .then((res) => {
        alert("회원정보 수정 완료!");
      })
      .catch((err) => alert("정보 변경에 실패했습니다. 다시 시도해주세요."));
  },

  logIn: async (form) => {
    await api
      .post("/login", { ...form })
      .then((data) => {
        setToken(data.token);
        alert("로그인에 성공했습니다.");
      })
      .catch((err) => alert("로그인에 실패했습니다. 다시 시도해주세요."));
  },
};

export const districtsApi = {
  getData: async () => {
    await api.get("/districts")
      .then(data => {return data})
      .catch((err) => alert("지역 정보를 불러오지 못했습니다."));
  },
};

export const hospitalsApi = {
  getData: async (url) => {
    await fetch
      .get(`${url}`)
      .then((res) => {
        console.log(res);
        console.log(res.json());
        return res.json();
      })
      .catch((err) => alert("병원 정보를 불러오지 못했습니다."));
  },
};

export default api;
