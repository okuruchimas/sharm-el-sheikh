import React from "react";
import styled from "@emotion/styled";
import { ErrorMessage, Field, useField, FieldProps } from "formik";
import InputMask from "react-input-mask";

interface Props {
  label: string;
  type: string;
  placeholder: string;
  as?: string;
}
const Input = ({ label, type, mask, placeholder, as }: Props) => {
  const [field, meta] = useField(type);

  return (
    <InputWrap>
      <Label htmlFor={type}>{label}</Label>
      <InputContainer>
        <InputStyled
          autoComplete="off"
          {...field}
          type={type}
          name={type}
          placeholder={placeholder}
          as={as}
          isMessage={as}
          isErrorSpan={meta.touched && !!meta.error}
        >
          {({ field }: FieldProps) => (
            <InputMask
              {...field}
              type={type}
              mask={mask}
              placeholder={placeholder}
            />
          )}
        </InputStyled>
        {meta.touched && meta.error && (
          <ErrorIcon src="icons/feedback-section/icon.svg" />
        )}
      </InputContainer>
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
  margin: 0 auto;
`;

const Label = styled.label`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  padding: 4px;
  position: absolute;
  background: white;
  left: 16px;
  top: -8px;
  border-radius: 4px;
`;

const ErrorStyled = styled(ErrorMessage)`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  color: #ff5449;
  margin: 4px 16px 0;
`;

const InputStyled = styled(Field, {
  shouldForwardProp: (prop) => prop !== "isMessage" && prop !== "isErrorSpan",
})<{
  isMessage: boolean;
  isErrorSpan: boolean;
}>``;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    min-width: 310px;
    background-color: white;
    min-height: ${({ isMessage }) => (isMessage ? "130px" : "58px")};
    border-radius: 16px;
    padding: ${({ isMessage }) => (isMessage ? "16px" : "0")} 16px;
    border: ${({ isErrorSpan }) =>
      isErrorSpan ? "2px solid #ff5449" : "none"};
    outline: none;
    font-family: Comfortaa, serif;
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};

    &:focus,
    &:active {
      background-color: white;
      outline: none;
      border: ${({ isErrorSpan }) =>
        isErrorSpan ? "2px solid #ff5449" : "2px solid #2e3133"};
    }
  }
`;

const ErrorIcon = styled.img`
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
`;
