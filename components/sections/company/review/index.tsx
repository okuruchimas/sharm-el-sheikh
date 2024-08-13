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

const ReviewForm = ({ handleAddComment }: ReviewFormProps) => {
  const [stars, setStars] = useState(0);

  const handleSubmit = useCallback(
    async (
      { review, email }: ReviewFormValues,
      { setSubmitting, resetForm }: FormikHelpers<ReviewFormValues>,
    ) => {
      await handleAddComment(stars, review, email);

      resetForm();
      setStars(0);
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
                <StarReview stars={stars} onChange={setStars} />
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
              disabled={isSubmitting || !stars}
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

export default ReviewForm;
