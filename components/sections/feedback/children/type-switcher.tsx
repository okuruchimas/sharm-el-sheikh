import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";

const types = [
  { type: "default", value: "Feedback Form" },
  { type: "local", value: "Local Business Collaboration Form" },
  { type: "international", value: "International Collaboration Form" },
];

interface Props {
  currentType: string;
  setType: Dispatch<SetStateAction<string>>;
}
const TypeSwitcher = ({ currentType, setType }: Props) => {
  return (
    <Wrap>
      {types.map(({ type, value }) => (
        <Type
          isActive={type === currentType}
          key={type}
          onClick={() => setType(type)}
        >
          {value}
        </Type>
      ))}
    </Wrap>
  );
};

export default TypeSwitcher;

const Wrap = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #8f9193;
  cursor: pointer;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Type = styled.span<{ isActive: boolean }>`
  padding: 16px;
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.black : colors.grey1};
  padding-bottom: ${({ isActive }) => (isActive ? "12px" : "initial")};
  border-bottom: ${({ isActive }) => (isActive ? "4px solid #FFC01B" : "none")};
`;
