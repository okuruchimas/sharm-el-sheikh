import styled from "@emotion/styled";
import GuideCard from "../card";

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

const Wrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "16px",
  width: "100%",

  [theme.breakpoints.desktopM]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  [theme.breakpoints.desktopS]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",

    ".anime-card:nth-of-type(2n)": {
      display: "none",
    },
  },
}));
export default GuidesCards;
