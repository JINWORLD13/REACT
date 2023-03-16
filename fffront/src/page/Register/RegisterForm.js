/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { districtsApi, userApi } from "../../api/api";
import {
  Form,
  H2,
  Label,
  Input,
  Select,
  Button,
} from "./ReigsterForm.styled";
import { hasAccessToken } from "../../utils/tokenFunction";
import Home from "../Home";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  if (hasAccessToken() === true) return <Home/>
  const navigate = useNavigate();
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

  // ! 지역구 이름 가져오기
  let districts;
  useEffect(() => {
    districts = districtsApi.getData();
  }, []);

  // ~
  // 1단계 : 유효성 검사(형식 체크)
  const validateInputEmail = (inputEmail) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i ; 
    return emailRegex.test(inputEmail);
  };
  const validateInputPw = (inputPw) => {
    const pwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return pwRegex.test(inputPw);
  };
  const validateInputName = (inputName) => {
    const nameRegex = /^[가-힣]{2,}$/u;
    return nameRegex.test(inputName);
  };
  const validateInputPhoneNumber = (inputPhoneNumber) => {
    const phoneNumberRegex = /^\d{11}$/ ;
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
  
  // ~
  // post로 변경된 유저 데이터 등록
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isInputEmailValid === false){
      alert('올바른 이메일을 입력해주세요.')
    } else if (isInputPwValid === false){
      alert('영문 대소문자, 숫자를 적어도 1개씩 포함 8자 이상 입력해주세요.')
    } else if (isInputConfirmPwValid === false){
      alert('재확인 비밀번호를 알맞게 입력해주세요.')
    } else if (isInputNameValid === false){
      alert('두 글자 이상의 한글로 이름을 입력해주세요.')
    } else if (isInputPhoneNumberValid === false){
      alert('11자리의 숫자로 핸드폰 번호를 입력해주세요.')
    }
    await userApi.signUp(form)
      .then((data) => {
        alert("회원가입 완료!");
        navigate('/LoginForm');
      })
      .catch((err) => alert("회원가입에 실패했습니다. 다시 시도해주세요."));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {/* <Wrapper> */}
        <H2>회 원 가 입</H2>
        <Label htmlFor="inputEmail">이메일</Label>
        <Input
          type="text"
          id="inputEmail"
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
        <Label htmlFor="inputPw">비밀번호</Label>
        <Input
          type="text"
          id="inputPw"
          name="inputPw"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleState}
          placeholder="비밀번호를 입력해주세요."
        />
        <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputPwValid === true || form.inputPw.length == 0
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
              영문 대소문자, 숫자 포함 8자 이상 입력해주세요.
            </div>
          }
        </div>
        <Label htmlFor="inputConfirmPw">비밀번호 재입력</Label>
        <Input
          type="text"
          id="inputConfirmPw"
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
          id="inputName"
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
          id="inputPhoneNumber"
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
          id="selectedDistrict"
          name="selectedDistrict"
          style={{ fontSize: "25px" }}
          placeholder="거주하는 지역구를 골라주세요."
          onChange={handleState}
          required
        >
          <option value="">선택해주세요</option>
          {["강서구", "양천구", "강남구"].map((elem, i) => (
            <option key={i} >{elem}</option>
          ))}
        </Select>
        <Button style={{ marginTop: "40px" }} type="submit">
          회 원 가 입
        </Button>
        {/* </Wrapper> */}
      </Form>
    </div>
  );
};

export default RegisterForm;
