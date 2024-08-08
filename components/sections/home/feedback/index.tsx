// libs
import { useState } from "react";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
// components
import TypeSwitcher from "./children/type-switcher";
import Button from "../../../layout/button";
import Input from "../../../layout/input";
import Loader from "../../../layout/loader";
// utils
import styled from "@emotion/styled";
import { getValidationSchema, getValues } from "./children/utils";
// styles
import "react-toastify/dist/ReactToastify.css";

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
    name: "",
    email: "",
    message: "",
    country: "",
    companyName: "",
    phone: "",
  };

  const [type, setType] = useState<string>("default");
  const SignupSchema = getValidationSchema(type);

  return (
    <Wrap id="contact-form">
      <TypeSwitcher currentType={type} setType={setType} />

      <Formik
        initialValues={inValues}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const formVales = getValues(values, type);

          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formVales),
          });

          if (response.ok) {
            toast.success("Email successfully delivered!");
            resetForm();
          } else {
            toast.error("Failed to send email");
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
                <Input label="Name" type="name" placeholder="Name*" />

                {type === "international" ? (
                  <Input
                    label="Country"
                    type="country"
                    placeholder="Country*"
                  />
                ) : null}

                {type !== "default" ? (
                  <>
                    <Input
                      label="Company name"
                      type="companyName"
                      placeholder="Company Name*"
                    />
                    <Input
                      label="Phone"
                      type="phone"
                      placeholder="Phone*"
                      mask="+99 (999) 999-99-999"
                    />
                  </>
                ) : null}

                <Input label="Email" type="email" placeholder="Email*" />

                <Input
                  label="Message"
                  type="message"
                  placeholder="Message"
                  as="textarea"
                />
              </>
            )}

            <SubmitButton
              backgroundColor="blue3"
              color="yellow"
              text="Contact Us"
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

const Wrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "24px",
});

const FormWrap = styled(Form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "48px 0",
  minHeight: "454px",
  borderRadius: "16px",
  background: theme.colors.yellow,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  minWidth: "310px",
  margin: "0 auto",
}));

export default FeedbackForm;
