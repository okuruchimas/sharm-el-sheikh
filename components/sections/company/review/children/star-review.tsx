import { memo } from "react";
import styled from "@emotion/styled";
import NextImage from "../../../../layout/image";

type StarReviewProps = {
  stars: number;
  categoryName: string;
  onChange: (id: number) => void;
};

const StarReview = ({ stars, categoryName, onChange }: StarReviewProps) => (
  <Wrapper>
    <CategoryName>{categoryName}</CategoryName>
    <StarsWrapper>
      {[...Array(5)].map((_, index) => (
        <Image
          alt={index + 1 > stars ? "star-outlined" : "star-filled"}
          src={`/icons/feedback-section/star-${index + 1 > stars ? "outlined" : "filled"}.svg`}
          width="30px"
          height="30px"
          key={index}
          onClick={() => onChange(index + 1)}
        />
      ))}
    </StarsWrapper>
  </Wrapper>
);

const CategoryName = styled("span")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
    fontWeight: 600,
  },
}));

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const StarsWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Image = styled(NextImage)({
  transition: "transform 0.3s ease",
  cursor: "pointer",

  "&:active, &:focus, &:hover": {
    transform: "scale(1.3)",
  },
});

export default memo(StarReview);
