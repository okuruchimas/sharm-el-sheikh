// hooks
import useResponsive from "../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useState } from "react";
// components
import Modal from "../../../layout/modal";
import PromCard from "../../promotions/children/prom-card";
import Dropdown from "../../../layout/filters";
import Pagination from "../../../layout/pagination";
import Placeholder from "../../promotions/children/placeholder";
import ClubContainer from "../club-container";
import SectionWrapper from "../../../layout/section-wrapper";
// constants
import { WEEK_DAYS } from "../../../../constants/week-days.constants";
// utils
import styled from "@emotion/styled";
import { formatTime } from "../../../../utils/formateDate";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// types
import {
  ClubPreviewFragment,
  GetClubsByDaysDocument,
} from "../../../../gql/graphql";
import type { selectOption } from "../../../types/filter";

type Clubs = ClubPreviewFragment[] | undefined;
type ClubsContainerProps = {
  title: string;
  totalItems: number;
  clubsInfo: string;
  initialClubs: Clubs;
};

const ClubsContainer = ({
  title,
  clubsInfo,
  totalItems,
  initialClubs,
}: ClubsContainerProps) => {
  // result
  const [result, setResult] = useState<Clubs>(initialClubs);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(totalItems);
  // filters
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedClub, setSelectedClub] = useState<ClubPreviewFragment>();
  // booleans
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation("common");

  const { isMobile } = useResponsive();

  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);

  const handleGetClubs = async ({
    pageNum,
    day,
  }: {
    pageNum: number;
    day: string;
  }) => {
    setIsLoading(true);

    const { clubs } = await fetchDataFromApi(GetClubsByDaysDocument, {
      day: day || undefined,
      page: pageNum,
      pageSize,
      locale: i18n.language,
    });

    setResult(clubs?.data?.map((el) => el.attributes) as Clubs);
    setTotal(clubs?.meta?.pagination?.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      setPage(1);

      if (!isMobile) {
        handleGetClubs({
          pageNum: page,
          day: selectedDay,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const handleSelectClub = (club: ClubPreviewFragment) => () => {
    if (!selectedClub?.slug) {
      setSelectedClub(club);
    }
  };

  const handleClose = () => setSelectedClub(undefined);

  const weekDaysOptions = WEEK_DAYS.map(({ key, value }) => ({
    key: value,
    value: t(key),
  }));

  const handleDaySelect = async (option: selectOption) => {
    if (option.key === selectedDay) return;

    setPage(1);
    setSelectedDay(option.key);

    await handleGetClubs({
      pageNum: page,
      day: option.key,
    });
  };

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);

    await handleGetClubs({
      pageNum: pageNumber,
      day: selectedDay,
    });
  };

  return (
    <SectionWrapper
      title={title}
      titleChildren={
        <Dropdown
          options={[
            { key: "", value: t("text.selectDay") },
            ...weekDaysOptions,
          ]}
          onChange={handleDaySelect}
          isLoading={isLoading}
          width="100%"
          height="56px"
          color="blue"
        />
      }
    >
      {result?.length ? (
        <CardsWrapper>
          {result?.map((el) => (
            <PromCard
              key={el?.slug}
              slug={el?.slug}
              images={el?.image?.data ? { data: [el.image.data] } : undefined}
              title={el?.clubName}
              location={el?.location}
              time={`${formatTime(el?.workingTime?.startTime)} - ${formatTime(el?.workingTime?.startTime)}`}
              averageRating={el?.averageRating}
              totalComments={el?.totalComments}
              handleClick={handleSelectClub(el)}
            />
          ))}
        </CardsWrapper>
      ) : (
        <Placeholder />
      )}
      <Pagination
        isDisabled={isLoading}
        currentPage={page}
        onChangePage={handleChangePage}
        totalItems={total}
        pageSize={pageSize}
      />
      <InfoWrapper>{clubsInfo}</InfoWrapper>
      <Modal
        onClose={handleClose}
        isOpen={!!selectedClub?.slug}
        width="60%"
        mWidth="90%"
      >
        {selectedClub?.slug ? (
          <ClubContainer
            clubPreview={selectedClub}
            isLoading={isLoading}
            onClose={handleClose}
          />
        ) : null}
      </Modal>
    </SectionWrapper>
  );
};

export default ClubsContainer;

const CardsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));

const InfoWrapper = styled("p")(({ theme }) => ({
  width: "100%",
  padding: "32px 16px",
  backgroundColor: theme.colors.yellow2,
  borderRadius: "16px",
  fontSize: theme.fontSize.fontS24,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    padding: "24px 12px",
  },
}));
