import React, { FC } from "react";
import styled from "@emotion/styled";

import LanguageSelector from "../../../../context/language-selector";

interface IProps {
  isMobile?: boolean;
}

const NavButtons: FC<IProps> = () => {
  return (
    <Buttons>
      <LanguageSelector />
      <SearchButton src="images/search_button.svg" />
      <ContactButton>Contact us</ContactButton>
    </Buttons>
  );
};

export { NavButtons };

const Buttons = styled.div<{ isMobile?: boolean }>`
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
const ContactButton = styled.button`
  width: 156px;
  height: 52px;
  border-radius: 16px;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  color: #054e5c;

  background: #ffb901;
  font-family: Comfortaa, serif;
`;
