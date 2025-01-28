import {
  type AnimationCompanyFragment,
  type AnimationCompanyPreviewFragment,
  GetAnimationCompanyDocument,
} from "../../../../../gql/graphql";
// hooks
import { useTranslation } from "next-i18next";
import React, { useState, useEffect, useCallback } from "react";
// utils
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { fetchDataFromApi } from "../../../../../utils/fetchApi";
import { addRating } from "../../../../../utils/add-rating";
// components
import Image from "next/image";
import Rating from "../../../../layout/rating";
import Button from "../../../../layout/button";
import Loader from "../../../../layout/loader";
import StarReview from "../../../company/review/children/star-review";
import LocationLink from "../../../../layout/location-link";
import SocialIcon from "../../../../layout/social-icon";
import { Title } from "../../../../layout/title";
import { Arrow } from "../../../../layout/header/children/language-selector";
import VacancyItem from "./vacancy-item";
import FullData from "./full-data";
// constants
// types

type AnimationCompanyPopupProps = {
  companyPreview: AnimationCompanyPreviewFragment;
  onClose: () => void;
};

const AnimationCompanyPopup = ({
  companyPreview,
  onClose,
}: AnimationCompanyPopupProps) => {
  const [stars, setStars] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [fullData, setFullData] = useState<
    AnimationCompanyFragment | undefined | null
  >();
  const [isLoading, setIsLoading] = useState(false);

  const { t, i18n } = useTranslation("common");

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

  const isDisabled = isRated || !fullData?.slug || isLoading;

  useEffect(() => {
    getFullData();

    const ratedCompanies = JSON.parse(
      localStorage.getItem("ratedClubs") || "[]",
    );
    const ratedCompany = ratedCompanies.find(
      (item: { slug: string }) => item.slug === companyPreview.slug,
    );

    if (ratedCompany) {
      setIsRated(true);
      setStars(ratedCompany.rating);
    }
  }, [companyPreview.slug, getFullData]);

  const handleSave = async () => {
    setIsLoading(true);

    await addRating({
      rating: stars,
      slug: companyPreview.slug,
      collectionType: "animation-companies",
    }).then(() => {
      const ratedClubs = JSON.parse(localStorage.getItem("ratedClubs") || "[]");

      const updatedRatedClubs = [
        ...ratedClubs,
        { slug: companyPreview.slug, rating: stars },
      ];
      localStorage.setItem("ratedClubs", JSON.stringify(updatedRatedClubs));
      setIsRated(true);
      setIsLoading(false);
    });
  };

  return (
    <Wrapper>
      <TopSection>
        <ImgWrapper>
          <Image
            src={companyPreview.image?.data?.attributes?.url || ""}
            alt={companyPreview.image?.data?.attributes?.alternativeText || ""}
            layout="fill"
          />
        </ImgWrapper>

        <InfoWrap>
          <NameWrap>
            <Name as="h2">{companyPreview.value}</Name>
            <RatingWrapper>
              <Rating
                points={companyPreview.averageRating}
                users={companyPreview.totalComments}
              />
            </RatingWrapper>
          </NameWrap>

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

      <Section>
        <SectionTitle>{t("text.howRateEstablishment")}</SectionTitle>
        <StarReview stars={stars} onChange={setStars} disabled={isDisabled} />
      </Section>

      <SaveButton
        text={t("buttons.save")}
        onClick={handleSave}
        isLoading={isLoading}
        disabled={isDisabled || stars < 1}
      />
      <BackButton text={t("buttons.back")} onClick={onClose} />
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

const NameWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
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

export const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,

  [theme.breakpoints.mobile]: {
    gap: 8,
  },
}));

export const SectionTitle = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {},
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

const BackButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",

  [theme.breakpoints.mobile]: {
    position: "sticky",
    bottom: 0,
    right: 0,
    opacity: 0.9,
    minWidth: "130px",
  },
}));

const SaveButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,

  [theme.breakpoints.mobile]: {
    minWidth: "130px",
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

const Name = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS28,
  },
}));

const RatingWrapper = styled("div")(({ theme }) => ({
  span: {
    fontSize: theme.fontSize.fontS24,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS18,
    },
  },
}));
