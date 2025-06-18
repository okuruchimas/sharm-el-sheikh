import styled from "@emotion/styled";
import UniversalCard from "../../../layout/universal-card";
import { AdvertisementFragment } from "../../../../gql/graphql";
import { formatDate } from "../../../../utils/formateDate";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useResponsive from "../../../../hooks/useResponsive";
import { SwiperCardsWrapper } from "../../entertainers-tour-guides/children/cards-wrap";
import Placeholder from "../../promotions/children/placeholder";
import { useTranslation } from "next-i18next";

interface Props {
  advertisements?: AdvertisementFragment[];
  onElementClick: (ad: AdvertisementFragment) => void;
}
const New = ({ advertisements, onElementClick }: Props) => {
  const { slidesPerView } = useResponsive();
  const { t } = useTranslation("agents");

  return (
    <Wrapper>
      {advertisements?.length ? (
        <SwiperCardsWrapper
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
          {advertisements?.map((el, index) =>
            el ? (
              <SwiperSlide key={index}>
                <UniversalCard
                  title={el.title}
                  price={el.price}
                  place={el.location}
                  duration={formatDate(el.createdAt)}
                  imgSrc={el.images?.data[0]?.attributes?.url || ""}
                  onClick={() => onElementClick(el)}
                />
              </SwiperSlide>
            ) : null,
          )}
        </SwiperCardsWrapper>
      ) : (
        <Placeholder title={t("noAddsFound")} />
      )}
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
