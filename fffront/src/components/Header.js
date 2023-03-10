import React from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Main from '../page/Main/Main.js';

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
// a링크 대신 버튼으로 페이지 보낼 예정
const ButtonStyled = styled.div`
  & button {
    background: none;
    border: none;
    height: 85px;
    width: 130px;
    background-color: rgba(44, 65, 251, 0);
    border-radius: 10%;
    pointer-events: painted;
    margin-right: 30px;
    display: inline;
    font-size: x-large;
    font-weight: bolder;
    :hover {
      background-color: #ffffff;
      cursor: pointer;
    }
  }
`;

const Header = () => {
  // usehistory 신버전
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <LogoStyled>
          <img className="Logo" src="./logo192.png" alt="임시로고" />
        </LogoStyled>
        <NavStyled>
          <ButtonStyled>
            <button onClick={() => navigate("/login")}>
              <span>로그인</span>
            </button>
            <button onClick={() => navigate("/signin")}>
              <span>회원가입</span>
            </button>
            <button onClick={() => navigate("/landing")}>
              <span>소개페이지</span>
            </button>
          </ButtonStyled>
        </NavStyled>
      </Container>
    </div>
  );
};

export default Header;
