// eslint-disable
import axios from "axios";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwForCheck, setInputPwForCheck] = useState("");
  const [selectedAddress, setInputAddress] = useState("");
  const [districts, setDistricts] = useState("");
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputPwForCheck = (e) => {
    setInputPwForCheck(e.target.value);
  };

  const handleSelectedAddress = (e) => {
    setInputAddress(e.target.value);
  };

  // 지역구 이름 가져오기
  useEffect(() => {
    axios.get('http//localhost:8080/api/join')
      .then(data => {
        // [...data.find(elem => elem["지역구"])]
      })
  }, [])

  // post로 데이터 등록 (회원가입 버튼 클릭 이벤트)
  const handleSubmit = (e) => {
    e.preventDefault(); // ! 기본으로 정의된 이벤트를 작동 안시키게 함 -> ?????????

    const formData = {
      inputId,
      inputPw,
      selectedAddress
    };
    const onSubmit = () => {
      // formData로 묶은 값을 구조분해해서 전달
      // useEffect 고민
      axios
        .post("http://localhost:8080/api/join", { ...formData })
        .then(() => {
          alert("회원가입이 완료되었습니다.");
        })
        .then(() => {
          navigate("/LoginForm");
        })
        .catch((err) => {
          alert("에러가 발생했습니다. 다시 시도해주세요.");
        });
    };
    onSubmit();
  };
  // 유효성 검사하는 로직인데 onSubmit에 2개의 함수를 넣어야 해서 보류
  // const handleSubmitCorrect = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // 값이 적절하지 않은 경우 빨간 테두리 (Form.Control.Feedback)

  return (
    <div>
      <Wrapper>
        <H2>Far-Away Home</H2>
        <Label htmlFor="input_id">아이디</Label>
        <Input
          type="text"
          name="input_id"
          value={inputId}
          style={{ fontSize: "25px" }}
          onChange={handleInputId}
          placeholder="아이디를 입력해주세요."
        />
        <Label htmlFor="input_pw">비밀번호</Label>
        <Input
          type="text"
          name="input_pw"
          value={inputPw}
          style={{ fontSize: "25px" }}
          onChange={handleInputPw}
          placeholder="비밀번호를 입력해주세요."
        />
        <Label htmlFor="input_pw">비밀번호 재입력</Label>
        <Input
          type="text"
          name="input_pw"
          value={inputPwForCheck}
          style={{ fontSize: "25px", marginBottom: '0px' }}
          onChange={handleInputPwForCheck}
          placeholder="비밀번호를 재입력해주세요."
        />
        <div style ={{height: '40px'}}>
          {
              <div style={inputPw === inputPwForCheck || inputPwForCheck.length === 0? {display:"none"}:{display:"block", width: '700px',
              textAlign: 'left',
              fontFamily: "Inter",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '25px',
              lineHeight: '24px', color:"red"}}>비밀번호가 일치하지 않습니다.</div>
          }
        </div>
        <Label htmlFor="input_address">주소</Label>
        <Select
          name="seletected-address"
          value={selectedAddress}
          style={{ fontSize: "25px" }}
          onChange={handleSelectedAddress}
          placeholder="거주하는 지역구를 골라주세요."
        >
          {
            ['강서구', '양천구', '강남구'].map((elem, i) => {
              <option>{elem}</option>
            })
          }
        </Select>
        <Button1 type="button" onClick={handleSubmit}>
          회 원 가 입
        </Button1>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
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

const Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 700px;
  height: 80px;

  background: #ffffff;
  border: 1px solid #000000;
`;

const Button1 = styled.button`
  width: 560px;
  height: 70px;
  margin-top: 40px;
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

export default RegisterForm;
