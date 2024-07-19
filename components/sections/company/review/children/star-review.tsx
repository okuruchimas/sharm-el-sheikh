import { type FC, memo } from "react";
import styled from "@emotion/styled";
import NextImage from "../../../../layout/image";

type StarReviewProps = {
  stars: number;
  onChange: (id: number) => void;
};

const StarReview: FC<StarReviewProps> = ({ stars, onChange }) => (
  <StarsWrapper>
    {[...Array(5)].map((_, index) => (
      <Image
        alt={index + 1 > stars ? "star-outlined" : "star-filled"}
        src={`/icons/feedback-section/star-${index + 1 > stars ? "outlined" : "filled"}.svg`}
        width="40px"
        height="40px"
        mWidth="30px"
        mHeight="30px"
        key={index}
        onClick={() => onChange(index + 1)}
      />
    ))}
  </StarsWrapper>
);

const StarsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Image = styled(NextImage)(({ theme }) => ({
  transition: "transform 0.3s ease",

  "&:active, &:focus, &:hover": {
    transform: "scale(1.3)",
  },
}));
export default memo(StarReview);
