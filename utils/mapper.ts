import type { FooterProps } from "../components/layout/footer";
import type { HeaderProps, NavMenuItem } from "../components/layout/header";

interface SocialIconResponse {
  id: number;
  socialLink: string;
  icon: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

interface HeaderResponse {
  data: {
    attributes: {
      Logo: {
        data: {
          attributes: {
            url: string;
            alternativeText: string;
          };
        };
      };
      Menu: NavMenuItem[];
    };
  };
}

interface FooterResponse {
  data: {
    attributes: {
      socialIcons: SocialIconResponse[];
    };
  };
}

export const mapFooterResponse = (data: FooterResponse): FooterProps => {
  const socialIcons = data.data.attributes.socialIcons.map((item) => {
    const iconData = item.icon?.data?.attributes || {};
    return {
      id: item.id,
      iconSrc: iconData.url || "",
      iconAlt: iconData.alternativeText || "",
      socialLink: item.socialLink || "",
    };
  });

  return { socialIcons };
};

export const mapHeaderResponse = (data: HeaderResponse): HeaderProps => {
  const logoData = data.data.attributes.Logo?.data?.attributes || {};

  return {
    logo: {
      src: logoData.url || "",
      alt: logoData.alternativeText || "Logo",
    },
    navMenu: data.data.attributes.Menu || [],
  };
};
