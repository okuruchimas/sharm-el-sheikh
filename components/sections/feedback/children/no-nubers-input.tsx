import React from "react";
import { Field, FieldProps } from "formik";
import styled from "@emotion/styled";

interface InputWithoutNumbersProps {
  name: string;
  placeholder: string;
  type?: string;
}

const InputWithoutNumbers: React.FC<InputWithoutNumbersProps> = ({
  name,
  placeholder,
  type = "text",
}) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <StyledInput
        {...field}
        type={type}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (/\d/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
    )}
  </Field>
);

export default InputWithoutNumbers;

const StyledInput = styled.input`
  min-width: 310px;
  background-color: white;
  min-height: 58px;
  border-radius: 16px;
  padding: 0 16px;
  border: 2px solid #e0e0e0;
  outline: none;
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};

  &:focus,
  &:active {
    background-color: white;
    outline: none;
    border: 2px solid #2e3133;
  }
`;
