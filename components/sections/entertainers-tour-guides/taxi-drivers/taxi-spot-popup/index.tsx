import "swiper/css";
// hooks
import useResponsive from "../../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
// components
import Image from "next/image";
import TaxiCard from "../card";
import CardsSwiper from "../../../../layout/cards-swiper";
import NameAndRating from "../../../../layout/name-and-rating";
import StarReviewForm from "../../../../layout/star-review-form";
import { Swiper, SwiperSlide } from "swiper/react";
// utils
import styled from "@emotion/styled";
import { addRating } from "../../../../../utils/add-rating";
// types
import { type TaxiSpotFragment } from "../../../../../gql/graphql";

type TaxiSpotPopupProps = {
  data: TaxiSpotFragment;
  onClose: () => void;
};
const TaxiSpotPopup = ({ data, onClose }: TaxiSpotPopupProps) => {
  const [stars, setStars] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation("common");
  const { t: tPage } = useTranslation("entertainers-tour-guides");

  const { isMobile } = useResponsive();

  const isDisabled = isRated || isLoading;

  useEffect(() => {
    const ratedSpots = JSON.parse(localStorage.getItem("ratedSpots") || "[]");
    const ratedSpot = ratedSpots.find(
      (item: { slug: string }) => item.slug === data.slug,
    );

    if (ratedSpot) {
      setIsRated(true);
      setStars(ratedSpot.rating);
    }
  }, [data.slug]);

  const handleSave = async () => {
    setIsLoading(true);

    await addRating({
      rating: stars,
      slug: data.slug,
      collectionType: "taxi-spots",
    }).then(() => {
      const ratedSpots = JSON.parse(localStorage.getItem("ratedSpots") || "[]");

      const updatedRatedSpots = [
        ...ratedSpots,
        { slug: data.slug, rating: stars },
      ];
      localStorage.setItem("ratedSpots", JSON.stringify(updatedRatedSpots));
      setIsRated(true);
      setIsLoading(false);
    });
  };

  return (
    <Wrapper>
      <Stack>
        <SwiperStyled
          slidesPerView={isMobile ? 1.2 : 2.5}
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
        <Section>
          <h2>{t("text.about")}</h2>
          <p>{data?.about}</p>
        </Section>
        <Section>
          <h2>{tPage("tabs.taxiDrivers")}</h2>
          <CardsSwiper
            dataLength={data.taxi_drivers?.data.length}
            placeholderText={tPage("placeholders.noDrivers")}
          >
            {data.taxi_drivers?.data.map((el) =>
              el.attributes ? (
                <SwiperSlide key={el.attributes?.slug}>
                  <TaxiCard driver={el.attributes} size="s" />
                </SwiperSlide>
              ) : null,
            )}
          </CardsSwiper>
        </Section>
      </Stack>
      <StarReviewForm
        stars={stars}
        isDisabled={isDisabled}
        isLoading={isLoading}
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

  h2: {
    fontSize: theme.fontSize.fontS32,
    fontWeight: 700,
    color: theme.colors.blue,
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
