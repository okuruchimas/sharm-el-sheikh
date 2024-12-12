// hooks
import { useState } from "react";
import { useTranslation } from "next-i18next";
// components
import Modal from "../../../layout/modal";
import LinkButton from "../../../layout/link-button";
import EventPopup from "../../../layout/event-popup";
import EventCardSmall from "./children/event-card-small";
// utils
import styled from "@emotion/styled";
// types
import { EventCardFragment, HomePageFragment } from "../../../../gql/graphql";

type MainProps = {
  heroTitle: string;
  eventCardsTitle: string;
  eventCards: HomePageFragment["event_cards"];
};

const Main = ({ eventCards, eventCardsTitle, heroTitle }: MainProps) => {
  const [selectedEvent, setSelectedEvent] =
    useState<EventCardFragment | null>();
  const { t } = useTranslation("common");

  const handleClosePopup = () => setSelectedEvent(undefined);

  return (
    <WrapSection>
      <TopWrap>
        <SubtitleWrap>
          <Subtitle>{eventCardsTitle}</Subtitle>
          <LinkButton text={t("buttons.more")} link="/hotspots" />
        </SubtitleWrap>
        {eventCards?.data.map(({ attributes }, index) => (
          <EventCardSmall
            key={index}
            logo={attributes?.image?.data?.attributes?.url ?? ""}
            logoAlt={attributes?.image?.data?.attributes?.alternativeText ?? ""}
            date={attributes?.date || ""}
            title={attributes?.title || ""}
            price={attributes?.price || ""}
            location={attributes?.location || ""}
            onClick={() => setSelectedEvent(attributes)}
          />
        ))}
      </TopWrap>
      <Modal
        mWidth="90%"
        isOpen={!!selectedEvent?.title}
        onClose={handleClosePopup}
      >
        <EventPopup
          key={selectedEvent?.title}
          mapUrl={selectedEvent?.mapUrl || ""}
          logo={selectedEvent?.image.data?.attributes?.url || ""}
          date={selectedEvent?.date || ""}
          title={selectedEvent?.title || ""}
          price={selectedEvent?.price || ""}
          location={selectedEvent?.location || ""}
          description={selectedEvent?.description || ""}
          socialLinks={selectedEvent?.socialLinks || []}
          onClose={handleClosePopup}
        />
      </Modal>
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
    height: "100vh",
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
