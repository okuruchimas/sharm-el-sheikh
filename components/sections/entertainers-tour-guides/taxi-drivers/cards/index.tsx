import { useTranslation } from "next-i18next";
import TaxiCard from "../card";
import Placeholder from "../../../promotions/children/placeholder";
import styled from "@emotion/styled";
import type { TaxiDriverPreviewFragment } from "../../../../../gql/graphql";

type TaxiCardsProps = {
  drivers: TaxiDriverPreviewFragment[];
};
const TaxiCards = ({ drivers }: TaxiCardsProps) => {
  const { t } = useTranslation("entertainers-tour-guides");

  return drivers.length ? (
    <Wrap>
      {drivers.map((el) => (
        <TaxiCard key={el.slug} driver={el} />
      ))}
    </Wrap>
  ) : (
    <Placeholder title={t("placeholders.noDrivers")} />
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
export default TaxiCards;
