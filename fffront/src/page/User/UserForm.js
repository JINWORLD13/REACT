import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  // post로 데이터 등록
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    const formData = {
      email,
      name,
      password,
      phoneNumber,
      address
    }
    const onSubmit = () => {
      // formData로 묶은 값을 구조분해해서 전달
      // useEffect 고민
      axios
        .post("http://localhost:8080/join", { ...formData })
        .then(() => {
          alert('회원가입이 완료되었습니다.')
        })
        .then(() => {
          navigate("/LoginForm")
        })
        .catch((err) => {
          alert('에러가 발생했습니다. 다시 시도해주세요.')
        })
    }
    onSubmit();
  }
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
            <Ul>
                <Div><A href="/">Logo</A></Div>
                <Li><A href="/happiness">행복지수</A></Li>
                <Li><A href="/environment">문화 환경 만족도</A></Li>
                <Li><A href="/detail">등 등...</A></Li>
                <Li><A href="/login">로그인</A></Li>
                <Li><A href="/join">회원가입</A></Li>
            </Ul>
            
            <Hr/>
            <Register>
              <H2>마이 페이지</H2>
              <div>
                  <Label1 htmlFor='input_id'>아이디</Label1>
                  <Input1 type='text' name='input_email' value={email} onChange={e => setEmail(e.target.email)}/>
              </div>
              <div>
                  <Label2 htmlFor='input_pw'>비밀번호</Label2>
                  <Input2 type='text' name='input_pw' value={password} onChange={e => setPassword(e.target.password)}/>
              </div>
              <div>
                  <Label3 htmlFor='pw_check'>비밀번호 재입력</Label3>
                  <Input3 type='text' name='input_pw' value={password} onChange={e => setPassword(e.target.password)}/>
              </div>
              <div>
                  <Button2 type='button' onClick={handleSubmit}>변 경 하 기</Button2>
              </div>
            </Register>
          </div>
  );
};

const Register = styled.div`
    display : flex;
    justify-content : space-around;
    padding : 150px;
`
const Div = styled.div`
    box-sizing: border-box;
    width: 130px;
    height: 100px;
    left: 20px;
    top: 31px;

    border: 1px solid #000000
`
const Ul = styled.ul`
    background-color: white;
    width : 100%;
    color: white;
    display: flex;
    padding 40px;
    list-style-type: none;
    text-align: center;
    align-items: center;
    font-size: 2em;
`
const Li = styled.li`
    margin-left: 30px;
`

const A = styled.a`
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`

const Hr = styled.hr`
    position: absolute;
    width: 100%;
    height: 0px;
    left: 0px;
    top: 157px;

    border: 5px solid #000000;
`

const H2 = styled.h2`
    position: absolute;
    width: 440px;
    height: 75px;
    left: 500px;
    top: 274px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 54px;
    text-align: center;

    color: #000000;
`
const Label1 = styled.label`
    position: absolute;
    width: 60px;
    height: 23px;
    left: 370px;
    top: 367px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400px;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
`
const Label2 = styled.label`
    position: absolute;
    width: 80px;
    height: 23px;
    left: 370px;
    top: 489px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400px;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
`
const Label3 = styled.label`
    position: absolute;
    width: 150px;
    height: 23px;
    left: 370px;
    top: 620px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400px;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
`
const Input1 = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 700px;
    height: 80px;
    left: 370px;
    top: 390px;

    background: #FFFFFF;
    border: 1px solid #000000;
`
const Input2 = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 700px;
    height: 80px;
    left: 370px;
    top: 512px;

    background: #FFFFFF;
    border: 1px solid #000000;
`
const Input3 = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 700px;
    height: 80px;
    left: 370px;
    margin-top: 12%;

    background: #FFFFFF;
    border: 1px solid #000000;
`
const Button2 = styled.button`
    position: absolute;
    width : 560px;
    height : 70px;
    Left : 440px;
    top : 780px;
    background : rgba(44, 65, 251, 0.73);
    border-radius : 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #FFFFFF;
`

export default UserForm;