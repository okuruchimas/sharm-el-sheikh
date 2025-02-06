import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "@emotion/styled";
import useResponsive from "../../../../hooks/useResponsive";
import "swiper/css";

export const getVisibleTabs = (activeIndex: number, tabs: any[]) => {
  const left = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
  const right = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
  return [tabs[left], tabs[activeIndex], tabs[right]];
};

const Tabs = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation("entertainers-tour-guides");
  const { isMobile } = useResponsive();

  const tabs = [
    { link: "animators", text: t("tabs.animators") },
    { link: "taxi-drivers", text: t("tabs.taxiDrivers") },
    { link: "photographers", text: t("tabs.photographers") },
    { link: "tour-and-guides", text: t("tabs.tourOperators") },
  ];

  const activePage = pathname.split("/").pop();

  const activeIndex = tabs.findIndex(({ link }) => link === activePage);

  const visibleTabs =
    activeIndex !== -1 ? getVisibleTabs(activeIndex, tabs) : [];

  const tabsToMap = isMobile ? visibleTabs : tabs;

  return (
    <Wrap>
      {tabsToMap.map(({ link, text }) => (
        <Link key={link} href={link}>
          <Text isActive={pathname?.includes(link)}>{text}</Text>
        </Link>
      ))}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  margin: "80px 0 40px",
  borderBottom: `1px solid ${theme.colors.grey}`,
  overflowX: "auto",

  [theme.breakpoints.mobile]: {
    width: "calc(100% + 32px)",
    marginLeft: -16,
    alignSelf: "flex-start",
    borderBottom: "none",
  },
}));

const Text = styled("span", {
  shouldForwardProp: (prop) => !["isActive"].includes(prop),
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  minWidth: "310px",
  height: "48px",
  borderBottom: isActive ? `4px solid ${theme.colors.yellow}` : "none",
  cursor: "pointer",
  fontSize: "21px",
  textAlign: "center",
  alignContent: "center",
  color: isActive ? theme.colors.black2 : theme.colors.grey,

  [theme.breakpoints.mobile]: {
    padding: "0 4px",
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
  },
}));

// const TextMob = styled(Text)(({ theme, isActive }) => ({
//   minWidth: "310px",
//   height: "48px",
//   borderBottom: isActive ? `4px solid ${theme.colors.yellow}` : "none",
//   cursor: "pointer",
//   fontSize: "21px",
//   textAlign: "center",
//   alignContent: "center",
//   color: isActive ? theme.colors.black2 : theme.colors.grey,
//
//   [theme.breakpoints.mobile]: {
//     width: "calc(100% + 16px)",
//     alignSelf: "flex-start",
//   },
// }));

export default Tabs;
