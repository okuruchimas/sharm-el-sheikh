import React from "react";
import styled from "@emotion/styled";
import Button from "../../button";
import { LanguageSelector } from "./language-selector";

const NavButtons = () => {
  return (
    <Buttons>
      <LanguageSelector />
      <SearchButton src="images/search_button.svg" />
      <Button text="Contact us" />
    </Buttons>
  );
};

export { NavButtons };

const Buttons = styled.div`
  width: auto;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 100%;
  }
`;

const SearchButton = styled.img`
  height: 40px;
  width: 40px;
`;
