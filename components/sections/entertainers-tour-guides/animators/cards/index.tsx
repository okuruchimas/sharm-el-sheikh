import { useTranslation } from 'next-i18next';
import { CardsWrap } from '../../children/cards-wrap';
import Placeholder from '../../../promotions/children/placeholder';
import AnimatorCard from '../card';
import type { AnimatorPreviewFragment } from '../../../../../gql/graphql';

type AnimatorCardsProps = {
  animators: AnimatorPreviewFragment[];
};
const AnimatorCards = ({ animators }: AnimatorCardsProps) => {
  const { t } = useTranslation('entertainers-tour-guides');

  return animators.length ? (
    <CardsWrap>
      {animators.map(el => (
        <AnimatorCard animator={el} key={el.slug} />
      ))}
    </CardsWrap>
  ) : (
    <Placeholder title={t('placeholders.noAnimators')} />
  );
};

export default AnimatorCards;
