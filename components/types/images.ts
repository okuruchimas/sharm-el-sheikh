import type { StrapiImageFragment } from '../../gql/graphql';

export type ImageI = { src: string; alt: string };

export type SocialLink = {
  icon: StrapiImageFragment;
  socialLink: string;
};
