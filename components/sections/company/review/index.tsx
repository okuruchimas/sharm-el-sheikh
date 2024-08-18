import { useState, useCallback } from "react";
import { Formik, Form } from "formik";
// components
import Input from "../../../layout/input";
import Button from "../../../layout/button";
import Loader from "../../../layout/loader";
import StarReview from "./children/star-review";
import SectionWrapper from "../../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
import { ReviewFormValidationSchema } from "./children/utils";
import { FormikHelpers } from "formik/dist/types";

interface ReviewFormValues {
  email: string;
  review: string;
}

type ReviewFormProps = {
  handleAddComment: (
    rating: number,
    text: string,
    email: string,
  ) => Promise<void>;
};

type StarRatings = {
  service: number;
  price: number;
  food: number;
  cleanliness: number;
};

const categories: { name: keyof StarRatings; label: string }[] = [
  { name: "service", label: "Service" },
  { name: "price", label: "Price" },
  { name: "food", label: "Food" },
  { name: "cleanliness", label: "Cleanliness" },
];

const ReviewForm = ({ handleAddComment }: ReviewFormProps) => {
  const [stars, setStars] = useState<StarRatings>({
    service: 0,
    price: 0,
    food: 0,
    cleanliness: 0,
  });

  const handleStarChange = useCallback(
    (categoryName: keyof StarRatings, value: number) => {
      setStars((prevStars) => ({
        ...prevStars,
        [categoryName]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (
      { review, email }: ReviewFormValues,
      { setSubmitting, resetForm }: FormikHelpers<ReviewFormValues>,
    ) => {
      const overallRating =
        (stars.service + stars.price + stars.food + stars.cleanliness) / 4;

      await handleAddComment(overallRating, review, email);

      resetForm();
      setStars({
        service: 0,
        price: 0,
        food: 0,
        cleanliness: 0,
      });
      setSubmitting(false);
    },
    [handleAddComment, stars],
  );

  return (
    <SectionWrapper title="How would you rate this establishment?">
      <Formik
        initialValues={{ email: "", review: "" }}
        validationSchema={ReviewFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormWrap>
            {isSubmitting ? (
              <Loader />
            ) : (
              <>
                <StarReviews>
                  {categories.map((category) => (
                    <StarReview
                      key={category.name}
                      stars={stars[category.name]}
                      categoryName={category.label}
                      onChange={(value) =>
                        handleStarChange(category.name, value)
                      }
                    />
                  ))}
                </StarReviews>
                <Input label="Email" type="email" placeholder="Email" isLight />
                <Input
                  label="Review"
                  type="review"
                  placeholder="Your review"
                  as="textarea"
                  isLight
                />
              </>
            )}
            <Button
              text="Send"
              disabled={
                isSubmitting ||
                Object.values(stars).some((value) => value === 0)
              }
              type="submit"
            />
          </FormWrap>
        )}
      </Formik>
    </SectionWrapper>
  );
};

const FormWrap = styled(Form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  borderRadius: "16px",

  "input, textarea": {
    resize: "none",
    width: "100%",
  },

  "& .input-wrap": {
    width: "100%",
  },

  button: {
    alignSelf: "flex-end",

    [theme.breakpoints.mobile]: {
      minWidth: "100%",
    },
  },

  [theme.breakpoints.mobile]: {
    gap: "16px",
    paddingBottom: "16px",
  },
}));

const StarReviews = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr",

  [theme.breakpoints.mobileHorizontal]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.desktop]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export default ReviewForm;
