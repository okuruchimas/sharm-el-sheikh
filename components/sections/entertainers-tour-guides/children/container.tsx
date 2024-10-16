import React, { ReactNode } from "react";
import { Title } from "../../../layout/title";
import Tabs from "./tabs";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <Wrap>
      <Title>
        Engage the best guides and entertainers to make every journey and
        evening unforgettable!
      </Title>
      <Tabs />
      {children}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "235px 100px 80px",
  backgroundImage: theme.backgrounds.guides,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  [theme.breakpoints.mobile]: {
    padding: "110px 16px 32px",
    backgroundImage: theme.backgrounds.guidesMob,
  },
}));
export default Container;
