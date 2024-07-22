import { useState, useCallback } from "react";
import { Formik, Form } from "formik";
// components
import Input from "../../../layout/input";
import Loader from "../../../layout/loader";
import StarReview from "./children/star-review";
import SectionWrapper from "../../../layout/section-wrapper";
import { ButtonStyled } from "../../../layout/button";
// utils
import styled from "@emotion/styled";
import { toast } from "react-toastify";
import { ReviewFormValidationSchema } from "./children/utils";
import { FormikHelpers } from "formik/dist/types";

interface ReviewFormValues {
  email: string;
  review: string;
}

const ReviewForm = () => {
  const [stars, setStars] = useState(0);

  const handleSubmit = useCallback(
    async (
      values: ReviewFormValues,
      { setSubmitting, resetForm }: FormikHelpers<ReviewFormValues>,
    ) => {
      setStars(0);
      const payload = { ...values, date: new Date() };
      console.log(payload);
      toast.success("Email successfully delivered!");
      resetForm();
      setSubmitting(false);
    },
    [],
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
            <SubmitButton
              color="blue"
              type="submit"
              disabled={isSubmitting || !stars}
            >
              Send
            </SubmitButton>
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

  [theme.breakpoints.mobile]: {
    gap: "16px",
    paddingBottom: "16px",
  },
}));

const SubmitButton = styled(ButtonStyled)(({ theme }) => ({
  backgroundColor: theme.colors.yellow,
  cursor: "pointer",
  alignSelf: "end",

  "&:disabled": {
    cursor: "not-allowed",
  },

  [theme.breakpoints.mobile]: {
    width: "100%",
  },
}));

export default ReviewForm;
