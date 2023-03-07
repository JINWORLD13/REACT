import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const UserUpdate = () => {

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [data, setData] = useState('')
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleUpdSubmit = (e) => {
    
    e.preventDefault();
    
    const formUpdData = {
    email,
    phoneNumber,
    address
    }
    const onUpdSubmit = () => {
    
    // formCreData로 묶은 값을 구조분해해서 전달
    axios
      // update로 회원 정보 변경
      .update("", { ...formUpdData })
      .then(() => {
        alert('회원정보 수정이 완료되었습니다.')
      })
      .then(() => {
        navigate("/UserInfo")
      })
      .catch((err) => {
        alert('에러가 발생했습니다. 다시 시도해주세요.')
      })
    }
    
    onUpdSubmit();
  }
    useEffect(() => {
      axios
      .get("http://localhost:8080/users/14")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        alert(error)
      })
    }, [])

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
        <Update>
          <Form noValidate validated={validated} style = {{ width : 600 }}>
            {/* 아이디 */}
            <Row className="mb-3" >
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>아이디</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder= {JSON.stringify(data.email)}
                  defaultValue=""
                  value= { email }
                  onChange={ (e) => setEmail(e.target.value)}
                  />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group> 
            </Row>
            {/* 전화번호 */}
              <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder = {JSON.stringify(data.phoneNumber)}
                  defaultValue = ""
                  value={ phoneNumber }
                  onChange={ (e) => setPhoneNumber(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              {/* 주소 */}
              <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>주소</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder = {JSON.stringify(data.address)}
                  defaultValue=""
                  value={ address }
                  onChange={ (e) => setAddress(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              <div style={{
                display : 'flex',
                justifyContent : 'flex-end'
              }}>
                <Button type="submit" style = {{
                  backgroundColor : 'grey',
                  border : 'grey',
                }} onClick = { handleUpdSubmit }>정보 수정</Button>
            </div>
          </Form>
          </Update>
        );
}

const Update = styled.div`
    display : flex;
    justify-content : space-around;
    padding : 150px;
`

export default UserUpdate;