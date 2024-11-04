import { format } from "date-fns";

export const formatDate = (dateValue: string, dateFormat?: string) => {
  const date = new Date(dateValue);

  if (isNaN(date.getTime())) {
    console.error(
      `Invalid date value: "${dateValue}". Please provide a valid date string in ISO format.`,
    );

    return "-";
  }

  return format(date, dateFormat || "dd.MM.yyyy");
};

export const getDayAndTime = () => {
  const currentDate = new Date();
  const dayOfWeek = format(currentDate, "EEEE"); // "Monday"
  const time = format(currentDate, "HH:mm:ss.SSS"); // "10:00:00.000"

  return { dayOfWeek, time };
};
