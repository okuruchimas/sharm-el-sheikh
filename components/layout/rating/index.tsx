import NextImage from "../image";
// utils
import styled from "@emotion/styled";

type RatingProps = {
  points: number;
  users: number;
};

const Rating = ({ points, users }: RatingProps) => {
  return (
    <Wrapper>
      <NextImage
        src={"/icons/promotions-section/star-rating.svg"}
        alt="star-rating"
        height="24px"
        width="24px"
        mHeight="18px"
        mWidth="18px"
      />
      <RatingPoints>{points}&nbsp;</RatingPoints>
      <RatingViews>{`(${users})`}</RatingViews>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const RatingPoints = styled("span")(({ theme }) => ({
  fontWeight: "600",
  fontSize: theme.fontSize.fontS18,
  textAlign: "center",
  marginLeft: "8px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS12,
  },
}));

const RatingViews = styled(RatingPoints)(({ theme }) => ({
  color: theme.colors.grey,
  marginLeft: 0,
}));

export default Rating;
