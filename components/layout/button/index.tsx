import React from "react";
import styled from "@emotion/styled";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  width: 156px;
  height: 52px;
  border-radius: 16px;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  color: #054e5c;

  background: #ffb901;
  font-family: Comfortaa, serif;
`;

export default Button;
