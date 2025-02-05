import { useTranslation } from "next-i18next";
import { Title } from "../../../../layout/title";
import VacancyItem from "./vacancy-item";
import SocialIcon from "../../../../layout/social-icon";
import PopApCards from "../cards/pop-ap-cards";
import { Section, SectionTitle } from "./index";
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
          <Text>{about}</Text>
        </Section>
      ) : null}

      {animatorsToShow ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.animators")}</SectionTitle>

          <PopApCards animators={animatorsToShow} />
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
