// libs
import { useState, type FC } from "react";
// utils
import styled from "@emotion/styled";
// types
import type { selectOption } from "../../types/filter";

type FiltersProps = {
  options: selectOption[];
  onChange?: (option: selectOption) => void;
};

const Dropdown: FC<FiltersProps> = ({ options, onChange }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [currentObj, setCurrentObj] = useState<selectOption>(options[0]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeHandler = (option: selectOption) => {
    setCurrentObj(option);
    setMenuVisible(false);

    if (onChange) onChange(option);
  };

  return (
    <Wrapper>
      <Select onClick={toggleMenu}>
        <Text>{currentObj.display_value}</Text>
        <Arrow
          src={"icons/promotions-section/arrow-down.svg"}
          alt={"arrow"}
          isDown={menuVisible}
        />
      </Select>
      <SelectList menuVisible={menuVisible}>
        {options.map(({ display_value, key }) => (
          <ListItem
            key={key}
            onClick={() => changeHandler({ display_value, key })}
            isYellow={currentObj.display_value === display_value}
          >
            {display_value}
          </ListItem>
        ))}
      </SelectList>
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  minWidth: "245px",
  maxWidth: "max-content",
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: "12px",

  [theme.breakpoints.mobile]: {
    minWidth: "168px",
  },
}));

const Text = styled("span")(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
  textAlign: "center",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const SelectList = styled("div", {
  shouldForwardProp: (prop) => prop !== "menuVisible",
})<{ menuVisible: boolean }>(({ theme, menuVisible }) => ({
  position: "absolute",
  minWidth: "200px",
  top: "64px",
  right: "0",
  zIndex: "10",
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  padding: "12px 0",
  gap: "12px",
  boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.15)",
  background: theme.colors.white3,
  scale: menuVisible ? "1" : "0",
  transition: "opacity 0.25s ease, scale 0.25s ease",

  [theme.breakpoints.mobile]: {
    right: "initial",
    left: "-1px",
  },
}));

const ListItem = styled("span", {
  shouldForwardProp: (prop) => prop !== "isYellow",
})<{ isYellow: boolean }>(({ theme, isYellow }) => ({
  padding: "14px 12px",
  fontSize: "16px",
  lineHeight: "20px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: isYellow ? theme.colors.yellow3 : "initial",

  "&:hover": {
    backgroundColor: theme.colors.yellow3,
  },
}));

const Arrow = styled("img", {
  shouldForwardProp: (prop) => prop !== "isDown",
})<{ isDown: boolean }>(({ isDown }) => ({
  transition: "0.25s",
  transform: isDown ? "rotate(180deg)" : "rotate(0deg)",
}));

const Select = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "6px",
  padding: "16px",
  cursor: "pointer",

  [theme.breakpoints.mobile]: {
    height: "42px",
  },
}));

export default Dropdown;
