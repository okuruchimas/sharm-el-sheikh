import React, { useState } from "react";
import styled from "@emotion/styled";
import TypeSwitcher from "./children/type-switcher";
import { Formik, Form, Field } from "formik";
import { ButtonStyled } from "../../layout/button";

interface IValues {
  name: string;
  email: string;
  message: string;
  country?: string;
  companyName?: string;
  phone?: string;
}
const FeedbackForm = () => {
  const inValues: IValues = { name: "", email: "", message: "" };
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

  return (
    <Wrap>
      <TypeSwitcher currentType={type} setType={setType} />

      <Formik
        initialValues={inValues}
        // validate={(values) => {
        //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //     console.log("Invalid email address");
        //   }
        // }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // console.log(values, "values");
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
            {type === "international" ? (
              <Input type="country" name="country" placeholder="Country" />
            ) : null}
            {type !== "default" ? (
              <>
                <Input
                  type="companyName"
                  name="companyName"
                  placeholder="Company Name"
                />
                <Input type="phone" name="phone" placeholder="Phone*" />
              </>
            ) : null}
            <Input type="email" name="email" placeholder="Email*" />
            <MessageInput
              type="message"
              name="message"
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
  gap: 16px;
  border-radius: 16px;
  background: ${({ theme: { colors } }) => colors.yellow};
  padding: 48px 0;
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
