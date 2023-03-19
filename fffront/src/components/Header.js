/*eslint-disable*/
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
// 20220314 이효상 ROUTE import
import { ROUTE, ROUTE_ARR } from "../../src/components/Routers/ROUTE";
import { removeAccessToken, removeRefreshToken } from "../utils/tokenFunction";


const Header = () => {
  ROUTE_ARR.find((el) => el.path === location.pathname);

  return (
    <div style={{display:"block"}}>
      <Container>
        <LogoStyled>
        <NavLink to={ROUTE.HOME.link}><img className="Logo" src="./logo192.png" alt="임시로고" /></NavLink>
        </LogoStyled>
        <NavStyled>
          <ButtonStyled>
              <NavLink to={ROUTE.HAPPINESS.link}>행복 지수</NavLink>
              <NavLink to={ROUTE.CULTURAL_ENV.link}>문화 환경</NavLink>
              <NavLink to ={ROUTE.LOGINFORM.link}>로그인</NavLink>
              <NavLink to ={ROUTE.REGISTERFORM.link}>회원가입</NavLink>
              <NavLink to ={ROUTE.POSTFORM.link}>게시판</NavLink>
              <NavLink to ={ROUTE.USERINFOFORM.link}>마이페이지(유저 정보)</NavLink>
              <NavLink to ={ROUTE.USERCHANGEFORM.link}>마이페이지(유저 정보 변경)</NavLink>
              <NavLink to ={ROUTE.USERWITHDRAWFORM.link}>마이페이지(회원 탈퇴)</NavLink>
              <NavLink onClick={()=>{
                removeAccessToken();
                removeRefreshToken();
                }} to="/">로그아웃</NavLink>
          </ButtonStyled>
        </NavStyled>
      </Container>
    </div>
  );
};

// 스타일 영역
const Container = styled.div`
  display: flex;
  /* margin : 10px 50px; */
  height: 150px;
  background-color: rgba(44, 65, 251, 0.65);
`;

const LogoStyled = styled.div`
  position: absolute;
  margin-top: 1%;
  margin-left: 1%;
  width: 5%;
  height: 5%;
  & img {
    width: 100px;
    height: 100px;
  }
`;

//  네비게이션 스타일
const NavStyled = styled.div`
  align-self: center;
  list-style-type: none;
  margin-left: auto;
`;

const ButtonStyled = styled.div`  
  & a {
    padding : 1em;
    text-decoration: none;
    color: black;
    background: none;
    border: none;
    background-color: rgba(44, 65, 251, 0);
    border-radius: 10%;
    pointer-events: painted;
    margin-right: 1em;
    font-size: large;
    font-weight: bolder;
    :hover {
      background-color: #ffffff;
      cursor: pointer;
    } 
  }
`;
export default Header;
