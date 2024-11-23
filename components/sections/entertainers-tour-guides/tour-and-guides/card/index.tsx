import Card from "../../children/card";
import type { TourGuideFragment } from "../../../../../gql/graphql";

type GuideCardProps = { tourGuide: TourGuideFragment };

const GuideCard = ({ tourGuide }: GuideCardProps) => {
  const flags = tourGuide.languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));

  return (
    <Card
      averageRating={tourGuide.averageRating}
      totalComments={tourGuide.totalComments}
      slug={tourGuide.slug}
      title={tourGuide.name}
      imgSrc={tourGuide?.profileImg?.data?.attributes?.url || ""}
      iconText={tourGuide.tours}
      iconSrc="/icons/direction.svg"
      flagIcons={flags || []}
    />
  );
};

export default GuideCard;
