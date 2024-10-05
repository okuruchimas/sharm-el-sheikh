// hooks
import { useTranslation } from "next-i18next";
// components
import Card from "./children/card";
import Button from "../../../layout/button";
import LinkButton from "../../../layout/link-button";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
// types
import type { HomePageFragment } from "../../../../gql/graphql";

export type AnnouncementsProps = {
  title: string;
  announcementsCards: HomePageFragment["announcements"];
};

const Announcements = ({ announcementsCards, title }: AnnouncementsProps) => {
  const { t } = useTranslation("common");

  return (
    <SectionWrapper
      title={title}
      titleChildren={
        <MobLink>
          <LinkButton text={t("buttons.viewMore")} link="/" />
        </MobLink>
      }
    >
      <CardWrap>
        {announcementsCards?.data.map(({ attributes }, index) => (
          <Card
            key={index}
            isFirst={index % 3 === 0}
            image={attributes?.image.data?.attributes?.url || ""}
            title={attributes?.title || ""}
            text={attributes?.text || ""}
            icons={attributes?.socialLinks}
          />
        ))}
      </CardWrap>
      <ButtonWrap>
        <Button text={t("buttons.viewMore")} backgroundColor="white" />
      </ButtonWrap>
    </SectionWrapper>
  );
};

const CardWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  margin: "24px 0",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
    margin: "0",
  },
}));

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.mobile]: {
    display: "none",
  },
}));

const MobLink = styled("div")(({ theme }) => ({
  "a, span": {
    display: "none",
  },
  maxWidth: "max-content",
  alignSelf: "end",

  [theme.breakpoints.mobile]: {
    "a, span": {
      display: "initial",
      textWrap: "nowrap",
    },
  },
}));

export default Announcements;
