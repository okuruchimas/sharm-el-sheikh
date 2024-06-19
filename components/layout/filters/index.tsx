import React, { useState } from "react";
import LinkButton from "../link-button";
import styled from "@emotion/styled";

const sortArr = [
  { display_value: "Monday", key: "monday" },
  { display_value: "Tuesday", key: "tuesday" },
  { display_value: "Wednesday", key: "wednesday" },
  { display_value: "Thursday", key: "thursday" },
  { display_value: "Friday", key: "friday" },
  { display_value: "Saturday", key: "saturday" },
  { display_value: "Sunday", key: "sunday" },
];

const Filters = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>("monday");
  const [currentValue, setCurrentValue] = useState<string>("Monday");

  return (
    <Wrapper>
      <Text>{currentValue}</Text>
      <IconDown
        src={"images/icons/promotions-section/arrow-down.svg"}
        alt="icon-down"
      />
      <SelectList>
        {sortArr.map(({ display_value, key }) => (
          <ListItem key={key}>{display_value}</ListItem>
        ))}
      </SelectList>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  position: relative;
  min-width: 246px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  border: 1px solid ${({ theme: { colors } }) => colors.grey1};
  border-radius: 12px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
  }
`;

const Text = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  font-family: Comfortaa, serif;
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  }
`;

const IconDown = styled.img``;

const SelectList = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  z-index: 10;

  height: 500px;
  width: 300px;
  background: red;
`;

const ListItem = styled.span``;
