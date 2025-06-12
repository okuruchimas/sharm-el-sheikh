import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";
// components
import Input from "../../../layout/input";
import Button from "../../../layout/button";
import Loader from "../../../layout/loader";
import { Title } from "../../../layout/title";
import ImageInput from "../../../layout/image-input";
import CheckboxField from "../../../layout/checkbox";
import FormikDropdown from "../../../layout/formik-select";
// utils
import { getUrl } from "../../../../utils/fetchApi";
import styled from "@emotion/styled";
import IsVip from "./is-vip";

interface IAdvertisementValues {
  isVip: boolean;
  name: string;
  mobile: string;
  email: string;
  category: string;
  title: string;
  location: string;
  price: string;
  description: string;
  images: File[] | null;
}

export const categoryOptions = [
  { key: "", value: "Category" },
  { key: "entertainmentAndHobbies", value: "Entertainment and Hobbies" },
  { key: "transport", value: "Transport" },
  { key: "realEstate", value: "Real Estate" },
  { key: "services", value: "Services" },
  { key: "clothing", value: "Clothing" },
  { key: "childrensSection", value: "Children's Section" },
  { key: "houseAndGarden", value: "House and Garden" },
  { key: "work", value: "Work" },
  { key: "electronics", value: "Electronics" },
  { key: "other", value: "Other" },
];
const CreateAddForm = ({ cancelClick }: any) => {
  const { t } = useTranslation("agents");
  const { t: tCommon } = useTranslation("common");

  const initialValues: IAdvertisementValues = {
    isVip: false,
    name: "",
    mobile: "",
    email: "",
    title: "",
    category: "",
    location: "",
    price: "",
    description: "",
    images: [] as File[],
  };

  return (
    <Wrap>
      <Formik
        initialValues={initialValues}
        onSubmit={async (
          { images, ...restData },
          { setSubmitting, resetForm },
        ) => {
          if (images && images.length > 4) {
            setSubmitting(false);
            return toast.error("Too much images");
          }

          try {
            const formData = new FormData();

            const data = {
              ...restData,
              publishedAt: null,
            };

            formData.append("data", JSON.stringify(data));

            if (images && images.length > 0) {
              images.forEach((file: File) => {
                formData.append("files.images", file);
              });
            }

            // const response = await fetch(getUrl("deliveries"), {
            //   method: "POST",
            //   body: formData,
            // });

            // if (response.ok) {
            //   toast.success(t("form.toasts.success"));
            //   resetForm();
            // } else {
            //   const errorData = await response.json();
            //   toast.error(
            //     t("form.toasts.failedToSubmit") +
            //       (errorData?.error?.message || " Unknown error"),
            //   );
            // }
          } catch (error) {
            toast.error(t("form.toasts.unexpectedError"));
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
                <IsVip label="VIP Advertisement " />
                <TitleStyled as="h3">{t("addAdvertisement")}</TitleStyled>
                {/* Personal Data */}
                <TitleSmallStyled as="h4">
                  {t("form.personalData")}
                </TitleSmallStyled>
                <Input type="name" placeholder={t("form.yourName")} />
                <Input type="mobile" placeholder={t("form.mobile")} />
                <Input
                  type="contactMethod"
                  placeholder={t("form.preferredContactMethod")}
                />
                <Input type="email" placeholder={t("form.email")} />
                {/* About Advertisement */}
                <TitleSmallStyled as="h4">
                  {t("form.aboutAdvertisement")}
                </TitleSmallStyled>

                <Input type="title" placeholder={t("form.title")} />
                <FormikDropdown
                  name="category"
                  options={categoryOptions}
                  width="100%"
                  height="56px"
                  borderColor="yellow"
                  color="gray"
                />
                <Input type="location" placeholder={t("form.location")} />
                <Input type="price" placeholder={t("form.price")} />
                <Input
                  type="description"
                  placeholder={t("form.description")}
                  as="textarea"
                />
                <ImageInput type="images" label={t("form.downloadCoverArt")} />
              </>
            )}

            <ButtonWrap>
              <Button
                text={tCommon("buttons.cancel")}
                type="reset"
                backgroundColor="gray"
                color="black"
                onClick={cancelClick}
              />
              <SubmitButton
                backgroundColor="yellow"
                color="white"
                text={tCommon("buttons.save")}
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

const Wrap = styled.div(({ theme }) => ({
  zIndex: 10,
  position: "absolute",
  top: "250px",
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

export default CreateAddForm;
