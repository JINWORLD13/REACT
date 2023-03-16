import Home from "../../page/Home";
import CulturalEnv from "../../components/classify/CulturalEnv";
import Happiness from "../../components/classify/Happiness";
import LoginForm from "../../page/Login/LoginForm";
import RegisterForm from "../../page/Register/RegisterForm";
import UserChangeForm from "../../page/User/UserChangeForm";
import UserWithdrawForm from "../../page/User/UserWithdrawForm";
import UserInfoForm from "../../page/User/UserInfoForm";
import { hasAccessToken } from "../../utils/tokenFunction";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Home,
    withToken: hasAccessToken(),
    name:'홈'
  },
  CULTURAL_ENV: {
    path: "/CulturalEnv/",
    link: "/CulturalEnv",
    element: CulturalEnv,
    withToken: hasAccessToken(),
    name:'문화 환경'
  },
  HAPPINESS: {
    path: "/Happiness",
    link: "/Happiness",
    element: Happiness,
    withToken: hasAccessToken(),
    name:'행복 지수'
  },
  LOGINFORM: {
    path: "/LoginForm",
    link: "/LoginForm",
    element: LoginForm,
    withToken: hasAccessToken(),
    name:'로그인'
  },
  REGISTERFORM: {
    path: "/RegisterForm",
    link: "/RegisterForm",
    element: RegisterForm,
    withToken: hasAccessToken(),
    name:'회원가입'
  },
  USERINFOFORM: {
    path: "/UserInfoForm",
    link: "/UserInfoForm",
    element: UserInfoForm,
    withToken: hasAccessToken(),
    name:'마이페이지(유저 정보)'
  },
  USERCHANGEFORM: {
    path: "/UserChangeForm",
    link: "/UserChangeForm",
    element: UserChangeForm,
    withToken: hasAccessToken(),
    name:'마이 페이지(유저 정보 변경)'
  },
  USERWITHDRAWFORM: {
    path: "/UserWithdrawForm",
    link: "/UserWithdrawForm",
    element: UserWithdrawForm,
    withToken: hasAccessToken(),
    name:'마이 페이지(회원 탈퇴)'
  },
};

export const ROUTE_ARR = Object.values(ROUTE);