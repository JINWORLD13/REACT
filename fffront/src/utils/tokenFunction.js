// 로그인 후 토큰을 로컬스토리지에 저장하는 함수
export const setToken = (token) => {
  // 서버에서 전송된 json형식의 토큰을 그대로 localStorage에 넣어줌.
  localStorage.setItem("token", token);
};

// 로그아웃 시 로컬스토리지에서 토큰을 삭제하는 함수
export const removeToken = () => {
  localStorage.removeItem("token");
};

// 로그인 상태 확인을 위해 로컬스토리지에서 토큰을 OBJECT화 해서 가져오는 함수
export const getToken = () => {
  return localStorage.getItem("token");
};

// 액세스 토큰이 있는지 여부를 확인하는 함수
export const hasAccessToken = () => {
  const token = JSON.parse(getToken());
  return token?.accessToken != null // token이 없으면 false, 있으면 true
}

// 로컬스토리지에서 access 및 refresh 토큰을 가져옴.
export const accessToken = JSON.parse(getToken())?.accessToken ?? null;
export const refreshToken = JSON.parse(getToken())?.refreshToken ?? null;