import styled from "@emotion/styled";
import Card from "../../children/card";

export enum Statuses {
  available = "green",
  unavailable = "yellow4",
  notwork = "red2",
}

interface Props {
  status: "available" | "unavailable" | "notwork";
}

const TaxiCard = ({ status }: Props) => {
  const indicator = <Status color={Statuses[status]} />;
  const arr = [
    { src: "/icons/flags/UA.svg", alt: "UA" },
    { src: "/icons/flags/DT.svg", alt: "DT" },
    { src: "/icons/flags/IT.svg", alt: "IT" },
    { src: "/icons/flags/EN.svg", alt: "EN" },
  ];

  return (
    <Card
      averageRating={0}
      totalComments={0}
      slug={""}
      title={"John Black"}
      imgSrc={
        "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/banner1_9ca87e6a4b.webp"
      }
      hotelName={"Economy car"}
      greyText={"Mon, Tue, Sat, Sun"}
      indicator={indicator}
      flagIcons={arr}
    />
  );
};

export const Status = styled("div")<{ color: string }>(({ theme, color }) => ({
  left: 16,
  top: 16,
  position: "absolute",
  height: 16,
  width: 16,
  background: theme.colors[color],
  borderRadius: "50%",
}));

export default TaxiCard;
