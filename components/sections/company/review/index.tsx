import { Formik, Form } from 'formik';
// hooks
import { useTranslation } from 'next-i18next';
import { useState, useCallback } from 'react';
// components
import Input from '../../../layout/input';
import Button from '../../../layout/button';
import Loader from '../../../layout/loader';
import StarReview from './children/star-review';
import SectionWrapper from '../../../layout/section-wrapper';
// utils
import styled from '@emotion/styled';
import { ReviewFormValidationSchema } from './children/utils';
import { FormikHelpers } from 'formik/dist/types';

interface ReviewFormValues {
  email: string;
  review: string;
}
type Category = {
  name: string;
  label: string;
};
type StarRating = Category & {
  value: number;
};
type ReviewFormProps = {
  title: string;
  categories: Category[];
  handleAddComment: (
    rating: number,
    text: string,
    email: string,
  ) => Promise<void>;
};

const ReviewForm = ({
  title,
  categories,
  handleAddComment,
}: ReviewFormProps) => {
  const [stars, setStars] = useState<StarRating[]>(
    categories.map(el => ({
      ...el,
      value: 0,
    })),
  );
  const { t: tCommon } = useTranslation('common');

  const handleStarChange = useCallback(
    (categoryName: string, value: number) => {
      setStars(prevState =>
        prevState.map(el => (el.name === categoryName ? { ...el, value } : el)),
      );
    },
    [],
  );

  const handleSubmit = useCallback(
    async (
      { review, email }: ReviewFormValues,
      { setSubmitting, resetForm }: FormikHelpers<ReviewFormValues>,
    ) => {
      const totalStars = stars.reduce((acc, { value }) => acc + value, 0);
      const overallRating = totalStars / stars.length;

      await handleAddComment(overallRating, review, email);

      resetForm();
      setStars(prev => prev.map(el => ({ ...el, value: 0 })));

      setSubmitting(false);
    },
    [handleAddComment, stars],
  );

  return (
    <SectionWrapper title={title}>
      <Formik
        initialValues={{ email: '', review: '' }}
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
                  {stars.map(({ name, value, label }) => (
                    <StarReview
                      key={name}
                      stars={value}
                      categoryName={label}
                      onChange={value => handleStarChange(name, value)}
                    />
                  ))}
                </StarReviews>
                <Input
                  label={tCommon('labels.email')}
                  type="email"
                  placeholder={tCommon('labels.email')}
                  isLight
                />
                <Input
                  label={tCommon('reviewForm.review')}
                  type="review"
                  placeholder={tCommon('reviewForm.yourReview')}
                  as="textarea"
                  isLight
                />
              </>
            )}
            <Button
              text={tCommon('reviewForm.sendButton')}
              disabled={
                isSubmitting || Object.values(stars).some(el => el.value === 0)
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
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  borderRadius: '16px',

  button: {
    alignSelf: 'flex-end',

    [theme.breakpoints.mobile]: {
      minWidth: '100%',
    },
  },

  [theme.breakpoints.mobile]: {
    gap: '16px',
    paddingBottom: '16px',
  },
}));

const StarReviews = styled('div')({
  display: 'flex',
  columnGap: '40px',
  rowGap: '24px',
  flexWrap: 'wrap',
});

export default ReviewForm;
