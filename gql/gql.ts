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
    "fragment Announcement on Announcement {\n  title\n  text\n  image {\n    ...StrapiImage\n  }\n  socialLinks {\n    socialLink\n    icon {\n      ...StrapiImage\n    }\n  }\n}": types.AnnouncementFragmentDoc,
    "fragment EventCard on EventCard {\n  date\n  title\n  price\n  location\n  url\n  image {\n    ...StrapiImage\n  }\n}": types.EventCardFragmentDoc,
    "query GetAreas($locale: I18NLocaleCode!) {\n  areas(locale: $locale, sort: \"index:asc\") {\n    data {\n      attributes {\n        key\n        value\n      }\n    }\n  }\n}\n\nquery GetCategories($locale: I18NLocaleCode!) {\n  categories(locale: $locale, sort: \"index:asc\") {\n    data {\n      attributes {\n        key\n        value\n        icon {\n          ...StrapiImage\n        }\n        markerIcon {\n          ...StrapiImage\n        }\n      }\n    }\n  }\n}": types.GetAreasDocument,
    "query GetHomePage($locale: I18NLocaleCode!) {\n  home(locale: $locale) {\n    data {\n      attributes {\n        ...HomePage\n      }\n    }\n  }\n}\n\nfragment HomePage on Home {\n  heroTitle\n  eventCardsTitle\n  event_cards {\n    data {\n      attributes {\n        ...EventCard\n      }\n    }\n  }\n  promotionsTitle\n  banner1 {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      ...StrapiImage\n    }\n  }\n  announcementsTitle\n  announcements {\n    data {\n      attributes {\n        ...Announcement\n      }\n    }\n  }\n  banner2 {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      ...StrapiImage\n    }\n  }\n  mapTitle\n}": types.GetHomePageDocument,
    "fragment StrapiImage on UploadFileEntityResponse {\n  data {\n    attributes {\n      url\n      alternativeText\n    }\n  }\n}": types.StrapiImageFragmentDoc,
    "query GetHeader($locale: I18NLocaleCode!) {\n  header(locale: $locale) {\n    data {\n      attributes {\n        ...Header\n      }\n    }\n  }\n}\n\nquery GetFooter($locale: I18NLocaleCode!) {\n  footer(locale: $locale) {\n    data {\n      attributes {\n        ...Footer\n      }\n    }\n  }\n}\n\nfragment Header on Header {\n  Logo {\n    ...StrapiImage\n  }\n  Menu {\n    id\n    Text\n    Link\n  }\n}\n\nfragment Footer on Footer {\n  socialIcons {\n    icon {\n      ...StrapiImage\n    }\n    socialLink\n  }\n}": types.GetHeaderDocument,
    "query CompanyPromotionCard($slug: String!, $locale: I18NLocaleCode!) {\n  companyPromotionCards(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        ...CompanyCard\n      }\n    }\n  }\n}\n\nquery GetCompanyPromotionCardsByFilter($areaKey: String, $category: String, $locale: I18NLocaleCode!, $page: Int, $pageSize: Int) {\n  companyPromotionCards(\n    locale: $locale\n    filters: {area: {key: {eq: $areaKey}}, categories: {key: {eq: $category}}}\n    pagination: {page: $page, pageSize: $pageSize}\n  ) {\n    meta {\n      pagination {\n        total\n      }\n    }\n    data {\n      id\n      attributes {\n        ...CompanyCardPreview\n      }\n    }\n  }\n}\n\nquery GetPromotionCardsSlugs {\n  companyPromotionCards {\n    data {\n      attributes {\n        slug\n      }\n    }\n  }\n}\n\nfragment CompanyCard on CompanyPromotionCard {\n  title\n  discount\n  images {\n    data {\n      id\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  position {\n    lat\n    lng\n  }\n  description\n  youTubeVideoId\n  discountBanner {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      ...StrapiImage\n    }\n  }\n  touchText\n  touchLink\n  filters {\n    data {\n      id\n      attributes {\n        text\n        key\n      }\n    }\n  }\n  averageRating\n  totalComments\n  services {\n    data {\n      ...Service\n    }\n  }\n  slug\n  location\n  comments {\n    data {\n      ...Comment\n    }\n  }\n  area {\n    data {\n      attributes {\n        key\n        value\n      }\n    }\n  }\n  categories {\n    data {\n      attributes {\n        key\n      }\n    }\n  }\n}\n\nfragment CompanyCardPreview on CompanyPromotionCard {\n  title\n  discount\n  images {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  position {\n    lat\n    lng\n  }\n  averageRating\n  totalComments\n  slug\n  location\n  area {\n    data {\n      attributes {\n        key\n        value\n      }\n    }\n  }\n}\n\nfragment Service on ServiceEntity {\n  id\n  attributes {\n    text\n    icon {\n      ...StrapiImage\n    }\n  }\n}\n\nfragment Comment on CommentEntity {\n  id\n  attributes {\n    text\n    rating\n    createdAt\n  }\n}": types.CompanyPromotionCardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Announcement on Announcement {\n  title\n  text\n  image {\n    ...StrapiImage\n  }\n  socialLinks {\n    socialLink\n    icon {\n      ...StrapiImage\n    }\n  }\n}"): typeof import('./graphql').AnnouncementFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment EventCard on EventCard {\n  date\n  title\n  price\n  location\n  url\n  image {\n    ...StrapiImage\n  }\n}"): typeof import('./graphql').EventCardFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAreas($locale: I18NLocaleCode!) {\n  areas(locale: $locale, sort: \"index:asc\") {\n    data {\n      attributes {\n        key\n        value\n      }\n    }\n  }\n}\n\nquery GetCategories($locale: I18NLocaleCode!) {\n  categories(locale: $locale, sort: \"index:asc\") {\n    data {\n      attributes {\n        key\n        value\n        icon {\n          ...StrapiImage\n        }\n        markerIcon {\n          ...StrapiImage\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetAreasDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHomePage($locale: I18NLocaleCode!) {\n  home(locale: $locale) {\n    data {\n      attributes {\n        ...HomePage\n      }\n    }\n  }\n}\n\nfragment HomePage on Home {\n  heroTitle\n  eventCardsTitle\n  event_cards {\n    data {\n      attributes {\n        ...EventCard\n      }\n    }\n  }\n  promotionsTitle\n  banner1 {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      ...StrapiImage\n    }\n  }\n  announcementsTitle\n  announcements {\n    data {\n      attributes {\n        ...Announcement\n      }\n    }\n  }\n  banner2 {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      ...StrapiImage\n    }\n  }\n  mapTitle\n}"): typeof import('./graphql').GetHomePageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment StrapiImage on UploadFileEntityResponse {\n  data {\n    attributes {\n      url\n      alternativeText\n    }\n  }\n}"): typeof import('./graphql').StrapiImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHeader($locale: I18NLocaleCode!) {\n  header(locale: $locale) {\n    data {\n      attributes {\n        ...Header\n      }\n    }\n  }\n}\n\nquery GetFooter($locale: I18NLocaleCode!) {\n  footer(locale: $locale) {\n    data {\n      attributes {\n        ...Footer\n      }\n    }\n  }\n}\n\nfragment Header on Header {\n  Logo {\n    ...StrapiImage\n  }\n  Menu {\n    id\n    Text\n    Link\n  }\n}\n\nfragment Footer on Footer {\n  socialIcons {\n    icon {\n      ...StrapiImage\n    }\n    socialLink\n  }\n}"): typeof import('./graphql').GetHeaderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CompanyPromotionCard($slug: String!, $locale: I18NLocaleCode!) {\n  companyPromotionCards(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        ...CompanyCard\n      }\n    }\n  }\n}\n\nquery GetCompanyPromotionCardsByFilter($areaKey: String, $category: String, $locale: I18NLocaleCode!, $page: Int, $pageSize: Int) {\n  companyPromotionCards(\n    locale: $locale\n    filters: {area: {key: {eq: $areaKey}}, categories: {key: {eq: $category}}}\n    pagination: {page: $page, pageSize: $pageSize}\n  ) {\n    meta {\n      pagination {\n        total\n      }\n    }\n    data {\n      id\n      attributes {\n        ...CompanyCardPreview\n      }\n    }\n  }\n}\n\nquery GetPromotionCardsSlugs {\n  companyPromotionCards {\n    data {\n      attributes {\n        slug\n      }\n    }\n  }\n}\n\nfragment CompanyCard on CompanyPromotionCard {\n  title\n  discount\n  images {\n    data {\n      id\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  position {\n    lat\n    lng\n  }\n  description\n  youTubeVideoId\n  discountBanner {\n    title\n    buttonText\n    buttonLink\n    bannerImage {\n      ...StrapiImage\n    }\n  }\n  touchText\n  touchLink\n  filters {\n    data {\n      id\n      attributes {\n        text\n        key\n      }\n    }\n  }\n  averageRating\n  totalComments\n  services {\n    data {\n      ...Service\n    }\n  }\n  slug\n  location\n  comments {\n    data {\n      ...Comment\n    }\n  }\n  area {\n    data {\n      attributes {\n        key\n        value\n      }\n    }\n  }\n  categories {\n    data {\n      attributes {\n        key\n      }\n    }\n  }\n}\n\nfragment CompanyCardPreview on CompanyPromotionCard {\n  title\n  discount\n  images {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  position {\n    lat\n    lng\n  }\n  averageRating\n  totalComments\n  slug\n  location\n  area {\n    data {\n      attributes {\n        key\n        value\n      }\n    }\n  }\n}\n\nfragment Service on ServiceEntity {\n  id\n  attributes {\n    text\n    icon {\n      ...StrapiImage\n    }\n  }\n}\n\nfragment Comment on CommentEntity {\n  id\n  attributes {\n    text\n    rating\n    createdAt\n  }\n}"): typeof import('./graphql').CompanyPromotionCardDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
