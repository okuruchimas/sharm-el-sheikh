import React from "react";
import styled from "@emotion/styled";

interface Props {
  text: string;
  color: string;
}
const Button = ({ text, color }: Props) => {
  return <ButtonStyled color={color}>{text}</ButtonStyled>;
};

const ButtonStyled = styled.button<{ color: string }>`
  min-width: 156px;
  width: max-content;
  height: 52px;
  border-radius: 16px;
  padding: 16px 32px;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  color: ${({ theme: { colors } }) => colors.blue};
  background: ${({ theme: { colors }, color }) => colors[color]};
  border: 1px solid ${({ theme: { colors } }) => colors.yellow};
  font-family: Comfortaa, serif;
`;

export default Button;
