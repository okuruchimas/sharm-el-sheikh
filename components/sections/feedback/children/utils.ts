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
        /^[a-zA-Z\s'-]+$/,
        "Name can only contain alphabetic characters and spaces",
      )
      .min(1, "Name is too short - should be 1 chars minimum.")
      .max(20, "Name is too long - should be 20 chars maximum.")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(1, "Message is too short - should be 1 chars minimum.")
      .max(200, "Message is too long - should be 200 chars maximum."),
  };

  const localSchema = {
    companyName: Yup.string()
      .min(1, "Company name is too short - should be 1 chars minimum.")
      .max(50, "Company name is too long - should be 50 chars maximum.")
      .required("Company name is required"),
    phone: Yup.string()
      .matches(/^[0-9+\-()\s]+$/, "Phone number can only contain numbers")
      .max(17, "Phone number is too long - should be 15 chars maximum.")
      .required("Phone number is required"),
  };

  const intSchema = {
    country: Yup.string()
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Country name can only contain alphabetic characters and spaces",
      )
      .min(1, "Country name is too short - should be 1 chars minimum.")
      .max(20, "Country name is too long - should be 20 chars maximum."),
  };

  if (formType === "default") {
    return Yup.object().shape(baseSchema);
  }

  if (formType === "local") {
    return Yup.object().shape({ ...baseSchema, ...localSchema });
  }

  return Yup.object().shape({ ...baseSchema, ...localSchema, ...intSchema });
};
