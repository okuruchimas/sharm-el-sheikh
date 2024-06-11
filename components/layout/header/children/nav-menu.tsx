import Link from "next/link";
import styled from "@emotion/styled";
import React, { FC } from "react";

import { NavButtons } from "./nav-buttons";

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
export { NavMenu };

const WrapperDown = styled.div<{ isNavbar: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  @media (max-width: 1024px) {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    display: ${({ isNavbar }) => (isNavbar ? "flex" : "none")};
    background-color: #b6d5db;
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
  @media (max-width: 1024px) {
    display: initial;
    margin-bottom: 32px;
  }
`;

const ListItem = styled.text`
  cursor: pointer;
  font-size: 20px;
  font-family: Comfortaa, serif;
  color: #054e5c;
  width: auto;
  text-align: center;

  @media (max-width: 1380px) {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    cursor: pointer;
    font-size: 18px;
    font-family: Comfortaa, serif;
    color: #054e5c;
  }
`;
