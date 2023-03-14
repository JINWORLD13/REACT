/*eslint-disable*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../api/api";
import { Wrapper, H2, Label, Input, Button } from "./LoginForm.styled";

function LoginForm() {
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

  //~
  // 유효성 검사(형식 체크)
  const validateInputEmail = (inputEmail) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(inputEmail);
  };
  const validateInputPw = (inputPw) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/;
    return pwRegex.test(inputPw);
  };

  // 유효성 검사 함수로 정리하기(true?)
  const isInputEmailValid = validateInputEmail(form.inputEmail);
  const isInputPwValid = validateInputPw(form.inputPw);
  const isAllValid = isInputEmailValid && isInputPwValid;

  // ~
  // login 버튼 클릭 이벤트 (백에서 생성된 토큰을 프론트에서 로컬스토리지에 저장)
  const onSubmit = () => {
    e.preventDefault();
    if (isAllValid === true) {
      usersApi.logIn(form);
    }
  };

  return (
    <div>
      {/* <Nav>
        <Ul1>
          <LogoDiv>
            <Link href="/">Logo</Link>
          </LogoDiv>
        </Ul1>
        <Ul2>
          <Li>
            <Link href="/happiness">행복지수</Link>
          </Li>
          <Li>
            <Link href="/environment">문화 환경 만족도</Link>
          </Li>
          <Li>
            <Link href="/price">가격 비교</Link>
          </Li>
          <Li>
            <Link href="/detail">아무개</Link>
          </Li>
        </Ul2>
        <Ul3>
          <Li>
            <Link href="/mypage">마이페이지</Link>
          </Li>
          <Li>
            <Link href="/login">로그인</Link>
          </Li>
          <Li>
            <Link href="/register">회원가입</Link>
          </Li>
        </Ul3>
      </Nav> */}

      <Wrapper>
        <H2>Far-Away Home</H2>
        <Label htmlFor="inputEmail">이메일</Label>
        <Input
          type="text"
          name="inputEmail"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="이메일을 입력해주세요."
        />
        <Label htmlFor="inputPw">비밀번호</Label>
        <Input
          type="text"
          name="inputPw"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button style={{ marginTop: "40px" }} type="button" onClick={onSubmit}>
          로 그 인
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate("/register");
          }}
        >
          회 원 가 입
        </Button>
      </Wrapper>
    </div>
  );
}

export default LoginForm;
