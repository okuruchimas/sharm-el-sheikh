import { useTranslation } from "next-i18next";
import Placeholder from "../../../promotions/children/placeholder";
import AnimatorCard from "../card";
import styled from "@emotion/styled";
import type { AnimatorPreviewFragment } from "../../../../../gql/graphql";

type AnimatorCardsProps = {
  animators: AnimatorPreviewFragment[];
};
const AnimatorCards = ({ animators }: AnimatorCardsProps) => {
  const { t } = useTranslation("entertainers-tour-guides");

  return animators.length ? (
    <Wrap>
      {animators.map((el) => (
        <AnimatorCard animator={el} key={el.slug} />
      ))}
    </Wrap>
  ) : (
    <Placeholder title={t("placeholders.noAnimators")} />
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "16px",
  width: "100%",
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));
export default AnimatorCards;
