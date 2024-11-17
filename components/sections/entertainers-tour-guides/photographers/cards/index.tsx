import styled from "@emotion/styled";
import PhotographCard from "../card";
import { CardsWrap } from "../../children/cards-wrap";

const PhotographCards = () => {
  return (
    <Wrap>
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
      <PhotographCard />
    </Wrap>
  );
};

const Wrap = styled(CardsWrap)(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    ".anime-card:nth-of-type(2n)": {
      display: "none",
    },
  },
}));
export default PhotographCards;
