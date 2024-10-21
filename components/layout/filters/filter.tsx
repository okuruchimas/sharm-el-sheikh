import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { selectOption } from "../../types/filter";
import Dropdown from "./index";
import Button from "../button";

// import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const arr = [
  { name: "Available Now", value: "available" },
  { name: "Available at Another Time", value: "unavailable" },
];

const arr1 = [
  { name: "economy", value: "economy" },
  { name: "standard", value: "standard" },
  { name: "business", value: "business" },
  { name: "vans", value: "vans" },
];
const arr2 = [
  { name: "english", value: "english" },
  { name: "polish", value: "polish" },
  { name: "ukrainian", value: "ukrainian" },
  { name: "arabic", value: "arabic" },
  { name: "italian", value: "italian" },
];

const days = [
  { key: "mon", value: "Monday" },
  { key: "tue", value: "Tuesday" },
  { key: "wed", value: "Wednesday" },
  { key: "thu", value: "Thursday" },
  { key: "fri", value: "Friday" },
  { key: "sat", value: "Saturday" },
  { key: "sun", value: "Sunday" },
];

const lengs = [
  { key: "other", value: "other" },
  { key: "polish", value: "polish" },
  { key: "ukrainian", value: "ukrainian" },
  { key: "arabic", value: "arabic" },
  { key: "italian", value: "italian" },
];

interface Props {
  onCancel: Dispatch<SetStateAction<boolean>>;
}
const FilterForm = ({ onCancel }: Props) => {
  const [selectedDay, setSelectedDay] = useState<selectOption>(days[0]);

  // Ініціалізація форми за допомогою useFormik
  const formik = useFormik({
    initialValues: {
      available: false,
      unavailable: false,
      day: "",
      fromTime: "",
      toTime: "",
      carClass: {
        economy: false,
        standard: false,
        business: false,
        vans: false,
      },
      languages: {
        english: false,
        polish: false,
        ukrainian: false,
        russian: false,
        italian: false,
        arabic: false,
        other: "",
      },
    },
    onSubmit: (values) => {
      // Виведення значень форми у консоль
      console.log("Form values:", values);
    },
  });

  const handleNestedChange = (
    e: ChangeEvent<HTMLInputElement>,
    groupName: string,
  ) => {
    const { name, checked } = e.target;
    formik.setFieldValue(`${groupName}.${name}`, checked);
  };

  const handleDaySelect = (option: selectOption) => {
    setSelectedDay(option);
  };

  return (
    <Wrap>
      <Form onSubmit={formik.handleSubmit}>
        {/* Availability Section */}
        <Section>
          <SectionTitle>Availability</SectionTitle>
          {arr.map(({ name, value }) => (
            <CheckboxLabel key={value}>
              <input
                type="checkbox"
                name={value}
                onChange={formik.handleChange}
                // @ts-ignore
                checked={formik.values[value]}
              />
              {name}
            </CheckboxLabel>
          ))}
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
          <SectionTitle>Car Class</SectionTitle>
          {arr1.map(({ name, value }) => (
            <CheckboxLabel key={value}>
              <input
                type="checkbox"
                name={value}
                onChange={(e) => handleNestedChange(e, "carClass")}
                // @ts-ignore
                checked={formik.values.carClass[value]}
              />
              {name}
            </CheckboxLabel>
          ))}
        </Section>

        {/* Languages Section */}
        <Section>
          <SectionTitle>Languages Spoken by the Driver</SectionTitle>
          {arr2.map(({ name, value }) => (
            <CheckboxLabel key={value}>
              <input
                type="checkbox"
                name={value}
                onChange={(e) => handleNestedChange(e, "languages")}
                // @ts-ignore
                checked={formik.values.languages[value]}
              />
              {name}
            </CheckboxLabel>
          ))}
          <Dropdown
            options={lengs}
            onChange={handleDaySelect}
            width="100%"
            height="56px"
          />
        </Section>

        <Actions>
          <Button
            onClick={() => onCancel((prev) => !prev)}
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

// Styled Components
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

export default FilterForm;
