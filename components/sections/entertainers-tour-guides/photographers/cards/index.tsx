import { useTranslation } from 'next-i18next';
import { CardsWrap } from '../../children/cards-wrap';
import Placeholder from '../../../promotions/children/placeholder';
import PhotographCard from '../card';
import type { PhotographerFragment } from '../../../../../gql/graphql';

type PhotographCardsProps = {
  photographers: PhotographerFragment[];
};
const PhotographCards = ({ photographers }: PhotographCardsProps) => {
  const { t } = useTranslation('entertainers-tour-guides');

  return photographers.length ? (
    <CardsWrap>
      {photographers.map(el => (
        <PhotographCard key={el.slug} photographer={el} />
      ))}
    </CardsWrap>
  ) : (
    <Placeholder title={t('placeholders.noPhotographers')} />
  );
};

export default PhotographCards;
