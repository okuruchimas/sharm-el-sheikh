// libs
import { Formik, Form } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { ReCAPTCHA } from 'react-google-recaptcha';
// hooks
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
// components
import TypeSwitcher from './children/type-switcher';
import Button from '../../../layout/button';
import Input from '../../../layout/input';
import Loader from '../../../layout/loader';
// utils
import styled from '@emotion/styled';
import { getValidationSchema, getValues } from './children/utils';
// styles
import 'react-toastify/dist/ReactToastify.css';

export interface IValues {
  name: string;
  email: string;
  message: string;
  country?: string;
  companyName?: string;
  phone?: string;
}

const FeedbackForm = () => {
  const inValues: IValues = {
    name: '',
    email: '',
    message: '',
    country: '',
    companyName: '',
    phone: '',
  };

  const [type, setType] = useState<string>('default');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.RECAPTCHA_SITE_KEY || '';

  const { t: tPage } = useTranslation('home-page');
  const { t: tCommon } = useTranslation('common');

  const labels = {
    name: tPage('feedbackForm.labels.name'),
    email: tCommon('labels.email'),
    message: tPage('feedbackForm.labels.message'),
    companyName: tPage('feedbackForm.labels.companyName'),
    phone: tCommon('labels.phone'),
    country: tPage('feedbackForm.labels.country'),
  };

  const SignupSchema = getValidationSchema(type, labels, tCommon);

  return (
    <Wrap id="contact-form">
      <TypeSwitcher currentType={type} setType={setType} />
      <Formik
        initialValues={inValues}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          if (!captchaToken) {
            toast.error(tPage('feedbackForm.formError'));
            setSubmitting(false);
            return;
          }

          const formValues = getValues(values, type);
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formValues,
              captchaToken,
            }),
          });

          if (response.ok) {
            toast.success(tPage('feedbackForm.formSuccess'));
            resetForm();
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
          } else {
            toast.error(tPage('feedbackForm.formError'));
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormWrap>
            {isSubmitting ? (
              <Loader />
            ) : (
              <>
                <Input
                  label={labels.name}
                  type="name"
                  placeholder={`${labels.name}*`}
                />

                {type === 'international' ? (
                  <Input
                    label={labels.country}
                    type="country"
                    placeholder={`${labels.country}*`}
                  />
                ) : null}

                {type !== 'default' ? (
                  <>
                    <Input
                      label={labels.companyName}
                      type="companyName"
                      placeholder={`${labels.companyName}*`}
                    />
                    <Input
                      label={labels.phone}
                      type="phone"
                      placeholder={`${labels.phone}*`}
                      mask="+99 (999) 999-99-999"
                    />
                  </>
                ) : null}

                <Input
                  label={labels.email}
                  type="email"
                  placeholder={`${labels.email}*`}
                />
                <Input
                  label={labels.message}
                  type="message"
                  placeholder={labels.message}
                  as="textarea"
                />
              </>
            )}
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={token => setCaptchaToken(token)}
              ref={recaptchaRef}
            />
            <SubmitButton
              backgroundColor="blue3"
              color="yellow"
              text={tCommon('buttons.contactUs')}
              type="submit"
              disabled={isSubmitting}
            />
          </FormWrap>
        )}
      </Formik>
      <ToastContainer />
    </Wrap>
  );
};

const Wrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '24px',
});

const FormWrap = styled(Form)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '48px 16px',
  minHeight: '454px',
  borderRadius: '16px',
  background: theme.colors.yellow,

  'input,textarea,.input-wrap': {
    maxWidth: '310px',
  },
}));

const SubmitButton = styled(Button)({
  minWidth: '310px',
  margin: '0 auto',
});

export default FeedbackForm;
