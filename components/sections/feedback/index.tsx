import React from "react";
import styled from "@emotion/styled";
import TypeSwitcher from "./children/type-switcher";
import { Formik } from "formik";
import Button from "../../layout/button";

interface IValues {
  name: string;
  email: string;
  message: string;
}
const FeedbackForm = () => {
  const inValues: IValues = { name: "", email: "", message: "" };

  return (
    <Wrap>
      <TypeSwitcher />
      <Formik
        initialValues={inValues}
        validate={(values) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            console.log("Invalid email address");
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("hehehe");
        }}
      >
        <FormWrap>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <MessageInput placeholder="Message" />
          <Button text="Contact us" color="blue3" />
        </FormWrap>
      </Formik>
    </Wrap>
  );
};

export default FeedbackForm;

const Wrap = styled.div``;
const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Input = styled.input``;
const MessageInput = styled(Input)``;
