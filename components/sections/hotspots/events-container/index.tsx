// hooks
import { useTranslation } from "next-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
// components
import SectionWrapper from "../../../layout/section-wrapper";
import Loader from "../../../layout/loader";
import EventCard from "./children/event-card";
import useResponsive from "../../../../hooks/useResponsive";
import Pagination from "../../../layout/pagination";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// utils
import styled from "@emotion/styled";
import {
  type EventCardEntity,
  GetEventCardsDocument,
} from "../../../../gql/graphql";

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

  return (
    <SectionWrapper title={title}>
      <CardsWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          result?.map(({ attributes }) => (
            <EventCard
              key={attributes?.title}
              url={attributes?.url || ""}
              logo={attributes?.image.data?.attributes?.url || ""}
              date={attributes?.date || ""}
              title={attributes?.title || ""}
              price={attributes?.price || ""}
              location={attributes?.location || ""}
            />
          ))
        )}
      </CardsWrapper>
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
