import * as Yup from "yup";
import { IValues } from "../index";
import { TFunction } from "next-i18next";

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

export const getValidationSchema = (
  formType: string,
  labels: IValues,
  tCommon: TFunction,
) => {
  const baseSchema = {
    name: Yup.string()
      .matches(
        /^[\p{L}\s'-]+$/u,
        tCommon("validationErrors.alphabetic", { field: labels.name }),
      )
      .min(
        1,
        tCommon("validationErrors.min", {
          field: labels.name,
          min: "1",
        }),
      )
      .max(
        20,
        tCommon("validationErrors.max", {
          field: labels.name,
          max: "20",
        }),
      )
      .required(
        tCommon("validationErrors.required", {
          field: labels.name,
        }),
      ),
    email: Yup.string()
      .email(tCommon("validationErrors.email"))
      .required(
        tCommon("validationErrors.required", {
          field: labels.email,
        }),
      ),
    message: Yup.string()
      .min(
        1,
        tCommon("validationErrors.min", {
          field: labels.message,
          min: "1",
        }),
      )
      .max(
        200,
        tCommon("validationErrors.max", {
          field: labels.message,
          max: "200",
        }),
      ),
  };

  const localSchema = {
    companyName: Yup.string()
      .min(
        1,
        tCommon("validationErrors.min", {
          field: labels.companyName,
          min: "1",
        }),
      )
      .max(
        50,
        tCommon("validationErrors.max", {
          field: labels.companyName,
          max: "50",
        }),
      )
      .required(
        tCommon("validationErrors.required", {
          field: labels.companyName,
        }),
      ),
    phone: Yup.string()
      .matches(/^[0-9+\-()\s_]+$/, tCommon("validationErrors.phoneNumber"))
      .max(
        20,
        tCommon("validationErrors.max", {
          field: labels.phone,
          max: "15",
        }),
      )
      .required(
        tCommon("validationErrors.required", {
          field: labels.phone,
        }),
      ),
  };

  const intSchema = {
    country: Yup.string()
      .matches(
        /^[a-zA-Z\s'-]+$/,
        tCommon("validationErrors.alphabetic", { field: labels.country }),
      )
      .min(
        1,
        tCommon("validationErrors.min", {
          field: labels.country,
          min: "20",
        }),
      )
      .max(
        20,
        tCommon("validationErrors.max", {
          field: labels.country,
          max: "20",
        }),
      )
      .required(
        tCommon("validationErrors.required", {
          field: labels.country,
        }),
      ),
  };

  if (formType === "default") {
    return Yup.object().shape(baseSchema);
  }

  if (formType === "local") {
    return Yup.object().shape({ ...baseSchema, ...localSchema });
  }

  return Yup.object().shape({ ...baseSchema, ...localSchema, ...intSchema });
};
