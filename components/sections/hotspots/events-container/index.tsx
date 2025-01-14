import {
  type EventCardEntity,
  type EventCardFragment,
  GetEventCardsDocument,
} from "../../../../gql/graphql";
// hooks
import useResponsive from "../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
// components
import Modal from "../../../layout/modal";
import Loader from "../../../layout/loader";
import EventCard from "./children/event-card";
import Pagination from "../../../layout/pagination";
import EventPopup from "../../../layout/event-popup";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
import { fetchDataFromApi } from "../../../../utils/fetchApi";

type EventsContainerProps = {
  title: string;
  totalItems: number;
  initialEvents: EventCardEntity[];
};

const EventsContainer = ({
  title,
  totalItems,
  initialEvents,
}: EventsContainerProps) => {
  const [page, setPage] = useState<number>(1);
  const [result, setResult] = useState<EventCardEntity[]>(initialEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] =
    useState<EventCardFragment | null>();

  const { isMobile } = useResponsive();

  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);

  const { t, i18n } = useTranslation("common");

  const handleGetEvents = useCallback(
    async (page: number) => {
      const { eventCards } = await fetchDataFromApi(GetEventCardsDocument, {
        locale: i18n.language,
        page,
        pageSize,
      });

      return eventCards?.data as EventCardEntity[];
    },
    [i18n.language, pageSize],
  );

  useEffect(
    () => {
      if (!isMobile) {
        handleGetEvents(1).then((data) => {
          setResult(data);
          setPage(1);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const handleChangePage = async (page: number) => {
    setIsLoading(true);
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const data = await handleGetEvents(page);

    setResult(data);
    setIsLoading(false);
  };
  const handleClosePopup = () => setSelectedEvent(undefined);

  return (
    <SectionWrapper title={title}>
      <CardsWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          result?.map(({ attributes }) => (
            <EventCard
              key={attributes?.title}
              logo={attributes?.image.data?.attributes?.url || ""}
              date={attributes?.date || ""}
              title={attributes?.title || ""}
              price={attributes?.price || ""}
              location={attributes?.location || ""}
              onClick={() => setSelectedEvent(attributes)}
            />
          ))
        )}
      </CardsWrapper>
      <Modal
        mWidth="90%"
        isOpen={!!selectedEvent?.title}
        onClose={handleClosePopup}
      >
        <EventPopup
          key={selectedEvent?.title}
          {...selectedEvent}
          logo={selectedEvent?.image.data?.attributes?.url || ""}
          date={selectedEvent?.date || ""}
          title={selectedEvent?.title || ""}
          price={selectedEvent?.price || ""}
          location={selectedEvent?.location || ""}
          description={selectedEvent?.description || ""}
          socialLinks={selectedEvent?.socialLinks || []}
          position={selectedEvent?.position}
          onClose={handleClosePopup}
        />
      </Modal>
      <Pagination
        isDisabled={isLoading}
        currentPage={page}
        onChangePage={handleChangePage}
        totalItems={totalItems}
        pageSize={pageSize}
      />
    </SectionWrapper>
  );
};

export default EventsContainer;

const CardsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));
