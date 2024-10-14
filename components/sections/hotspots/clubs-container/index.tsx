// hooks
import useResponsive from "../../../../hooks/useResponsive";
import { useMemo, useState } from "react";
// components
import PromCard from "../../promotions/children/prom-card";
import Pagination from "../../../layout/pagination";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";

type EventsContainerProps = {
  title: string;
  totalItems: number;
  clubsInfo: string;
};

const ClubsContainer = ({
  title,
  clubsInfo,
  totalItems,
}: EventsContainerProps) => {
  const [page, setPage] = useState<number>(1);
  const { isMobile } = useResponsive();

  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);

  return (
    <SectionWrapper title={title}>
      <CardsWrapper>
        <PromCard
          slug={""}
          discount={"20%"}
          images={undefined}
          title={"La Dolce Vita"}
          location={"Dolche Vita club"}
          time="12:00 am - 02:00 pm"
          averageRating={4}
          totalComments={20}
        />
      </CardsWrapper>
      <Pagination
        isDisabled={false}
        currentPage={page}
        onChangePage={setPage}
        totalItems={totalItems}
        pageSize={pageSize}
      />
      <InfoWrapper>{clubsInfo}</InfoWrapper>
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
