import "swiper/css";
import { GetTourDocument, type TourFragment } from "../../../../../gql/graphql";
// hooks
import useRatePlace from "../../../../../hooks/useRatePlace";
import useResponsive from "../../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useCallback, useEffect, useState } from "react";
// components
import Image from "next/image";
import Loader from "../../../../layout/loader";
import FullData from "./full-data";
import NameAndRating from "../../../../layout/name-and-rating";
import StarReviewForm from "../../../../layout/star-review-form";
import { Swiper, SwiperSlide } from "swiper/react";
// utils
import styled from "@emotion/styled";
import { fetchDataFromApi } from "../../../../../utils/fetchApi";
// types
import type { MapCard } from "../../../../layout/map/children/types";

type TourPopupProps = {
  tourPreview: MapCard;
  onClose: () => void;
};
const TourPopup = ({ tourPreview, onClose }: TourPopupProps) => {
  const [fullData, setFullData] = useState<TourFragment | undefined | null>();
  const [isLoading, setIsLoading] = useState(false);

  const { i18n } = useTranslation("common");
  const { isMobile } = useResponsive();

  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: tourPreview.slug,
      storageName: "ratedTours",
      collectionType: "tours",
    });

  const getFullData = useCallback(async () => {
    setIsLoading(true);

    const { tours } = await fetchDataFromApi(GetTourDocument, {
      slug: tourPreview.slug,
      locale: i18n.language,
    });

    setFullData(tours?.data[0]?.attributes);
    setIsLoading(false);
  }, [tourPreview.slug, i18n.language]);

  useEffect(() => {
    getFullData();
  }, [getFullData]);

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
          {fullData ? (
            fullData?.images?.data.map((el, index) => (
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
            ))
          ) : (
            <SwiperSlide>
              <Image
                src={tourPreview.imageSrc}
                alt={tourPreview.imageAlt}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "16px" }}
                className="photo"
              />
            </SwiperSlide>
          )}
        </SwiperStyled>

        <NameAndRating
          name={tourPreview.title}
          averageRating={tourPreview.averageRating}
          totalComments={tourPreview.totalComments}
        />

        {fullData ? <FullData fullData={fullData} /> : null}
      </Stack>
      {isLoading ? <Loader /> : null}
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

export default TourPopup;

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
