import Card from "../../children/card";
import type { PhotographerFragment } from "../../../../../gql/graphql";

type PhotographCardProps = {
  photographer: PhotographerFragment;
};
const PhotographCard = ({ photographer }: PhotographCardProps) => {
  const flags = photographer.languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));

  const styles = photographer.photography_styles?.data.map(
    (el) => el.attributes?.value,
  );

  return (
    <Card
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
