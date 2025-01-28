import React from "react";
import VacancyItem from "./vacancy-item";
import SocialIcon from "../../../../layout/social-icon";
import { Section, SectionTitle } from "./index";
import { Title } from "../../../../layout/title";
import { AnimationCompanyFragment } from "../../../../../gql/graphql";
import { useTranslation } from "next-i18next";
import styled from "@emotion/styled";
import AnimatorCards from "../cards";
import PopApCards from "../cards/pop-ap-cards";

interface Props {
  fullData: AnimationCompanyFragment;
}

const updateArr = (arr: any) => {
  console.log(arr);

  if (!arr) return;
  return arr.map((item: any) => ({ ...item.attributes }));
};
const FullData = ({ fullData }: Props) => {
  const { t } = useTranslation("common");

  const {
    about,
    vacancies,
    socialLinks,
    employmentNumber,
    complaintsNumber,
    animators,
  } = fullData;

  console.log(updateArr(animators?.data), "animators");

  return (
    <>
      {about ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.about")}</SectionTitle>
          <Text>{about}</Text>
        </Section>
      ) : null}

      {animators ? (
        <Section>
          <SectionTitle as="h3">{t("animPopAp.animators")}</SectionTitle>

          <PopApCards animators={updateArr(animators?.data)} />
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
            </IconsWrapper>{" "}
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
