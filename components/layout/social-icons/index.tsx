import Link from "next/link";
import styled from "@emotion/styled";

export interface SocialIcon {
  iconSrc: string;
  socialLink: string;
}

const SocialIcons = ({ iconSrc, socialLink }: SocialIcon) => {
  return (
    <Link href={socialLink}>
      <Icon src={iconSrc} alt={iconSrc} loading="lazy" />
    </Link>
  );
};

export default SocialIcons;

const Icon = styled.img`
  cursor: pointer;
`;
