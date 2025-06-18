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
import "react-toastify/dist/ReactToastify.css";

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
  const { t } = useTranslation("agents");
  const { t: tCommon } = useTranslation("common");

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
          if (images && images.length > 4) {
            setSubmitting(false);
            return toast.error(t("form.toasts.tooManyImages"));
          }

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
              toast.success(t("form.toasts.success"));
              resetForm();
            } else {
              const errorData = await response.json();
              toast.error(
                t("form.toasts.failedToSubmit") +
                  (errorData?.error?.message || " Unknown error"),
              );
            }
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
                <FormikDropdown
                  name="publicationType"
                  options={[
                    { key: "", value: t("form.selectType") },
                    {
                      key: "from",
                      value: t("form.orderFromEgypt"),
                    },
                    {
                      key: "to",
                      value: t("form.orderInEgypt"),
                    },
                  ]}
                  width="100%"
                  height="56px"
                  borderColor="yellow"
                  color="gray"
                />
                <Input type="title" placeholder={t("form.title")} />
                <Input type="location" placeholder={t("form.location")} />
                <Input type="price" placeholder={t("form.price")} />
                <Input
                  type="description"
                  placeholder={t("form.description")}
                  as="textarea"
                />
                <ImageInput type="images" label={t("form.downloadCoverArt")} />
                <CheckboxField
                  type="hasPersonalCard"
                  label={t("form.personalCardOnWebsite")}
                />
                <Input
                  isDisabled={!values.hasPersonalCard}
                  type="personalCardLink"
                  placeholder={t("form.link")}
                />
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
