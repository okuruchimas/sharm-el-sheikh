import { useField } from "formik";
import styled from "@emotion/styled";

interface Props {
  type: string;
  label: string;
}

const CheckboxField = ({ type, label }: Props) => {
  const [field] = useField(type);

  return (
    <CheckboxWrapper>
      <CustomCheckbox type="checkbox" id={type} {...field} />
      <Label htmlFor={type}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default CheckboxField;

const CheckboxWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginTop: "16px",
}));

const CustomCheckbox = styled("input")(({ theme }) => ({
  width: "18px !important",
  minWidth: "18px !important",
  height: "18px",
  borderRadius: "4px",
  accentColor: theme.colors.grey2,
  cursor: "pointer",
}));

const Label = styled("label")(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.grey3,
  lineHeight: "20px",
  cursor: "pointer",
}));
