import { format } from 'date-fns';

export const formatDate = (dateValue: string, dateFormat?: string) => {
  const date = new Date(dateValue);

  if (isNaN(date.getTime())) {
    console.error(
      `Invalid date value: "${dateValue}". Please provide a valid date string in ISO format.`,
    );

    return '-';
  }

  return format(date, dateFormat || 'dd.MM.yyyy');
};

export const getCurrentDayAndTime = () => {
  const currentDate = new Date();
  const dayOfWeek = format(currentDate, 'EEEE'); // "Monday"
  const time = format(currentDate, 'HH:mm:ss.SSS'); // "10:00:00.000"

  return { dayOfWeek, time };
};

export const formatTime = (timeValue: string) => {
  const time = new Date(`1970-01-01T${timeValue}`);
  if (isNaN(time.getTime())) {
    console.error(
      `Invalid time value: "${timeValue}". Please provide a valid time string in "HH:mm:ss.SSS" format.`,
    );
    return '-';
  }
  return format(time, 'HH:mm');
};
