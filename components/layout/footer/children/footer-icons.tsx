import { SocialIcon } from "./types";
import Link from "next/link";

const FooterIcons = ({ iconSrc, socialLink }: SocialIcon) => {
  return (
    <Link href={socialLink}>
      <img src={iconSrc} alt={iconSrc} style={{ cursor: "pointer" }} />
    </Link>
  );
};

export default FooterIcons;
