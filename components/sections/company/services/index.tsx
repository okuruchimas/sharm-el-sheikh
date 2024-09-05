// hooks
import { useTranslation } from "next-i18next";
// components
import NextImage from "../../../layout/image";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
// constants
import type { ServiceFragment } from "../../../../gql/graphql";

type ServicesProps = {
  services: ServiceFragment[];
};

const Services = ({ services }: ServicesProps) => {
  const { t } = useTranslation("company-page");

  return (
    <SectionWrapper title={t("servicesSection.title")}>
      <CardsWrapper>
        {services.map((el, index) => (
          <Card key={index} index={index}>
            <NextImage
              src={el.attributes?.icon.data?.attributes?.url ?? ""}
              alt={el.attributes?.icon.data?.attributes?.alternativeText ?? ""}
              width="60px"
              height="60px"
            />
            <Title>{el.attributes?.text}</Title>
          </Card>
        ))}
      </CardsWrapper>
    </SectionWrapper>
  );
};

const CardsWrapper = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
  },
}));

const waveAnimation = keyframes`
  0% {
    transform: translateX(0%) translateY(-75%) rotate(45deg);
  }
  15% {
    transform: translateX(350%) translateY(20%) rotate(45deg);
  }
  100% {
    transform: translateX(350%) translateY(20%) rotate(45deg);
  }
`;

const Card = styled("li", {
  shouldForwardProp: (prop) => prop !== "index",
})<{ index: number }>(({ theme, index }) => ({
  position: "relative",
  padding: "56px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1px solid ${theme.colors.blue5}`,
  borderRadius: "30px",
  backgroundColor: theme.colors.blue4,
  gap: "24px",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "20%",
    height: "300%",
    pointerEvents: "none",
    borderRadius: "50%",
    opacity: 0.4,
    boxShadow: `10px 0 10px 10px ${theme.colors.white}`,
    transform: "translateX(0%) translateY(-75%) rotate(45deg)",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(41,169,194,0.1) 40%, rgba(41,169,194,0.1) 60%, rgba(255,255,255,0.9) 100%)",
    animation: `${waveAnimation} 7s linear infinite`,
    animationDelay: `${index >= 4 ? (index - 4) * 0.5 : index * 0.5}s`,
  },

  [theme.breakpoints.mobile]: {
    padding: "24px 16px",
    gap: "16px",
    minHeight: "172px",

    "&::before": {
      animationDelay: `${index * 0.5}s`,
    },
  },
}));

const Title = styled("span")(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  fontSize: theme.fontSize.fontS21,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export default Services;
