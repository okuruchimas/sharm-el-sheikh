import React from "react";
import { useLanguage } from "./language-context";
import styled from "@emotion/styled";

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const langArr = ["en", "ua"];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <Select value={language} onChange={handleLanguageChange}>
      {langArr.map((text, index) => (
        <option key={index} value={text}>
          {text}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  background-color: transparent;
  border: none;
  color: #054e5c;
  text-transform: uppercase;
  font-size: 18px;
  font-family: Comfortaa, serif;
`;

export default LanguageSelector;
