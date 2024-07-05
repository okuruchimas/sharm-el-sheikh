import React from "react";
import InputMask from "react-input-mask";
import { Field, FieldProps } from "formik";
import styled from "@emotion/styled";

interface MaskedInputFieldProps {
  name: string;
  mask: string;
  placeholder: string;
  type?: string;
}

const MaskedInputField: React.FC<MaskedInputFieldProps> = ({
  name,
  mask,
  placeholder,
  type = "text",
}) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <InputMask {...field} mask={mask}>
        {(inputProps: any) => (
          <StyledInput {...inputProps} type={type} placeholder={placeholder} />
        )}
      </InputMask>
    )}
  </Field>
);

export default MaskedInputField;

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
