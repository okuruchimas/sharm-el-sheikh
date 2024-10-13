import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
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
      <InfoWrap>
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
}));

const StyledImage = styled(Image)({
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,

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
