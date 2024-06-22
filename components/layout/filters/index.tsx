import React, { useState } from "react";
import styled from "@emotion/styled";

interface ISortArr {
  display_value: string;
  key: string;
}

const sortArr: ISortArr[] = [
  { display_value: "Sharm El Mayaaaa", key: "monday" },
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
      <Select>
        <Text>{currentObj.display_value}</Text>
        <Arrow
          src={"images/icons/promotions-section/arrow-down.svg"}
          alt={"arrow"}
          menuVisible={menuVisible}
          onClick={toggleMenu}
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
  padding: 16px;
  border: 1px solid ${({ theme: { colors } }) => colors.grey1};
  border-radius: 12px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    min-width: 167px;
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
  top: 64px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  //padding: 8px 0;
  border-radius: 4px;
  gap: 12px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15);
  background: ${({ theme: { colors } }) => colors.white3};
`;

const ListItem = styled.span<{ isYellow: boolean }>`
  min-width: 200px;
  min-height: 48px;
  padding: 8px 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: Comfortaa, serif;
  cursor: pointer;
  gap: 12px;
  background-color: ${({ isYellow }) =>
    isYellow ? "rgba(255, 185, 1, 0.2)" : "initial"};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    min-width: 167px;
  }
`;

const Arrow = styled.img<{ menuVisible: boolean }>`
  transition: 0.3s;
  transform: ${({ menuVisible }) => (menuVisible ? " rotate(180deg)" : null)};
`;

const Select = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  padding-left: 16px;
  justify-content: space-between;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
  }
`;
