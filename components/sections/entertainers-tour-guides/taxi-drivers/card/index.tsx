import React from "react";
import styled from "@emotion/styled";
import Card from "../../children/card";

export enum Statuses {
  available = "green",
  unavailable = "yellow4",
  notwork = "red2",
}

interface Props {
  status: "available" | "unavailable" | "notwork";
}

const TaxiCard = ({ status }: Props) => {
  const indicator = <Status color={Statuses[status]} />;

  return <Card greyText={"Mon, Tue, Sat, Sun"} indicator={indicator} />;
};

export const Status = styled("div")<{ color: string }>(({ theme, color }) => ({
  left: 16,
  top: 16,
  position: "absolute",
  height: 16,
  width: 16,
  background: theme.colors[color],
  borderRadius: "50%",
}));

export default TaxiCard;
