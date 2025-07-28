import { useTranslation } from 'next-i18next';
import { CardsWrap } from '../../children/cards-wrap';
import GuideOrOperatorCard from '../card';
import Placeholder from '../../../promotions/children/placeholder';
import type { TourGuideFragment } from '../../../../../gql/graphql';

type GuidesCardsProps = {
  tourGuides: TourGuideFragment[];
};

const GuidesCards = ({ tourGuides }: GuidesCardsProps) => {
  const { t } = useTranslation('entertainers-tour-guides');

  return tourGuides.length ? (
    <CardsWrap>
      {tourGuides.map(el => (
        <GuideOrOperatorCard key={el.slug} data={el} />
      ))}
    </CardsWrap>
  ) : (
    <Placeholder title={t('placeholders.noTourOperators')} />
  );
};

export default GuidesCards;
