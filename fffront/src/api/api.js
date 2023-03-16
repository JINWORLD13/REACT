import axios from "axios";
import { setAccessToken, setRefreshToken, getAccessToken } from "../utils/tokenFunction";

// baseURL을 생성하면 api 호출시 공통되는 기본 URL을 반복해서 입력하지 않아도 된다.
export const api = axios.create({
  baseURL: "http://localhost:8080",
  //쿼리로 넘길 키들을 headers 객체에 키밸류로 순서대로 넣어준다.
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export const apiWithAccessToken = (accessToken) => {
  return axios.create({
    baseURL: "http://localhost:8080",
    //쿼리로 넘길 키들을 headers 객체에 키밸류로 순서대로 넣어준다.
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
};

export const apiWithRefreshToken = (refreshToken) => {
  return axios.create({
    baseURL: "http://localhost:8080",
    headers : {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      Authorization: `Basic ${refreshToken}`,
      accept: "application/json"
    },
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// &

// 위에서 설정한 api에 method를 포함시켜서 간결하게 호출할 수 있게 된다.
export const userApi = {
  signUp: async (form) => {
    // form은 obj여야 함.
    await api
      .post("/register", {
        ...form,
      })
      .then((data) => {
        alert("회원가입 완료!");
      })
      .catch((err) => alert("회원가입에 실패했습니다. 다시 시도해주세요."));
  },
  modify: async (form) => {
    const accessToken = getAccessToken();
    await apiWithAccessToken(accessToken)
      .put("/user", {
        ...form,
      })
      .then((res) => {
        alert("회원정보 수정 완료!");
      })
      .catch((err) => alert("정보 변경에 실패했습니다. 다시 시도해주세요."));
  },
  withdraw: async (inputPw) => {
    const accessToken = getAccessToken();
    await apiWithAccessToken(accessToken)
      .delete("/user", {
        inputPw
      })
      .then((res) => {
        alert("회원정보 삭제 완료!");
      })
      .catch((err) => alert("회원정보 삭제에 실패했습니다. 다시 시도해주세요."));
  },
  logIn: async (form) => {
    await api
      .post("/login", {...form})
      .then((data) => {
        const accessToken = data.data.data.accessToken;
        const refreshToken = data.data.data.refreshToken;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        alert("로그인에 성공했습니다.");
      })
      .catch((err) => alert("로그인에 실패했습니다. 다시 시도해주세요."));
  },
  getInfo: async () => {
    const accessToken = getAccessToken();
    await apiWithAccessToken(accessToken)
      .get("/user") //! url
      
  },
};

export const districtsApi = {
  getData: async () => {
    await api
      .get("/districts")
      .then((data) => {
        return data;
      })
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
