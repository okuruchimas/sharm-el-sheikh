import Card from "../../children/card";

const GuideCard = () => {
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
      iconText="Economy car"
      iconSrc="/icons/Hotel.svg"
      greyText={"Mon, Tue, Sat, Sun"}
      flagIcons={arr}
    />
  );
};

export default GuideCard;
