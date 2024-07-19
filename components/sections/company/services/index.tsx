// components
import NextImage from "../../../layout/Image";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
// constants
import { SERVICES } from "./children/mock-data";

const Services = () => (
  <SectionWrapper title="Services and Amenities">
    <CardsWrapper>
      {SERVICES.map((el, index) => (
        <Card key={index}>
          <NextImage
            src={el.iconUrl}
            alt={el.title}
            width="60px"
            height="60px"
          />
          <Title>{el.title}</Title>
        </Card>
      ))}
    </CardsWrapper>
  </SectionWrapper>
);

const CardsWrapper = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "8px",
  },
}));

const Card = styled("li")(({ theme }) => ({
  padding: "56px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1px solid ${theme.colors.blue5}`,
  borderRadius: "30px",
  backgroundColor: theme.colors.blue4,
  gap: "24px",

  [theme.breakpoints.mobile]: {
    padding: "24px 16px",
    gap: "16px",
    minHeight: "172px",
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
