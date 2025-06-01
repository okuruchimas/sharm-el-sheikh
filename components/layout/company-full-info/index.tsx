// hooks
import useRatePlace from "../../../hooks/useRatePlace";
import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
import { Title } from "../title";
import GuideCard from "../../sections/entertainers-tour-guides/tour-and-guides/card";
import SocialIcon from "../social-icon";
import CardsSwiper from "../cards-swiper";
import VacancyItem from "./children/vacancy-item";
import LocationLink from "../location-link";
import AnimatorCard from "../../sections/entertainers-tour-guides/animators/card";
import ReactMarkdown from "react-markdown";
import NameAndRating from "../name-and-rating";
import { SwiperSlide } from "swiper/react";
import StarReviewForm from "../star-review-form";
// utils
import styled from "@emotion/styled";
// types
import type {
  AnimatorPreviewFragment,
  AnimationCompanyFragment,
  TourGuidePreviewFragment,
  TourOperatorCompanyFragment,
} from "../../../gql/graphql";

export type CompanyType = "animator" | "tour";

type Props = {
  companyData: AnimationCompanyFragment | TourOperatorCompanyFragment;
  onClose: () => void;
};

const CompanyFullInfo = ({ companyData, onClose }: Props) => {
  const { t, i18n } = useTranslation("common");
  const { t: tPage } = useTranslation("entertainers-tour-guides");
  const { vacancies, socialLinks, employmentNumber, complaintsNumber, about } =
    companyData;
  const getCompanyType = (
    data: AnimationCompanyFragment | TourOperatorCompanyFragment,
  ): CompanyType => {
    return "animators" in data ? "animator" : "tour";
  };

  const companyType = getCompanyType(companyData);

  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: companyData.slug,
      storageName:
        companyType === "animator"
          ? "ratedAnimationCompanies"
          : "ratedTourOperatorCompanies",
      collectionType:
        companyType === "animator"
          ? "animation-companies"
          : "tour-operator-companies",
    });

  const animatorsToShow: AnimatorPreviewFragment[] =
    companyType === "animator"
      ? (companyData as AnimationCompanyFragment).animators?.data
          ?.map((el) => el.attributes)
          ?.filter(
            (el): el is AnimatorPreviewFragment =>
              !!el && el.locale === i18n.language,
          ) || []
      : [];

  const guidesToShow: TourGuidePreviewFragment[] =
    companyType === "tour"
      ? (companyData as TourOperatorCompanyFragment).tour_guides?.data
          ?.map((el) => el.attributes)
          ?.filter(
            (el): el is TourGuidePreviewFragment =>
              !!el && el.locale === i18n.language,
          ) || []
      : [];

  const hasCards = animatorsToShow.length > 0 || guidesToShow.length > 0;

  const StatItem = ({ title, value }: { title: string; value: string }) =>
    value ? (
      <NumberContainer>
        <NumTitle>{title}</NumTitle>
        <Text>{value}</Text>
      </NumberContainer>
    ) : null;

  return (
    <Wrapper>
      <TopSection>
        <ImgWrapper>
          <Image
            src={
              companyData.image?.data?.attributes?.url ||
              "/images/background/background-prom.svg"
            }
            alt={
              companyData.image?.data?.attributes?.alternativeText ||
              "company logo"
            }
            layout="fill"
          />
        </ImgWrapper>

        <InfoWrap>
          <NameAndRating
            name={companyData.name}
            averageRating={companyData.averageRating}
            totalComments={companyData.totalComments}
          />
          <Location>
            <LocationLink
              iconSize="36px"
              iconSizeMobile="30px"
              text={companyData.location}
              position={companyData.position}
              fontSizeMobile="18px"
            />
          </Location>
        </InfoWrap>
      </TopSection>

      {about ? (
        <Section>
          <ReactMarkdown>{about}</ReactMarkdown>
        </Section>
      ) : null}

      {hasCards && (
        <Section>
          <CardsSwiper
            dataLength={animatorsToShow.length + guidesToShow.length}
            placeholderText={tPage(
              companyType === "animator"
                ? "placeholders.noAnimators"
                : "placeholders.noTourOperators",
            )}
          >
            {animatorsToShow.map((animator) => (
              <SwiperSlide key={animator.slug}>
                <AnimatorCard animator={animator} />
              </SwiperSlide>
            ))}
            {guidesToShow.map((guide) => (
              <SwiperSlide key={guide.slug}>
                <GuideCard tourGuide={guide} />
              </SwiperSlide>
            ))}
          </CardsSwiper>
        </Section>
      )}

      {vacancies?.length ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.vacancies")}</SectionTitle>
          <VacanciesWrapper>
            {vacancies
              ?.filter(Boolean)
              .map((vacancy, index) => (
                <VacancyItem
                  key={index}
                  title={vacancy?.title || ""}
                  text={vacancy?.text || ""}
                />
              ))}
          </VacanciesWrapper>
        </Section>
      ) : null}

      <Section>
        {socialLinks?.length ? (
          <IconsWrapper>
            {socialLinks.map((el, index) => (
              <SocialIcon
                key={index}
                iconSrc={el?.icon.data?.attributes?.url || ""}
                iconAlt={el?.icon.data?.attributes?.alternativeText || ""}
                socialLink={el?.socialLink || ""}
              />
            ))}
          </IconsWrapper>
        ) : null}

        <NumbersWrap>
          <StatItem
            title={t("animPopAp.employmentNumber")}
            value={employmentNumber || ""}
          />
          <StatItem
            title={t("animPopAp.complaintsNumber")}
            value={complaintsNumber || ""}
          />
        </NumbersWrap>
      </Section>
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

export default CompanyFullInfo;

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

const NumTitle = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  fontWeight: 700,
}));

const VacanciesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,

  "p, li": {
    fontSize: theme.fontSize.fontS21,
    lineHeight: 1.5,
  },

  [theme.breakpoints.mobileS]: {
    gap: 8,
    "p, li": {
      fontSize: theme.fontSize.fontS16,
    },
  },
}));

const SectionTitle = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  lineHeight: theme.fontSize.fontS32,
  fontWeight: 400,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const IconsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "24px",

  img: {
    width: "40px",
    height: "40px",
  },

  [theme.breakpoints.mobile]: {
    marginBottom: "16px",
  },
}));

const NumbersWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 16,
  [theme.breakpoints.mobile]: {
    flexDirection: "column",
  },
}));

const NumberContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
}));
