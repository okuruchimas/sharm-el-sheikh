import "swiper/css";
// hooks
import useRatePlace from "../../../../../hooks/useRatePlace";
import useResponsive from "../../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
import TaxiCard from "../card";
import CardsSwiper from "../../../../layout/cards-swiper";
import LocationLink from "../../../../layout/location-link";
import NameAndRating from "../../../../layout/name-and-rating";
import ReactMarkdown from "react-markdown";
import StarReviewForm from "../../../../layout/star-review-form";
import { Swiper, SwiperSlide } from "swiper/react";
// utils
import styled from "@emotion/styled";
// types
import type { TaxiSpotFragment } from "../../../../../gql/graphql";

type TaxiSpotPopupProps = {
  data: TaxiSpotFragment;
  onClose: () => void;
};
const TaxiSpotPopup = ({ data, onClose }: TaxiSpotPopupProps) => {
  const { t } = useTranslation("common");
  const { t: tPage } = useTranslation("entertainers-tour-guides");

  const { isMobile } = useResponsive();

  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: data.slug,
      storageName: "ratedTaxiSpots",
      collectionType: "taxi-spots",
    });

  const slidesPerView = () => {
    if (data.images?.data.length < 2 && isMobile) {
      return 1;
    }
    return isMobile ? 1.2 : 2.5;
  };

  return (
    <Wrapper>
      <Stack>
        <SwiperStyled
          slidesPerView={slidesPerView()}
          spaceBetween={12}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {data?.images?.data.map((el, index) => (
            <SwiperSlide key={index}>
              <Image
                src={el.attributes?.url || ""}
                alt={el.attributes?.alternativeText || ""}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "16px" }}
                className="photo"
              />
            </SwiperSlide>
          ))}
        </SwiperStyled>

        <NameAndRating
          name={data.name}
          averageRating={data.averageRating}
          totalComments={data.totalComments}
        />
        <Location>
          <LocationLink
            iconSize="36px"
            iconSizeMobile="30px"
            text={data.location || "-"}
            position={data.position}
          />
        </Location>
        <Section>
          <ReactMarkdown>{data?.about}</ReactMarkdown>
        </Section>
        <Section>
          <CardsSwiper
            dataLength={data.taxi_drivers?.data.length}
            placeholderText={tPage("placeholders.noDrivers")}
          >
            {data.taxi_drivers?.data.map((el) =>
              el.attributes ? (
                <SwiperSlide key={el.attributes?.slug}>
                  <TaxiCard driver={el.attributes} />
                </SwiperSlide>
              ) : null,
            )}
          </CardsSwiper>
        </Section>
      </Stack>
      <StarReviewForm
        stars={stars}
        isDisabled={isDisabled}
        isLoading={isLoadingRating}
        onSave={handleSave}
        onClose={onClose}
        onChange={setStars}
      />
    </Wrapper>
  );
};

export default TaxiSpotPopup;

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 40,
  minHeight: "890px",
  position: "relative",

  [theme.breakpoints.mobile]: {
    gap: 24,
  },
}));

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  ul: {
    marginLeft: "24px",
  },

  "p, li": {
    fontSize: theme.fontSize.fontS21,
    lineHeight: 1.5,
  },

  [theme.breakpoints.mobileS]: {
    gap: "8px",

    h2: {
      fontSize: theme.fontSize.fontS24,
      fontWeight: 700,
    },

    "p, li": {
      fontSize: theme.fontSize.fontS16,
    },
  },
}));

const SwiperStyled = styled(Swiper)({
  width: "100%",
  height: "300px",
});

const Stack = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  [theme.breakpoints.mobileS]: {
    gap: "24px",
  },
}));

const Location = styled("div")(({ theme }) => ({
  maxWidth: "max-content",

  ".icon-text": {
    fontSize: theme.fontSize.fontS21,
    color: theme.colors.black,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS16,
    },
  },
}));
