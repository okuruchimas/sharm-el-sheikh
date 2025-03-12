import {
  type AnimationCompanyFragment,
  type AnimationCompanyPreviewFragment,
  GetAnimationCompanyDocument,
} from "../../../../../gql/graphql";
// hooks
import useRatePlace from "../../../../../hooks/useRatePlace";
import { useTranslation } from "next-i18next";
import { useState, useEffect, useCallback } from "react";
// utils
import styled from "@emotion/styled";
import { fetchDataFromApi } from "../../../../../utils/fetchApi";
// components
import Image from "next/image";
import Loader from "../../../../layout/loader";
import FullData from "./full-data";
import LocationLink from "../../../../layout/location-link";
import NameAndRating from "../../../../layout/name-and-rating";
import StarReviewForm from "../../../../layout/star-review-form";

type AnimationCompanyPopupProps = {
  companyPreview: AnimationCompanyPreviewFragment;
  onClose: () => void;
};

const AnimationCompanyPopup = ({
  companyPreview,
  onClose,
}: AnimationCompanyPopupProps) => {
  const [fullData, setFullData] = useState<
    AnimationCompanyFragment | undefined | null
  >();

  const { i18n } = useTranslation("common");

  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: companyPreview.slug,
      storageName: "ratedAnimationCompanies",
      collectionType: "animation-companies",
    });

  const getFullData = useCallback(async () => {
    const { animationCompanies } = await fetchDataFromApi(
      GetAnimationCompanyDocument,
      {
        slug: companyPreview.slug,
        locale: i18n.language,
      },
    );

    setFullData(animationCompanies?.data[0]?.attributes);
  }, [companyPreview.slug, i18n.language]);

  useEffect(() => {
    getFullData();
  }, [getFullData]);

  return (
    <Wrapper>
      <TopSection>
        <ImgWrapper>
          <Image
            src={
              companyPreview.image?.data?.attributes?.url ||
              "/images/background/background-prom.svg"
            }
            alt={companyPreview.image?.data?.attributes?.alternativeText || ""}
            layout="fill"
          />
        </ImgWrapper>

        <InfoWrap>
          <NameAndRating
            name={companyPreview.value}
            averageRating={companyPreview.averageRating}
            totalComments={companyPreview.totalComments}
          />
          <Location>
            <LocationLink
              iconSize="36px"
              iconSizeMobile="30px"
              text={fullData?.location || "-"}
              position={fullData?.position}
              fontSizeMobile="18px"
            />
          </Location>
        </InfoWrap>
      </TopSection>

      {fullData?.slug ? <FullData fullData={fullData} /> : <Loader />}

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

export default AnimationCompanyPopup;

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

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "calc(100% - 184px)",

  [theme.breakpoints.mobile]: {
    width: "100%",
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

const TopSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "24px",

  [theme.breakpoints.mobile]: {
    gap: "16px",
    flexDirection: "column",
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "160px",
  height: "160px",
  borderRadius: "16px",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },
  border: `2px solid ${theme.colors.yellow}`,

  [theme.breakpoints.mobile]: {
    height: "200px",
    width: "100%",
  },
}));
