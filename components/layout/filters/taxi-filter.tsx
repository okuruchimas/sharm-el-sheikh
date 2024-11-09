import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useFormik } from "formik";
import Button from "../button";
import Dropdown from "./index";
import styled from "@emotion/styled";
import type { TimePeriod } from "../../../pages/entertainers-tour-guides/taxi-drivers";
import type { selectOption } from "../../types/filter";
import { useTranslation } from "next-i18next";

// import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const days = [
  { key: "mon", value: "Monday" },
  { key: "tue", value: "Tuesday" },
  { key: "wed", value: "Wednesday" },
  { key: "thu", value: "Thursday" },
  { key: "fri", value: "Friday" },
  { key: "sat", value: "Saturday" },
  { key: "sun", value: "Sunday" },
];

export type TaxiFilterFormI = {
  availableNow?: boolean;
  availableLater?: boolean;
  timeLater?: TimePeriod;
  carClasses?: string[];
  languageKeys?: string[];
};

interface Props {
  languageOptions: selectOption[];
  carClassOptions: selectOption[];
  defaultValues?: TaxiFilterFormI;
  onClose: () => void;
  onSubmit: (values: TaxiFilterFormI) => void;
}
const TaxiFilterForm = ({
  languageOptions,
  carClassOptions,
  defaultValues,
  onClose,
  onSubmit,
}: Props) => {
  const [otherLang, setOtherLang] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("entertainers-tour-guides");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const langCheckBoxes = languageOptions.slice(0, 2);
  const langDropdown = [
    { key: "", value: t("taxiFilterForm.otherLanguages") },
    ...languageOptions.slice(2, languageOptions.length),
  ];

  const { setFieldValue, handleSubmit, handleChange, values } =
    useFormik<TaxiFilterFormI>({
      initialValues: {
        availableNow: !!defaultValues?.availableNow,
        availableLater: !!defaultValues?.availableLater,
        carClasses: defaultValues?.carClasses || [],
        languageKeys: defaultValues?.languageKeys || [],
        timeLater: defaultValues?.timeLater,
      },
      onSubmit,
    });

  const handleCheckBoxChange =
    (fieldName: "languageKeys" | "carClasses", key: string) => () => {
      setFieldValue(
        fieldName,
        values[fieldName]?.includes(key)
          ? values[fieldName]?.filter((el) => el !== key)
          : [...(values[fieldName] || []), key],
      );
    };

  const handleDropdownSelect = (option: selectOption) => {
    if ((!option.key.length && !otherLang.length) || otherLang === option.key)
      return;

    setOtherLang(option.key);
    handleCheckBoxChange("languageKeys", option.key || otherLang)();
  };

  const handleNowChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setFieldValue("availableLater", false);
    setFieldValue("timeLater", undefined);
  };
  const handleLaterChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setFieldValue("availableNow", false);
    setFieldValue("timeLater", {
      day: "Monday",
      from: "10:00:00.000",
      to: "12:00:00.000",
    });
  };

  return (
    <Wrap ref={formRef}>
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>{t("taxiFilterForm.availability")}</SectionTitle>
          <CheckboxLabel>
            <input
              type="checkbox"
              name="availableNow"
              onChange={handleNowChange}
              checked={values["availableNow"]}
            />
            {t("taxiFilterForm.availableNow")}
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              name="availableLater"
              onChange={handleLaterChange}
              checked={values["availableLater"]}
            />
            {t("taxiFilterForm.availableLater")}
          </CheckboxLabel>
          {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
          {/*  <TimePicker>*/}
          {/*    <Dropdown*/}
          {/*      options={days}*/}
          {/*      onChange={handleDaySelect}*/}
          {/*      width="100%"*/}
          {/*      height="56px"*/}
          {/*    />*/}

          {/*    <StaticTimePicker />*/}
          {/*  </TimePicker>*/}
          {/*</LocalizationProvider>*/}
        </Section>
        <Section>
          <SectionTitle>{t("taxiFilterForm.carClass")}</SectionTitle>
          {carClassOptions.map(({ key, value }) => (
            <CheckboxLabel key={value}>
              <input
                type="checkbox"
                name="carClasses"
                onChange={handleCheckBoxChange("carClasses", key)}
                checked={values.carClasses?.includes(key)}
              />
              {value}
            </CheckboxLabel>
          ))}
        </Section>
        <Section>
          <SectionTitle>{t("taxiFilterForm.languagesSpoken")}</SectionTitle>
          {langCheckBoxes.map(({ key, value }) => (
            <CheckboxLabel key={value}>
              <input
                type="checkbox"
                name={"languageKeys"}
                onChange={handleCheckBoxChange("languageKeys", key)}
                checked={values.languageKeys?.includes(key)}
              />
              {value}
            </CheckboxLabel>
          ))}
          {langDropdown.length ? (
            <Dropdown
              options={langDropdown}
              onChange={handleDropdownSelect}
              width="100%"
              height="56px"
            />
          ) : null}
        </Section>
        <Actions>
          <Button
            onClick={onClose}
            color="blue"
            backgroundColor="transparent"
            text="Cancel"
          />
          <Button type="submit" color="blue" text="Save" />
        </Actions>
      </Form>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  gap: "16px",
  width: "100%",
  maxWidth: "854px",
  backgroundColor: theme.colors.white,
  borderRadius: "16px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

  [theme.breakpoints.mobile]: {
    padding: "16px",
  },
}));

const Form = styled("form")({
  display: "grid",
  gap: 24,
});

const Section = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 16,
});

const SectionTitle = styled("h4")(({ theme }) => ({
  flexBasis: "100%",
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.black,
  fontWeight: 600,
  marginBottom: 8,
}));

const TimePicker = styled("div")({
  display: "flex",
  flexBasis: "100%",

  gap: "8px",
  alignItems: "center",
});

const CheckboxLabel = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 190,
  padding: 14,
  gap: 16,
  fontSize: theme.fontSize.fontS16,

  "input:checked": {
    accentColor: theme.colors.yellow,
  },
}));

const Actions = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  gap: "16px",
});

export default TaxiFilterForm;
