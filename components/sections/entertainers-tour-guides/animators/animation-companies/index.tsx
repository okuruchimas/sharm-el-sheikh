// hooks
import { useTranslation } from "next-i18next";
// components
import { Title } from "../../../../layout/title";
import AnimationCompanyCard from "../animation-company-card";
// utils
import styled from "@emotion/styled";
// types
import type { AnimationCompanyPreviewFragment } from "../../../../../gql/graphql";
import type { Dispatch } from "react";

type AnimationCompaniesProps = {
  companies: AnimationCompanyPreviewFragment[];
  setSelectedCompany: Dispatch<AnimationCompanyPreviewFragment | undefined>;
};

const AnimationCompanies = ({
  companies,
  setSelectedCompany,
}: AnimationCompaniesProps) => {
  const { t } = useTranslation("entertainers-tour-guides");

  const handleCardClick = (data: AnimationCompanyPreviewFragment) => () => {
    setSelectedCompany(data);
  };

  return (
    <Wrapper>
      <Title>{t("animationCompanies")}</Title>
      <CardsWrapper>
        {companies.map((el) => (
          <AnimationCompanyCard
            key={el.value}
            imgSrc={
              el.image?.data?.attributes?.url ||
              "/images/background/background-prom.svg"
            }
            title={el.value}
            averageRating={el.averageRating || 0}
            totalComments={el.totalComments || 0}
            onClick={handleCardClick(el)}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default AnimationCompanies;

const Wrapper = styled("div")(({ theme }) => ({
  margin: "80px 0 0 ",
  display: "flex",
  flexDirection: "column",
  gap: 40,
  width: "100%",
  [theme.breakpoints.mobile]: {
    gap: 24,
  },
}));

const CardsWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
  },
}));
