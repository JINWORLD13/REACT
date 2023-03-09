import React from 'react';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import  styled from 'styled-components';
// import Main from '../page/Main/Main.js';

const Container = styled.div`
    display : flex; 
    /* margin : 10px 50px; */
    height: 120px;
    background-color: rgba(44, 65, 251, 0.65);
`

const LogoStyled = styled.div`
  position: absolute;
  margin-top:1% ;
  margin-left: 1%;
  width: 5%;
  height: 5%;
  & img {
        width : 100px;
        height : 100px;
    }
`
const NavStyled = styled.div`
    align-self : center; 
    list-style-type : none;
    margin-left: auto;
    & li {
        margin-right : 20px;
        display : inline
    }
`




const Header = ( ) => {
  // usehistory 신버전 
  const navigate = useNavigate();

  return (
    <div>
      <Container>
      <LogoStyled>
      <img className='Logo' src='./logo192.png' alt='임시로고' />
      </LogoStyled>
      <NavStyled>
        <li className='Icon'>로그인</li>
        <li className='Icon'>회원가입</li>
        <li className='Icon'>소개페이지</li>
      </NavStyled>
      </Container>
    </div>
  )
}

export default Header;