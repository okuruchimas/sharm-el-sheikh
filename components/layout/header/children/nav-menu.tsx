// components
import Link from "next/link";
import NavButtons from "./nav-buttons";
// utils
import styled from "@emotion/styled";

const navMenu: { text: string; to: string }[] = [
  { text: "Hotspots", to: "hotspots" },
  { text: "Retail Outlets", to: "retailOutlets" },
  { text: "Emergency Services", to: "emergencyServices" },
  { text: "Community", to: "community" },
  { text: "Promotions", to: "promotions" },
  { text: "Entertainers & Tour Guides", to: "tourGuides" },
];

interface IProps {
  isOpen: boolean;
}

const NavMenu = ({ isOpen }: IProps) => {
  return (
    <WrapperDown isOpen={isOpen}>
      <ButtonsWrap>
        <NavButtons />
      </ButtonsWrap>
      {navMenu.map((item, index) => (
        <Link href={item.to} key={index}>
          <ListItem>{item.text}</ListItem>
        </Link>
      ))}
    </WrapperDown>
  );
};

export const WrapperDown = styled("div", {
  shouldForwardProp: (prop: string) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "32px",
  transition: "height 0.5s ease, opacity 0.5s ease",

  [theme.breakpoints.mobile]: {
    overflow: "hidden",
    height: isOpen ? "100dvh" : "0px",
    opacity: isOpen ? 1 : 0.7,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
}));

const ButtonsWrap = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.mobile]: {
    display: "initial",
    marginBottom: "32px",
  },
}));

const ListItem = styled("text")(({ theme }) => ({
  cursor: "pointer",
  fontSize: theme.fontSize.fontS20,
  color: theme.colors.blue,
  width: "auto",
  textAlign: "center",
  transition: "color 0.25s ease",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
  },

  "&:hover": {
    color: theme.colors.blue3,
  },
}));

export default NavMenu;
