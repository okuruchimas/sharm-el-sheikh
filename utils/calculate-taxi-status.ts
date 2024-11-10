import { getCurrentDayAndTime } from "./formateDate";
import type { StatusOptions } from "../constants/taxi-statuses.constants";
import type { TaxiDriverPreviewFragment } from "../gql/graphql";

type Params = {
  schedule: TaxiDriverPreviewFragment["schedule"];
  isNotWorking: boolean;
};
export const calculateStatus = ({
  isNotWorking,
  schedule,
}: Params): StatusOptions => {
  if (isNotWorking) {
    return "notwork";
  }

  const { dayOfWeek, time } = getCurrentDayAndTime();

  const isAvailable = schedule?.some(
    (day) =>
      day?.dayOfWeek === dayOfWeek &&
      day?.timeSlots.some(
        (slot) => slot?.startTime <= time && slot?.endTime >= time,
      ),
  );

  return isAvailable ? "available" : "unavailable";
};
