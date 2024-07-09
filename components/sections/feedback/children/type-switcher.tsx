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

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "max-content",
  borderBottom: `1px solid` + theme.colors.grey,
  cursor: "pointer",

  [`@media (${theme.breakpoints.mobile})`]: {
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const Type = styled("span", {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: "16px",
  fontFamily: "Comfortaa, serif",
  fontSize: theme.fontSize.fontS16,
  color: isActive ? theme.colors.black : theme.colors.grey1,
  paddingBottom: isActive ? "12px" : "initial",
  borderBottom: isActive ? "4px solid" + theme.colors.yellow2 : "none",
}));

export default TypeSwitcher;
