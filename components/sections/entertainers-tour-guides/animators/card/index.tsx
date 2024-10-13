import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import LinkIcon from "../../../../layout/link-icon";
import TitleRating from "../../../../layout/title-and-rating";
import TextAndIcon from "../../../../layout/text-and-icon";
import Flags from "../../../../layout/flags";

const AnimatorCard = () => {
  return (
    <Wrap className="anime-card">
      <StyledImage
        src="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/banner1_9ca87e6a4b.webp"
        loading="lazy"
        height={298}
        width={266}
      />
      <IsClub
        height={40}
        width={40}
        src={"/icons/isClub.svg"}
        className="is club img"
      />
      <InfoWrap>
        <CompanyName>Name of company</CompanyName>
        <TitleRating
          title="Ameliia Holl"
          averageRating={4.2}
          totalComments={123}
        />
        <TextAndIcon src="/icons/Hotel.svg" text="Hotel Name" />
        <Flags />
        <LinkIcon href="/" />
      </InfoWrap>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 468,
  width: "100%",
  background: theme.colors.white,
  borderRadius: 16,
  position: "relative",
}));

const StyledImage = styled(Image)({
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,

  objectFit: "cover",
});

const IsClub = styled("img")({
  left: 16,
  top: 16,
  position: "absolute",
  height: 40,
  width: 40,
  objectFit: "cover",
});

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
}));

const CompanyName = styled("div")(({ theme }) => ({
  width: "max-content",
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.grey,
  borderBottom: `1px solid ${theme.colors.grey}`,
}));

export default AnimatorCard;
