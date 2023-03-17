import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../utils/tokenFunction";

// baseURL을 생성하면 api 호출시 공통되는 기본 URL을 반복해서 입력하지 않아도 된다.
export const api = axios.create({
  baseURL: "http://localhost:8080",
  //쿼리로 넘길 키들을 headers 객체에 키밸류로 순서대로 넣어준다.
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export const apiWithTokens = (accessToken, refreshToken) => {
  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
      "Refresh-Token": `${refreshToken}`,
      accept: "application/json",
    },
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// &

// 위에서 설정한 api에 method를 포함시켜서 간결하게 호출할 수 있게 된다.
export const userApi = {
  signUp: async (form) => {
    // form은 obj여야 함.
    return await api
      .post("/register", {
        ...form,
      })
      .then((data) => {
        alert("회원가입 완료!");
        return "success";
      })
      .catch((err) => alert("회원가입에 실패했습니다. 다시 시도해주세요."));
  },
  modify: async (form) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    return await apiWithTokens(accessToken, refreshToken)
      .put("/modify", {
        ...form,
      })
      .then(async (res) => {
        const newAccessToken = res?.data?.data?.newAccessToken ?? null;
        if (newAccessToken !== null) {
          setAccessToken(newAccessToken);
          await apiWithTokens(newAccessToken, refreshToken).then((res) => {
            alert("회원정보 수정 완료!(액세스토큰을 리프레쉬함.)");
            return "success";
          });
        }
        setAccessToken(res.data.data.newAccessToken);
        alert("회원정보 수정 완료!");
        return "success";
      })
      .catch((err) =>
        alert("정보 변경에 실패했습니다. 다시 시도해주세요." + err)
      );
  },
  withdraw: async (inputPw) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    return await apiWithTokens(accessToken, refreshToken)
      .delete(`/withdraw`, {
        data: {
          inputPw,
        },
      })
      .then(async (res) => {
        const newAccessToken = res?.data?.data?.newAccessToken ?? null;
        if (newAccessToken !== null) {
          setAccessToken(newAccessToken);
          await apiWithTokens(newAccessToken, refreshToken).then((res) => {
            alert("회원탈퇴 완료!(액세스토큰을 리프레쉬함.)");
            removeAccessToken();
            removeRefreshToken();
            return "success";
          });
        }
        if (res.status === 204) {
          alert("회원탈퇴 완료!");
          removeAccessToken();
          removeRefreshToken();
          return "success";
        }
        alert("회원탈퇴에 실패했습니다.");
      })
      .catch((err) => alert("회원탈퇴에 실패했습니다." + err));
  },
  logIn: async (form) => {
    return await api
      .post("/login", { ...form })
      .then((data) => {
        const accessToken = data.data.data.accessToken;
        const refreshToken = data.data.data.refreshToken;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        alert("로그인에 성공했습니다.");
        // if (props.from === "/UserInfoForm") return navigate("/UserInfoForm");
        return "success";
      })
      .catch((err) => alert("로그인에 실패했습니다. 다시 시도해주세요."));
  },
  getInfo: async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    return await apiWithTokens(accessToken, refreshToken)
      .get("/user")
      .then(async (res) => {
        const statusCodeFirstDigit = parseInt(res.data.statusCode / 100);
        if (statusCodeFirstDigit >= 4) {
          alert("새로 로그인 하시기 바랍니다.");
          return "fail";
        }
        const userInfo = res?.data?.data?.userInfo ?? null;
        const newAccessToken = res?.data?.data?.newAccessToken ?? null;
        if (newAccessToken !== null) {
          setAccessToken(res?.data?.data?.newAccessToken);
          await apiWithTokens(newAccessToken, refreshToken).then((res) => {
            const userInfo = res.data.data.userInfo;
            alert("회원정보 가져오기에 성공했습니다(액세스토큰을 리프레쉬함).");
            return userInfo;
          });
        }

        return userInfo;
      })
      .catch((err) => {
        alert("회원정보 가져오기에 실패했습니다." + err);
        return "fail";
      });
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
