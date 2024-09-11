import styled from "@emotion/styled";
import NextImage from "../../../../layout/image";
import { useEffect, useState } from "react";

export interface ReviewCardI {
  stars: string;
  date: string;
  text: string;
}

export const MAX_RANDOM_MARGIN = 50;

const ReviewCard = ({ stars, date, text }: ReviewCardI) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const margin = Math.floor(Math.random() * MAX_RANDOM_MARGIN);

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
    minHeight: "150px",
    margin: `-${margin}px 0 0 ${margin}px`,

    ...(margin < 25
      ? { alignSelf: "start" }
      : { alignSelf: "end", marginRight: `${margin / 2}px` }),
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
