// libs
import Link from "next/link";
// utils
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

const Icon = styled("img")({
  cursor: "pointer",
});

export default SocialIcons;
