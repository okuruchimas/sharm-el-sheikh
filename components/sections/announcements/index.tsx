import React from "react";
import styled from "@emotion/styled";
import { Title } from "../../layout/title";
import Card from "./children/card";

const Announcements = () => {
  return (
    <Wrap>
      <Title>Recent Announcements</Title>
      <CardWrap>
        <Card />
        <Card />
        <Card />
      </CardWrap>
    </Wrap>
  );
};

export default Announcements;

const Wrap = styled.div``;
const CardWrap = styled.div``;
