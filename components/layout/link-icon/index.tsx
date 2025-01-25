import styled from "@emotion/styled";
import Link from "next/link";
import type { KeyboardEvent } from "react";

type LinkIconProps = { href?: string; onClick?: () => void };

const LinkIcon = ({ href, onClick }: LinkIconProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onClick) {
      onClick();
    }
  };

  return href ? (
    <Link href={href}>
      <LinkIconStyled src="/icons/main-section/circle-arrow.svg" alt="Link" />
    </Link>
  ) : (
    <LinkIconStyled
      src="/icons/main-section/circle-arrow.svg"
      alt="Link"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
    />
  );
};

export default LinkIcon;

const LinkIconStyled = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",
  alignSelf: "baseline",
  transition: "scale 0.3s ease",
  borderRadius: "50%",

  boxShadow: "0 1px 3px 1px #00000026, 0 1px 2px 0 #0000004d",

  [theme.breakpoints.mobile]: {
    height: "30px",
    width: "30px",
  },

  "&:active, &:focus": {
    scale: "1.3",
  },
}));
