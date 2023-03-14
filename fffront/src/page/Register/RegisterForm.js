/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { districtsApi, usersApi } from "../../api/api";
import { Wrapper, H2, Label, Input, Select, Button } from './ReigsterForm.styled';

const RegisterForm = () => {
  // ~
  const [form, setForm] = useState({
    inputEmail: "",
    inputPw: "",
    inputConfirmPw: "",
    inputName: "",
    inputPhoneNumber: "",
    selectedDistrict: "",
  });

  const handleState = (e) => {
    const { name, value } = e.target; // input 태그의 name속성(name을 state명이랑 같게 해야) 및 value속성을 뽑음
    setForm((form) => ({
      ...form, // state(객체형) 변경법
      [name]: value, // 표현법이 신기(대괄호 붙임)
    }));
  };

  // 지역구 이름 가져오기
  let districts;
  useEffect(() => {
    districts = districtsApi.getData();
  }, []);

  // ~
  // 1단계 : 유효성 검사(형식 체크)
  const validateInputEmail = (inputEmail) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(inputEmail);
  };
  const validateInputPw = (inputPw) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/;
    return pwRegex.test(inputPw);
  };
  const validateInputName = (inputName) => {
    const nameRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return nameRegex.test(inputName);
  };
  const validateInputPhoneNumber = (inputPhoneNumber) => {
    const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return phoneNumberRegex.test(inputPhoneNumber);
  };

  // 2단계 : 유효성 검사 함수로 정리하기(true?)
  const isInputEmailValid = validateInputEmail(form.inputEmail);
  const isInputPwValid = validateInputPw(form.inputPw);
  const isInputConfirmPwValid = form.inputPw === form.inputConfirmPw;
  const isInputNameValid = validateInputName(form.inputName);
  const isInputPhoneNumberValid = validateInputPhoneNumber(
    form.inputPhoneNumber
  );
  const isAllValid =
    isInputEmailValid &&
    isInputPwValid &&
    isInputConfirmPwValid &&
    isInputNameValid &&
    isInputPhoneNumberValid;

  // ~
  // post로 변경된 유저 데이터 등록
  const onSubmit = () => {
    e.preventDefault();
    if (isAllValid === true) {
      usersApi
        .signUp(form)
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
        <H2>회 원 가 입</H2>
        <Label htmlFor="input_email">이메일</Label>
        <Input
          type="text"
          name="inputEmail"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleState}
          placeholder="이메일을 입력해주세요."
        />
        <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputEmailValid === true || form.inputEmail.length == 0
                  ? { display: "none" }
                  : {
                      display: "block",
                      marginTop: "0px",
                      width: "700px",
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      color: "red",
                    }
              }
            >
              이메일 형식이 맞지 않습니다.
            </div>
          }
        </div>
        <Label htmlFor="input_pw">비밀번호</Label>
        <Input
          type="text"
          name="inputPw"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="비밀번호를 입력해주세요."
        />
        <Label htmlFor="inputConfirmPw">비밀번호 재입력</Label>
        <Input
          type="text"
          name="inputConfirmPw"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleState}
          placeholder="비밀번호를 재입력해주세요."
        />
        <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputConfirmPwValid === true ||
                form.inputConfirmPw.length === 0
                  ? { display: "none" }
                  : {
                      display: "block",
                      marginTop: "0px",
                      width: "700px",
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      color: "red",
                    }
              }
            >
              비밀번호가 일치하지 않습니다.
            </div>
          }
        </div>
        <Label htmlFor="inputName">이름</Label>
        <Input
          type="text"
          name="inputName"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleState}
          placeholder="이름을 입력해주세요."
        />
        <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputNameValid === true || form.inputName.length == 0
                  ? { display: "none" }
                  : {
                      display: "block",
                      marginTop: "0px",
                      width: "700px",
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      color: "red",
                    }
              }
            >
              이름 형식이 맞지 않습니다.
            </div>
          }
        </div>
        <Label htmlFor="inputPhoneNumber">핸드폰 번호</Label>
        <Input
          type="text"
          name="inputPhoneNumber"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleState}
          placeholder="핸드폰 번호를 입력해주세요."
        />
        <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputPhoneNumberValid === true ||
                form.inputPhoneNumber.length == 0
                  ? { display: "none" }
                  : {
                      display: "block",
                      marginTop: "0px",
                      width: "700px",
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      color: "red",
                    }
              }
            >
              핸드폰 번호 형식이 맞지 않습니다.
            </div>
          }
        </div>
        <Label htmlFor="selectedDistrict">주소</Label>
        <Select
          name="selectedDistrict"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="거주하는 지역구를 골라주세요."
        >
          {['강서구', '양천구', '강남구'].map((elem, i) => (
            <option key={i}>{elem}</option>
          ))}
        </Select>
        <Button style={{ marginTop: "40px" }} type="button" onClick={onSubmit}>
          회 원 가 입
        </Button>
      </Wrapper>
    </div>
  );
};

export default RegisterForm;
