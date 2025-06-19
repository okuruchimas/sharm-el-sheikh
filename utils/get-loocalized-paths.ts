import nextI18NextConfig from '../next-i18next.config';

type Path = {
  params: {
    slug: string;
  };
  locale: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getLocalizedPaths(data: any): Path[] {
  const locales = nextI18NextConfig.i18n.locales;

  return data?.data?.flatMap((el: any) => {
    const localizations = el?.attributes?.localizations?.data || [];

    return locales
      .filter(locale => {
        return (
          locale === el?.attributes?.locale || // Локаль головного запису
          localizations.some((loc: any) => loc?.attributes?.locale === locale) // Локаль перекладу
        );
      })
      .map(locale => ({
        params: { slug: el?.attributes?.slug || '' },
        locale,
      }));
  });
}
/* eslint-enable @typescript-eslint/no-explicit-any */
