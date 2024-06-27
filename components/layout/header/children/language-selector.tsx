import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface ILang {
  link: string;
  text: string;
}

const languages: ILang[] = [
  { link: "/", text: "EN" },
  { link: "/", text: "UA" },
  { link: "/", text: "AR" },
];

const LanguageSelector = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0].text,
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    setMenuVisible(false);
  };

  return (
    <Wrap>
      <Select onClick={toggleMenu}>
        <CurrentLang>{selectedLanguage}</CurrentLang>
        <Arrow
          src={"icons/header/dropdown-arrow.svg"}
          alt={"arrow"}
          menuVisible={menuVisible}
        />
      </Select>
      {menuVisible ? (
        <ListWrap>
          {languages.map(({ text, link }, index) => (
            <Link key={index} href={link}>
              <ListItem
                onClick={() => changeLanguage(text)}
                isYellow={selectedLanguage === text}
              >
                {text}
              </ListItem>
            </Link>
          ))}
        </ListWrap>
      ) : null}
    </Wrap>
  );
};

export default LanguageSelector;

const Wrap = styled.div`
  position: relative;
  background-color: transparent;
  border: none;
  color: ${({ theme: { colors } }) => colors.blue};
  text-transform: uppercase;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  font-family: Comfortaa, serif;
`;

const Select = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  padding-left: 16px;
`;

const ListWrap = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 4px;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: row;
    top: 44px;
    right: auto;
    left: 0;
    gap: 12px;
  }
`;

const ListItem = styled.span<{ isYellow: boolean }>`
  min-width: 60px;
  background-color: ${({ isYellow }) =>
    isYellow ? "rgba(255, 185, 1, 0.2)" : "initial"};
  list-style-type: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 185, 1, 0.2);
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 20px 24px;
  }
`;

const Arrow = styled.img<{ menuVisible: boolean }>`
  transition: 0.3s;
  transform: ${({ menuVisible }) => (menuVisible ? null : " rotate(180deg)")};
`;

const CurrentLang = styled.span`
  padding: 8px 0;
`;
