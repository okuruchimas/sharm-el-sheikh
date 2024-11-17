import { memo } from "react";
import styled from "@emotion/styled";
import NextImage from "../../../../layout/image";

type StarReviewProps = {
  stars: number;
  disabled?: boolean;
  categoryName?: string;
  onChange: (id: number) => void;
};

const StarReview = ({
  stars,
  disabled = false,
  categoryName,
  onChange,
}: StarReviewProps) => (
  <Wrapper>
    {categoryName ? <CategoryName>{categoryName}</CategoryName> : null}
    <StarsWrapper>
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          alt={index + 1 > stars ? "star-outlined" : "star-filled"}
          src={`/icons/feedback-section/star-${index + 1 > stars ? "outlined" : "filled"}.svg`}
          width="30px"
          height="30px"
          disabled={disabled}
          onClick={disabled ? undefined : () => onChange(index + 1)}
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

const Image = styled(NextImage, {
  shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled: boolean }>(({ disabled }) => ({
  cursor: "pointer",
  ...(disabled
    ? {}
    : {
        transition: "transform 0.3s ease",

        "&:active, &:focus, &:hover": {
          transform: "scale(1.3)",
        },
      }),
}));

export default memo(StarReview);
