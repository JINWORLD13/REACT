// eslint-disable
import axios from 'axios'
import styled from 'styled-components'
import React, { useState, useEffect, useCallback } from 'react';
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

    // ! 유효성 검사
    const validateEmail = (email) => {
      return email
        .toLowerCase()
        .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
    };
  
    const validatePwd = (password) => {
      return password
        .toLowerCase()
        .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
    }
  
    const validateNickname = (nickname) => {
      return nickname
        .toLowerCase()
        .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/)
    }

    // ! 가자
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const [emailMsg, setEmailMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg]= useState("")
    const [nicknameMsg, setNicknameMsg] = useState("")


    // 1-1에 잡아뒀던 유효성 검사 함수로 정리하기
    const isEmailValid = validateEmail(email);
    const isPwdValid = validatePwd(password);
    const isConfirmPwd = password === confirmPwd;
    const isNicknameValid = validateNickname(nickname);


    //이메일 
    const onChangeEmail = useCallback( async (e) => {
      const currEmail = e.target.value;
      setEmail(currEmail);

      if (!validateEmail(currEmail)) {
        setEmailMsg("이메일 형식이 올바르지 않습니다.")
      } else {
          setEmailMsg("올바른 이메일 형식입니다.")
        }
      })

    //비밀번호
    const onChangePwd = useCallback((e) =>{
      const currPwd = e.target.value;
      setPassword(currPwd);

      if (!validatePwd(currPwd)) {
        setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.")
      } else {
        setPwdMsg("안전한 비밀번호입니다.")
      }
    }, [])

    //비밀번호 확인
    const onChangeConfirmPwd = useCallback((e) => {
      const currConfirmPwd = e.target.value;
      setConfirmPwd(currConfirmPwd);

      if (currConfirmPwd !== password) {
        setConfirmPwdMsg("비밀번호가 일치하지 않습니다.")
      } else {
        setConfirmPwdMsg("올바른 비밀번호입니다.")
      }
    }, [password])

    //닉네임
    const onChangeNickname = useCallback((e) => {
      const currNickname = e.target.value;
      setNickname(currNickname);

      if (!validateNickname(currNickname)) {
        setNicknameMsg("1글자 이상 9글자 미만으로 입력해주세요.")
      } else {
        setNicknameMsg("올바른 닉네임 형식입니다.")
      }
    }, []);
    
    const [checkMail, setCheckMail] = useState(false)
    const [checkNickname, setCheckNickname] = useState(false)

    const onCheckEmail = async (e) => {
      e.preventDefault();

      try { 
        const res = await axios.post("user/register/email", {email});

        const { result } = res.data;

        if (!result) {
            setEmailMsg("이미 등록된 메일입니다. 다시 입력해주세요.");
            setCheckMail(false);
        } else {
          setEmailMsg("사용 가능한 메일입니다.😊");
          setCheckMail(true);
        }

      } catch (err) {
        console.log(err);
      }
    }

    const onCheckNickname = async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post("user/register/nickname", {nickname});

        const { result } = res.data;

        if (!result) {
            setNicknameMsg("이미 등록된 닉네임입니다. 다시 입력해주세요.");
            setCheckNickname(false);
      } else {
          setNicknameMsg("사용 가능한 닉네임입니다.😊");
          setCheckNickname(true);
        }

      } catch (err) {
        console.log(err);
      }
    }


    return(
        <div>
            <Wrapper>
              <H2>Far-Away Home</H2>
              <Form action="" method="post">
                <Label htmlFor='input_id'>아이디</Label>
                <Input type='text' name='input_id' value={inputId} style={{ fontSize: "25px" }} onChange={handleInputId} placeholder="아이디를 입력해주세요."/>
                <Label htmlFor='input_pw'>비밀번호</Label>
                <Input type='text' name='input_pw' value={inputPw} style={{ fontSize: "25px" }} onChange={handleInputPw} placeholder="비밀번호를 입력해주세요."/>
                <Button1 type='button' onClick={onClickLogin}>로 그 인</Button1>
                <Button2 type='button' onClick={()=>navigate('/RegisterForm')}>회 원 가 입</Button2>
              </Form>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
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


