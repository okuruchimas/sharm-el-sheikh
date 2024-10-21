import { ReactNode } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import TitleRating from "../../../layout/title-and-rating";
import TextAndIcon from "../../../layout/text-and-icon";
import Flags from "../../../layout/flags";
import LinkIcon from "../../../layout/link-icon";

interface Props {
  imgSrc: string;
  title: string;
  greyText: string;
  hotelName: string;
  flagIcons: string[];
  slug: string;
  averageRating: number;
  totalComments: number;
  indicator?: ReactNode;
}

const Card = ({
  slug,
  title,
  imgSrc,
  greyText,
  hotelName,
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
        <TextAndIcon src="/icons/Hotel.svg" text={hotelName} />
        <Flags icons={flagIcons} />
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

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
}));

const GreyText = styled("div")(({ theme }) => ({
  width: "max-content",
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.grey,
}));

export default Card;
