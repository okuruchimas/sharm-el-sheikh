import { useTranslation } from "next-i18next";
import { Title } from "../../../../layout/title";
import SocialIcon from "../../../../layout/social-icon";
import CardsSwiper from "../../../../layout/cards-swiper";
import VacancyItem from "./vacancy-item";
import AnimatorCard from "../card";
import ReactMarkdown from "react-markdown";
import { SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import type {
  AnimationCompanyFragment,
  AnimatorPreviewFragment,
} from "../../../../../gql/graphql";

interface Props {
  fullData: AnimationCompanyFragment;
}

const FullData = ({ fullData }: Props) => {
  const { t } = useTranslation("common");
  const { t: tPage } = useTranslation("entertainers-tour-guides");

  const { i18n } = useTranslation("");

  const {
    vacancies,
    socialLinks,
    employmentNumber,
    complaintsNumber,
    animators,
    about,
  } = fullData;

  const animatorsToShow: AnimatorPreviewFragment[] =
    animators?.data
      ?.map((el) => el.attributes)
      ?.filter(
        (el): el is AnimatorPreviewFragment =>
          !!el && el.locale === i18n.language,
      ) || [];

  return (
    <>
      {about ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.about")}</SectionTitle>
          <ReactMarkdown>{about}</ReactMarkdown>
        </Section>
      ) : null}

      {animatorsToShow ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.animators")}</SectionTitle>
          <CardsSwiper
            dataLength={animatorsToShow.length}
            placeholderText={tPage("placeholders.noAnimators")}
          >
            {animatorsToShow.map((el) => (
              <SwiperSlide key={el?.slug}>
                <AnimatorCard animator={el} size="s" />
              </SwiperSlide>
            ))}
          </CardsSwiper>
        </Section>
      ) : null}

      {vacancies?.length ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.vacancies")}</SectionTitle>
          <VacanciesWrapper>
            {vacancies.map((vacancy, index) => (
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
          <>
            <SectionTitle as="h3">{t("animPopAp.contacts")}</SectionTitle>
            <IconsWrapper>
              {socialLinks?.map((el, index) => (
                <SocialIcon
                  key={index}
                  iconSrc={el?.icon.data?.attributes?.url || ""}
                  iconAlt={el?.icon.data?.attributes?.alternativeText || ""}
                  socialLink={el?.socialLink || ""}
                />
              ))}
            </IconsWrapper>
          </>
        ) : null}

        <NumbersWrap>
          {employmentNumber ? (
            <NumberContainer>
              <NumTitle>{t("animPopAp.employmentNumber")}</NumTitle>
              <Text>{employmentNumber}</Text>
            </NumberContainer>
          ) : null}

          {complaintsNumber ? (
            <NumberContainer>
              <NumTitle>{t("animPopAp.complaintsNumber")}</NumTitle>
              <Text>{complaintsNumber}</Text>
            </NumberContainer>
          ) : null}
        </NumbersWrap>
      </Section>
    </>
  );
};

const NumTitle = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {},
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

  [theme.breakpoints.mobile]: {},
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  lineHeight: theme.fontSize.fontS32,
  fontWeight: 400,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const IconsWrapper = styled("div")({
  display: "flex",
  gap: "24px",

  img: {
    width: "40px",
    height: "40px",
  },
});

const NumbersWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 16,
}));

const NumberContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
}));

export default FullData;
