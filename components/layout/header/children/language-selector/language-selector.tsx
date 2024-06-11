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
          src={"images/icons/dropdown-arrow.svg"}
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

export { LanguageSelector };

const Wrap = styled.div`
  position: relative;
  background-color: transparent;
  border: none;
  color: #054e5c;
  text-transform: uppercase;
  font-size: 18px;
  font-family: Comfortaa, serif;
`;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

const ListWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  background: #ffff;
  border-radius: 4px;
`;

const ListItem = styled.span<{ isYellow: boolean }>`
  background-color: ${({ isYellow }) =>
    isYellow ? "rgba(255, 185, 1, 0.2)" : "initial"};
  list-style-type: none;
  cursor: pointer;
  padding: 8px 16px;
  text-align: center;
`;

const Arrow = styled.img<{ menuVisible: boolean }>`
  transition: 0.3s;
  transform: ${({ menuVisible }) => (menuVisible ? null : " rotate(180deg)")};
`;

const CurrentLang = styled.span``;
