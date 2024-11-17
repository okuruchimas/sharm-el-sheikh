// hooks
import { useTranslation } from "next-i18next";
import { useState, useEffect, useCallback } from "react";
// utils
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { addRating } from "../../../../utils/add-rating";
import { formatTime } from "../../../../utils/formateDate";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// components
import Image from "next/image";
import Loader from "../../../layout/loader";
import Rating from "../../../layout/rating";
import Button from "../../../layout/button";
import TextPill from "../../../layout/text-pill";
import NextImage from "../../../layout/image";
import ServiceCard from "../../../layout/service-card";
import StarReview from "../../company/review/children/star-review";
// constants
import { DayAbv } from "../../../../constants/week-days.constants";
// types
import {
  type Club,
  type ClubPreviewFragment,
  GetClubBySlugDocument,
} from "../../../../gql/graphql";

type ClubContainerProps = {
  clubPreview: ClubPreviewFragment;
  isLoading: boolean;
  onClose: () => void;
};

const ClubContainer = ({
  clubPreview,
  onClose,
  isLoading: isLoadingContainer,
}: ClubContainerProps) => {
  const [stars, setStars] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [fullData, setFullData] = useState<Club | undefined | null>();
  const [isLoading, setIsLoading] = useState(false);

  const { t, i18n } = useTranslation("common");

  const getFullClubData = useCallback(async () => {
    const { clubs } = await fetchDataFromApi(GetClubBySlugDocument, {
      slug: clubPreview.slug,
      locale: i18n.language,
    });

    setFullData(clubs?.data[0]?.attributes as Club);
  }, [clubPreview.slug, i18n.language]);

  const isDisabled =
    isRated || !fullData?.slug || isLoading || isLoadingContainer;

  useEffect(() => {
    getFullClubData();

    const ratedClubs = JSON.parse(localStorage.getItem("ratedClubs") || "[]");
    const ratedClub = ratedClubs.find(
      (item: { slug: string }) => item.slug === clubPreview.slug,
    );

    if (ratedClub) {
      setIsRated(true);
      setStars(ratedClub.rating);
    }
  }, [clubPreview.slug, getFullClubData]);

  const handleSave = async () => {
    setIsLoading(true);

    await addRating({
      rating: stars,
      slug: clubPreview.slug,
      collectionType: "clubs",
    }).then(() => {
      const ratedClubs = JSON.parse(localStorage.getItem("ratedClubs") || "[]");

      const updatedRatedClubs = [
        ...ratedClubs,
        { slug: clubPreview.slug, rating: stars },
      ];
      localStorage.setItem("ratedClubs", JSON.stringify(updatedRatedClubs));
      setIsRated(true);
      setIsLoading(false);
    });
  };

  const days = fullData?.workingDays.map((el) =>
    t(DayAbv[(el?.day || "") as keyof typeof DayAbv] || ""),
  );

  return (
    <Wrapper>
      <TopSection>
        <ImgWrapper>
          <Image
            src={clubPreview.image.data?.attributes?.url || ""}
            alt={clubPreview.image.data?.attributes?.alternativeText || ""}
            layout="fill"
          />
        </ImgWrapper>
        <Stack>
          <RowStack marginBottom="24px">
            <Name>{clubPreview.clubName}</Name>
            <RatingWrapper>
              <Rating
                points={clubPreview.averageRating}
                users={clubPreview.totalComments}
              />
            </RatingWrapper>
          </RowStack>
          {fullData?.slug ? (
            <>
              <Stack gap="8px" fallDown>
                <Text fontWeight={"700"}>{t("text.workingDays")}</Text>
                <DayAndTime>
                  <Text>{days?.join(", ") || "-"}</Text>
                  <TextPill>{`${formatTime(fullData?.workingTime.startTime)} - ${formatTime(fullData?.workingTime?.endTime)}`}</TextPill>
                </DayAndTime>
              </Stack>
              <Stack gap="24px" mGap="16px" fallDown>
                <RowStack>
                  <NextImage
                    src={"/icons/promotions-section/location.svg"}
                    alt="location-marker"
                    width="36px"
                    height="36px"
                  />
                  <Text>{fullData?.location || "-"}</Text>
                </RowStack>
                <RowStack>
                  <NextImage
                    src={"/icons/phone.svg"}
                    alt="location-marker"
                    width="36px"
                    height="36px"
                  />
                  <Text>{fullData?.phoneNumber || "-"}</Text>
                </RowStack>
              </Stack>
            </>
          ) : null}
        </Stack>
      </TopSection>
      {fullData?.slug ? (
        <>
          <Stack gap="24px" mGap="16px" fallDown>
            <Title>{t("text.about")}</Title>
            <Text>{fullData?.about}</Text>
            <RowStack gap="16px">
              <Title>{t("text.food")}</Title>
              <Text>{fullData?.food}</Text>
            </RowStack>
          </Stack>
          <CardsWrapper fallDown>
            {fullData?.services?.data
              ? fullData?.services?.data?.map((el, index) => (
                  <ServiceCard
                    key={index}
                    index={index}
                    title={el.attributes?.text || ""}
                    iconSrc={el.attributes?.icon.data?.attributes?.url ?? ""}
                    iconAlt={
                      el.attributes?.icon.data?.attributes?.alternativeText ??
                      ""
                    }
                  />
                ))
              : null}
          </CardsWrapper>
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

export default ClubContainer;

const fallDownKF = keyframes`
    0% { transform: translateY(-30%); opacity: 0 }
    50% { transform: translateY(-20%); opacity: 0.2 }
    100% { transform: translateY(0); opacity: 1}
`;

const Wrapper = styled("div")(({ theme }) => ({
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
    display: "flex",
    flexDirection: "column",
    gap: gap || "16px",

    ...(fallDown ? { animation: `${fallDownKF} 0.5s linear ` } : {}),

    [theme.breakpoints.mobile]: {
      gap: mGap || "8px",
    },
  }),
);

const RowStack = styled("div", {
  shouldForwardProp: (prop) => !["gap", "marginBottom"].includes(prop),
})<{ gap?: string; marginBottom?: string }>(({ gap, marginBottom }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: gap || "8px",
  marginBottom: marginBottom || "0",
}));

const DayAndTime = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",

  [theme.breakpoints.mobile]: {
    justifyContent: "space-between",
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "340px",
  borderRadius: "16px",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },

  [theme.breakpoints.mobile]: {
    height: "300px",
  },
}));

const Title = styled("h2", {
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
  fontSize: theme.fontSize.fontS40,
  width: "100%",
  marginTop: "10px",

  [theme.breakpoints.mobile]: {
    marginTop: "0",
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

const CardsWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "fallDown",
})<{ fallDown?: boolean }>(({ theme, fallDown }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",

  ".card-title": {
    fontSize: theme.fontSize.fontS18,
  },

  ".service-card": {
    padding: "16px 8px",
  },

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
  },

  ...(fallDown ? { animation: `${fallDownKF} 0.5s linear ` } : {}),
}));