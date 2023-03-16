// 로그인 후 액세스토큰(키값)을 로컬스토리지에 저장하는 함수
export const setAccessToken = (accessTokenKey) => {
  // 서버에서 전송된 json형식의 토큰을 그대로 localStorage에 넣어줌.
  localStorage.setItem("accessToken", accessTokenKey);
};
// 로그인 후 리프레쉬토큰(키값)을 로컬스토리지에 저장하는 함수
export const setRefreshToken = (refreshTokenKey) => {
  // 서버에서 전송된 json형식의 토큰을 그대로 localStorage에 넣어줌.
  localStorage.setItem("refreshToken", refreshTokenKey);
};

// 로그아웃 시 로컬스토리지에서 액세스토큰을 삭제하는 함수
export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};
// 로그아웃 시 로컬스토리지에서 액세스토큰을 삭제하는 함수
export const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

// 로그인상태 확인을 위해 로컬스토리지에서 액세스토큰(키값)을 가져오는 함수
export const getAccessToken = () => {
  return localStorage.getItem("accessToken") ?? null;
};
// 액세스토큰 갱신을 위해 로컬스토리지에서 리프레쉬토큰(키값)을 가져오는 함수
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken") ?? null;
};

// 유효한 액세스 토큰(키값)이 있는지 여부를 확인하는 함수
export const hasAccessToken = () => {
  const accessToken = getAccessToken();
  return accessToken !== null; // 유효한 token이 있으면 true, 토큰 자체가 없으면 false
};
export const hasRefreshToken = () => {
  const refreshToken = getRefreshToken();
  return refreshToken !== null; // 유효한 token이 있으면 true, 없으면 false
};
