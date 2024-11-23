import { useTranslation } from "next-i18next";
import { CardsWrap } from "../../children/cards-wrap";
import TaxiCard from "../card";
import Placeholder from "../../../promotions/children/placeholder";
import type { TaxiDriverPreviewFragment } from "../../../../../gql/graphql";

type TaxiCardsProps = {
  drivers: TaxiDriverPreviewFragment[];
};
const TaxiCards = ({ drivers }: TaxiCardsProps) => {
  const { t } = useTranslation("entertainers-tour-guides");

  return drivers.length ? (
    <CardsWrap>
      {drivers.map((el) => (
        <TaxiCard key={el.slug} driver={el} />
      ))}
    </CardsWrap>
  ) : (
    <Placeholder title={t("placeholders.noDrivers")} />
  );
};

export default TaxiCards;
