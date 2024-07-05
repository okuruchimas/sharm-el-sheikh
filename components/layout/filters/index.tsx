import { useState, type FC } from "react";
// utils
import styled from "@emotion/styled";
// types
import type { selectOption } from "../../types/filter";

type FiltersProps = {
  options: selectOption[];
  onChange?: (option: selectOption) => void;
};

const Filters: FC<FiltersProps> = ({ options, onChange }) => {
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
      {menuVisible ? (
        <SelectList>
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
      ) : null}
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  position: relative;
  min-width: 245px;
  max-width: max-content;
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
    left: -1px;
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
