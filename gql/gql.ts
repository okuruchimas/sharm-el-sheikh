/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CompanyPromotionCard($slug: String!, $locale: I18NLocaleCode!) {\n  companyPromotionCards(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        ...CompanyCard\n      }\n    }\n  }\n}\n\nfragment CompanyCard on CompanyPromotionCard {\n  title\n  discount\n  images {\n    data {\n      id\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  position {\n    lat\n    lng\n  }\n  description\n  youTubeVideoId\n  discountBanner {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      data {\n        attributes {\n          url\n          alternativeText\n        }\n      }\n    }\n  }\n  touchText\n  touchLink\n  filters {\n    data {\n      id\n      attributes {\n        text\n        key\n      }\n    }\n  }\n  averageRating\n  totalComments\n  services {\n    data {\n      ...Service\n    }\n  }\n  slug\n  location\n}\n\nfragment Service on ServiceEntity {\n  id\n  attributes {\n    text\n    icon {\n      data {\n        attributes {\n          url\n          alternativeText\n        }\n      }\n    }\n  }\n}": types.CompanyPromotionCardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CompanyPromotionCard($slug: String!, $locale: I18NLocaleCode!) {\n  companyPromotionCards(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        ...CompanyCard\n      }\n    }\n  }\n}\n\nfragment CompanyCard on CompanyPromotionCard {\n  title\n  discount\n  images {\n    data {\n      id\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  position {\n    lat\n    lng\n  }\n  description\n  youTubeVideoId\n  discountBanner {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      data {\n        attributes {\n          url\n          alternativeText\n        }\n      }\n    }\n  }\n  touchText\n  touchLink\n  filters {\n    data {\n      id\n      attributes {\n        text\n        key\n      }\n    }\n  }\n  averageRating\n  totalComments\n  services {\n    data {\n      ...Service\n    }\n  }\n  slug\n  location\n}\n\nfragment Service on ServiceEntity {\n  id\n  attributes {\n    text\n    icon {\n      data {\n        attributes {\n          url\n          alternativeText\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CompanyPromotionCardDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
