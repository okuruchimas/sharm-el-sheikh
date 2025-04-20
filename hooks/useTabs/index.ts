import { useTranslation } from "next-i18next";
import useResponsive from "../useResponsive";

const useTabs = () => {
  const { t } = useTranslation("entertainers-tour-guides");

  const tabsArr = [
    { link: "animators", text: t("tabs.animators") },
    { link: "taxi-drivers", text: t("tabs.taxiDrivers") },
    { link: "photographers", text: t("tabs.photographers") },
    { link: "tour-and-guides", text: t("tabs.tourOperators") },
  ];
  return { tabsArr };
};

export default useTabs;
