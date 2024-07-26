import styled from "@emotion/styled";
import { MouseEvent, ButtonHTMLAttributes } from "react";
import { keyframes } from "@emotion/react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
  backgroundColor?: string;
}

const Button = ({
  text,
  color = "blue",
  disabled,
  backgroundColor = "yellow",
  onClick,
  ...rest
}: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    createRipple(e);
  };

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
    <ButtonStyled
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
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
  shouldForwardProp: (prop) => !["color", "backgroundColor"].includes(prop),
})<{ color: string; backgroundColor: string }>(
  ({ theme, color, backgroundColor }) => ({
    position: "relative",
    overflow: "hidden",
    minWidth: "156px",
    width: "max-content",
    height: "52px",
    borderRadius: "16px",
    padding: "16px 32px",
    fontSize: theme.fontSize.fontS16,
    color: theme.colors[color],
    background: theme.colors[backgroundColor],
    border: `1px solid ${theme.colors.yellow}`,
    cursor: "pointer",

    "-webkit-tap-highlight-color": "transparent",

    "&:disabled": {
      cursor: "not-allowed",

      "&::before": {
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1,
        background: theme.colors.white3,
        opacity: 0.3,
      },
    },

    ".ripple": {
      position: "absolute",
      borderRadius: "50%",
      transform: "scale(0)",
      border: "1px solid #00000033",
      background: "rgba(0, 0, 0, 0)",
      animation: `${rippleAnimation} 0.8s linear`,
      boxShadow: `0 0 30px 6px inset ${theme.colors[color]}`,
    },
  }),
);

export default Button;
