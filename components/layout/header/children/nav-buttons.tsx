// hooks
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// components
import Button from "../../button";
import LanguageSelector from "./language-selector";
// utils
import styled from "@emotion/styled";

type NavButtonsProps = {
  onClose?: () => void;
};
const NavButtons = ({ onClose }: NavButtonsProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleCLick = () => {
    if (onClose) onClose();

    router.push("/#contact-form");
  };

  return (
    <Buttons>
      <LanguageSelector onClose={onClose} />
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

const SearchButton = styled("img")(({ theme }) => ({
  height: "40px",
  width: "40px",
  [theme.breakpoints.mobile]: {
    display: "none",
  },
}));

const ContactButton = styled(Button)({
  padding: "16px",
});

export default NavButtons;
