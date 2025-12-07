// utils
import styled from '@emotion/styled';

export interface SocialIconI {
  id?: number;
  iconSrc: string;
  iconAlt?: string;
  socialLink: string;
}

const SocialIcon = ({ iconSrc, iconAlt, socialLink }: SocialIconI) => (
  <a href={socialLink} target="_blank">
    <Icon src={iconSrc} alt={iconAlt || iconSrc} loading="lazy" />
  </a>
);

const Icon = styled('img')({
  cursor: 'pointer',
});

export default SocialIcon;
