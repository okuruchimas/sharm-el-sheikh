// components
import NavButtons from "./nav-buttons";
// utils
import styled from "@emotion/styled";
// types
import type { HeaderFragment } from "../../../../gql/graphql";
import { useRouter } from "next/router";

type IProps = {
  isOpen: boolean;
  navMenu: HeaderFragment["Menu"];
  onClose: () => void;
};

const NavMenu = ({ isOpen, navMenu, onClose }: IProps) => {
  const router = useRouter();

  const handleClick = (link: string) => () => {
    onClose();
    router.push(link);
  };

  const isActive = (str: string) => {
    if (str === "/") {
      return router.route === str;
    }
    return router.route?.includes(str || "");
  };

  return (
    <WrapperDown isOpen={isOpen}>
      <ButtonsWrap>
        <NavButtons onClose={onClose} />
      </ButtonsWrap>
      {navMenu?.map((item) => (
        <ListItem
          key={item?.id}
          isActive={isActive(item?.Link?.split("/")?.[1] || "/")}
          onClick={handleClick(item?.Link || "")}
        >
          {item?.Text}
        </ListItem>
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

  [theme.breakpoints.desktop]: {
    maxHeight: "44px",
  },
}));

const ButtonsWrap = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.mobile]: {
    display: "initial",
    marginBottom: "32px",
  },
}));

const ListItem = styled("span", {
  shouldForwardProp: (prop) => !["isActive"].includes(prop),
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  cursor: "pointer",
  fontSize: theme.fontSize.fontS20,
  color: isActive ? theme.colors.blue6 : theme.colors.blue,
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
