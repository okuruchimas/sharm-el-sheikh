// hooks
import { useTranslation } from "next-i18next";
// utils
import styled from "@emotion/styled";
// types
import type { Dispatch, SetStateAction } from "react";

const types = [
  { type: "default", value: "feedbackForm.feedbackForm" },
  { type: "local", value: "feedbackForm.localBusinessForm" },
  { type: "international", value: "feedbackForm.internationalForm" },
];

interface Props {
  currentType: string;
  setType: Dispatch<SetStateAction<string>>;
}
const TypeSwitcher = ({ currentType, setType }: Props) => {
  const { t } = useTranslation("home-page");
  return (
    <Wrap>
      {types.map(({ type, value }) => (
        <Type
          isActive={type === currentType}
          key={type}
          onClick={() => setType(type)}
        >
          {t(value)}
        </Type>
      ))}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "max-content",
  borderBottom: `1px solid ${theme.colors.grey}`,
  cursor: "pointer",

  [theme.breakpoints.mobile]: {
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
  fontSize: theme.fontSize.fontS16,
  color: isActive ? theme.colors.black : theme.colors.grey1,
  paddingBottom: isActive ? "12px" : "initial",
  borderBottom: isActive ? "4px solid" + theme.colors.yellow2 : "none",
}));

export default TypeSwitcher;
