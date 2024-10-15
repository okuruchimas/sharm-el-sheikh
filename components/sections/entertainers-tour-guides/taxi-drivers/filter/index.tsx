import React from "react";
import styled from "@emotion/styled";

const arr = [
  { name: "Available Now", value: "available" },
  { name: "Available at Another Time", value: "available" },
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
  { name: "italian", value: "arabic" },
];

import { useFormik } from "formik";

type FormValues = {
  available: boolean;
  unavailable: boolean;
  day: string;
  fromTime: string;
  toTime: string;
  carClass: {
    economy: boolean;
    standard: boolean;
    business: boolean;
    vans: boolean;
  };
  languages: {
    english: boolean;
    polish: boolean;
    ukrainian: boolean;
    russian: boolean;
    italian: boolean;
    arabic: boolean;
    other: string;
  };
  [key: string]: any;
};

const FilterTaxi = () => {
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

  return (
    <Wrap>
      <Title>Filter</Title>
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
          <TimePicker></TimePicker>
        </Section>

        <Section>
          <SectionTitle>Car Class</SectionTitle>
          {arr1.map(({ name, value }) => (
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
        </Section>

        {/* Languages Section */}
        <Section>
          <SectionTitle>Languages Spoken by the Driver</SectionTitle>
          {arr2.map(({ name, value }) => (
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
        </Section>

        <Actions>
          <CancelButton type="button">Cancel</CancelButton>
          <SaveButton type="submit">Save</SaveButton>
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
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

  [theme.breakpoints.mobile]: {
    padding: "16px",
  },
}));

const Title = styled("h3")(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "16px",

  [theme.breakpoints.mobile]: {
    fontSize: "20px",
  },
}));

const Form = styled("form")({
  display: "grid",
  gap: "16px",
});

const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const SectionTitle = styled("h4")({
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "8px",
});

const CheckboxLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
});

const TimePicker = styled("div")({
  display: "flex",
  gap: "8px",
  alignItems: "center",

  select: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },

  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
});

const Actions = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  gap: "16px",
});

const CancelButton = styled("button")({
  backgroundColor: "#f5f5f5",
  color: "#333",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "8px 16px",
  cursor: "pointer",
});

const SaveButton = styled("button")({
  backgroundColor: "#ffc107",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px",
  cursor: "pointer",
});

export default FilterTaxi;
