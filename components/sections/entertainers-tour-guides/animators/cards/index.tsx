import React from "react";
import AnimatorCard from "../card";
import styled from "@emotion/styled";
import { Animator } from "../../../../../gql/graphql";

type AnimatorCardsProps = {
  animators: Animator[];
};
const AnimatorCards = ({ animators }: AnimatorCardsProps) => {
  return (
    <Wrap>
      {animators.map((el) => (
        <AnimatorCard animator={el} key={el.slug} />
      ))}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "16px",
  width: "100%",
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));
export default AnimatorCards;
