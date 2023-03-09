// eslint-disable
import axios from 'axios'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const navigate = useNavigate();
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/api/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return(
        <>
            
            <Ul>
                <Div><A href="/">Logo</A></Div>
                <Li><A href="/happiness">행복지수</A></Li>
                <Li><A href="/environment">문화 환경 만족도</A></Li>
                <Li><A href="/detail">등 등...</A></Li>
                <Li><A href="/login">로그인</A></Li>
                <Li><A href="/join">회원가입</A></Li>
            </Ul>
            
            <Hr/>
            <Login>
              <H2>Far-Away Home</H2>
              <div>
                  <Label1 htmlFor='input_id'>아이디</Label1>
                  <Input1 type='text' name='input_id' value={inputId} onChange={handleInputId} placeholder="아이디를 입력해주세요."/>
              </div>
              <div>
                  <Label2 htmlFor='input_pw'>비밀번호</Label2>
                  <Input2 type='text' name='input_pw' value={inputPw} onChange={handleInputPw} placeholder="비밀번호를 입력해주세요."/>
              </div>
              <div>
                  <Button1 type='button' onClick={onClickLogin}>로 그 인</Button1>
              </div>
              <div>
                  <Button2 type='button' onClick={()=>navigate('/join')}>회 원 가 입</Button2>
              </div>
            </Login>
        </>
    )
}
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

const Login = styled.div`
    padding : 300px;
    width : 60%;
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
    font-weight: 400;
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
    font-weight: 400;
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
const Button1 = styled.button`
    position: absolute;
    width : 560px;
    height : 70px;
    left : 440px;
    top : 636px;
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
const Button2 = styled.button`
    position: absolute;
    width : 560px;
    height : 70px;
    Left : 440px;
    top : 733px;
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

export default LoginForm


