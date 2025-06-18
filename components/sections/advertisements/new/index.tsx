import styled from "@emotion/styled";
import UniversalCard from "../../../layout/universal-card";
import { AdvertisementFragment } from "../../../../gql/graphql";
import { formatDate } from "../../../../utils/formateDate";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import useResponsive from "../../../../hooks/useResponsive";

interface Props {
  advertisements: AdvertisementFragment[];
}
const New = ({ advertisements }: Props) => {
  const { isMobile } = useResponsive();
  const slidesPerView = isMobile ? 1 : 3;

  return (
    <Wrapper>
      <SwiperWrapper
        modules={[Pagination]}
        slidesPerView={slidesPerView}
        isSingleCard={false}
        spaceBetween={12}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {[...advertisements, ...advertisements]?.map((el, index) => (
          <SwiperSlide key={index}>
            <UniversalCard
              title={el.title}
              price={el.price}
              place={el.location}
              duration={formatDate(el.createdAt)}
              imgSrc={el.images?.data[0]?.attributes?.url || ""}
              // onClick={handleServiceClick(el)}
            />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </Wrapper>
  );
};

export default New;

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: 16,
}));

export const SwiperWrapper = styled(Swiper, {
  shouldForwardProp: (prop) => prop !== "isSingleCard",
})<{ isSingleCard: boolean }>(({ theme, isSingleCard }) => ({
  width: "100%",
  paddingBottom: 44,

  [theme.breakpoints.mobile]: {
    marginLeft: 0,
    minWidth: 346,
  },

  ".swiper-wrapper": {
    alignItems: "center",
  },

  ".swiper-slide": {
    alignContent: "center",
  },

  ".swiper-pagination-bullets": {
    zIndex: 5,
    display: "flex",
    justifyContent: "center",
    gap: 6,
  },

  ".swiper-pagination-bullet": {
    width: 12,
    height: 12,
    background: theme.colors.white,
    borderRadius: "50%",
    border: "1px solid",
    borderColor: theme.colors.yellow,
    opacity: 1,
    transition: "background 0.3s ease",
  },

  ".swiper-pagination-bullet-active": {
    background: theme.colors.yellow,
  },
}));
