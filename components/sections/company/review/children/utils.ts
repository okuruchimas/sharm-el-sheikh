import * as Yup from 'yup';

export const ReviewFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  review: Yup.string().required(),
});
