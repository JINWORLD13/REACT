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
 
	// 페이지 렌더링 후(html, css만 보여준 후) 가장 처음 호출되는 함수(토큰 가져오기)
    useEffect(() => {
        axios.get('/api/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return(
        <div>
            <Nav>
              <Ul1>
              <LogoDiv>
                <Link href="/">Logo</Link>
              </LogoDiv>
              </Ul1>
              <Ul2>
                  <Li><Link href="/happiness">행복지수</Link></Li>
                  <Li><Link href="/environment">문화 환경 만족도</Link></Li>
                  <Li><Link href="/price">가격 비교</Link></Li>
                  <Li><Link href="/detail">아무개</Link></Li>
              </Ul2>
              <Ul3>
                  <Li><Link href="/mypage">마이페이지</Link></Li>
                  <Li><Link href="/login">로그인</Link></Li>
                  <Li><Link href="/join">회원가입</Link></Li>
              </Ul3>
            </Nav>
            
            <Wrapper>
              <H2>Far-Away Home</H2>
              <Label htmlFor='input_id'>아이디</Label>
              <Input1 type='text' name='input_id' value={inputId} style={{ fontSize: "25px" }} onChange={handleInputId} placeholder="아이디를 입력해주세요."/>
              <Label htmlFor='input_pw'>비밀번호</Label>
              <Input2 type='text' name='input_pw' value={inputPw} style={{ fontSize: "25px" }} onChange={handleInputPw} placeholder="비밀번호를 입력해주세요."/>
              <Button1 type='button' onClick={onClickLogin}>로 그 인</Button1>
              <Button2 type='button' onClick={()=>navigate('/join')}>회 원 가 입</Button2>
            </Wrapper>
        </div>
    )
}

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
const Input1 = styled.input`
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 700px;
  height: 80px;

  background: #ffffff;
  border: 1px solid #000000;
`;
const Input2 = styled.input`
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
  margin-top: 20px;
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

const Button2 = styled.button`
    width : 560px;
    height : 70px;
    margin-bottom: 30px;

    background : rgba(44, 65, 251, 0.73);
    border-radius : 30px;
    border-color : rgba(44, 65, 251, 0.73);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
`


export default LoginForm


