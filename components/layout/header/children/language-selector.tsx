// libs
import React, { useState } from "react";
import Link from "next/link";
// utils
import styled from "@emotion/styled";

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
      <ListWrap isOpen={menuVisible}>
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
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "transparent",
  border: "none",
  color: theme.colors.blue,
  textTransform: "uppercase",
  fontSize: theme.fontSize.fontS18,
}));

const Select = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minWidth: "60px",
  gap: "6px",
  cursor: "pointer",
  paddingLeft: "16px",
});

const ListWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: "absolute",
  top: "36px",
  right: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "max-content",
  backgroundColor: theme.colors.white,
  borderRadius: "4px",
  scale: isOpen ? "1" : "0",
  transformOrigin: "top",
  opacity: isOpen ? "1" : "0",
  transition: " opacity 0.25s ease, scale 0.25s ease",

  [theme.breakpoints.mobile]: {
    flexDirection: "row",
    transformOrigin: "top left",
    top: "44px",
    right: "auto",
    left: "0",
    gap: "12px",
  },
}));

const ListItem = styled("span", {
  shouldForwardProp: (prop) => prop !== "isYellow",
})<{ isYellow: boolean }>(({ theme, isYellow }) => ({
  minWidth: "60px",
  backgroundColor: isYellow ? theme.colors.yellow3 : "initial",
  listStyleType: "none",
  cursor: "pointer",
  padding: "8px 16px",
  borderRadius: "4px",
  textAlign: "center",

  [theme.breakpoints.mobile]: {
    padding: "20px 24px",
  },

  "&:hover": {
    backgroundColor: theme.colors.yellow3,
  },
}));

const Arrow = styled("img", {
  shouldForwardProp: (prop) => prop !== "menuVisible",
})<{ menuVisible: boolean }>(({ menuVisible }) => ({
  transition: "0.3s",
  transform: menuVisible ? "rotate(0deg)" : "rotate(180deg)",
}));

const CurrentLang = styled("span")({
  padding: "8px 0",
});

export default LanguageSelector;
