// 로그인 후 토큰을 로컬스토리지에 저장하는 함수
export const setToken = (token) => {
  // ! accessToken인지 아닌지 혹은 refresh도 한꺼번에?
  localStorage.setItem("token", token);
  // 아래 코드들은 여러개의 값들이 배열로 저장될 경우(여기선 필요 없다. 토큰은 개인마다 고유로 하나만 부여되니.)
  // localStorage 내 키값이 'token'인 항목에 추가(getItem->처리(수정, set화, array화)->setItem)
  // setItem 은 덮어씌우니 getItem으로 불러서 추가
  // let tokenBox = localStorage.getItem("token"); // 배열 & json 형태임.
  // tokenBox = JSON.parse(tokenBox);
  // tokenBox.unshift(token); // ! 배열 앞에다 생성된 토큰 추가
  // localStorage.setItem("token", JSON.stringify(tokenBox));
};

// 로그아웃 시 로컬스토리지에서 토큰을 삭제하는 함수
export const removeToken = () => {
  localStorage.removeItem("token");
};

// 로그인 상태 확인을 위해 로컬스토리지에서 토큰을 가져오는 함수
export const getToken = () => {
  return localStorage.getItem("token");
};

// 토큰이 있는지 여부를 확인하는 함수
export const hasToken = () => {
  return !getToken(); // "!" 기호는 어떤 값을 불리언 값으로 변환하는 축약형. getToken() 반환값이 null이면 falsy값이니 false가 나옴.
};

// 로컬스토리지에서 access 및 refresh 토큰을 가져옴.
export const accessToken = getToken().accessToken;
export const refreshToken = getToken().refreshToken;