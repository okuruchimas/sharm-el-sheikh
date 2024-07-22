import styled from "@emotion/styled";
import NextImage from "../../../../layout/image";

export interface ReviewCardI {
  stars: string;
  date: string;
  text: string;
}

const ReviewCard = ({ stars, date, text }: ReviewCardI) => {
  const margin = Math.floor(Math.random() * 50);

  return (
    <CardWrapper margin={margin} className="review-card">
      <TopSection>
        <div>
          <NextImage
            src={"/icons/promotions-section/star-rating.svg"}
            alt="star-rating"
            height="16px"
            width="16px"
          />
          <span>{stars}</span>
        </div>
        <span>{date}</span>
      </TopSection>
      <Text>{text}</Text>
    </CardWrapper>
  );
};

export default ReviewCard;

export const CardWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "margin",
})<{ margin: number }>(({ theme, margin }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  margin: `-${margin}px 0 0`,
  padding: "16px",
  borderRadius: "16px",
  maxWidth: "620px",
  minWidth: "217px",
  minHeight: "216px",
  boxShadow: theme.shadows[1],
  backgroundColor: theme.colors.white2,

  transition: "transform 0.3s ease",

  "&:hover": {
    zIndex: 1,
    transform: "scale(1.05)",
  },

  [theme.breakpoints.mobile]: {
    maxWidth: "90%",
    margin: `-${margin}px 0 0 ${margin}px`,
    alignSelf: margin > 15 ? "end" : "start",
  },
}));

const TopSection = styled("div")(({ theme }) => ({
  color: theme.colors.grey,
  display: "flex",
  justifyContent: "space-between",
  fontSize: theme.fontSize.fontS16,
  fontWeight: 600,

  div: {
    display: "flex",
    gap: "4px",
  },
}));

const Text = styled("div")(({ theme }) => ({
  color: theme.colors.black,
  display: "flex",
  justifyContent: "space-between",
  fontSize: theme.fontSize.fontS16,
  fontWeight: 300,
  lineHeight: 1.37,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    lineHeight: 1.57,
  },
}));
