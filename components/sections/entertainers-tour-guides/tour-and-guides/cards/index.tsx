import styled from "@emotion/styled";
import GuideCard from "../card";
import { CardsWrap } from "../../children/cards-wrap";

const GuidesCards = () => {
  return (
    <Wrap>
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
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
export default GuidesCards;
