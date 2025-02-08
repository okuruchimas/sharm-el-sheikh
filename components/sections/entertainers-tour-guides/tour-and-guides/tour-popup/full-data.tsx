import { useTranslation } from "next-i18next";
import Link from "next/link";
import TextAndIcon from "../../../../layout/text-and-icon";
import styled from "@emotion/styled";
import type { TourFragment } from "../../../../../gql/graphql";

type FullDataProps = {
  fullData: TourFragment;
};

const FullData = ({ fullData }: FullDataProps) => {
  const { t, i18n } = useTranslation("common");

  const renderItem = (src: string, text: string) => (
    <TextAndIcon
      src={src}
      text={text}
      fontSize="24px"
      fontSizeMobile="16px"
      iconSize="36px"
      iconSizeMobile="30px"
    />
  );

  return (
    <>
      <IconsGrid>
        {renderItem(
          "/icons/promotions-section/location.svg",
          fullData?.location || "",
        )}
        {renderItem("/icons/cash.svg", fullData?.price || "")}
        {renderItem("/icons/time.svg", fullData?.duration || "")}
        {renderItem("/icons/team.svg", fullData?.groupSize || "")}
      </IconsGrid>
      {fullData.informationProvider ? (
        <InformationProvider isAr={i18n.language === "ar-EG"}>
          <span>{t("text.informationProvided")}</span>
          <Link href={fullData.informationProvider.link}>
            {fullData?.informationProvider.text}
          </Link>
        </InformationProvider>
      ) : null}
      <Section>
        <h3>{t("text.tourComponents")}</h3>
        <ul>
          {fullData?.tourComponents?.map((el) => (
            <li key={el?.value}>{el?.value}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h3>{t("text.about")}</h3>
        <p>{fullData?.about}</p>
      </Section>
    </>
  );
};

export default FullData;

const IconsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr 1fr",

  [theme.breakpoints.mobileS]: {
    gap: "8px",
    gridTemplateColumns: "1fr",
  },
}));

export const InformationProvider = styled("div", {
  shouldForwardProp: (prop) => prop !== "isAr",
})<{ isAr: boolean }>(({ theme, isAr }) => ({
  display: "flex",
  flexDirection: isAr ? "row-reverse" : "row",
  gap: "8px",
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS24,
  fontWeight: 700,

  [theme.breakpoints.mobileS]: {
    flexDirection: "column",
    alignItems: isAr ? "end" : "start",
    fontSize: theme.fontSize.fontS18,
    fontWeight: 600,
  },
}));

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  ul: {
    marginLeft: "24px",
  },

  h3: {
    fontSize: theme.fontSize.fontS32,
    fontWeight: 700,
    color: theme.colors.blue,
  },

  "p, li": {
    fontSize: theme.fontSize.fontS21,
    lineHeight: 1.5,
  },

  [theme.breakpoints.mobileS]: {
    gap: "8px",

    h3: {
      fontSize: theme.fontSize.fontS24,
      fontWeight: 700,
    },

    "p, li": {
      fontSize: theme.fontSize.fontS16,
    },
  },
}));
