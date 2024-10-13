import React from "react";
import Rating from "../rating";
import styled from "@emotion/styled";

interface Props {
  title: string;
  averageRating: number;
  totalComments: number;
}
const TitleRating = ({ title, averageRating, totalComments }: Props) => {
  return (
    <Wrap>
      <CardTitle>{title}</CardTitle>
      <Rating points={averageRating} users={totalComments} />
    </Wrap>
  );
};

const Wrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "4px",
});

const CardTitle = styled("h3")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },

  "@media (max-width: 1250px)": {
    fontSize: theme.fontSize.fontS20,
    lineHeight: 1,
  },
}));

export default TitleRating;
