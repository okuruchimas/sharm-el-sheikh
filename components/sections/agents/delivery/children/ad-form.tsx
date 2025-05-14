import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";
// components
import Input from "../../../../layout/input";
import Button from "../../../../layout/button";
import Loader from "../../../../layout/loader";
// utils
import styled from "@emotion/styled";
import { Title } from "../../../../layout/title";

interface IAdvertisementValues {
  name: string;
  mobile: string;
  contactMethod: string;
  email: string;
  publicationType: string;
  title: string;
  location: string;
  price: string;
  description: string;
  personalCardLink?: string;
  agree: boolean;
}

const AddAdvertisementForm = ({ cancelClick }: any) => {
  const { t } = useTranslation();

  const initialValues: IAdvertisementValues = {
    name: "",
    mobile: "",
    contactMethod: "",
    email: "",
    publicationType: "",
    title: "",
    location: "",
    price: "",
    description: "",
    personalCardLink: "",
    agree: false,
  };

  return (
    <Wrap>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await fetch("/api/add-advertisement", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              toast.success("Advertisement submitted successfully!");
              resetForm();
            } else {
              toast.error("Failed to submit advertisement.");
            }
          } catch (error) {
            toast.error("An unexpected error occurred.");
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
                <TitleStyled as="h3">Add Advertisement</TitleStyled>
                {/* Personal Data */}
                <TitleSmallStyled as="h4">Personal Data</TitleSmallStyled>
                <Input type="name" placeholder="Your Name*" />
                <Input type="mobile" placeholder="Mobile*" />
                <Input
                  type="contactMethod"
                  placeholder="Preferred Contact Method*"
                />
                <Input type="email" placeholder="Email*" />

                {/* About Advertisement */}
                <TitleSmallStyled as="h4">About Advertisement</TitleSmallStyled>
                <Input type="title" placeholder="Title*" />
                <Input type="location" placeholder="Location*" />
                <Input type="price" placeholder="Price*" />
                <Input
                  type="description"
                  placeholder="Description*"
                  as="textarea"
                />

                <Input type="link" placeholder="Link" />

                {/* Confirm checkbox */}
                {/*<Checkbox*/}
                {/*  name="agree"*/}
                {/*  label="I confirm that I am familiar with the transportation rules, have read them, and have no objections"*/}
                {/*/>*/}
              </>
            )}

            <ButtonWrap>
              <Button
                text="Cancel"
                type="reset"
                backgroundColor="gray"
                color="black"
                onClick={cancelClick}
              />
              <SubmitButton
                backgroundColor="yellow"
                color="white"
                text="Save"
                type="submit"
                disabled={isSubmitting}
              />
            </ButtonWrap>
          </FormWrap>
        )}
      </Formik>
      <ToastContainer />
    </Wrap>
  );
};

const Wrap = styled.div({
  position: "absolute",
  top: "0",
  right: "calc(50% - 333px)",
  width: "100%",
  maxWidth: 658,
  boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
});

const TitleStyled = styled(Title)(({ theme }) => ({
  color: theme.colors.black,
  fontSize: theme.fontSize.fontS32,
  marginBottom: 8,
}));

const TitleSmallStyled = styled(Title)(({ theme }) => ({
  color: theme.colors.grey3,
  fontSize: theme.fontSize.fontS21,
}));

const FormWrap = styled(Form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: "#FFFFFF",

  "input,textarea": {
    minWidth: "608px",
    width: "100%",
  },

  textarea: {
    resize: "none",
  },
}));

const ButtonWrap = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
});

const SubmitButton = styled(Button)(({ theme }) => ({
  minWidth: "120px",
}));

export default AddAdvertisementForm;
