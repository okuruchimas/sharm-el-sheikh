import React, { useState } from "react";
import styled from "@emotion/styled";
import TypeSwitcher from "./children/type-switcher";
import { Formik } from "formik";
import { ButtonStyled } from "../../layout/button";

interface IValues {
  name: string;
  email: string;
  message: string;
}
const FeedbackForm = () => {
  const inValues: IValues = { name: "", email: "", message: "" };
  const [type, setType] = useState<string>("default");

  return (
    <Wrap>
      <TypeSwitcher currentType={type} setType={setType} />
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
          <Input placeholder="Name*" />
          {type === "international" ? <Input placeholder="Country" /> : null}
          {type !== "default" ? (
            <>
              <Input placeholder="Company Name" />
              <Input placeholder="Phone*" />
            </>
          ) : null}
          <Input placeholder="Email*" />
          <MessageInput placeholder="Message*" />
          <SubmitButton color="blue3">Contact Us</SubmitButton>
        </FormWrap>
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

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background: ${({ theme: { colors } }) => colors.yellow};
  padding: 48px 0;
`;

const Input = styled.input`
  min-width: 310px;
  min-height: 58px;
  border-radius: 16px;
  padding: 0 16px;
  border: none;
  margin: 0 auto;
`;

const MessageInput = styled(Input)`
  min-height: 130px;

  &::placeholder {
    position: absolute;
    top: 16px;
    left: 16px;
  }
`;

const SubmitButton = styled(ButtonStyled)`
  min-width: 310px;
  margin: 0 auto;
`;
