import styled from "@emotion/styled";
import PhotographCard from "../card";

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
export default PhotographCards;
