// components
import Image from "next/image";
import TitleRating from "../../../../layout/title-and-rating";
// utils
import styled from "@emotion/styled";
// types

interface AnimationCompanyCardProps {
  title: string;
  imgSrc: string;
  averageRating: number;
  totalComments: number;
  onClick: () => void;
}

const AnimationCompanyCard = ({
  title,
  imgSrc,
  averageRating,
  totalComments,
  onClick,
}: AnimationCompanyCardProps) => {
  return (
    <Wrap onClick={onClick}>
      <ImageWrapper>
        <Image
          src={imgSrc}
          objectFit="cover"
          alt="company_logo"
          layout="fill"
        />
      </ImageWrapper>
      <InfoWrap>
        <TitleRating
          title={title}
          averageRating={averageRating}
          totalComments={totalComments}
        />
      </InfoWrap>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  // TODO: fix styles
  display: "flex",
  flexDirection: "column",
  minHeight: "317px",
  width: "100%",
  background: theme.colors.white,
  borderRadius: 16,
  boxShadow: theme.shadows[0],
  overflow: "hidden",
}));

const ImageWrapper = styled("div")({
  // TODO: fix styles
  height: "70%",
  minHeight: "70%",
  position: "relative",
});

const InfoWrap = styled("div")({
  // TODO: fix styles
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "12px",
  padding: "16px",
  height: "30%",
  maxHeight: "30%",
});

export default AnimationCompanyCard;