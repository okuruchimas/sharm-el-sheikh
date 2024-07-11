//libs
import { ErrorMessage, Field, useField, FieldProps } from "formik";
import InputMask from "react-input-mask";
//utils
import styled from "@emotion/styled";

interface Props {
  label: string;
  type: string;
  placeholder: string;
  as?: string;
  mask?: string;
}
const Input = ({ label, type, mask, placeholder, as }: Props) => {
  const [field, meta] = useField(type);

  return (
    <InputWrap>
      <Label htmlFor={type}>{label}</Label>
      <InputContainer
        isMessage={!!as}
        isErrorSpan={meta.touched && !!meta.error}
      >
        <Field
          {...field}
          type={type}
          name={type}
          placeholder={placeholder}
          as={as}
        >
          {mask
            ? ({ field }: FieldProps) => (
                <InputMask
                  {...field}
                  type={type}
                  mask={mask || ""}
                  placeholder={placeholder}
                />
              )
            : null}
        </Field>
        {meta.touched && meta.error && (
          <ErrorIcon src="icons/feedback-section/icon.svg" />
        )}
      </InputContainer>
      <ErrorStyled name={type} component="span" />
    </InputWrap>
  );
};

const InputWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "310px",
  position: "relative",
  margin: "0 auto",
});

const Label = styled("label")(({ theme }) => ({
  position: "absolute",
  left: "16px",
  top: "-8px",
  borderRadius: "4px",
  padding: "4px",
  background: theme.colors.white,
  fontFamily: "Comfortaa, serif",
  fontSize: theme.fontSize.fontS12,
}));

const ErrorStyled = styled(ErrorMessage)(({ theme }) => ({
  fontFamily: "Comfortaa, serif",
  fontSize: theme.fontSize.fontS12,
  color: theme.colors.red,
  margin: "4px 16px 0",
}));

const InputContainer = styled("div", {
  shouldForwardProp: (prop) => !["isMessage", "isErrorSpan"].includes(prop),
})<{ isMessage: boolean; isErrorSpan: boolean }>(
  ({ theme, isMessage, isErrorSpan }) => ({
    display: "flex",
    alignItems: "center",

    "input, textarea": {
      minWidth: "310px",
      minHeight: isMessage ? "130px" : "58px",
      backgroundColor: theme.colors.white,
      borderRadius: "16px",
      padding: isMessage ? "16px 16px" : "0 16px",
      border: isErrorSpan ? "2px solid" + theme.colors.red : "none",
      outline: "none",
      fontFamily: "Comfortaa, serif",
      fontSize: theme.fontSize.fontS16,

      "&:focus, &:active": {
        backgroundColor: theme.colors.white,
        outline: "none",
        border: isErrorSpan
          ? "2px solid" + theme.colors.red
          : "2px solid" + theme.colors.black2,
      },
    },
  }),
);

const ErrorIcon = styled("img")({
  width: "24px",
  height: "24px",
  position: "absolute",
  right: "16px",
});

export default Input;
