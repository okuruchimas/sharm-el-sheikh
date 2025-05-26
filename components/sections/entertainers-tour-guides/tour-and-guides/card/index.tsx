import Card from "../../children/card";
import type { TourGuidePreviewFragment } from "../../../../../gql/graphql";

type GuideCardProps = { tourGuide: TourGuidePreviewFragment };

const GuideCard = ({ tourGuide }: GuideCardProps) => {
  const flags = tourGuide.languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));

  const tours =
    tourGuide.tours?.data.map((el) => el.attributes?.name).join(" ") || "";

  return (
    <Card
      averageRating={tourGuide.averageRating}
      totalComments={tourGuide.totalComments}
      slug={`/entertainers-tour-guides/tour-and-guides/${tourGuide.slug}`}
      title={tourGuide.name}
      imgSrc={tourGuide?.profileImg?.data?.attributes?.url || ""}
      iconText={tours || "-"}
      iconSrc="/icons/direction.svg"
      flagIcons={flags || []}
    />
  );
};

export default GuideCard;
