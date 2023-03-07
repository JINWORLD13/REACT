import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

function LoginForm() {
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  const submit = e =>{
    e.preventDefault();
    axios.get('/api/', {email, password})
  }

  return (
    <>
      <div style = {{
        display : 'flex',
        justifyContent : 'center'
      }}>
      <Login>
        <form className="mb-3">
          <label htmlFor="floatingInputCustom">Email</label>
          <form
            id="email"
            type="email"
            label="이메일"
            placeholder="name@example.com"
            onClick={ e => setEmail(e.target.email) }
          />
        </form>
        <form>
          <label htmlFor="floatingPasswordCustom">Password</label>
          <form
            id="password"
            type="password"
            label="비밀번호"
            placeholder="Password"
            onClick={ e => setPassword(e.target.password) }
          />
        </form>
        <button style={{
          borderRadius: "5px",
          backgroundColor: "blue",
          borderColor: "white"
        }}
        onClick={submit}>로그인</button>
      </Login>
      </div>
    </>
  );
}

const Login = styled.div`
    padding : 300px;
    width : 60%;
`

export default LoginForm