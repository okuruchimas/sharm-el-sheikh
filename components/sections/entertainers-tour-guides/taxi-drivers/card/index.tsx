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
  const arr = [
    "/icons/flags/UA.svg",
    "/icons/flags/DT.svg",
    "/icons/flags/IT.svg",
    "/icons/flags/EN.svg",
  ];

  return (
    <Card
      averageRating={0}
      totalComments={0}
      slug={""}
      title={"John Black"}
      imgSrs={
        "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/banner1_9ca87e6a4b.webp"
      }
      hotelName={"Economy car"}
      greyText={"Mon, Tue, Sat, Sun"}
      indicator={indicator}
      flagIcons={arr}
    />
  );
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
