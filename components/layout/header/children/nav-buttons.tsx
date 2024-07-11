//components
import Button from "../../button";
import LanguageSelector from "./language-selector";
//utils
import styled from "@emotion/styled";

const NavButtons = () => {
  return (
    <Buttons>
      <LanguageSelector />
      <SearchButton src="icons/header/search_button.svg" />
      <Button color="yellow" text="Contact us" />
    </Buttons>
  );
};

const Buttons = styled("div")(({ theme }) => ({
  width: "auto",
  height: "52px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",

  [theme.breakpoints.mobile]: {
    width: "100%",
  },
}));

const SearchButton = styled("img")({
  height: "40px",
  width: "40px",
});

export default NavButtons;
