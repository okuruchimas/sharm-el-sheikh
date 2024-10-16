import React from "react";
import styled from "@emotion/styled";
import Card from "../../children/card";

const AnimatorCard = () => {
  const indicator = (
    <IsClub
      height={40}
      width={40}
      src={"/icons/isClub.svg"}
      className="is club img"
    />
  );

  return <Card greyText={"Name of company"} indicator={indicator} />;
};

const IsClub = styled("img")({
  left: 16,
  top: 16,
  position: "absolute",
  height: 40,
  width: 40,
  objectFit: "cover",
});

export default AnimatorCard;
