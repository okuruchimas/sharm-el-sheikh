import React, { useState } from "react";
import styled from "@emotion/styled";
import TypeSwitcher from "./children/type-switcher";
import { Formik, Form } from "formik";
import { ButtonStyled } from "../../layout/button";
import Input from "./children/input";
import { getValidationSchema, getValues } from "./children/utils";

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
            <Input
              label="Name"
              type="name"
              placeholder="Name*"
              mask="00304340"
            />

            {type === "international" ? (
              <Input label="Country" type="country" placeholder="Country" />
            ) : null}

            {type !== "default" ? (
              <>
                <Input
                  label="Company name"
                  type="companyName"
                  placeholder="Company Name*"
                />
                <Input label="Phone" type="phone" placeholder="Phone*" />
              </>
            ) : null}

            <Input label="Email" type="email" placeholder="Email*" />

            <Input
              label="Message"
              type="message"
              placeholder="Message"
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
