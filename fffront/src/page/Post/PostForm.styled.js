import styled from "styled-components";

export const All = styled.div`
  * {
    border: 3px solid red;
  }
  body {
    max-width: 1500px;
    max-height: 1500px;
    margin: 0 auto; /* 가운데 정렬을 위해 필요한 코드 */
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 3%;
  padding: 30px;
  width: 80%;
  height:80%;
  border: 1px solid black;
`;
export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  width: 70%;
  height:70%;
  border: 1px solid black;
`;
export const PostDiv = styled.div`
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 3%;
  width: 100%;
  height: 3%;
  border: 1px solid black;
  font-size: 1%;
`;

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 5%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;

  color: #000000;
`;
export const Label = styled.label`
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

export const Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 700px;
  height: 80px;

  background: #ffffff;
  border: 1px solid #000000;
`;
export const Select = styled.select`
  width: 700px;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  height: 65px;

  color: #000000;
`;
export const Button = styled.button`
  width: 560px;
  height: 70px;
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
