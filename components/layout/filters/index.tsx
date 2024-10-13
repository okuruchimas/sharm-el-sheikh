// hooks
import { useEffect, useRef, useState } from "react";
// components
import Loader from "../loader";
// utils
import styled from "@emotion/styled";
// types
import type { selectOption } from "../../types/filter";
import NextImage from "../image";

type FiltersProps = {
  options: selectOption[];
  isLoading?: boolean;
  onChange?: (option: selectOption) => void;
  width?: string;
  height?: string;
  color?: string;
};

const Dropdown = ({
  options,
  isLoading,
  onChange,
  width,
  height,
  color,
}: FiltersProps) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [currentObj, setCurrentObj] = useState<selectOption>(options[0]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeHandler = (option: selectOption) => {
    setCurrentObj(option);
    setMenuVisible(false);

    if (onChange) onChange(option);
  };

  return (
    <Wrapper width={width} height={height} ref={menuRef}>
      <Select onClick={toggleMenu}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Text color={color}>
              {currentObj.iconSrc ? (
                <NextImage
                  src={currentObj.iconSrc}
                  width="18px"
                  height="18px"
                />
              ) : null}
              {currentObj.value}
            </Text>
            <Arrow
              src={"/icons/promotions-section/arrow-down.svg"}
              alt={"arrow"}
              isDown={menuVisible}
            />
          </>
        )}
      </Select>
      <SelectList menuVisible={menuVisible}>
        {options.map((el) => (
          <ListItem
            key={el.key}
            onClick={() => changeHandler(el)}
            isYellow={currentObj.key === el.key}
          >
            {el?.iconSrc ? (
              <NextImage src={el.iconSrc} width="18px" height="18px" />
            ) : null}
            {el.value}
          </ListItem>
        ))}
      </SelectList>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ width?: string; height?: string }>(
  ({ theme, width, height }) => ({
    position: "relative",
    minWidth: "245px",
    maxWidth: "max-content",
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: "12px",

    [theme.breakpoints.mobile]: {
      minWidth: "168px",
      width: width ? width : "auto",
      height: height ? height : "auto",
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
    },
  }),
);

const Text = styled("span")<{ color?: string }>(({ theme, color }) => ({
  color: color ? theme.colors[color] : theme.colors.black2,
  fontSize: theme.fontSize.fontS16,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  gap: "8px",

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
  gap: "8px",

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
  padding: "4px 16px",
  height: "56px",
  cursor: "pointer",

  ".loader": {
    height: "30px",
    width: "30px",
  },

  [theme.breakpoints.mobile]: {
    height: "42px",
    width: "100%",
  },
}));

export default Dropdown;
