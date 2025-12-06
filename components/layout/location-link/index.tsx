import TextAndIcon, { type TextAndIconProps } from '../text-and-icon';
import type { CompanyPreviewFragment } from '../../../gql/graphql';
import Link from 'next/link';
import styled from '@emotion/styled';

type Props = Omit<TextAndIconProps, 'src'> &
  Pick<CompanyPreviewFragment, 'position'> & { url?: string };

const LocationLink = ({ position, url, ...props }: Props) => {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <LinkContent>
          <TextAndIcon src={'/icons/location-marker.svg'} {...props} />
        </LinkContent>
      </a>
    );
  }

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

const LinkContent = styled('div')(({ theme }) => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  [theme.breakpoints.mobile]: {},
}));
