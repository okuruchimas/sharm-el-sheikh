// hooks
import { useTranslation } from "next-i18next";
// components
import Card from "../../children/card";
// utils
import styled from "@emotion/styled";
import { getDayAndTime } from "../../../../../utils/formateDate";
// types
import type { Status } from "../statuses";
import type { TaxiDriverPreviewFragment } from "../../../../../gql/graphql";

export enum Statuses {
  available = "green",
  unavailable = "yellow4",
  notwork = "red2",
}
enum DayAbv {
  Monday = "days.mon",
  Tuesday = "days.tue",
  Wednesday = "days.wed",
  Thursday = "days.thu",
  Friday = "days.fri",
  Saturday = "days.sat",
  Sunday = "days.sun",
}
interface TaxiCardProps {
  driver: TaxiDriverPreviewFragment;
}

const TaxiCard = ({
  driver: {
    name,
    slug,
    schedule,
    languages,
    car_class,
    profileImg,
    isNotWorking,
    averageRating,
    totalComments,
  },
}: TaxiCardProps) => {
  const { t } = useTranslation("entertainers-tour-guides");

  const flags = languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));
  const calculateStatus = (): Status => {
    if (isNotWorking) {
      return "notwork";
    }

    const { dayOfWeek, time } = getDayAndTime();

    const isAvailable = schedule?.some(
      (day) =>
        day?.dayOfWeek === dayOfWeek &&
        day?.timeSlots.some(
          (slot) => slot?.startTime <= time && slot?.endTime >= time,
        ),
    );

    return isAvailable ? "available" : "unavailable";
  };

  const status = calculateStatus();
  const indicator = <StatusDot color={Statuses[status]} />;
  const days = schedule?.map((el) =>
    t(DayAbv[(el?.dayOfWeek || "") as keyof typeof DayAbv] || ""),
  );

  return (
    <Card
      slug={slug}
      title={name}
      averageRating={averageRating}
      totalComments={totalComments}
      imgSrc={profileImg.data?.attributes?.url || ""}
      iconText={car_class?.data?.attributes?.value || ""}
      iconSrc={car_class?.data?.attributes?.icon.data?.attributes?.url || ""}
      greyText={days?.join(", ") || "-"}
      indicator={indicator}
      flagIcons={flags || []}
    />
  );
};

export const StatusDot = styled("div")<{ color: string }>(
  ({ theme, color }) => ({
    left: 16,
    top: 16,
    position: "absolute",
    height: 16,
    width: 16,
    background: theme.colors[color],
    borderRadius: "50%",
  }),
);

export default TaxiCard;
