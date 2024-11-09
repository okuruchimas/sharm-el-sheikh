// components
import Flags from "../../../layout/flags";
import Image from "next/image";
import LinkIcon from "../../../layout/link-icon";
import TitleRating from "../../../layout/title-and-rating";
import TextAndIcon from "../../../layout/text-and-icon";
// utils
import styled from "@emotion/styled";
// types
import type { ImageI } from "../../../types/image";
import type { ReactNode } from "react";

interface Props {
  slug: string;
  imgSrc: string;
  title: string;
  greyText: string;
  iconSrc: string;
  iconText: string;
  indicator?: ReactNode;
  flagIcons: ImageI[];
  averageRating: number;
  totalComments: number;
}

const Card = ({
  slug,
  title,
  imgSrc,
  greyText,
  iconSrc,
  iconText,
  flagIcons,
  indicator,
  averageRating,
  totalComments,
}: Props) => {
  return (
    <Wrap className="anime-card">
      <StyledImage src={imgSrc} loading="lazy" height={298} width={266} />
      {indicator ? indicator : null}
      <InfoWrap>
        <GreyText>{greyText}</GreyText>
        <TitleRating
          title={title}
          averageRating={averageRating}
          totalComments={totalComments}
        />
        <TextAndIcon src={iconSrc} text={iconText} />
        <FlagsWrapper>
          <Flags icons={flagIcons} />
        </FlagsWrapper>
        <LinkIcon href={slug} />
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
  boxShadow: theme.shadows[0],
}));

const StyledImage = styled(Image)({
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  objectFit: "cover",
});

const InfoWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
});

const GreyText = styled("div")(({ theme }) => ({
  width: "max-content",
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.grey,
}));

const FlagsWrapper = styled("div")({
  ".flags-wrapper": {
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default Card;
