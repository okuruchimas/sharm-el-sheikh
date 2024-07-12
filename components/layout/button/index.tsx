import styled from "@emotion/styled";

interface Props {
  text: string;
  color: string;
}
const Button = ({ text, color }: Props) => {
  return <ButtonStyled color={color}>{text}</ButtonStyled>;
};

export const ButtonStyled = styled("button", {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>(({ theme, color }) => ({
  minWidth: "156px",
  width: "max-content",
  height: "52px",
  borderRadius: "16px",
  padding: "16px 32px",
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.blue,
  background: theme.colors[color],
  border: `1px solid ${theme.colors.yellow}`,
}));

export default Button;
