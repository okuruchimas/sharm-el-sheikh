import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";
// components
import Input from "../../../../layout/input";
import Button from "../../../../layout/button";
import Loader from "../../../../layout/loader";
import { Title } from "../../../../layout/title";
import ImageInput from "../../../../layout/image-input";
import CheckboxField from "../../../../layout/checkbox";
import FormikDropdown from "../../../../layout/formik-select";
// utils
import { getUrl } from "../../../../../utils/fetchApi";
import styled from "@emotion/styled";

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
  images: File[] | null;
  hasPersonalCard: boolean;
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
    images: [] as File[],
    hasPersonalCard: false,
  };

  return (
    <Wrap>
      <Formik
        initialValues={initialValues}
        onSubmit={async (
          {
            images,
            publicationType,
            hasPersonalCard,
            personalCardLink,
            ...restData
          },
          { setSubmitting, resetForm },
        ) => {
          try {
            const formData = new FormData();

            const data = {
              ...restData,
              personalCardLink,
              publicationType:
                hasPersonalCard && !!personalCardLink
                  ? "member"
                  : publicationType,
              publishedAt: null,
            };

            formData.append("data", JSON.stringify(data));

            if (images && images.length > 0) {
              images.forEach((file: File) => {
                formData.append("files.images", file);
              });
            }

            const response = await fetch(getUrl("deliveries"), {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              toast.success("Advertisement submitted successfully!");
              resetForm();
            } else {
              const errorData = await response.json();
              toast.error(
                "Failed to submit advertisement: " +
                  (errorData?.error?.message || "Unknown error"),
              );
            }
          } catch (error) {
            toast.error("An unexpected error occurred.");
            console.error(error);
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
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
                <FormikDropdown
                  name="publicationType"
                  options={[
                    { key: "", value: "Select publication type" },
                    {
                      key: "from",
                      value: "I want to order something from Egypt",
                    },
                    {
                      key: "to",
                      value: "I want to place an order in Egypt",
                    },
                  ]}
                  width="100%"
                  height="56px"
                  borderColor="yellow"
                  color="gray"
                />
                <Input type="title" placeholder="Title*" />
                <Input type="location" placeholder="Location*" />
                <Input type="price" placeholder="Price*" />
                <Input
                  type="description"
                  placeholder="Description*"
                  as="textarea"
                />
                <ImageInput
                  type="images"
                  label="Download cover art in .webp format*"
                />
                <CheckboxField
                  type="hasPersonalCard"
                  label="Is your personal card on the website? If so, please provide the link"
                />
                <Input
                  isDisabled={!values.hasPersonalCard}
                  type="personalCardLink"
                  placeholder="Link"
                />
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
                disabled={true}
                // disabled={isSubmitting}
              />
            </ButtonWrap>
          </FormWrap>
        )}
      </Formik>
      <ToastContainer />
    </Wrap>
  );
};

const Wrap = styled.div(({ theme }) => ({
  zIndex: 10,
  position: "absolute",
  top: "0",
  right: "calc(50% - 333px)",
  width: "100%",
  maxWidth: 658,
  boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.mobile]: {
    right: 0,
  },
}));

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
  ".input-wrap": {
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
