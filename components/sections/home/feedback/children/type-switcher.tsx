// hooks
import { useTranslation } from "next-i18next";
// utils
import styled from "@emotion/styled";
// types
import type { Dispatch, SetStateAction } from "react";
import { getVisibleTabs } from "../../../entertainers-tour-guides/children/tabs";
import useResponsive from "../../../../../hooks/useResponsive";

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
  const { isMobile } = useResponsive();

  const activeIndex = types.findIndex(({ type }) => type === currentType);

  const visibleTabs =
    activeIndex !== -1 ? getVisibleTabs(activeIndex, types) : [];

  const tabsToMap = isMobile ? visibleTabs : types;

  return (
    <Wrap>
      {tabsToMap.map(({ type, value }) => (
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
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    borderBottom: `none`,
    width: "calc(100% + 32px)",
    marginLeft: -16,
    justifyContent: "space-between",
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

  [theme.breakpoints.mobile]: {
    padding: "16px 4px",
    borderBottom: isActive
      ? `4px solid ${theme.colors.yellow}`
      : `2px solid ${theme.colors.grey}`,
    fontSize: isActive ? theme.fontSize.fontS16 : theme.fontSize.fontS14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: "unset",
    width: isActive ? "56%" : "18%",
    alignSelf: "flex-start",
    textAlign: "center",
  },
}));

export default TypeSwitcher;
