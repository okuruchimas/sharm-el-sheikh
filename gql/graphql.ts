/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AnimationCompany = {
  __typename?: 'AnimationCompany';
  animators?: Maybe<AnimatorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  index: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type AnimationCompanyAnimatorsArgs = {
  filters?: InputMaybe<AnimatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnimationCompanyEntity = {
  __typename?: 'AnimationCompanyEntity';
  attributes?: Maybe<AnimationCompany>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AnimationCompanyEntityResponse = {
  __typename?: 'AnimationCompanyEntityResponse';
  data?: Maybe<AnimationCompanyEntity>;
};

export type AnimationCompanyEntityResponseCollection = {
  __typename?: 'AnimationCompanyEntityResponseCollection';
  data: Array<AnimationCompanyEntity>;
  meta: ResponseCollectionMeta;
};

export type AnimationCompanyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AnimationCompanyFiltersInput>>>;
  animators?: InputMaybe<AnimatorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AnimationCompanyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AnimationCompanyFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type AnimationCompanyInput = {
  animators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  index?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Animator = {
  __typename?: 'Animator';
  animation_company?: Maybe<AnimationCompanyEntityResponse>;
  averageRating: Scalars['Float']['output'];
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  entertainmentServices?: Maybe<Array<Maybe<ComponentComponentsEntertainmentService>>>;
  hotelName: Scalars['String']['output'];
  languages?: Maybe<LanguageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AnimatorRelationResponseCollection>;
  name: Scalars['String']['output'];
  profileImg: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  skills: Array<Maybe<ComponentHelpersStringArray>>;
  slug: Scalars['String']['output'];
  socialLinks: Array<Maybe<ComponentHelpersSocialMedia>>;
  totalComments: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workingAtClub: Scalars['Boolean']['output'];
};


export type AnimatorCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AnimatorEntertainmentServicesArgs = {
  filters?: InputMaybe<ComponentComponentsEntertainmentServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AnimatorLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AnimatorLocalizationsArgs = {
  filters?: InputMaybe<AnimatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AnimatorSkillsArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AnimatorSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnimatorEntity = {
  __typename?: 'AnimatorEntity';
  attributes?: Maybe<Animator>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AnimatorEntityResponse = {
  __typename?: 'AnimatorEntityResponse';
  data?: Maybe<AnimatorEntity>;
};

export type AnimatorEntityResponseCollection = {
  __typename?: 'AnimatorEntityResponseCollection';
  data: Array<AnimatorEntity>;
  meta: ResponseCollectionMeta;
};

export type AnimatorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AnimatorFiltersInput>>>;
  animation_company?: InputMaybe<AnimationCompanyFiltersInput>;
  averageRating?: InputMaybe<FloatFilterInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  entertainmentServices?: InputMaybe<ComponentComponentsEntertainmentServiceFiltersInput>;
  hotelName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  languages?: InputMaybe<LanguageFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AnimatorFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AnimatorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AnimatorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  skills?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workingAtClub?: InputMaybe<BooleanFilterInput>;
};

export type AnimatorInput = {
  animation_company?: InputMaybe<Scalars['ID']['input']>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  entertainmentServices?: InputMaybe<Array<InputMaybe<ComponentComponentsEntertainmentServiceInput>>>;
  hotelName?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImg?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  skills?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  totalComments?: InputMaybe<Scalars['Int']['input']>;
  workingAtClub?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnimatorRelationResponseCollection = {
  __typename?: 'AnimatorRelationResponseCollection';
  data: Array<AnimatorEntity>;
};

export type Announcement = {
  __typename?: 'Announcement';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AnnouncementRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialLinks?: Maybe<Array<Maybe<ComponentHelpersSocialMedia>>>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AnnouncementLocalizationsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AnnouncementSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnnouncementEntity = {
  __typename?: 'AnnouncementEntity';
  attributes?: Maybe<Announcement>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AnnouncementEntityResponse = {
  __typename?: 'AnnouncementEntityResponse';
  data?: Maybe<AnnouncementEntity>;
};

export type AnnouncementEntityResponseCollection = {
  __typename?: 'AnnouncementEntityResponseCollection';
  data: Array<AnnouncementEntity>;
  meta: ResponseCollectionMeta;
};

export type AnnouncementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AnnouncementFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AnnouncementFiltersInput>;
  not?: InputMaybe<AnnouncementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AnnouncementFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AnnouncementInput = {
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AnnouncementRelationResponseCollection = {
  __typename?: 'AnnouncementRelationResponseCollection';
  data: Array<AnnouncementEntity>;
};

export type Area = {
  __typename?: 'Area';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  index: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AreaRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type AreaLocalizationsArgs = {
  filters?: InputMaybe<AreaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AreaEntity = {
  __typename?: 'AreaEntity';
  attributes?: Maybe<Area>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AreaEntityResponse = {
  __typename?: 'AreaEntityResponse';
  data?: Maybe<AreaEntity>;
};

export type AreaEntityResponseCollection = {
  __typename?: 'AreaEntityResponseCollection';
  data: Array<AreaEntity>;
  meta: ResponseCollectionMeta;
};

export type AreaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AreaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AreaFiltersInput>;
  not?: InputMaybe<AreaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AreaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type AreaInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AreaRelationResponseCollection = {
  __typename?: 'AreaRelationResponseCollection';
  data: Array<AreaEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  company_promotion_cards?: Maybe<CompanyPromotionCardRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon: UploadFileEntityResponse;
  index: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  markerIcon: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type CategoryCompany_Promotion_CardsArgs = {
  filters?: InputMaybe<CompanyPromotionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  company_promotion_cards?: InputMaybe<CompanyPromotionCardFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CategoryInput = {
  company_promotion_cards?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  markerIcon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Comment = {
  __typename?: 'Comment';
  animators?: Maybe<AnimatorRelationResponseCollection>;
  company_promotion_cards?: Maybe<CompanyPromotionCardRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Float']['output'];
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommentAnimatorsArgs = {
  filters?: InputMaybe<AnimatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CommentCompany_Promotion_CardsArgs = {
  filters?: InputMaybe<CompanyPromotionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse';
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  animators?: InputMaybe<AnimatorFiltersInput>;
  company_promotion_cards?: InputMaybe<CompanyPromotionCardFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  animators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  company_promotion_cards?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CommentRelationResponseCollection = {
  __typename?: 'CommentRelationResponseCollection';
  data: Array<CommentEntity>;
};

export type CompanyPromotionCard = {
  __typename?: 'CompanyPromotionCard';
  area?: Maybe<AreaEntityResponse>;
  averageRating: Scalars['Float']['output'];
  categories?: Maybe<CategoryRelationResponseCollection>;
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['String']['output']>;
  discountBanner?: Maybe<ComponentComponentsBanner>;
  filters?: Maybe<FiltersRelationResponseCollection>;
  images: UploadFileRelationResponseCollection;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CompanyPromotionCardRelationResponseCollection>;
  location?: Maybe<Scalars['String']['output']>;
  position?: Maybe<ComponentHelpersPosition>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<ServiceRelationResponseCollection>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  totalComments: Scalars['Int']['output'];
  touchLink?: Maybe<Scalars['String']['output']>;
  touchText?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  youTubeVideoId?: Maybe<Scalars['String']['output']>;
};


export type CompanyPromotionCardCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CompanyPromotionCardCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CompanyPromotionCardFiltersArgs = {
  filters?: InputMaybe<FiltersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CompanyPromotionCardImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CompanyPromotionCardLocalizationsArgs = {
  filters?: InputMaybe<CompanyPromotionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CompanyPromotionCardServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CompanyPromotionCardEntity = {
  __typename?: 'CompanyPromotionCardEntity';
  attributes?: Maybe<CompanyPromotionCard>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CompanyPromotionCardEntityResponse = {
  __typename?: 'CompanyPromotionCardEntityResponse';
  data?: Maybe<CompanyPromotionCardEntity>;
};

export type CompanyPromotionCardEntityResponseCollection = {
  __typename?: 'CompanyPromotionCardEntityResponseCollection';
  data: Array<CompanyPromotionCardEntity>;
  meta: ResponseCollectionMeta;
};

export type CompanyPromotionCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CompanyPromotionCardFiltersInput>>>;
  area?: InputMaybe<AreaFiltersInput>;
  averageRating?: InputMaybe<FloatFilterInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  discount?: InputMaybe<StringFilterInput>;
  discountBanner?: InputMaybe<ComponentComponentsBannerFiltersInput>;
  filters?: InputMaybe<FiltersFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CompanyPromotionCardFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CompanyPromotionCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CompanyPromotionCardFiltersInput>>>;
  position?: InputMaybe<ComponentHelpersPositionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  services?: InputMaybe<ServiceFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  touchLink?: InputMaybe<StringFilterInput>;
  touchText?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  youTubeVideoId?: InputMaybe<StringFilterInput>;
};

export type CompanyPromotionCardInput = {
  area?: InputMaybe<Scalars['ID']['input']>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['String']['input']>;
  discountBanner?: InputMaybe<ComponentComponentsBannerInput>;
  filters?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<ComponentHelpersPositionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  totalComments?: InputMaybe<Scalars['Int']['input']>;
  touchLink?: InputMaybe<Scalars['String']['input']>;
  touchText?: InputMaybe<Scalars['String']['input']>;
  youTubeVideoId?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyPromotionCardRelationResponseCollection = {
  __typename?: 'CompanyPromotionCardRelationResponseCollection';
  data: Array<CompanyPromotionCardEntity>;
};

export type ComponentComponentsBanner = {
  __typename?: 'ComponentComponentsBanner';
  bannerImage: UploadFileEntityResponse;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ComponentComponentsBannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsBannerFiltersInput>>>;
  buttonLink?: InputMaybe<StringFilterInput>;
  buttonText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsBannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsBannerFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsBannerInput = {
  bannerImage?: InputMaybe<Scalars['ID']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsEntertainmentService = {
  __typename?: 'ComponentComponentsEntertainmentService';
  duration: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  place: Scalars['String']['output'];
  price: Scalars['String']['output'];
  serviceName: Scalars['String']['output'];
};

export type ComponentComponentsEntertainmentServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsEntertainmentServiceFiltersInput>>>;
  duration?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsEntertainmentServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsEntertainmentServiceFiltersInput>>>;
  place?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<StringFilterInput>;
  serviceName?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsEntertainmentServiceInput = {
  duration?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  serviceName?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderNavigationMenu = {
  __typename?: 'ComponentHeaderNavigationMenu';
  Link?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentHeaderNavigationMenuFiltersInput = {
  Link?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderNavigationMenuFiltersInput>>>;
  not?: InputMaybe<ComponentHeaderNavigationMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderNavigationMenuFiltersInput>>>;
};

export type ComponentHeaderNavigationMenuInput = {
  Link?: InputMaybe<Scalars['String']['input']>;
  Text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHelpersPosition = {
  __typename?: 'ComponentHelpersPosition';
  id: Scalars['ID']['output'];
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
};

export type ComponentHelpersPositionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHelpersPositionFiltersInput>>>;
  lat?: InputMaybe<StringFilterInput>;
  lng?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHelpersPositionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHelpersPositionFiltersInput>>>;
};

export type ComponentHelpersPositionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  lng?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHelpersSocialMedia = {
  __typename?: 'ComponentHelpersSocialMedia';
  icon: UploadFileEntityResponse;
  id: Scalars['ID']['output'];
  socialLink: Scalars['String']['output'];
};

export type ComponentHelpersSocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaFiltersInput>>>;
  not?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaFiltersInput>>>;
  socialLink?: InputMaybe<StringFilterInput>;
};

export type ComponentHelpersSocialMediaInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  socialLink?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHelpersStringArray = {
  __typename?: 'ComponentHelpersStringArray';
  id: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type ComponentHelpersStringArrayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayFiltersInput>>>;
  not?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentHelpersStringArrayInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCard = {
  __typename?: 'EventCard';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['String']['output'];
  image: UploadFileEntityResponse;
  index: Scalars['Int']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<EventCardRelationResponseCollection>;
  location: Scalars['String']['output'];
  price: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};


export type EventCardLocalizationsArgs = {
  filters?: InputMaybe<EventCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventCardEntity = {
  __typename?: 'EventCardEntity';
  attributes?: Maybe<EventCard>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EventCardEntityResponse = {
  __typename?: 'EventCardEntityResponse';
  data?: Maybe<EventCardEntity>;
};

export type EventCardEntityResponseCollection = {
  __typename?: 'EventCardEntityResponseCollection';
  data: Array<EventCardEntity>;
  meta: ResponseCollectionMeta;
};

export type EventCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventCardFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventCardFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventCardFiltersInput>>>;
  price?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type EventCardInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type EventCardRelationResponseCollection = {
  __typename?: 'EventCardRelationResponseCollection';
  data: Array<EventCardEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Filters = {
  __typename?: 'Filters';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FiltersEntity = {
  __typename?: 'FiltersEntity';
  attributes?: Maybe<Filters>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FiltersEntityResponse = {
  __typename?: 'FiltersEntityResponse';
  data?: Maybe<FiltersEntity>;
};

export type FiltersEntityResponseCollection = {
  __typename?: 'FiltersEntityResponseCollection';
  data: Array<FiltersEntity>;
  meta: ResponseCollectionMeta;
};

export type FiltersFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FiltersFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FiltersFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FiltersFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FiltersInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type FiltersRelationResponseCollection = {
  __typename?: 'FiltersRelationResponseCollection';
  data: Array<FiltersEntity>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialIcons?: Maybe<Array<Maybe<ComponentHelpersSocialMedia>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FooterLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type FooterSocialIconsArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialIcons?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type GenericMorph = AnimationCompany | Animator | Announcement | Area | Category | Comment | CompanyPromotionCard | ComponentComponentsBanner | ComponentComponentsEntertainmentService | ComponentHeaderNavigationMenu | ComponentHelpersPosition | ComponentHelpersSocialMedia | ComponentHelpersStringArray | EventCard | Filters | Footer | Header | Home | HotspotsPage | I18NLocale | Language | Service | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  Logo?: Maybe<UploadFileEntityResponse>;
  Menu?: Maybe<Array<Maybe<ComponentHeaderNavigationMenu>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HeaderRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderMenuArgs = {
  filters?: InputMaybe<ComponentHeaderNavigationMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeaderLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  Logo?: InputMaybe<Scalars['ID']['input']>;
  Menu?: InputMaybe<Array<InputMaybe<ComponentHeaderNavigationMenuInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  data: Array<HeaderEntity>;
};

export type Home = {
  __typename?: 'Home';
  announcements?: Maybe<AnnouncementRelationResponseCollection>;
  announcementsTitle: Scalars['String']['output'];
  banner1: ComponentComponentsBanner;
  banner2: ComponentComponentsBanner;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventCardsTitle: Scalars['String']['output'];
  event_cards?: Maybe<EventCardRelationResponseCollection>;
  filters?: Maybe<FiltersRelationResponseCollection>;
  heroTitle: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomeRelationResponseCollection>;
  mapTitle: Scalars['String']['output'];
  promotionsTitle: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomeAnnouncementsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeEvent_CardsArgs = {
  filters?: InputMaybe<EventCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeFiltersArgs = {
  filters?: InputMaybe<FiltersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  announcements?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  announcementsTitle?: InputMaybe<Scalars['String']['input']>;
  banner1?: InputMaybe<ComponentComponentsBannerInput>;
  banner2?: InputMaybe<ComponentComponentsBannerInput>;
  eventCardsTitle?: InputMaybe<Scalars['String']['input']>;
  event_cards?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  filters?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heroTitle?: InputMaybe<Scalars['String']['input']>;
  mapTitle?: InputMaybe<Scalars['String']['input']>;
  promotionsTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomeRelationResponseCollection = {
  __typename?: 'HomeRelationResponseCollection';
  data: Array<HomeEntity>;
};

export type HotspotsPage = {
  __typename?: 'HotspotsPage';
  bottomBanner?: Maybe<ComponentComponentsBanner>;
  clubsInfo: Scalars['String']['output'];
  clubsTitle: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventsTitle: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HotspotsPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HotspotsPageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HotspotsPageEntity = {
  __typename?: 'HotspotsPageEntity';
  attributes?: Maybe<HotspotsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HotspotsPageEntityResponse = {
  __typename?: 'HotspotsPageEntityResponse';
  data?: Maybe<HotspotsPageEntity>;
};

export type HotspotsPageInput = {
  bottomBanner?: InputMaybe<ComponentComponentsBannerInput>;
  clubsInfo?: InputMaybe<Scalars['String']['input']>;
  clubsTitle?: InputMaybe<Scalars['String']['input']>;
  eventsTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HotspotsPageRelationResponseCollection = {
  __typename?: 'HotspotsPageRelationResponseCollection';
  data: Array<HotspotsPageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Language = {
  __typename?: 'Language';
  animators?: Maybe<AnimatorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  flagIcon: UploadFileEntityResponse;
  index: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<LanguageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type LanguageAnimatorsArgs = {
  filters?: InputMaybe<AnimatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LanguageLocalizationsArgs = {
  filters?: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LanguageEntity = {
  __typename?: 'LanguageEntity';
  attributes?: Maybe<Language>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LanguageEntityResponse = {
  __typename?: 'LanguageEntityResponse';
  data?: Maybe<LanguageEntity>;
};

export type LanguageEntityResponseCollection = {
  __typename?: 'LanguageEntityResponseCollection';
  data: Array<LanguageEntity>;
  meta: ResponseCollectionMeta;
};

export type LanguageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LanguageFiltersInput>>>;
  animators?: InputMaybe<AnimatorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<LanguageFiltersInput>;
  not?: InputMaybe<LanguageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LanguageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type LanguageInput = {
  animators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  flagIcon?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageRelationResponseCollection = {
  __typename?: 'LanguageRelationResponseCollection';
  data: Array<LanguageEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAnimationCompany?: Maybe<AnimationCompanyEntityResponse>;
  createAnimator?: Maybe<AnimatorEntityResponse>;
  createAnimatorLocalization?: Maybe<AnimatorEntityResponse>;
  createAnnouncement?: Maybe<AnnouncementEntityResponse>;
  createAnnouncementLocalization?: Maybe<AnnouncementEntityResponse>;
  createArea?: Maybe<AreaEntityResponse>;
  createAreaLocalization?: Maybe<AreaEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createCompanyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  createCompanyPromotionCardLocalization?: Maybe<CompanyPromotionCardEntityResponse>;
  createEventCard?: Maybe<EventCardEntityResponse>;
  createEventCardLocalization?: Maybe<EventCardEntityResponse>;
  createFilters?: Maybe<FiltersEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHeaderLocalization?: Maybe<HeaderEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createHotspotsPageLocalization?: Maybe<HotspotsPageEntityResponse>;
  createLanguage?: Maybe<LanguageEntityResponse>;
  createLanguageLocalization?: Maybe<LanguageEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createServiceLocalization?: Maybe<ServiceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAnimationCompany?: Maybe<AnimationCompanyEntityResponse>;
  deleteAnimator?: Maybe<AnimatorEntityResponse>;
  deleteAnnouncement?: Maybe<AnnouncementEntityResponse>;
  deleteArea?: Maybe<AreaEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteCompanyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  deleteEventCard?: Maybe<EventCardEntityResponse>;
  deleteFilters?: Maybe<FiltersEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteHotspotsPage?: Maybe<HotspotsPageEntityResponse>;
  deleteLanguage?: Maybe<LanguageEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAnimationCompany?: Maybe<AnimationCompanyEntityResponse>;
  updateAnimator?: Maybe<AnimatorEntityResponse>;
  updateAnnouncement?: Maybe<AnnouncementEntityResponse>;
  updateArea?: Maybe<AreaEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateCompanyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  updateEventCard?: Maybe<EventCardEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFilters?: Maybe<FiltersEntityResponse>;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateHotspotsPage?: Maybe<HotspotsPageEntityResponse>;
  updateLanguage?: Maybe<LanguageEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAnimationCompanyArgs = {
  data: AnimationCompanyInput;
};


export type MutationCreateAnimatorArgs = {
  data: AnimatorInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateAnimatorLocalizationArgs = {
  data?: InputMaybe<AnimatorInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateAnnouncementArgs = {
  data: AnnouncementInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateAnnouncementLocalizationArgs = {
  data?: InputMaybe<AnnouncementInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateAreaArgs = {
  data: AreaInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateAreaLocalizationArgs = {
  data?: InputMaybe<AreaInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateCompanyPromotionCardArgs = {
  data: CompanyPromotionCardInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCompanyPromotionCardLocalizationArgs = {
  data?: InputMaybe<CompanyPromotionCardInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateEventCardArgs = {
  data: EventCardInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateEventCardLocalizationArgs = {
  data?: InputMaybe<EventCardInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateFiltersArgs = {
  data: FiltersInput;
};


export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHeaderLocalizationArgs = {
  data?: InputMaybe<HeaderInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomeLocalizationArgs = {
  data?: InputMaybe<HomeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHotspotsPageLocalizationArgs = {
  data?: InputMaybe<HotspotsPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLanguageArgs = {
  data: LanguageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLanguageLocalizationArgs = {
  data?: InputMaybe<LanguageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateServiceLocalizationArgs = {
  data?: InputMaybe<ServiceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAnimationCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAnimatorArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteAreaArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyPromotionCardArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteEventCardArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteFiltersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHotspotsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAnimationCompanyArgs = {
  data: AnimationCompanyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAnimatorArgs = {
  data: AnimatorInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateAnnouncementArgs = {
  data: AnnouncementInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateAreaArgs = {
  data: AreaInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCompanyPromotionCardArgs = {
  data: CompanyPromotionCardInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateEventCardArgs = {
  data: EventCardInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFiltersArgs = {
  data: FiltersInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHotspotsPageArgs = {
  data: HotspotsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateLanguageArgs = {
  data: LanguageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  animationCompanies?: Maybe<AnimationCompanyEntityResponseCollection>;
  animationCompany?: Maybe<AnimationCompanyEntityResponse>;
  animator?: Maybe<AnimatorEntityResponse>;
  animators?: Maybe<AnimatorEntityResponseCollection>;
  announcement?: Maybe<AnnouncementEntityResponse>;
  announcements?: Maybe<AnnouncementEntityResponseCollection>;
  area?: Maybe<AreaEntityResponse>;
  areas?: Maybe<AreaEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  companyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  companyPromotionCards?: Maybe<CompanyPromotionCardEntityResponseCollection>;
  eventCard?: Maybe<EventCardEntityResponse>;
  eventCards?: Maybe<EventCardEntityResponseCollection>;
  filteres?: Maybe<FiltersEntityResponseCollection>;
  filters?: Maybe<FiltersEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  hotspotsPage?: Maybe<HotspotsPageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  language?: Maybe<LanguageEntityResponse>;
  languages?: Maybe<LanguageEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAnimationCompaniesArgs = {
  filters?: InputMaybe<AnimationCompanyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAnimationCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAnimatorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryAnimatorsArgs = {
  filters?: InputMaybe<AnimatorFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAnnouncementArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryAnnouncementsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAreaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryAreasArgs = {
  filters?: InputMaybe<AreaFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompanyPromotionCardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryCompanyPromotionCardsArgs = {
  filters?: InputMaybe<CompanyPromotionCardFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEventCardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryEventCardsArgs = {
  filters?: InputMaybe<EventCardFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFilteresArgs = {
  filters?: InputMaybe<FiltersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiltersArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHotspotsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  company_promotion_card?: Maybe<CompanyPromotionCardEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ServiceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceLocalizationsArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  company_promotion_card?: InputMaybe<CompanyPromotionCardFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ServiceFiltersInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  company_promotion_card?: InputMaybe<Scalars['ID']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  data: Array<ServiceEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetAnimatorBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetAnimatorBySlugQuery = { __typename?: 'Query', animators?: { __typename?: 'AnimatorEntityResponseCollection', data: Array<{ __typename?: 'AnimatorEntity', attributes?: { __typename?: 'Animator', slug: string, name: string, description: string, workingAtClub: boolean, hotelName: string, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, animation_company?: { __typename?: 'AnimationCompanyEntityResponse', data?: { __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', value: string } | null } | null } | null, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, skills: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null>, entertainmentServices?: Array<{ __typename?: 'ComponentComponentsEntertainmentService', serviceName: string, place: string, duration: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null } | null }> } | null };

export type GetAnimatorsByFilterQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  companyKey?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAnimatorsByFilterQuery = { __typename?: 'Query', animators?: { __typename?: 'AnimatorEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'AnimatorEntity', id?: string | null, attributes?: { __typename?: 'Animator', slug: string, name: string, hotelName: string, averageRating: number, totalComments: number, workingAtClub: boolean, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, animation_company?: { __typename?: 'AnimationCompanyEntityResponse', data?: { __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', value: string } | null } | null } | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type GetAnimatorsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimatorsSlugsQuery = { __typename?: 'Query', animators?: { __typename?: 'AnimatorEntityResponseCollection', data: Array<{ __typename?: 'AnimatorEntity', attributes?: { __typename?: 'Animator', slug: string } | null }> } | null };

export type AnimatorPreviewFragment = { __typename?: 'Animator', slug: string, name: string, hotelName: string, averageRating: number, totalComments: number, workingAtClub: boolean, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, animation_company?: { __typename?: 'AnimationCompanyEntityResponse', data?: { __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', value: string } | null } | null } | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type AnnouncementFragment = { __typename?: 'Announcement', title?: string | null, text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null };

export type GetEventCardsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetEventCardsQuery = { __typename?: 'Query', eventCards?: { __typename?: 'EventCardEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'EventCardEntity', attributes?: { __typename?: 'EventCard', date: string, title: string, price: string, location: string, url: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type EventCardFragment = { __typename?: 'EventCard', date: string, title: string, price: string, location: string, url: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } };

export type GetAreasQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetAreasQuery = { __typename?: 'Query', areas?: { __typename?: 'AreaEntityResponseCollection', data: Array<{ __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null }> } | null };

export type GetCategoriesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string, value: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, markerIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type GetAnimationCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimationCompaniesQuery = { __typename?: 'Query', animationCompanies?: { __typename?: 'AnimationCompanyEntityResponseCollection', data: Array<{ __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', key: string, value: string } | null }> } | null };

export type GetHomePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetHomePageQuery = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', heroTitle: string, eventCardsTitle: string, promotionsTitle: string, announcementsTitle: string, mapTitle: string, event_cards?: { __typename?: 'EventCardRelationResponseCollection', data: Array<{ __typename?: 'EventCardEntity', attributes?: { __typename?: 'EventCard', date: string, title: string, price: string, location: string, url: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, banner1: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, announcements?: { __typename?: 'AnnouncementRelationResponseCollection', data: Array<{ __typename?: 'AnnouncementEntity', attributes?: { __typename?: 'Announcement', title?: string | null, text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null } | null }> } | null, banner2: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } } | null } | null } | null };

export type HomePageFragment = { __typename?: 'Home', heroTitle: string, eventCardsTitle: string, promotionsTitle: string, announcementsTitle: string, mapTitle: string, event_cards?: { __typename?: 'EventCardRelationResponseCollection', data: Array<{ __typename?: 'EventCardEntity', attributes?: { __typename?: 'EventCard', date: string, title: string, price: string, location: string, url: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, banner1: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, announcements?: { __typename?: 'AnnouncementRelationResponseCollection', data: Array<{ __typename?: 'AnnouncementEntity', attributes?: { __typename?: 'Announcement', title?: string | null, text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null } | null }> } | null, banner2: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } };

export type GetHotspotsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetHotspotsPageQuery = { __typename?: 'Query', hotspotsPage?: { __typename?: 'HotspotsPageEntityResponse', data?: { __typename?: 'HotspotsPageEntity', attributes?: { __typename?: 'HotspotsPage', eventsTitle: string, clubsTitle: string, clubsInfo: string, bottomBanner?: { __typename?: 'ComponentComponentsBanner', title: string, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null } | null } | null } | null };

export type HotspotsPageFragment = { __typename?: 'HotspotsPage', eventsTitle: string, clubsTitle: string, clubsInfo: string, bottomBanner?: { __typename?: 'ComponentComponentsBanner', title: string, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null };

export type StrapiImageFragment = { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null };

export type GetHeaderQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetHeaderQuery = { __typename?: 'Query', header?: { __typename?: 'HeaderEntityResponse', data?: { __typename?: 'HeaderEntity', attributes?: { __typename?: 'Header', Logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, Menu?: Array<{ __typename?: 'ComponentHeaderNavigationMenu', id: string, Text?: string | null, Link?: string | null } | null> | null } | null } | null } | null };

export type GetFooterQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetFooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', socialIcons?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null } | null } | null } | null };

export type HeaderFragment = { __typename?: 'Header', Logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, Menu?: Array<{ __typename?: 'ComponentHeaderNavigationMenu', id: string, Text?: string | null, Link?: string | null } | null> | null };

export type FooterFragment = { __typename?: 'Footer', socialIcons?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null };

export type CompanyPromotionCardQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type CompanyPromotionCardQuery = { __typename?: 'Query', companyPromotionCards?: { __typename?: 'CompanyPromotionCardEntityResponseCollection', data: Array<{ __typename?: 'CompanyPromotionCardEntity', id?: string | null, attributes?: { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, description?: string | null, youTubeVideoId?: string | null, touchText?: string | null, touchLink?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, discountBanner?: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null, filters?: { __typename?: 'FiltersRelationResponseCollection', data: Array<{ __typename?: 'FiltersEntity', id?: string | null, attributes?: { __typename?: 'Filters', text?: string | null, key?: string | null } | null }> } | null, services?: { __typename?: 'ServiceRelationResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string } | null }> } | null } | null }> } | null };

export type GetCompanyPromotionCardsByFilterQueryVariables = Exact<{
  areaKey?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCompanyPromotionCardsByFilterQuery = { __typename?: 'Query', companyPromotionCards?: { __typename?: 'CompanyPromotionCardEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'CompanyPromotionCardEntity', id?: string | null, attributes?: { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null } | null }> } | null };

export type GetPromotionCardsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPromotionCardsSlugsQuery = { __typename?: 'Query', companyPromotionCards?: { __typename?: 'CompanyPromotionCardEntityResponseCollection', data: Array<{ __typename?: 'CompanyPromotionCardEntity', attributes?: { __typename?: 'CompanyPromotionCard', slug: string } | null }> } | null };

export type CompanyCardFragment = { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, description?: string | null, youTubeVideoId?: string | null, touchText?: string | null, touchLink?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, discountBanner?: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null, filters?: { __typename?: 'FiltersRelationResponseCollection', data: Array<{ __typename?: 'FiltersEntity', id?: string | null, attributes?: { __typename?: 'Filters', text?: string | null, key?: string | null } | null }> } | null, services?: { __typename?: 'ServiceRelationResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string } | null }> } | null };

export type CompanyCardPreviewFragment = { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null };

export type ServiceFragment = { __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null };

export type CommentFragment = { __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const StrapiImageFragmentDoc = new TypedDocumentString(`
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}
    `, {"fragmentName":"StrapiImage"}) as unknown as TypedDocumentString<StrapiImageFragment, unknown>;
export const AnimatorPreviewFragmentDoc = new TypedDocumentString(`
    fragment AnimatorPreview on Animator {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  animation_company {
    data {
      attributes {
        value
      }
    }
  }
  hotelName
  languages {
    data {
      attributes {
        value
        flagIcon {
          ...StrapiImage
        }
      }
    }
  }
  averageRating
  totalComments
  workingAtClub
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"AnimatorPreview"}) as unknown as TypedDocumentString<AnimatorPreviewFragment, unknown>;
export const EventCardFragmentDoc = new TypedDocumentString(`
    fragment EventCard on EventCard {
  date
  title
  price
  location
  url
  image {
    ...StrapiImage
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"EventCard"}) as unknown as TypedDocumentString<EventCardFragment, unknown>;
export const AnnouncementFragmentDoc = new TypedDocumentString(`
    fragment Announcement on Announcement {
  title
  text
  image {
    ...StrapiImage
  }
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"Announcement"}) as unknown as TypedDocumentString<AnnouncementFragment, unknown>;
export const HomePageFragmentDoc = new TypedDocumentString(`
    fragment HomePage on Home {
  heroTitle
  eventCardsTitle
  event_cards {
    data {
      attributes {
        ...EventCard
      }
    }
  }
  promotionsTitle
  banner1 {
    title
    buttonText
    buttonLink
    bannerImage {
      ...StrapiImage
    }
  }
  announcementsTitle
  announcements {
    data {
      attributes {
        ...Announcement
      }
    }
  }
  banner2 {
    title
    buttonText
    buttonLink
    bannerImage {
      ...StrapiImage
    }
  }
  mapTitle
}
    fragment Announcement on Announcement {
  title
  text
  image {
    ...StrapiImage
  }
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
}
fragment EventCard on EventCard {
  date
  title
  price
  location
  url
  image {
    ...StrapiImage
  }
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"HomePage"}) as unknown as TypedDocumentString<HomePageFragment, unknown>;
export const HotspotsPageFragmentDoc = new TypedDocumentString(`
    fragment HotspotsPage on HotspotsPage {
  eventsTitle
  clubsTitle
  clubsInfo
  bottomBanner {
    title
    subtitle
    bannerImage {
      ...StrapiImage
    }
    buttonText
    buttonLink
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"HotspotsPage"}) as unknown as TypedDocumentString<HotspotsPageFragment, unknown>;
export const HeaderFragmentDoc = new TypedDocumentString(`
    fragment Header on Header {
  Logo {
    ...StrapiImage
  }
  Menu {
    id
    Text
    Link
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"Header"}) as unknown as TypedDocumentString<HeaderFragment, unknown>;
export const FooterFragmentDoc = new TypedDocumentString(`
    fragment Footer on Footer {
  socialIcons {
    icon {
      ...StrapiImage
    }
    socialLink
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"Footer"}) as unknown as TypedDocumentString<FooterFragment, unknown>;
export const ServiceFragmentDoc = new TypedDocumentString(`
    fragment Service on ServiceEntity {
  id
  attributes {
    text
    icon {
      ...StrapiImage
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"Service"}) as unknown as TypedDocumentString<ServiceFragment, unknown>;
export const CommentFragmentDoc = new TypedDocumentString(`
    fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}
    `, {"fragmentName":"Comment"}) as unknown as TypedDocumentString<CommentFragment, unknown>;
export const CompanyCardFragmentDoc = new TypedDocumentString(`
    fragment CompanyCard on CompanyPromotionCard {
  title
  discount
  images {
    data {
      id
      attributes {
        url
        alternativeText
      }
    }
  }
  position {
    lat
    lng
  }
  description
  youTubeVideoId
  discountBanner {
    title
    buttonText
    buttonLink
    bannerImage {
      ...StrapiImage
    }
  }
  touchText
  touchLink
  filters {
    data {
      id
      attributes {
        text
        key
      }
    }
  }
  averageRating
  totalComments
  services {
    data {
      ...Service
    }
  }
  slug
  location
  comments {
    data {
      ...Comment
    }
  }
  area {
    data {
      attributes {
        key
        value
      }
    }
  }
  categories {
    data {
      attributes {
        key
      }
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}
fragment Service on ServiceEntity {
  id
  attributes {
    text
    icon {
      ...StrapiImage
    }
  }
}
fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}`, {"fragmentName":"CompanyCard"}) as unknown as TypedDocumentString<CompanyCardFragment, unknown>;
export const CompanyCardPreviewFragmentDoc = new TypedDocumentString(`
    fragment CompanyCardPreview on CompanyPromotionCard {
  title
  discount
  images {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
  position {
    lat
    lng
  }
  averageRating
  totalComments
  slug
  location
  area {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `, {"fragmentName":"CompanyCardPreview"}) as unknown as TypedDocumentString<CompanyCardPreviewFragment, unknown>;
export const GetAnimatorBySlugDocument = new TypedDocumentString(`
    query GetAnimatorBySlug($slug: String!, $locale: I18NLocaleCode!) {
  animators(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        slug
        name
        profileImg {
          ...StrapiImage
        }
        description
        workingAtClub
        hotelName
        animation_company {
          data {
            attributes {
              value
            }
          }
        }
        socialLinks {
          socialLink
          icon {
            ...StrapiImage
          }
        }
        skills {
          value
        }
        entertainmentServices {
          serviceName
          image {
            ...StrapiImage
          }
          place
          place
          duration
        }
        languages {
          data {
            attributes {
              key
              value
              flagIcon {
                ...StrapiImage
              }
            }
          }
        }
        comments {
          data {
            ...Comment
          }
        }
        averageRating
        totalComments
      }
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}
fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}`) as unknown as TypedDocumentString<GetAnimatorBySlugQuery, GetAnimatorBySlugQueryVariables>;
export const GetAnimatorsByFilterDocument = new TypedDocumentString(`
    query GetAnimatorsByFilter($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $sort: [String], $companyKey: String) {
  animators(
    locale: $locale
    sort: $sort
    pagination: {page: $page, pageSize: $pageSize}
    filters: {animation_company: {key: {eq: $companyKey}}}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        ...AnimatorPreview
      }
    }
  }
}
    fragment AnimatorPreview on Animator {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  animation_company {
    data {
      attributes {
        value
      }
    }
  }
  hotelName
  languages {
    data {
      attributes {
        value
        flagIcon {
          ...StrapiImage
        }
      }
    }
  }
  averageRating
  totalComments
  workingAtClub
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetAnimatorsByFilterQuery, GetAnimatorsByFilterQueryVariables>;
export const GetAnimatorsSlugsDocument = new TypedDocumentString(`
    query GetAnimatorsSlugs {
  animators {
    data {
      attributes {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetAnimatorsSlugsQuery, GetAnimatorsSlugsQueryVariables>;
export const GetEventCardsDocument = new TypedDocumentString(`
    query GetEventCards($locale: I18NLocaleCode!, $page: Int, $pageSize: Int) {
  eventCards(
    locale: $locale
    sort: "index:asc"
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      attributes {
        ...EventCard
      }
    }
  }
}
    fragment EventCard on EventCard {
  date
  title
  price
  location
  url
  image {
    ...StrapiImage
  }
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetEventCardsQuery, GetEventCardsQueryVariables>;
export const GetAreasDocument = new TypedDocumentString(`
    query GetAreas($locale: I18NLocaleCode!) {
  areas(locale: $locale, sort: "index:desc") {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetAreasQuery, GetAreasQueryVariables>;
export const GetCategoriesDocument = new TypedDocumentString(`
    query GetCategories($locale: I18NLocaleCode!) {
  categories(locale: $locale, sort: "index:desc") {
    data {
      attributes {
        key
        value
        icon {
          ...StrapiImage
        }
        markerIcon {
          ...StrapiImage
        }
      }
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetAnimationCompaniesDocument = new TypedDocumentString(`
    query GetAnimationCompanies {
  animationCompanies(sort: "index:desc") {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetAnimationCompaniesQuery, GetAnimationCompaniesQueryVariables>;
export const GetHomePageDocument = new TypedDocumentString(`
    query GetHomePage($locale: I18NLocaleCode!) {
  home(locale: $locale) {
    data {
      attributes {
        ...HomePage
      }
    }
  }
}
    fragment Announcement on Announcement {
  title
  text
  image {
    ...StrapiImage
  }
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
}
fragment EventCard on EventCard {
  date
  title
  price
  location
  url
  image {
    ...StrapiImage
  }
}
fragment HomePage on Home {
  heroTitle
  eventCardsTitle
  event_cards {
    data {
      attributes {
        ...EventCard
      }
    }
  }
  promotionsTitle
  banner1 {
    title
    buttonText
    buttonLink
    bannerImage {
      ...StrapiImage
    }
  }
  announcementsTitle
  announcements {
    data {
      attributes {
        ...Announcement
      }
    }
  }
  banner2 {
    title
    buttonText
    buttonLink
    bannerImage {
      ...StrapiImage
    }
  }
  mapTitle
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetHotspotsPageDocument = new TypedDocumentString(`
    query GetHotspotsPage($locale: I18NLocaleCode!) {
  hotspotsPage(locale: $locale) {
    data {
      attributes {
        ...HotspotsPage
      }
    }
  }
}
    fragment HotspotsPage on HotspotsPage {
  eventsTitle
  clubsTitle
  clubsInfo
  bottomBanner {
    title
    subtitle
    bannerImage {
      ...StrapiImage
    }
    buttonText
    buttonLink
  }
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetHotspotsPageQuery, GetHotspotsPageQueryVariables>;
export const GetHeaderDocument = new TypedDocumentString(`
    query GetHeader($locale: I18NLocaleCode!) {
  header(locale: $locale) {
    data {
      attributes {
        ...Header
      }
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}
fragment Header on Header {
  Logo {
    ...StrapiImage
  }
  Menu {
    id
    Text
    Link
  }
}`) as unknown as TypedDocumentString<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetFooterDocument = new TypedDocumentString(`
    query GetFooter($locale: I18NLocaleCode!) {
  footer(locale: $locale) {
    data {
      attributes {
        ...Footer
      }
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}
fragment Footer on Footer {
  socialIcons {
    icon {
      ...StrapiImage
    }
    socialLink
  }
}`) as unknown as TypedDocumentString<GetFooterQuery, GetFooterQueryVariables>;
export const CompanyPromotionCardDocument = new TypedDocumentString(`
    query CompanyPromotionCard($slug: String!, $locale: I18NLocaleCode!) {
  companyPromotionCards(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      id
      attributes {
        ...CompanyCard
      }
    }
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}
fragment CompanyCard on CompanyPromotionCard {
  title
  discount
  images {
    data {
      id
      attributes {
        url
        alternativeText
      }
    }
  }
  position {
    lat
    lng
  }
  description
  youTubeVideoId
  discountBanner {
    title
    buttonText
    buttonLink
    bannerImage {
      ...StrapiImage
    }
  }
  touchText
  touchLink
  filters {
    data {
      id
      attributes {
        text
        key
      }
    }
  }
  averageRating
  totalComments
  services {
    data {
      ...Service
    }
  }
  slug
  location
  comments {
    data {
      ...Comment
    }
  }
  area {
    data {
      attributes {
        key
        value
      }
    }
  }
  categories {
    data {
      attributes {
        key
      }
    }
  }
}
fragment Service on ServiceEntity {
  id
  attributes {
    text
    icon {
      ...StrapiImage
    }
  }
}
fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}`) as unknown as TypedDocumentString<CompanyPromotionCardQuery, CompanyPromotionCardQueryVariables>;
export const GetCompanyPromotionCardsByFilterDocument = new TypedDocumentString(`
    query GetCompanyPromotionCardsByFilter($areaKey: String, $category: String, $locale: I18NLocaleCode!, $page: Int, $pageSize: Int) {
  companyPromotionCards(
    locale: $locale
    filters: {area: {key: {eq: $areaKey}}, categories: {key: {eq: $category}}}
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        ...CompanyCardPreview
      }
    }
  }
}
    fragment CompanyCardPreview on CompanyPromotionCard {
  title
  discount
  images {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
  position {
    lat
    lng
  }
  averageRating
  totalComments
  slug
  location
  area {
    data {
      attributes {
        key
        value
      }
    }
  }
}`) as unknown as TypedDocumentString<GetCompanyPromotionCardsByFilterQuery, GetCompanyPromotionCardsByFilterQueryVariables>;
export const GetPromotionCardsSlugsDocument = new TypedDocumentString(`
    query GetPromotionCardsSlugs {
  companyPromotionCards {
    data {
      attributes {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetPromotionCardsSlugsQuery, GetPromotionCardsSlugsQueryVariables>;