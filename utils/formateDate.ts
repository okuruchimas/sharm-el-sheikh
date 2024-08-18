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
