import Card from '../../children/card';
import type {
  TourGuidePreviewFragment,
  TourOperatorPreviewFragment,
} from '../../../../../gql/graphql';

type GuideCardProps = {
  data: TourGuidePreviewFragment | TourOperatorPreviewFragment;
};

const GuideOrOperatorCard = ({ data }: GuideCardProps) => {
  const flags = data.languages?.data.map(el => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || '',
    alt: el.attributes?.value || '',
  }));

  const isGuide = (
    tourGuide: TourGuidePreviewFragment | TourOperatorPreviewFragment,
  ): tourGuide is TourGuidePreviewFragment => 'tours' in tourGuide;

  const iconText = isGuide(data)
    ? data.tours?.data.map(el => el.attributes?.name).join(' ') || ''
    : data.tour_operator_directions?.data
        .map(el => el.attributes?.title)
        .join(' ') || '';

  return (
    <Card
      averageRating={data.averageRating}
      totalComments={data.totalComments}
      slug={`/entertainers-tour-guides/tour-and-guides/${data.slug}`}
      title={data.name}
      imgSrc={data?.profileImg?.data?.attributes?.url || ''}
      iconText={iconText || '-'}
      iconSrc="/icons/direction.svg"
      flagIcons={flags || []}
    />
  );
};

export default GuideOrOperatorCard;
