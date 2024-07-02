import * as Yup from "yup";
import { IValues } from "../index";

export const getValues = (
  values: IValues,
  formType: string,
): Partial<IValues> => {
  const { name, email, message, companyName, phone } = values;

  if (formType === "default") {
    return { name, email, message };
  }

  if (formType === "local") {
    return { name, email, message, companyName, phone };
  }

  return values;
};

export const getValidationSchema = (formType: string) => {
  const baseSchema = {
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
  };

  const localSchema = {
    companyName: Yup.string().max(
      100,
      "Company name is too long - should be 100 chars maximum.",
    ),
    phone: Yup.string().required("Phone is required"),
  };

  const intSchema = {
    country: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-.\s]+$/,
        "Country can only contain alphabetic characters and spaces",
      )
      .required("Country is required"),
  };

  if (formType === "default") {
    return Yup.object().shape(baseSchema);
  }

  if (formType === "local") {
    return Yup.object().shape({ ...baseSchema, ...localSchema });
  }

  return Yup.object().shape({ ...baseSchema, ...localSchema, ...intSchema });
};
