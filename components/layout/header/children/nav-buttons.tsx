// hooks
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// components
import Button from "../../button";
import LanguageSelector from "./language-selector";
// utils
import styled from "@emotion/styled";

const NavButtons = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleCLick = () => router.push("/#contact-form");

  return (
    <Buttons>
      <LanguageSelector />
      <SearchButton src="/icons/header/search_button.svg" alt="Search button" />
      <ContactButton text={t("buttons.contactUs")} onClick={handleCLick} />
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

const ContactButton = styled(Button)({
  padding: "16px",
});

export default NavButtons;
