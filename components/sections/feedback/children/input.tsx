import React from "react";
import styled from "@emotion/styled";
import { ErrorMessage, Field } from "formik";

interface Props {
  label: string;
  type: string;
  placeholder: string;
  as?: string;
}
const Input = ({ label, type, placeholder, as }: Props) => {
  return (
    <InputWrap>
      <Label htmlFor={type}>{label}</Label>
      <InputStyled
        type={type}
        name={type}
        placeholder={placeholder}
        as={as}
        isMessage={as}
      />
      <ErrorStyled name={type} component="span" />
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div`
  max-width: 310px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 0 auto;
`;

const Label = styled.label`
  font-family: Comfortaa, serif;
  font-size: 12px;
  padding: 4px;
  position: absolute;
  background: white;
  left: 16px;
  top: -8px;
  border-radius: 4px;
`;

const ErrorStyled = styled(ErrorMessage)`
  font-family: Comfortaa, serif;
  font-size: 12px;
  background-color: yellow;
`;

const InputStyled = styled(Field)<{ isMessage: boolean }>`
  min-width: 310px;
  min-height: ${({ isMessage }) => (isMessage ? "130px" : "58px")};
  border-radius: 16px;
  padding: ${({ isMessage }) => (isMessage ? "16px" : "0")} 16px;
  border: none;
  outline: none;
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;
