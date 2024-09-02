// hooks
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
// component
import ReviewCard from "./children/review-card";
import Placeholder from "../../promotions/children/placeholder";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
import { formatDate } from "../../../../utils/formateDate";
// types
import type { Comment } from "../../../../pages/api/comments";

type ReviewsProps = { comments: Comment[] };

const Reviews = ({ comments }: ReviewsProps) => {
  const { t } = useTranslation("company-page");

  const rows = useMemo(() => {
    const result = [];

    for (let i = 0; i < comments.length; i += 3) {
      result.push(comments.slice(i, i + 3));
    }
    return result;
  }, [comments]);

  return (
    <SectionWrapper title={t("reviewsSection.title")}>
      {rows.length ? (
        <ReviewsWrapper>
          <Gradient>
            {rows.map((row, index, length) => (
              <Row key={index}>
                {row.map((review, index) => (
                  <ReviewCard
                    key={review._id}
                    stars={review.rating?.toFixed(1)}
                    date={formatDate(review.date)}
                    text={review.text}
                  />
                ))}
              </Row>
            ))}
          </Gradient>
        </ReviewsWrapper>
      ) : (
        <Placeholder title={t("reviewsSection.placeholder")} />
      )}
    </SectionWrapper>
  );
};

export default Reviews;

const ReviewsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  overflowX: "hidden",
  maxHeight: "464px",

  // TODO: change scroll bar styles after design update
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },

  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "10px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#aaa",
    borderRadius: "10px",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: "#828282",
  },

  [theme.breakpoints.mobile]: {
    maxHeight: "unset",
    overflow: "visible",
  },
}));

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "20px",

  [theme.breakpoints.mobile]: {
    padding: 0,
    flexDirection: "column",
  },

  [theme.breakpoints.desktop]: {
    "&:nth-of-type(2n)": {
      padding: "0 30px",
    },

    "&:not(:first-of-type)": {
      marginTop: "-40px",
    },
  },
}));

const Gradient = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: "4px",

  "> div:first-of-type > .review-card:first-of-type": {
    margin: 0,
  },

  "&::before": {
    content: '""',
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 1,
    background:
      "radial-gradient(65.19% 65.19% at 50% 50%, rgba(254, 254, 254, 0.15) 29%, rgba(254, 254, 254, 0.8) 100%)",
  },

  [theme.breakpoints.mobile]: {
    "&::before": {
      background:
        "radial-gradient(65.19% 65.19% at 50% 50%, rgba(254, 254, 254, 0.08) 29%, rgba(254, 254, 254, 0.5) 100%)",
    },
  },
}));
