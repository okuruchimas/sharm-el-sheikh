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
}));
export default AnimatorCards;
