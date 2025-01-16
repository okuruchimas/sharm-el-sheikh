import {
  type AnimationCompanyFragment,
  type AnimationCompanyPreviewFragment,
  GetAnimationCompanyDocument,
} from "../../../../../gql/graphql";
// hooks
import { useTranslation } from "next-i18next";
import { useState, useEffect, useCallback } from "react";
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
        <Stack>
          <RowStack marginBottom="24px">
            <Name>{companyPreview.value}</Name>
            <RatingWrapper>
              <Rating
                points={companyPreview.averageRating}
                users={companyPreview.totalComments}
              />
            </RatingWrapper>
          </RowStack>
        </Stack>
      </TopSection>
      {fullData?.slug ? (
        <>
          <Stack gap="24px" mGap="16px" fallDown>
            <Location>
              <LocationLink
                iconSize="36px"
                iconSizeMobile="30px"
                text={fullData?.location || "-"}
                position={fullData?.position}
              />
            </Location>
            <Title>{t("text.about")}</Title>
            <Text>{fullData?.about}</Text>
            <Title>employmentNumber</Title>
            <Text>{fullData?.employmentNumber}</Text>
            <Title>complaintsNumber</Title>
            <Text>{fullData?.complaintsNumber}</Text>
            <IconsWrapper>
              {fullData.socialLinks?.map((el, index) => (
                <SocialIcon
                  key={index}
                  iconSrc={el?.icon.data?.attributes?.url || ""}
                  iconAlt={el?.icon.data?.attributes?.alternativeText || ""}
                  socialLink={el?.socialLink || ""}
                />
              ))}
            </IconsWrapper>
          </Stack>
        </>
      ) : (
        <Loader />
      )}

      <Stack gap="24px" mGap="16px">
        <div>
          <Title marginBottom="8px">{t("text.howRateEstablishment")}</Title>
          <StarReview stars={stars} onChange={setStars} disabled={isDisabled} />
        </div>
      </Stack>
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

const fallDownKF = keyframes`
    0% { transform: translateY(-20%); opacity: 0 }
    50% { transform: translateY(-10%); opacity: 0.2 }
    100% { transform: translateY(0); opacity: 1}
`;

const Location = styled("div")(({ theme }) => ({
  // TODO: fix styles
  maxWidth: "max-content",

  ".icon-text": {
    fontSize: theme.fontSize.fontS21,
    color: theme.colors.black,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS16,
    },
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  // TODO: fix styles
  backgroundColor: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "24px",
  minHeight: "890px",
  position: "relative",

  [theme.breakpoints.mobile]: {
    gap: "16px",
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  // TODO: fix styles
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
  // TODO: fix styles
  position: "absolute",
  bottom: 0,
  left: 0,

  [theme.breakpoints.mobile]: {
    minWidth: "130px",
  },
}));

const TopSection = styled("div")(({ theme }) => ({
  // TODO: fix styles
  display: "grid",
  gridTemplateColumns: "340px 1fr",
  gap: "24px",

  [theme.breakpoints.mobile]: {
    gap: "16px",
    gridTemplateColumns: "1fr",
  },
}));

const Stack = styled("div", {
  shouldForwardProp: (prop) => !["gap", "fallDown", "mGap"].includes(prop),
})<{ gap?: string; fallDown?: boolean; mGap?: string }>(
  ({ theme, gap, fallDown, mGap }) => ({
    // TODO: fix styles
    display: "flex",
    flexDirection: "column",
    gap: gap || "16px",

    ...(fallDown ? { animation: `${fallDownKF} 0.3s linear` } : {}),

    [theme.breakpoints.mobile]: {
      gap: mGap || "8px",
    },
  }),
);

const RowStack = styled("div", {
  shouldForwardProp: (prop) => !["gap", "marginBottom"].includes(prop),
})<{ gap?: string; marginBottom?: string }>(({ gap, marginBottom }) => ({
  // TODO: fix styles
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: gap || "8px",
  marginBottom: marginBottom || "0",
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  // TODO: fix styles
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

const Title = styled("h2", {
  // TODO: fix styles
  shouldForwardProp: (prop) => prop !== "marginBottom",
})<{ marginBottom?: string }>(({ theme, marginBottom }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
  color: theme.colors.blue,
  marginBottom: marginBottom || "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));

const Text = styled("p", {
  // TODO: fix styles
  shouldForwardProp: (prop) => prop !== "fontWeight",
})<{ fontWeight?: string }>(({ theme, fontWeight }) => ({
  fontSize: theme.fontSize.fontS21,
  fontWeight: fontWeight || 400,
  lineHeight: 1.5,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const Name = styled(Title)(({ theme }) => ({
  // TODO: fix styles
  fontSize: theme.fontSize.fontS40,
  width: "100%",
  marginTop: "10px",

  [theme.breakpoints.mobile]: {
    marginTop: "0",
    fontSize: theme.fontSize.fontS28,
  },
}));

const RatingWrapper = styled("div")(({ theme }) => ({
  // TODO: fix styles
  span: {
    fontSize: theme.fontSize.fontS24,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS18,
    },
  },
}));

const IconsWrapper = styled("div")({
  // TODO: fix styles
  display: "flex",
  gap: "24px",

  img: {
    width: "40px",
    height: "40px",
  },
});
