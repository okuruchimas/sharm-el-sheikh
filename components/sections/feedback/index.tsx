import React, { useState } from "react";
import styled from "@emotion/styled";
import TypeSwitcher from "./children/type-switcher";
import { Formik, Form } from "formik";
import { ButtonStyled } from "../../layout/button";
import * as Yup from "yup";
import Input from "./children/input";

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
    phone: Yup.string().required("Phone is required"),
    country: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-.\s]+$/,
        "Country can only contain alphabetic characters and spaces",
      )
      .required("Country is required"),
  });

  return (
    <Wrap>
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
            <Input label="Name" type="name" placeholder="Name*" />

            {type === "international" ? (
              <Input label="Country" type="country" placeholder="Country" />
            ) : null}

            {type !== "default" ? (
              <>
                <Input
                  label="Company name"
                  type="companyName"
                  placeholder="Company Name"
                />
                <Input label="Phone" type="phone" placeholder="Phone*" />
              </>
            ) : null}

            <Input label="Email" type="email" placeholder="Email*" />

            <Input
              label="Message"
              type="message"
              placeholder="Message*"
              as="textarea"
            />

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
  gap: 20px;
  border-radius: 16px;
  background: ${({ theme: { colors } }) => colors.yellow};
  padding: 48px 0;
`;

const SubmitButton = styled(ButtonStyled)`
  min-width: 310px;
  color: ${({ theme: { colors } }) => colors.yellow};
  margin: 0 auto;
  cursor: pointer;
`;
