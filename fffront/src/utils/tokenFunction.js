import jwt_decode from "jwt-decode";

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
  return localStorage.getItem("accessToken");
};
// 액세스토큰 갱신을 위해 로컬스토리지에서 리프레쉬토큰(키값)을 가져오는 함수
export const getRefreshToken = () => {
  const accessToken = getAccessToken();
  // 만료 시간을 체크한다.
  if (accessToken !== null && accessToken !== undefined) {
    const now = Date.now() / 1000; // 현재 시간을 초 단위로 가져옴
    const decodedToken = jwt_decode(accessToken); // 엑세스 토큰을 디코딩하여 페이로드 가져옴
    if (decodedToken.exp < now) {
      // 엑세스 토큰이 만료되었을 경우
      const refreshToken = getRefreshToken();
      return refreshToken;
    }
  }
};

// 유효한 액세스 토큰(키값)이 있는지 여부를 확인하는 함수
export const hasAccessToken = () => {
  const accessToken = getAccessToken() ?? null;
  if (accessToken !== null && accessToken !== undefined) {
    const now = Date.now() / 1000; // 현재 시간을 초 단위로 가져옴
    const decodedToken = jwt_decode(accessToken); // 엑세스 토큰을 디코딩하여 페이로드 가져옴
    if (decodedToken.exp < now) {
      return false;
    }
  }
  return accessToken !== null; // 유효한 token이 있으면 true, 토큰 자체가 없으면 false
};
export const hasRefreshToken = () => {
  const refreshToken = getRefreshToken() ?? null;
  return refreshToken !== null; // 유효한 token이 있으면 true, 없으면 false
};
