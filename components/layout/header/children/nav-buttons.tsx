import React, { FC } from "react";
import styled from "@emotion/styled";

import LanguageSelector from "../../../../context/language-selector";
import Button from "../../button";

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
  width: 298px;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SearchButton = styled.img`
  height: 40px;
  width: 40px;
`;