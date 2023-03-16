/*eslint-disable*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/api";
import { Form, H2, Label, Input, Button } from "./LoginForm.styled";
import {
  hasAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../../utils/tokenFunction";
import Home from "../Home";

function LoginForm(props) {
  // ~
  const [form, setForm] = useState({
    inputEmail: "",
    inputPw: "",
  });
  const navigate = useNavigate();

  // ~
  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleState = (e) => {
    const { name, value } = e.target; // input 태그의 name속성(name을 state명이랑 같게 해야) 및 value속성을 뽑음
    setForm((form) => ({
      ...form, // state(객체형) 변경법
      [name]: value, // 표현법이 신기(대괄호 붙임)
    }));
  };

  // ~
  // login 버튼 클릭 이벤트 (백에서 생성된 토큰을 프론트에서 로컬스토리지에 저장)
  const onSubmit = async (e) => {
    e.preventDefault(); // 이거 없애면 입력값이 서버로 전송되기 전 새로고침 됨.
    await userApi
      .logIn(form)
      .then((data) => {
        const accessToken = data.data.data.accessToken;
        const refreshToken = data.data.data.refreshToken;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        alert("로그인에 성공했습니다.");
        if (props.from === "/UserInfoForm") return navigate("/UserInfoForm");
        navigate("/");
      })
      .catch((err) => alert("로그인에 실패했습니다. 다시 시도해주세요." + err));
  };
  if (hasAccessToken() === true) return <Home />;
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <H2>Far-Away Home</H2>
        <Label htmlFor="inputEmail">이메일</Label>
        <Input
          type="text"
          id="inputEmail"
          name="inputEmail"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="이메일을 입력해주세요."
        />
        <Label htmlFor="inputPw">비밀번호</Label>
        <Input
          type="text"
          id="inputPw"
          name="inputPw"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button style={{ marginTop: "40px" }} type="submit">
          로 그 인
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate("/RegisterForm");
          }}
        >
          회 원 가 입
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
