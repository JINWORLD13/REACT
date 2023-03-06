import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

// 아직 사용 안하는 import 그룹.
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // email, password 불러오는 get 요청
  const handleSubmit = (e) => {
    
    e.prevent.default();

    axios
      .get("", { email , password })
      }

  // const handleSubmitCorrect = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };
  
  return (
    <div style = {{
      display : 'flex',
      justifyContent : 'center'
    }}>
    <Login>
      <FloatingLabel
        controlId="floatingInput"
        label="이메일"
        className="mb-3"
        onChange={ (e) => setEmail(e.target.value)}>
        <Form.Control type="email"/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="비밀번호"
        onChange={ (e) => setPassword(e.target.value)}>
        <Form.Control type="password"/>
      </FloatingLabel>
    <div style = {{
      display : 'flex',
      justifyContent : 'flex-end',
      padding : '20px'
    }}>
      <Button type = 'submit' style = {{
        borderRadius : '5px',
        backgroundColor : 'grey',
        borderColor : 'grey'
      }}
        onClick={ handleSubmit } >
          로그인
      </Button>
      <Button style = {{
        marginLeft : '5px',
        borderRadius : '5px',
        backgroundColor : 'grey',
        borderColor : 'grey'
      }}>
        <Link to='/RegisterForm' style = {{
              textDecoration : 'none',
              color : 'white'
              }}>회원가입
        </Link>
      </Button>
    </div>
    </Login>
  </div>
  );
}

const Login = styled.div`
    padding : 300px;
    width : 60%;
`

export default LoginForm;