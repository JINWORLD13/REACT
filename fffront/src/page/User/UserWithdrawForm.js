/*eslint-disable*/
import React, { useState } from "react";
import { userApi } from "../../api/api";
import { Form, H2, Label, Input, Button } from "./UserInfoForm.styled";
import {
  hasAccessToken,
} from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const isInputConfirmPwValid = form.inputPw === form.inputConfirmPw;

  // ~
  // post로 유저 데이터 변경
  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.inputPw === form.inputConfirmPw) {
      const result = await userApi.withdraw(form.inputPw);
      if (result === "success") {
        navigate("/");
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  if (hasAccessToken() === false) return <LoginForm from="/UserWithdrawForm" />;

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
          style={{ fontSize: "25px", marginBottom: "0px" }}
          onChange={handleState}
          placeholder="비밀번호를 재입력해주세요."
        />
        <div style={{ height: "40px" }}>
          {
            <div
              style={
                isInputConfirmPwValid === true ||
                form.inputConfirmPw.length === 0
                  ? { display: "none" }
                  : {
                      display: "block",
                      marginTop: "0px",
                      width: "700px",
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      color: "red",
                    }
              }
            >
              비밀번호가 일치하지 않습니다.
            </div>
          }
        </div>
        <Button style={{ marginTop: "40px" }} type="submit">
          탈 퇴 하 기
        </Button>
      </Form>
    </div>
  );
};

export default UserWithdrawForm;
