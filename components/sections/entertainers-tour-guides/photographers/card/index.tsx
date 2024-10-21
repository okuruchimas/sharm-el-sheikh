import styled from "@emotion/styled";
import Card from "../../children/card";

const PhotographCard = () => {
  const arr = [
    "/icons/flags/UA.svg",
    "/icons/flags/DT.svg",
    "/icons/flags/IT.svg",
    "/icons/flags/EN.svg",
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
      flagIcons={arr}
    />
  );
};

export default PhotographCard;
