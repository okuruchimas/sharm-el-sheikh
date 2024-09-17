// libs
import { useState } from "react";
import Link from "next/link";
// components
import { Hr } from "../hr";
import NavButtons from "./children/nav-buttons";
import NavMenu from "./children/nav-menu";
// utils
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { HeaderFragment } from "../../../gql/graphql";

type HeaderProps = {
  logo: HeaderFragment["Logo"];
  navMenu: HeaderFragment["Menu"];
};

const Header = ({ logo, navMenu }: HeaderProps) => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);

  return (
    <Wrap isOpen={isNavbar}>
      <WrapperUp>
        <Link href={"/"} style={{ width: "80%" }}>
          <Logo
            src={logo?.data?.attributes?.url || ""}
            alt={logo?.data?.attributes?.alternativeText || ""}
            isOpen={isNavbar}
          />
        </Link>
        {isNavbar ? <Global styles={hiddenOverflow} /> : null}
        <BurgerIcon
          src={
            isNavbar ? "/icons/header/close.svg" : "/icons/header/burger.svg"
          }
          alt="burger-mune"
          onClick={() => setIsNavbar((prevState) => !prevState)}
        />
        <ButtonsWrap>
          <NavButtons />
        </ButtonsWrap>
      </WrapperUp>
      <Line />
      <NavMenu isOpen={isNavbar} navMenu={navMenu} />
    </Wrap>
  );
};

const hiddenOverflow = css`
  body {
    overflow: hidden;
  }
`;

const Wrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  width: "100%",
  backgroundColor: theme.colors.grey4,
  backdropFilter: "blur(10px)",
  position: "fixed",
  top: 0,
  zIndex: 10,
  padding: "24px 100px",
  borderRadius: "0 0 30px 30px",
  display: "flex",
  flexDirection: "column",
  boxShadow: `0 -10px 20px ${theme.colors.grey3}`,
  maxHeight: "100dvh",

  [theme.breakpoints.mobile]: {
    borderRadius: isOpen ? "0" : "0 0 20px 20px",
    padding: "24px 16px 0",
    backgroundColor: isOpen ? theme.colors.blue2 : theme.colors.grey4,
  },
}));

const ButtonsWrap = styled("div")(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    display: "none",
  },
}));
export const Logo = styled("img", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  width: "370px",
  height: "52px",
  cursor: "pointer",
  transition: "opacity 0.5s ease, transform 0.5s ease",

  [theme.breakpoints.mobile]: {
    display: "block",
    height: "30px",
    width: "auto",
    opacity: isOpen ? 0 : 1,
    transform: isOpen ? "translateY(-100%)" : "none",
  },
  "&:hover": {
    opacity: 0.8,
  },
}));
const WrapperUp = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    paddingBottom: "16px",
  },
}));
const BurgerIcon = styled("img")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.mobile]: {
    display: "block",
    height: "30px",
    width: "30px",
    cursor: "pointer",
  },
}));

const Line = styled(Hr)({
  margin: "16px 0",
});

export default Header;
