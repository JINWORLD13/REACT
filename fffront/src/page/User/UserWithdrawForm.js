/*eslint-disable*/
import React, { useState } from "react";
import { userApi } from "../../api/api";
import { Form, H2, Label, Input, Select, Button } from "./UserInfoForm.styled";
import { hasAccessToken } from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";

const UserWithdrawForm = () => {
  // ~
  const [form, setForm] = useState({
    inputPw: "",
    inputConfirmPw: "",
  });

  const handleState = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  // ~
  // post로 유저 데이터 변경
  const onSubmit = async () => {
    e.preventDefault();
    if( form.inputPw === form.inputConfirmPw ){
      await userApi.withdraw(form.inputPw);
      alert('회원 탈퇴 성공')
    }else{
      alert('비밀번호가 일치하지 않습니다.')
    }
  };

  if(hasAccessToken()===false) return <LoginForm from='/UserWithdrawForm'/>

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <H2>마이 페이지(회원 탈퇴)</H2>
        <Label htmlFor="inputPw">비밀번호</Label>
        <Input
          type="text"
          id="inputPw"
          name="inputPw"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="비밀번호를 입력해주세요."
        />
        <Label htmlFor="inputConfirmPw">비밀번호 재입력</Label>
        <Input
          type="text"
          id="inputConfirmPw"
          name="inputConfirmPw"
          style={{ fontSize: "25px" }}
          onChange={handleState}
          placeholder="비밀번호를 재입력해주세요."
        />
        <Button style={{ marginTop: "40px" }} type="submit">
          탈 퇴 하 기
        </Button>
      </Form>
    </div>
  );
};

export default UserWithdrawForm;
