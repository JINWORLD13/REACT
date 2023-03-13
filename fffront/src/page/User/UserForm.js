/*eslint-disable*/
import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";

const UserForm = () => {
  // ~
  const [form, setForm] = useState({
    inputEmail: "",
    inputPw: "",
    inputConfirmPw: "",
    inputName: "",
    inputPhoneNumber: "",
    selectedDistrict: "",
  });
  
  const handleInputEmail = (e) => {
    setForm(
      {...form,
      inputEmail: e.target.value,}
    );
  };
  const handleInputPw = (e) => {
    setForm(
      {...form,
        inputPw: e.target.value,}
    );
  };
  const handleInputConfirmPw = (e) => {
    setForm(
      {...form,
        inputConfirmPw: e.target.value,}
    );
  };
  const handleInputName = (e) => {
    setForm(
      {...form,
        inputName: e.target.value,}
    );
  };
  const handleInputPhoneNumber = (e) => {
    setForm(
      {...form,
        inputPhoneNumber: e.target.value,}
    );
  };
  const handleSelectedDistrict = (e) => {
    setForm(
      {...form,
        selectedDistrict: e.target.value,}
    );
  };

  // ~
  // 1단계 : 유효성 검사(형식 체크)
  const validateInputEmail = (inputEmail) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(inputEmail);
  };
  const validateInputPw = (inputPw) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/;
    return pwRegex.test(inputPw)
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
  const isInputPhoneNumberValid = validateInputPhoneNumber(form.inputPhoneNumber);
  const isAllValid = isInputEmailValid && isInputPwValid && isInputConfirmPwValid && isInputNameValid && isInputPhoneNumberValid 

  // ~
  // post로 유저 데이터 변경
  const handleUser = (e) => {
    e.preventDefault();
    if(isAllValid === true){
      const onClickModify = async () => {
        await axios
          .post('http://localhost8080/api/user', { ...form })
          .then(() => {
            alert("유저 정보가 변경되었습니다.");
          })
          .catch((err) => {
            alert("에러가 발생했습니다. 다시 시도해주세요.");
            console.log(err);
          });
      };
      onClickModify();
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
        <H2>마이 페이지</H2>
        <Label htmlFor="input_email">이메일</Label>
        <Input
          type="text"
          name="input_email"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleInputEmail}
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
          name="input_pw"
          style={{ fontSize: "25px" }}
          onChange={handleInputPw}
          placeholder="비밀번호를 입력해주세요."
        />
        <Label htmlFor="input_confirm_pw">비밀번호 재입력</Label>
        <Input
          type="text"
          name="input_confirm_pw"
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleInputConfirmPw}
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
        <Label htmlFor="input_name">이름</Label>
        <Input
          type="text"
          name="input_name"
          style={{ fontSize: "25px", marginBottom: '0px'}}
          onChange={handleInputName}
          placeholder="이름을 입력해주세요."
        />
         <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputNameValid === true|| form.inputName.length == 0
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
        <Label htmlFor="input_phone_number">핸드폰 번호</Label>
        <Input
          type="text"
          name="input_phone_number"
          style={{ fontSize: "25px", marginBottom: "0px"}}
          onChange={handleInputPhoneNumber}
          placeholder="핸드폰 번호를 입력해주세요."
        />
         <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputPhoneNumberValid === true|| form.inputPhoneNumber.length == 0
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
        <Label htmlFor="input_district">주소</Label>
        <Select
          name="seletected-district"
          style={{ fontSize: "25px" }}
          onChange={handleSelectedDistrict}
          placeholder="거주하는 지역구를 골라주세요."
        >
          {
            ["강서구", "양천구", "강남구"].map((elem, i) => (
              <option key={i}>{elem}</option>
            ))
          }
        </Select>
        <Button style={{marginTop:"40px"}} type="button" onClick={handleUser}>
          변 경 하 기
        </Button>
      </Wrapper>
    </div>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 10%;
  background-color: white;
  border: 5px solid black;
  margin-bottom: 100px;
`;
const Ul1 = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 40%;
  height: 100px;
  color: white;
  list-style-type: none;
  font-size: 2em;
`;
const Ul2 = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  color: white;
  list-style-type: none;
  font-size: 2em;
`;
const Ul3 = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  color: white;
  list-style-type: none;
  font-size: 2em;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;
const Link = styled.a`
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  text-align: center;
  line-height: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoDiv = styled.div`
  box-sizing: border-box;
  text-align: left;
  width: 130px;
  height: 80px;
  left: 20px;
  top: 31px;
  display: inline-block;
  align-items: center;
  vertical-align: middle;
  text-align: center;

  border: 1px solid #000000;
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
const Select = styled.select`
  width: 700px;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  height: 65px;

  color: #000000;
`;
const Button = styled.button`
  width: 560px;
  height: 70px;
  margin-bottom: 40px;

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

export default UserForm;
