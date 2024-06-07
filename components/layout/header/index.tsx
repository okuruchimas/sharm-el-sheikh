import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { NavButtons } from "./navigation/nav-buttons";
import { NavMenu } from "./navigation/nav-menu";
import { Hr } from "../hr";

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

export { Header };

const hiddenOverflow = css`
  body {
    overflow: hidden;
  }
`;

const Wrap = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 40%);
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 24px 100px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1024px) {
    padding: 24px;
  }
`;

const ButtonsWrap = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 370px;
  height: 52px;
  cursor: pointer;

  @media (max-width: 1024px) {
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

  @media (max-width: 1024px) {
    display: block;
    cursor: pointer;
    width: 30px;
  }
`;
