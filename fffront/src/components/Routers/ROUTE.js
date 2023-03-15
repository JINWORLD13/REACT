import Home from "../../page/Home";
import CulturalEnv from "../../components/classify/CulturalEnv";
import Happiness from "../../components/classify/Happiness";
import LoginForm from "../../page/Login/LoginForm";
import RegisterForm from "../../page/Register/RegisterForm";
import UserForm from "../../page/User/UserForm";
import { hasAccessToken } from "../../utils/tokenFunction";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Home,
  },
  CULTURAL_ENV: {
    path: "/CulturalEnv/",
    link: "/CulturalEnv",
    element: CulturalEnv,
  },
  HAPPINESS: {
    path: "/Happiness",
    link: "/Happiness",
    element: Happiness,
  },
  LOGINFORM: {
    path: "/LoginForm",
    link: "/LoginForm",
    element: LoginForm,
    withToken: hasAccessToken()
  },
  REGISTERFORM: {
    path: "/RegisterForm",
    link: "/RegisterForm",
    element: RegisterForm,
    withToken: hasAccessToken()
  },
  USERFORM: {
    path: "/UserForm",
    link: "/UserForm",
    element: UserForm,
    withToken: hasAccessToken()
  },
};

export const ROUTE_ARR = Object.values(ROUTE);