import styled from "@emotion/styled";
import TaxiCard from "../card";

const TaxiCards = () => {
  return (
    <Wrap>
      <TaxiCard status="available" />
      <TaxiCard status="available" />
      <TaxiCard status="unavailable" />
      <TaxiCard status="available" />
      <TaxiCard status="unavailable" />
      <TaxiCard status="available" />
      <TaxiCard status="notwork" />
      <TaxiCard status="available" />
      <TaxiCard status="notwork" />
      <TaxiCard status="available" />
      <TaxiCard status="unavailable" />
      <TaxiCard status="available" />
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "16px",
  width: "100%",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",

    ".anime-card:nth-of-type(2n)": {
      display: "none",
    },
  },
}));
export default TaxiCards;
