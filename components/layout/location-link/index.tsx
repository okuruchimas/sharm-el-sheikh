import TextAndIcon, { type TextAndIconProps } from '../text-and-icon';
import type { CompanyPreviewFragment } from '../../../gql/graphql';

type Props = Omit<TextAndIconProps, 'src'> &
  Pick<CompanyPreviewFragment, 'position'>;

const LocationLink = ({ position, ...props }: Props) => {
  // const mapUrl = position
  //   ? `https://www.google.com/maps?q=${position.lat},${position.lng}`
  //   : undefined;

  const mapUrl = position
    ? `https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`
    : undefined;

  return mapUrl ? (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer">
      <TextAndIcon src={'/icons/location-marker.svg'} {...props} />
    </a>
  ) : (
    <TextAndIcon src={'/icons/promotions-section/location.svg'} {...props} />
  );
};

export default LocationLink;
