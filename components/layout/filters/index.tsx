import React, { useState } from "react";
import styled from "@emotion/styled";

interface ISortArr {
  display_value: string;
  key: string;
}

const sortArr: ISortArr[] = [
  { display_value: "Monday", key: "monday" },
  { display_value: "Tuesday", key: "tuesday" },
  { display_value: "Wednesday", key: "wednesday" },
  { display_value: "Thursday", key: "thursday" },
  { display_value: "Friday", key: "friday" },
  { display_value: "Saturday", key: "saturday" },
  { display_value: "Sunday", key: "sunday" },
];

const Filters = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [currentObj, setCurrentObj] = useState<ISortArr>({
    display_value: "Monday",
    key: "monday",
  });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeHandler = ({ display_value, key }: ISortArr) => {
    setCurrentObj({ display_value, key });
    setMenuVisible(false);
  };

  return (
    <Wrapper>
      <Select onClick={toggleMenu}>
        <Text>{currentObj.display_value}</Text>
        <Arrow
          src={"images/icons/promotions-section/arrow-down.svg"}
          alt={"arrow"}
          isDown={menuVisible}
        />
      </Select>
      {menuVisible ? (
        <SelectList>
          {sortArr.map(({ display_value, key }) => (
            <ListItem
              key={key}
              onClick={() => changeHandler({ display_value, key })}
              isYellow={currentObj.display_value === display_value}
            >
              {display_value}
            </ListItem>
          ))}
        </SelectList>
      ) : null}
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  position: relative;
  min-width: 245px;
  border: 1px solid ${({ theme: { colors } }) => colors.grey1};
  border-radius: 12px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    min-width: 168px;
  }
`;

const Text = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  font-family: Comfortaa, serif;
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS14};
  }
`;

const SelectList = styled.div`
  position: absolute;
  min-width: 200px;
  top: 64px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 12px 0;
  gap: 12px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15);
  background: ${({ theme: { colors } }) => colors.white3};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    right: initial;
    left: 0;
  }
`;

const ListItem = styled.span<{ isYellow: boolean }>`
  padding: 14px 12px;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  font-family: Comfortaa, serif;
  cursor: pointer;
  background-color: ${({ isYellow }) =>
    isYellow ? "rgba(255, 185, 1, 0.2)" : "initial"};

  &:hover {
    background-color: rgba(255, 185, 1, 0.2);
  }
`;

const Arrow = styled.img<{ isDown: boolean }>`
  transition: 0.3s;
  transform: ${({ isDown }) => (isDown ? " rotate(180deg)" : null)};
`;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 16px;
  cursor: pointer;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 42px;
  }
`;
