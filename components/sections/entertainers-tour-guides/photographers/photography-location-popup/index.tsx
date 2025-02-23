import "swiper/css";
// hooks
import useRatePlace from "../../../../../hooks/useRatePlace";
import useResponsive from "../../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
import CardsSwiper from "../../../../layout/cards-swiper";
import NameAndRating from "../../../../layout/name-and-rating";
import StarReviewForm from "../../../../layout/star-review-form";
import PhotographCard from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
// utils
import styled from "@emotion/styled";
// types
import { type PhotographyLocation } from "../../../../../gql/graphql";
import ReactMarkdown from "react-markdown";

type PhotographyLocationPopupProps = {
  data: PhotographyLocation;
  onClose: () => void;
};
const PhotographyLocationPopup = ({
  data,
  onClose,
}: PhotographyLocationPopupProps) => {
  const { t } = useTranslation("common");
  const { t: tPage } = useTranslation("entertainers-tour-guides");

  const { isMobile } = useResponsive();

  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: data.slug,
      storageName: "ratedPhotographyLocations",
      collectionType: "photography-locations",
    });

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
          <ReactMarkdown>{data.about}</ReactMarkdown>
        </Section>
        <Section>
          <h2>{tPage("tabs.photographers")}</h2>
          <CardsSwiper
            dataLength={data.photographers?.data.length}
            placeholderText={tPage("placeholders.noDrivers")}
          >
            {data.photographers?.data.map((el) =>
              el.attributes ? (
                <SwiperSlide key={el.attributes?.slug}>
                  <PhotographCard photographer={el.attributes} size="s" />
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

export default PhotographyLocationPopup;

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
