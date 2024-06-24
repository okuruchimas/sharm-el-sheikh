import React from "react";
import styled from "@emotion/styled";
import { SubTitle } from "../../../layout/subtitle";

const Card = () => {
  return (
    <Wrap>
      {/*img*/}
      <SubTitle>Photographer in Sharm El Sheikh</SubTitle>
      <Description>
        A photo session in Sharm El Sheikh in the best locations of the city
        will give you a storm of emotions and beautiful photos and videos as a
        keepsake
      </Description>
    </Wrap>
  );
};

export default Card;

const Wrap = styled.div``;
const Description = styled.span``;
