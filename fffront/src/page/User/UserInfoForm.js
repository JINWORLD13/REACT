/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { userApi } from "../../api/api";
import { Form, H2, Label, Div } from "./UserInfoForm.styled";
import { hasAccessToken } from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";

const UserInfoForm = () => {
  // ~
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    role: "",
  });

  if (hasAccessToken() === false) return <LoginForm from="UserInfoForm" />;

  useEffect(() => {
    async function fetchData() {
      const result = await userApi.getInfo();
      setForm(result);
    }
    fetchData();
  }, []);

  return (
    <Form>
      <H2>마이 페이지(유저 정보)</H2>
      <Label htmlFor="email">이름</Label>
      <Div name="email">{form.name}</Div>
      <Label htmlFor="phoneNumber">핸드폰 번호</Label>
      <Div name="phoneNumber">{form.phoneNumber}</Div>
      <Label htmlFor="address">거주지</Label>
      <Div name="address">{form.address}</Div>
    </Form>
  );
};

export default UserInfoForm;
