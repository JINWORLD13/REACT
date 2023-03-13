// eslint-disable
import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // ~
  const [form, setForm] = useState({
    inputEmail: "",
    inputPw: "",
  });
  // const [emailMsg, setEmailMsg] = useState('')
  // const [pwMsg, setPwMsg] = useState('')
  const navigate = useNavigate();

  // ~
  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputEmail = (e) => {
    if(form.inputEmail.length>0){
      setForm(e.target.value, form.inputPw);
    } else {
      setForm(e.target.value, "")
    }
  };
  const handleInputPw = (e) => {
    if(form.inputEmail.length>0){
      setForm(form.inputEmail, e.target.value);
    } else {
      setForm("", e.target.value)
    }
  };

  //~
  // 유효성 검사(형식 체크)
  const validateInputEmail = (inputEmail) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(inputEmail);
  };
  const validateInputPw = (inputPw) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/;
    return pwRegex.test(inputPw)
  };

  // 유효성 검사 함수로 정리하기(true?)
  const isInputEmailValid = validateInputEmail(form.inputEmail);
  const isInputPwValid = validateInputPw(form.inputPw);

  // ~
  // login 버튼 클릭 이벤트 (백에서 생성된 토큰을 프론트에서 로컬스토리지에 저장)
  const onClickLogin = async () => {
    if (isInputEmailValid && isInputPwValid === true){
      await axios
      .post("http:localhost:8080/api/login", { ...form })
      .then((data) => {
        // localStorage 내 키값이 'token'인 항목에 추가(getItem->처리(수정, set화, array화)->setItem)
        // setItem 은 덮어씌우니 getItem으로 불러서 추가
        let tokens = localStorage.getItem("token"); // 배열 & json 형태임.
        tokens = JSON.parse(tokens);
        tokens.unshift(data.token); // 배열 앞에다 생성된 토큰 추가
        localStorage.setItem("token", JSON.stringify(tokens));
      })
      .catch((err) => alert(err));
    }
    
  };

  return (
    <div>
      <Nav>
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
      </Nav>

      <Wrapper>
        <H2>Far-Away Home</H2>
        <Form action="" method="post">
          <Label htmlFor="input_id">이메일</Label>
          <Input
            type="text"
            name="input_id"
            value={form.inputEmail}
            style={{ fontSize: "25px" }}
            onChange={handleInputEmail}
            placeholder="아이디를 입력해주세요."
          />
          <Label htmlFor="input_pw">비밀번호</Label>
          <Input
            type="text"
            name="input_pw"
            value={form.inputPw}
            style={{ fontSize: "25px" }}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력해주세요."
          />
          <Button style={{marginTop:"40px"}} type="button" onClick={e=>{onClickLogin(e)}}>
            로 그 인
          </Button>
          <Button type="button" onClick={() => navigate("/register")}>
            회 원 가 입
          </Button>
        </Form>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 90px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 54px;

  color: #000000;
`;
const Label = styled.label`
  width: 700px;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;

  color: #000000;
`;
const Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 700px;
  height: 80px;

  background: #ffffff;
  border: 1px solid #000000;
`;

const Button = styled.button`
  width: 560px;
  height: 70px;
  margin-bottom: 30px;

  background: rgba(44, 65, 251, 0.73);
  border-radius: 30px;
  border-color: rgba(44, 65, 251, 0.73);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
`;

export default LoginForm;
