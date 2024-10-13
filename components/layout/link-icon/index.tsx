import styled from "@emotion/styled";

import React from "react";
import Link from "next/link";

const LinkIcon = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <LinkIconStyled src="/icons/main-section/circle-arrow.svg" alt="Link" />
    </Link>
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
