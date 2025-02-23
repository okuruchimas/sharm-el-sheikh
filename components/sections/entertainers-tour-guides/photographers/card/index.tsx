import Card from "../../children/card";
import type { PhotographerFragment } from "../../../../../gql/graphql";

type PhotographCardProps = {
  photographer: PhotographerFragment;
  size?: string;
};
const PhotographCard = ({ photographer, size }: PhotographCardProps) => {
  const flags = photographer.languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));

  const styles = photographer.photography_styles?.data.map(
    (el) => el.attributes?.value,
  );

  return (
    <Card
      size={size}
      slug={`/entertainers-tour-guides/photographers/${photographer.slug}`}
      title={photographer.name}
      imgSrc={photographer?.profileImg?.data?.attributes?.url || ""}
      averageRating={photographer.averageRating}
      totalComments={photographer.totalComments}
      iconText={styles?.join(", ") || "-"}
      iconSrc="/icons/camera.svg"
      flagIcons={flags || []}
    />
  );
};

export default PhotographCard;
