import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "@emotion/styled";

const Tabs = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation("entertainers-tour-guides");
  const activePage = pathname.split("/").pop();

  let tabs = [
    { link: "animators", text: t("tabs.animators") },
    { link: "taxi-drivers", text: t("tabs.taxiDrivers") },
    { link: "photographers", text: t("tabs.photographers") },
    { link: "tour-and-guides", text: t("tabs.tourOperators") },
  ];

  tabs = [
    ...tabs.filter((tab) => tab.link === activePage),
    ...tabs.filter((tab) => tab.link !== activePage),
  ];

  return (
    <Wrap>
      {tabs.map(({ link, text }) => (
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
    width: "calc(100% + 16px)",
    alignSelf: "flex-start",
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
}));

export default Tabs;
