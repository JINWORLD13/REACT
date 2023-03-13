/*eslint-disable*/
import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// 사용할 컴포넌트 import
import CulturalEnv from "./classify/CulturalEnv";
import Happiness from "./classify/Happiness";



const Header = () => {

  return (
    <div>
      <Container>
        <LogoStyled>
        <NavLink to='/'><img className="Logo" src="./logo192.png" alt="임시로고" /></NavLink>
        </LogoStyled>
        <NavStyled>
          <ButtonStyled>
              <NavLink to='/Happiness'>행복 지수</NavLink>
              <NavLink to='/CulturalEnv'>문화 환경</NavLink>
              <NavLink to ='/LoginForm'>로그인</NavLink>
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
