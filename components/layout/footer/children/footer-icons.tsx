import { IFooter } from "./types";
import Link from "next/link";

const FooterIcons = ({ iconSrc, socialLink }: IFooter) => {
  return (
    <Link href={socialLink}>
      <img src={iconSrc} alt={iconSrc} />
    </Link>
  );
};

export default FooterIcons;
