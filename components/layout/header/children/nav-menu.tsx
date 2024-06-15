import Link from "next/link";
import styled from "@emotion/styled";
import React, { FC } from "react";

import NavButtons from "./nav-buttons";

const navMenu: { text: string; to: string }[] = [
  { text: "Hotspots", to: "hotspots" },
  { text: "Retail Outlets", to: "retailOutlets" },
  { text: "Emergency Services", to: "emergencyServices" },
  { text: "Community", to: "community" },
  { text: "Promotions", to: "promotions" },
  { text: "Entertainers & Tour Guides", to: "tourGuides" },
];

interface IProps {
  isNavbar: boolean;
}

const NavMenu: FC<IProps> = ({ isNavbar }) => {
  return (
    <WrapperDown isNavbar={isNavbar}>
      <ButtonsWrap>
        <NavButtons />
      </ButtonsWrap>
      {navMenu.map((item, index) => (
        <Link href={item.to} key={index}>
          <ListItem>{item.text}</ListItem>
        </Link>
      ))}
    </WrapperDown>
  );
};
export default NavMenu;

const WrapperDown = styled.div<{ isNavbar: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    display: ${({ isNavbar }) => (isNavbar ? "flex" : "none")};
    background-color: ${({ theme: { colors } }) => colors.blue2};
    width: 100%;
    height: 100dvh;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
    padding: 88px 16px 0;
  }
`;

const ButtonsWrap = styled.div`
  display: none;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: initial;
    margin-bottom: 32px;
  }
`;

const ListItem = styled.text`
  cursor: pointer;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS20};
  font-family: Comfortaa, serif;
  color: ${({ theme: { colors } }) => colors.blue};
  width: auto;
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile1}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    cursor: pointer;
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
    font-family: Comfortaa, serif;
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
