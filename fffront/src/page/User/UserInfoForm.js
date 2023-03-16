/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { userApi, apiWithAccessToken } from "../../api/api";
import { Form, H2, Label, Div } from "./UserInfoForm.styled";
import { hasAccessToken, getAccessToken, getRefreshToken } from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";

const UserInfoForm = () => {
  // ~
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  if (hasAccessToken() === false) return <LoginForm from='UserInfoForm'/>;

  useEffect(async () => {
    await userApi.getInfo()
      .then((data) => {
        const { name , phoneNumber, address } = data.data.data.userInfo;
        setForm({ name , phoneNumber, address });
        alert("회원정보 가져오기에 성공했습니다.");
      })
      .catch(async(err) => {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();
        await apiWithAccessToken(accessToken, refreshToken)
          .get("/user")
          .then(async (res) => {
            if (res.data.data.newAccessToken?.length > 0) {
              await apiWithAccessToken(
                res.data.data.newAccess,
                res.data.data.refreshToken
              ).then((res) =>
                alert("회원정보 불러오기 완료!(액세스토큰을 리프레쉬함.)")
              );
            }
            alert("회원정보 불러오기 완료!");
          });
        alert("회원정보 가져오기에 실패했습니다.");
      });
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
