import styled from "@emotion/styled";
import type { MouseEvent } from "react";
import { keyframes } from "@emotion/react";

interface Props {
  text: string;
  color: string;
  disabled?: boolean;
}

const Button = ({ text, color, disabled }: Props) => {
  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 800);
  };

  return (
    <ButtonStyled color={color} disabled={disabled} onClick={createRipple}>
      {text}
    </ButtonStyled>
  );
};

const rippleAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
    background: rgba(0, 0, 0, 0.05);
  }
  25% {
    opacity: 0.3;
    transform: scale(0.5);
    background: rgba(0, 0, 0, 0.2);
  }
  50% {
    opacity: 0.6;
    transform: scale(1);
    background: rgba(0, 0, 0, 0.1);
  }
  75% {
    opacity: 0;
    transform: scale(1.5);
    background: rgba(0, 0, 0, 0.1);
  }
  100% {
    opacity: 0;
    transform: scale(2.5);
    background: rgba(0, 0, 0, 0);
  }
`;

export const ButtonStyled = styled("button", {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>(({ theme, color }) => ({
  position: "relative",
  overflow: "hidden",
  minWidth: "156px",
  width: "max-content",
  height: "52px",
  borderRadius: "16px",
  padding: "16px 32px",
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.blue,
  background: theme.colors[color],
  border: `1px solid ${theme.colors.yellow}`,
  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
  },

  ".ripple": {
    position: "absolute",
    borderRadius: "50%",
    transform: "scale(0)",
    border: "1px solid #00000033",
    background: "rgba(0, 0, 0, 0)",
    animation: `${rippleAnimation} 0.8s linear`,
  },
}));

export default Button;
