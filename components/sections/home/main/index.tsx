// hooks
import { useTranslation } from "next-i18next";
// components
import LinkButton from "../../../layout/link-button";
import EventCardSmall from "./children/event-card-small";
// utils
import styled from "@emotion/styled";
// types
import { HomePageFragment } from "../../../../gql/graphql";

type MainProps = {
  heroTitle: string;
  eventCardsTitle: string;
  eventCards: HomePageFragment["event_cards"];
};

const Main = ({ eventCards, eventCardsTitle, heroTitle }: MainProps) => {
  const { t } = useTranslation("common");
  return (
    <WrapSection>
      <TopWrap>
        <SubtitleWrap>
          <Subtitle>{eventCardsTitle}</Subtitle>
          <LinkButton text={t("buttons.more")} link="/" />
        </SubtitleWrap>
        {eventCards?.data.map(({ attributes }, index) => (
          <EventCardSmall
            key={index}
            url={attributes?.url || ""}
            logo={attributes?.image?.data?.attributes?.url ?? ""}
            logoAlt={attributes?.image?.data?.attributes?.alternativeText ?? ""}
            date={attributes?.date || ""}
            title={attributes?.title || ""}
            price={attributes?.price || ""}
            location={attributes?.location || ""}
          />
        ))}
      </TopWrap>
      <Title>{heroTitle}</Title>
    </WrapSection>
  );
};

const WrapSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: "32px",
  width: "100%",
  padding: "78px 100px 24px",
  backgroundImage: theme.backgrounds.mainSection,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  borderRadius: "0 0 30px 30px",

  [theme.breakpoints.mobile]: {
    height: "100dvh",
    gap: "16px",
    padding: "78px 16px 24px",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    backgroundAttachment: "scroll",
  },

  [theme.breakpoints.mobileHorizontal]: {
    height: "100%",
  },

  [theme.breakpoints.desktop]: { height: "100vh" },
}));

const TopWrap = styled("div")(({ theme }) => ({
  width: "520px",
  padding: "24px",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  backgroundColor: theme.colors.grey5,
  backdropFilter: "blur(8px)",

  [theme.breakpoints.mobile]: {
    width: "100%",
    padding: "16px",
    gap: "10px",
  },
}));

const Title = styled("h1")(({ theme }) => ({
  fontWeight: "700",
  color: theme.colors.white,
  fontSize: theme.fontSize.fontS68,
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS28,
  },
}));

const SubtitleWrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const Subtitle = styled("span")(({ theme }) => ({
  fontWeight: "700",
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS32,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
  },
}));

export default Main;
