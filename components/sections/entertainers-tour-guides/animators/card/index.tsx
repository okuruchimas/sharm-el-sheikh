import React from "react";
import styled from "@emotion/styled";
import Card from "../../children/card";
import { Animator } from "../../../../../gql/graphql";

type AnimatorCardProps = {
  animator: Animator;
};
const AnimatorCard = ({ animator }: AnimatorCardProps) => {
  const flags = animator.languages?.data.map(
    (el) => el.attributes?.flagIcon.data?.attributes?.url || "",
  );

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
      totalComments={animator.totalComments}
      averageRating={animator.averageRating}
      slug={`/entertainers-tour-guides/animators/${animator.slug}`}
      hotelName={animator.hotelName}
      greyText={animator.animation_company?.data?.attributes?.value || ""}
      indicator={indicator}
      title={animator.name}
      flagIcons={flags || [""]}
      imgSrs={animator?.profileImg?.data?.attributes?.url || ""}
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
