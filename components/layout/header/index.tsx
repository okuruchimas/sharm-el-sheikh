import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { Hr } from "../hr";
import NavButtons from "./children/nav-buttons";
import NavMenu from "./children/nav-menu";

const Header = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);

  return (
    <Wrap>
      <WrapperUp>
        <Link href={"/"} style={{ width: "80%" }}>
          <Logo src="images/logo.svg" />
        </Link>
        {isNavbar ? <Global styles={hiddenOverflow} /> : null}
        <BurgerIcon
          src={isNavbar ? "images/icons/close.svg" : "images/icons/burger.svg"}
          onClick={() => setIsNavbar((prevState) => !prevState)}
        />
        <ButtonsWrap>
          <NavButtons />
        </ButtonsWrap>
      </WrapperUp>
      <Hr />
      <NavMenu isNavbar={isNavbar} />
    </Wrap>
  );
};

export default Header;

const hiddenOverflow = css`
  body {
    overflow: hidden;
  }
`;

const Wrap = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.grey4};
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 24px 100px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 24px;
  }
`;

const ButtonsWrap = styled.div`
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 370px;
  height: 52px;
  cursor: pointer;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: block;
    height: 30px;
    width: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const WrapperUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BurgerIcon = styled.img`
  display: none;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: block;
    cursor: pointer;
    width: 30px;
  }
`;
