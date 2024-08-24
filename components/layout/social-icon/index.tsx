// libs
import Link from "next/link";
// utils
import styled from "@emotion/styled";

export interface SocialIconI {
  id?: number;
  iconSrc: string;
  iconAlt?: string;
  socialLink: string;
}

const SocialIcon = ({ iconSrc, iconAlt, socialLink }: SocialIconI) => (
  <Link href={socialLink}>
    <Icon src={iconSrc} alt={iconAlt || iconSrc} loading="lazy" />
  </Link>
);

const Icon = styled("img")({
  cursor: "pointer",
});

export default SocialIcon;
