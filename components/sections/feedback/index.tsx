import React, { useState } from "react";
import styled from "@emotion/styled";
import TypeSwitcher from "./children/type-switcher";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ButtonStyled } from "../../layout/button";
import * as Yup from "yup";

interface IValues {
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

  const getValues = (values: IValues, formType: string): Partial<IValues> => {
    const { name, email, message, companyName, phone } = values;

    if (formType === "default") {
      return { name, email, message };
    }

    if (formType === "local") {
      return { name, email, message, companyName, phone };
    }

    return values;
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-.\s]+$/,
        "Name can only contain alphabetic characters and spaces",
      )
      .min(2, "Name is too short - should be 2 chars minimum.")
      .max(50, "Name is too long - should be 50 chars maximum.")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().max(200, "Message").required("Message is required"),
    // country: Yup.string()
  });

  return (
    <Wrap>
      <TypeSwitcher currentType={type} setType={setType} />

      <Formik
        initialValues={inValues}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values, "values");
          const formVales = getValues(values, type);

          // console.log(formVales, "formVales");
          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            alert("Email sent successfully");
            resetForm();
          } else {
            alert("Failed to send email");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormWrap>
            <Input type="name" name="name" placeholder="Name*" />
            <ErrorStyled name="name" component="span" />
            {type === "international" ? (
              <>
                <Input type="country" name="country" placeholder="Country" />
                <ErrorMessage name="country" component="span" />
              </>
            ) : null}
            {type !== "default" ? (
              <>
                <Input
                  type="companyName"
                  name="companyName"
                  placeholder="Company Name"
                />
                <ErrorMessage name="companyName" component="span" />
                <Input type="phone" name="phone" placeholder="Phone*" />
                <ErrorMessage name="phone" component="span" />
              </>
            ) : null}
            <Input type="email" name="email" placeholder="Email*" />
            <ErrorMessage name="email" component="span" />

            <MessageInput
              type="message"
              name="message"
              placeholder="Message*"
              as="textarea"
            />
            <ErrorMessage name="message" component="span" />

            <SubmitButton color="blue3" type="submit" disabled={isSubmitting}>
              Contact Us
            </SubmitButton>
          </FormWrap>
        )}
      </Formik>
    </Wrap>
  );
};

export default FeedbackForm;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background: ${({ theme: { colors } }) => colors.yellow};
  padding: 48px 0;

  span {
    font-family: Comfortaa, serif;
    text-align: center;
  }
`;

const Input = styled(Field)`
  min-width: 310px;
  min-height: 58px;
  border-radius: 16px;
  padding: 0 16px;
  margin: 0 auto;
  border: none;
  outline: none;
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;

const MessageInput = styled(Input)`
  min-height: 130px;
  padding: 16px;
`;

const SubmitButton = styled(ButtonStyled)`
  min-width: 310px;
  color: ${({ theme: { colors } }) => colors.yellow};
  margin: 0 auto;
`;

const ErrorStyled = styled(ErrorMessage)`
  background-color: yellow;
`;
