import React from "react";
import AnimatorCard from "../card";
import styled from "@emotion/styled";

const AnimatorCards = () => {
  return (
    <Wrap>
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
      <AnimatorCard />
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
export default AnimatorCards;
