import styled from "@emotion/styled";
import MenuCard from "./children/menu-card";
import type { HomePageFragment } from "../../../../gql/graphql";

type HomeNavMenuProps = {
  menu: HomePageFragment["homeNavMenu"];
};

const HomeNavMenu = ({ menu }: HomeNavMenuProps) => (
  <MenuWrapper>
    {menu?.map((el, index) => (
      <MenuCard
        key={el?.text || ""}
        bgUrl={el?.image.data?.attributes?.url || ""}
        text={el?.text || ""}
        link={el?.link || ""}
      />
    ))}
  </MenuWrapper>
);

const MenuWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  gap: "16px",

  [theme.breakpoints.desktop]: {
    ".menu-nav-card": {
      flex: "1 1 calc((100% - 32px) / 3)",
      maxWidth: "calc((100% - 32px) / 3)",
    },

    ".menu-nav-card:nth-child(4), .menu-nav-card:nth-child(5)": {
      flex: "1 1 calc((100% - 16px) / 2)",
      maxWidth: "calc((100% - 16px) / 2)",
    },
  },

  [theme.breakpoints.mobile]: {
    ".menu-nav-card": {
      flex: "1 1 calc((100% - 16px) / 2)",
      maxWidth: "calc((100% - 16px) / 2)",
    },
  },

  [theme.breakpoints.mobileS]: {
    ".menu-nav-card": {
      flex: "1 1 100%",
      maxWidth: "100%",
    },
  },
}));

export default HomeNavMenu;
