import styled from "@emotion/styled";
import Card from "../../children/card";
import type { AnimatorPreviewFragment } from "../../../../../gql/graphql";

type AnimatorCardProps = {
  animator: AnimatorPreviewFragment;
  size?: string;
};
const AnimatorCard = ({ animator, size }: AnimatorCardProps) => {
  const flags = animator.languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));

  const indicator = animator.workingAtClub ? (
    <IsClub
      height={40}
      width={40}
      src={"/icons/isClub.svg"}
      className="is club img"
    />
  ) : null;

  return (
    <Card
      size={size}
      slug={`/entertainers-tour-guides/animators/${animator.slug}`}
      title={animator.name}
      imgSrc={animator?.profileImg?.data?.attributes?.url || ""}
      greyText={animator.animation_company?.data?.attributes?.value || ""}
      indicator={indicator}
      flagIcons={flags || []}
      iconText={animator.hotelName}
      iconSrc="/icons/Hotel.svg"
      totalComments={animator.totalComments}
      averageRating={animator.averageRating}
    />
  );
};

const IsClub = styled("img")({
  left: 16,
  top: 16,
  position: "absolute",
  height: 40,
  width: 40,
  objectFit: "cover",
});

export default AnimatorCard;
