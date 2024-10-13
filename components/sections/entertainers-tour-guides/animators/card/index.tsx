import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";
import LinkIcon from "../../../../layout/link-icon";
import TitleRating from "../../../../layout/title-and-rating";
import TextAndIcon from "../../../../layout/text-and-icon";
import Flags from "../../../../layout/flags";

const AnimatorCard = () => {
  return (
    <Wrap>
      <StyledImage
        src="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/banner1_9ca87e6a4b.webp"
        loading="lazy"
        height={298}
        width={266}
      />
      <CompanyName>Name of company</CompanyName>
      <TitleRating
        title="Ameliia Holl"
        averageRating={4.2}
        totalComments={123}
      />
      <TextAndIcon
        src="/icons/promotions-section/location.svg"
        text="Hotel Name"
      />
      <Flags />
      <LinkIcon href="/" />
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 468,
  width: "100%",
}));

const StyledImage = styled(Image)({
  objectFit: "cover",
});

const CompanyName = styled("div")(({ theme }) => ({}));

export default AnimatorCard;
