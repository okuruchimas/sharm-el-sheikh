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
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: any; output: any; }
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

export type CarClass = {
  __typename?: 'CarClass';
  circleIcon?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon: UploadFileEntityResponse;
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CarClassRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  taxi_drivers?: Maybe<TaxiDriverRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type CarClassLocalizationsArgs = {
  filters?: InputMaybe<CarClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CarClassTaxi_DriversArgs = {
  filters?: InputMaybe<TaxiDriverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CarClassEntity = {
  __typename?: 'CarClassEntity';
  attributes?: Maybe<CarClass>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CarClassEntityResponse = {
  __typename?: 'CarClassEntityResponse';
  data?: Maybe<CarClassEntity>;
};

export type CarClassEntityResponseCollection = {
  __typename?: 'CarClassEntityResponseCollection';
  data: Array<CarClassEntity>;
  meta: ResponseCollectionMeta;
};

export type CarClassFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CarClassFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CarClassFiltersInput>;
  not?: InputMaybe<CarClassFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CarClassFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  taxi_drivers?: InputMaybe<TaxiDriverFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CarClassInput = {
  circleIcon?: InputMaybe<Scalars['ID']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  taxi_drivers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CarClassRelationResponseCollection = {
  __typename?: 'CarClassRelationResponseCollection';
  data: Array<CarClassEntity>;
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

export type Club = {
  __typename?: 'Club';
  about: Scalars['String']['output'];
  averageRating: Scalars['Float']['output'];
  clubName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  food: Scalars['String']['output'];
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ClubRelationResponseCollection>;
  location: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  services?: Maybe<ServiceRelationResponseCollection>;
  slug: Scalars['String']['output'];
  socialLinks: Array<Maybe<ComponentHelpersSocialMedia>>;
  totalComments: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workingDays: Array<Maybe<ComponentHelpersWeekDay>>;
  workingTime: ComponentHelpersTimeSlot;
};


export type ClubLocalizationsArgs = {
  filters?: InputMaybe<ClubFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClubServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClubSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClubWorkingDaysArgs = {
  filters?: InputMaybe<ComponentHelpersWeekDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClubEntity = {
  __typename?: 'ClubEntity';
  attributes?: Maybe<Club>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ClubEntityResponse = {
  __typename?: 'ClubEntityResponse';
  data?: Maybe<ClubEntity>;
};

export type ClubEntityResponseCollection = {
  __typename?: 'ClubEntityResponseCollection';
  data: Array<ClubEntity>;
  meta: ResponseCollectionMeta;
};

export type ClubFiltersInput = {
  about?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ClubFiltersInput>>>;
  averageRating?: InputMaybe<FloatFilterInput>;
  clubName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  food?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ClubFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClubFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClubFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  services?: InputMaybe<ServiceFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workingDays?: InputMaybe<ComponentHelpersWeekDayFiltersInput>;
  workingTime?: InputMaybe<ComponentHelpersTimeSlotFiltersInput>;
};

export type ClubInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  clubName?: InputMaybe<Scalars['String']['input']>;
  food?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  services?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  totalComments?: InputMaybe<Scalars['Int']['input']>;
  workingDays?: InputMaybe<Array<InputMaybe<ComponentHelpersWeekDayInput>>>;
  workingTime?: InputMaybe<ComponentHelpersTimeSlotInput>;
};

export type ClubRelationResponseCollection = {
  __typename?: 'ClubRelationResponseCollection';
  data: Array<ClubEntity>;
};

export type Comment = {
  __typename?: 'Comment';
  animators?: Maybe<AnimatorRelationResponseCollection>;
  company_promotion_cards?: Maybe<CompanyPromotionCardRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  photographers?: Maybe<PhotographerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Float']['output'];
  taxi_drivers?: Maybe<TaxiDriverRelationResponseCollection>;
  text: Scalars['String']['output'];
  tour_guides?: Maybe<TourGuideRelationResponseCollection>;
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


export type CommentPhotographersArgs = {
  filters?: InputMaybe<PhotographerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CommentTaxi_DriversArgs = {
  filters?: InputMaybe<TaxiDriverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CommentTour_GuidesArgs = {
  filters?: InputMaybe<TourGuideFiltersInput>;
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
  photographers?: InputMaybe<PhotographerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  taxi_drivers?: InputMaybe<TaxiDriverFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  tour_guides?: InputMaybe<TourGuideFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  animators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  company_promotion_cards?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  photographers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  taxi_drivers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  tour_guides?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
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

export type ComponentComponentsHomeNavMenu = {
  __typename?: 'ComponentComponentsHomeNavMenu';
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  link: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type ComponentComponentsHomeNavMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsHomeNavMenuFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsHomeNavMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsHomeNavMenuFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsHomeNavMenuInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentComponentsWorkSchedule = {
  __typename?: 'ComponentComponentsWorkSchedule';
  dayOfWeek: Enum_Componentcomponentsworkschedule_Dayofweek;
  id: Scalars['ID']['output'];
  timeSlots: Array<Maybe<ComponentHelpersTimeSlot>>;
};


export type ComponentComponentsWorkScheduleTimeSlotsArgs = {
  filters?: InputMaybe<ComponentHelpersTimeSlotFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsWorkScheduleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentComponentsWorkScheduleFiltersInput>>>;
  dayOfWeek?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsWorkScheduleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentComponentsWorkScheduleFiltersInput>>>;
  timeSlots?: InputMaybe<ComponentHelpersTimeSlotFiltersInput>;
};

export type ComponentComponentsWorkScheduleInput = {
  dayOfWeek?: InputMaybe<Enum_Componentcomponentsworkschedule_Dayofweek>;
  id?: InputMaybe<Scalars['ID']['input']>;
  timeSlots?: InputMaybe<Array<InputMaybe<ComponentHelpersTimeSlotInput>>>;
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

export type ComponentHelpersTimeSlot = {
  __typename?: 'ComponentHelpersTimeSlot';
  endTime: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  startTime: Scalars['Time']['output'];
};

export type ComponentHelpersTimeSlotFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHelpersTimeSlotFiltersInput>>>;
  endTime?: InputMaybe<TimeFilterInput>;
  not?: InputMaybe<ComponentHelpersTimeSlotFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHelpersTimeSlotFiltersInput>>>;
  startTime?: InputMaybe<TimeFilterInput>;
};

export type ComponentHelpersTimeSlotInput = {
  endTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

export type ComponentHelpersWeekDay = {
  __typename?: 'ComponentHelpersWeekDay';
  day: Enum_Componenthelpersweekday_Day;
  id: Scalars['ID']['output'];
};

export type ComponentHelpersWeekDayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHelpersWeekDayFiltersInput>>>;
  day?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHelpersWeekDayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHelpersWeekDayFiltersInput>>>;
};

export type ComponentHelpersWeekDayInput = {
  day?: InputMaybe<Enum_Componenthelpersweekday_Day>;
  id?: InputMaybe<Scalars['ID']['input']>;
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

export enum Enum_Componentcomponentsworkschedule_Dayofweek {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export enum Enum_Componenthelpersweekday_Day {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export enum Enum_Supportservice_Category {
  AssistanceServices = 'assistance_services',
  Embassies = 'embassies',
  EmergencyServices = 'emergency_services'
}

export type EventCard = {
  __typename?: 'EventCard';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  image: UploadFileEntityResponse;
  index: Scalars['Int']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<EventCardRelationResponseCollection>;
  location: Scalars['String']['output'];
  mapUrl?: Maybe<Scalars['String']['output']>;
  price: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialLinks?: Maybe<Array<Maybe<ComponentHelpersSocialMedia>>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventCardLocalizationsArgs = {
  filters?: InputMaybe<EventCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventCardSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventCardFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  mapUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventCardFiltersInput>>>;
  price?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventCardInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  mapUrl?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
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

export type GenericMorph = AnimationCompany | Animator | Announcement | Area | CarClass | Category | Club | Comment | CompanyPromotionCard | ComponentComponentsBanner | ComponentComponentsEntertainmentService | ComponentComponentsHomeNavMenu | ComponentComponentsWorkSchedule | ComponentHeaderNavigationMenu | ComponentHelpersPosition | ComponentHelpersSocialMedia | ComponentHelpersStringArray | ComponentHelpersTimeSlot | ComponentHelpersWeekDay | EventCard | Footer | Header | Home | HotspotsPage | I18NLocale | Language | Location | Medication | MedicationCategory | PharmaciesPage | Photographer | PhotographyStyle | Service | SupportService | TaxiDriver | TaxiService | TourGuide | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

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
  heroTitle: Scalars['String']['output'];
  homeNavMenu?: Maybe<Array<Maybe<ComponentComponentsHomeNavMenu>>>;
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


export type HomeHomeNavMenuArgs = {
  filters?: InputMaybe<ComponentComponentsHomeNavMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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
  heroTitle?: InputMaybe<Scalars['String']['input']>;
  homeNavMenu?: InputMaybe<Array<InputMaybe<ComponentComponentsHomeNavMenuInput>>>;
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
  mapTitle?: Maybe<Scalars['String']['output']>;
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
  mapTitle?: InputMaybe<Scalars['String']['input']>;
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
  photographers?: Maybe<PhotographerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  taxi_drivers?: Maybe<TaxiDriverRelationResponseCollection>;
  tour_guides?: Maybe<TourGuideRelationResponseCollection>;
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


export type LanguagePhotographersArgs = {
  filters?: InputMaybe<PhotographerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LanguageTaxi_DriversArgs = {
  filters?: InputMaybe<TaxiDriverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LanguageTour_GuidesArgs = {
  filters?: InputMaybe<TourGuideFiltersInput>;
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
  photographers?: InputMaybe<PhotographerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  taxi_drivers?: InputMaybe<TaxiDriverFiltersInput>;
  tour_guides?: InputMaybe<TourGuideFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type LanguageInput = {
  animators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  flagIcon?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  photographers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  taxi_drivers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tour_guides?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageRelationResponseCollection = {
  __typename?: 'LanguageRelationResponseCollection';
  data: Array<LanguageEntity>;
};

export type Location = {
  __typename?: 'Location';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<LocationRelationResponseCollection>;
  photographers?: Maybe<PhotographerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type LocationLocalizationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LocationPhotographersArgs = {
  filters?: InputMaybe<PhotographerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LocationEntity = {
  __typename?: 'LocationEntity';
  attributes?: Maybe<Location>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LocationEntityResponse = {
  __typename?: 'LocationEntityResponse';
  data?: Maybe<LocationEntity>;
};

export type LocationEntityResponseCollection = {
  __typename?: 'LocationEntityResponseCollection';
  data: Array<LocationEntity>;
  meta: ResponseCollectionMeta;
};

export type LocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<LocationFiltersInput>;
  not?: InputMaybe<LocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>;
  photographers?: InputMaybe<PhotographerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type LocationInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  photographers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LocationRelationResponseCollection = {
  __typename?: 'LocationRelationResponseCollection';
  data: Array<LocationEntity>;
};

export type Medication = {
  __typename?: 'Medication';
  analogs?: Maybe<Scalars['String']['output']>;
  contraindications?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dosage?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
  image?: Maybe<UploadFileEntityResponse>;
  indications?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MedicationRelationResponseCollection>;
  location: Scalars['String']['output'];
  medication_categories?: Maybe<MedicationCategoryRelationResponseCollection>;
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sideEffects?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
  slug: Scalars['String']['output'];
  storage?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  warnings?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
};


export type MedicationContraindicationsArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationDosageArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationIndicationsArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationLocalizationsArgs = {
  filters?: InputMaybe<MedicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationMedication_CategoriesArgs = {
  filters?: InputMaybe<MedicationCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationSideEffectsArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationStorageArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationWarningsArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MedicationCategory = {
  __typename?: 'MedicationCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MedicationCategoryRelationResponseCollection>;
  medications?: Maybe<MedicationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type MedicationCategoryLocalizationsArgs = {
  filters?: InputMaybe<MedicationCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MedicationCategoryMedicationsArgs = {
  filters?: InputMaybe<MedicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MedicationCategoryEntity = {
  __typename?: 'MedicationCategoryEntity';
  attributes?: Maybe<MedicationCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MedicationCategoryEntityResponse = {
  __typename?: 'MedicationCategoryEntityResponse';
  data?: Maybe<MedicationCategoryEntity>;
};

export type MedicationCategoryEntityResponseCollection = {
  __typename?: 'MedicationCategoryEntityResponseCollection';
  data: Array<MedicationCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type MedicationCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MedicationCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MedicationCategoryFiltersInput>;
  medications?: InputMaybe<MedicationFiltersInput>;
  not?: InputMaybe<MedicationCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MedicationCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type MedicationCategoryInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  medications?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MedicationCategoryRelationResponseCollection = {
  __typename?: 'MedicationCategoryRelationResponseCollection';
  data: Array<MedicationCategoryEntity>;
};

export type MedicationEntity = {
  __typename?: 'MedicationEntity';
  attributes?: Maybe<Medication>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MedicationEntityResponse = {
  __typename?: 'MedicationEntityResponse';
  data?: Maybe<MedicationEntity>;
};

export type MedicationEntityResponseCollection = {
  __typename?: 'MedicationEntityResponseCollection';
  data: Array<MedicationEntity>;
  meta: ResponseCollectionMeta;
};

export type MedicationFiltersInput = {
  analogs?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MedicationFiltersInput>>>;
  contraindications?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dosage?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  indications?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MedicationFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  medication_categories?: InputMaybe<MedicationCategoryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MedicationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MedicationFiltersInput>>>;
  price?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sideEffects?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  storage?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  warnings?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
};

export type MedicationInput = {
  analogs?: InputMaybe<Scalars['String']['input']>;
  contraindications?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  dosage?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  indications?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  medication_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sideEffects?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storage?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  warnings?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
};

export type MedicationRelationResponseCollection = {
  __typename?: 'MedicationRelationResponseCollection';
  data: Array<MedicationEntity>;
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
  createCarClass?: Maybe<CarClassEntityResponse>;
  createCarClassLocalization?: Maybe<CarClassEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createClub?: Maybe<ClubEntityResponse>;
  createClubLocalization?: Maybe<ClubEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createCompanyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  createCompanyPromotionCardLocalization?: Maybe<CompanyPromotionCardEntityResponse>;
  createEventCard?: Maybe<EventCardEntityResponse>;
  createEventCardLocalization?: Maybe<EventCardEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHeaderLocalization?: Maybe<HeaderEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createHotspotsPageLocalization?: Maybe<HotspotsPageEntityResponse>;
  createLanguage?: Maybe<LanguageEntityResponse>;
  createLanguageLocalization?: Maybe<LanguageEntityResponse>;
  createLocation?: Maybe<LocationEntityResponse>;
  createLocationLocalization?: Maybe<LocationEntityResponse>;
  createMedication?: Maybe<MedicationEntityResponse>;
  createMedicationCategory?: Maybe<MedicationCategoryEntityResponse>;
  createMedicationCategoryLocalization?: Maybe<MedicationCategoryEntityResponse>;
  createMedicationLocalization?: Maybe<MedicationEntityResponse>;
  createPharmaciesPageLocalization?: Maybe<PharmaciesPageEntityResponse>;
  createPhotographer?: Maybe<PhotographerEntityResponse>;
  createPhotographerLocalization?: Maybe<PhotographerEntityResponse>;
  createPhotographyStyle?: Maybe<PhotographyStyleEntityResponse>;
  createPhotographyStyleLocalization?: Maybe<PhotographyStyleEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createServiceLocalization?: Maybe<ServiceEntityResponse>;
  createSupportService?: Maybe<SupportServiceEntityResponse>;
  createSupportServiceLocalization?: Maybe<SupportServiceEntityResponse>;
  createTaxiDriver?: Maybe<TaxiDriverEntityResponse>;
  createTaxiDriverLocalization?: Maybe<TaxiDriverEntityResponse>;
  createTaxiService?: Maybe<TaxiServiceEntityResponse>;
  createTaxiServiceLocalization?: Maybe<TaxiServiceEntityResponse>;
  createTourGuide?: Maybe<TourGuideEntityResponse>;
  createTourGuideLocalization?: Maybe<TourGuideEntityResponse>;
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
  deleteCarClass?: Maybe<CarClassEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteClub?: Maybe<ClubEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteCompanyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  deleteEventCard?: Maybe<EventCardEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteHotspotsPage?: Maybe<HotspotsPageEntityResponse>;
  deleteLanguage?: Maybe<LanguageEntityResponse>;
  deleteLocation?: Maybe<LocationEntityResponse>;
  deleteMedication?: Maybe<MedicationEntityResponse>;
  deleteMedicationCategory?: Maybe<MedicationCategoryEntityResponse>;
  deletePharmaciesPage?: Maybe<PharmaciesPageEntityResponse>;
  deletePhotographer?: Maybe<PhotographerEntityResponse>;
  deletePhotographyStyle?: Maybe<PhotographyStyleEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteSupportService?: Maybe<SupportServiceEntityResponse>;
  deleteTaxiDriver?: Maybe<TaxiDriverEntityResponse>;
  deleteTaxiService?: Maybe<TaxiServiceEntityResponse>;
  deleteTourGuide?: Maybe<TourGuideEntityResponse>;
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
  updateCarClass?: Maybe<CarClassEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateClub?: Maybe<ClubEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateCompanyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  updateEventCard?: Maybe<EventCardEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateHotspotsPage?: Maybe<HotspotsPageEntityResponse>;
  updateLanguage?: Maybe<LanguageEntityResponse>;
  updateLocation?: Maybe<LocationEntityResponse>;
  updateMedication?: Maybe<MedicationEntityResponse>;
  updateMedicationCategory?: Maybe<MedicationCategoryEntityResponse>;
  updatePharmaciesPage?: Maybe<PharmaciesPageEntityResponse>;
  updatePhotographer?: Maybe<PhotographerEntityResponse>;
  updatePhotographyStyle?: Maybe<PhotographyStyleEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateSupportService?: Maybe<SupportServiceEntityResponse>;
  updateTaxiDriver?: Maybe<TaxiDriverEntityResponse>;
  updateTaxiService?: Maybe<TaxiServiceEntityResponse>;
  updateTourGuide?: Maybe<TourGuideEntityResponse>;
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


export type MutationCreateCarClassArgs = {
  data: CarClassInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCarClassLocalizationArgs = {
  data?: InputMaybe<CarClassInput>;
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


export type MutationCreateClubArgs = {
  data: ClubInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateClubLocalizationArgs = {
  data?: InputMaybe<ClubInput>;
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


export type MutationCreateLocationArgs = {
  data: LocationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLocationLocalizationArgs = {
  data?: InputMaybe<LocationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMedicationArgs = {
  data: MedicationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMedicationCategoryArgs = {
  data: MedicationCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMedicationCategoryLocalizationArgs = {
  data?: InputMaybe<MedicationCategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMedicationLocalizationArgs = {
  data?: InputMaybe<MedicationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePharmaciesPageLocalizationArgs = {
  data?: InputMaybe<PharmaciesPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePhotographerArgs = {
  data: PhotographerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePhotographerLocalizationArgs = {
  data?: InputMaybe<PhotographerInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePhotographyStyleArgs = {
  data: PhotographyStyleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePhotographyStyleLocalizationArgs = {
  data?: InputMaybe<PhotographyStyleInput>;
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


export type MutationCreateSupportServiceArgs = {
  data: SupportServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSupportServiceLocalizationArgs = {
  data?: InputMaybe<SupportServiceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTaxiDriverArgs = {
  data: TaxiDriverInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTaxiDriverLocalizationArgs = {
  data?: InputMaybe<TaxiDriverInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTaxiServiceArgs = {
  data: TaxiServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTaxiServiceLocalizationArgs = {
  data?: InputMaybe<TaxiServiceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTourGuideArgs = {
  data: TourGuideInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTourGuideLocalizationArgs = {
  data?: InputMaybe<TourGuideInput>;
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


export type MutationDeleteCarClassArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteClubArgs = {
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


export type MutationDeleteLocationArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMedicationArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMedicationCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePharmaciesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePhotographerArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePhotographyStyleArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSupportServiceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTaxiDriverArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTaxiServiceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTourGuideArgs = {
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


export type MutationUpdateCarClassArgs = {
  data: CarClassInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateClubArgs = {
  data: ClubInput;
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


export type MutationUpdateLocationArgs = {
  data: LocationInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMedicationArgs = {
  data: MedicationInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMedicationCategoryArgs = {
  data: MedicationCategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePharmaciesPageArgs = {
  data: PharmaciesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePhotographerArgs = {
  data: PhotographerInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePhotographyStyleArgs = {
  data: PhotographyStyleInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSupportServiceArgs = {
  data: SupportServiceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTaxiDriverArgs = {
  data: TaxiDriverInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTaxiServiceArgs = {
  data: TaxiServiceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTourGuideArgs = {
  data: TourGuideInput;
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

export type PharmaciesPage = {
  __typename?: 'PharmaciesPage';
  assistanceDescription: Scalars['String']['output'];
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  embassiesDescription: Scalars['String']['output'];
  emergencyDescription: Scalars['String']['output'];
  filterTitle: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PharmaciesPageRelationResponseCollection>;
  mapTitle: Scalars['String']['output'];
  medicationsTitle: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  supportServicesTitle: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PharmaciesPageCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PharmaciesPageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PharmaciesPageEntity = {
  __typename?: 'PharmaciesPageEntity';
  attributes?: Maybe<PharmaciesPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PharmaciesPageEntityResponse = {
  __typename?: 'PharmaciesPageEntityResponse';
  data?: Maybe<PharmaciesPageEntity>;
};

export type PharmaciesPageInput = {
  assistanceDescription?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  embassiesDescription?: InputMaybe<Scalars['String']['input']>;
  emergencyDescription?: InputMaybe<Scalars['String']['input']>;
  filterTitle?: InputMaybe<Scalars['String']['input']>;
  mapTitle?: InputMaybe<Scalars['String']['input']>;
  medicationsTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  supportServicesTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PharmaciesPageRelationResponseCollection = {
  __typename?: 'PharmaciesPageRelationResponseCollection';
  data: Array<PharmaciesPageEntity>;
};

export type Photographer = {
  __typename?: 'Photographer';
  averageRating: Scalars['Float']['output'];
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<LanguageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PhotographerRelationResponseCollection>;
  locations?: Maybe<LocationRelationResponseCollection>;
  name: Scalars['String']['output'];
  photography_styles?: Maybe<PhotographyStyleRelationResponseCollection>;
  profileImg: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  socialLinks: Array<Maybe<ComponentHelpersSocialMedia>>;
  totalComments: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PhotographerCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PhotographerLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PhotographerLocalizationsArgs = {
  filters?: InputMaybe<PhotographerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PhotographerLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PhotographerPhotography_StylesArgs = {
  filters?: InputMaybe<PhotographyStyleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PhotographerSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PhotographerEntity = {
  __typename?: 'PhotographerEntity';
  attributes?: Maybe<Photographer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PhotographerEntityResponse = {
  __typename?: 'PhotographerEntityResponse';
  data?: Maybe<PhotographerEntity>;
};

export type PhotographerEntityResponseCollection = {
  __typename?: 'PhotographerEntityResponseCollection';
  data: Array<PhotographerEntity>;
  meta: ResponseCollectionMeta;
};

export type PhotographerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PhotographerFiltersInput>>>;
  averageRating?: InputMaybe<FloatFilterInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  languages?: InputMaybe<LanguageFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PhotographerFiltersInput>;
  locations?: InputMaybe<LocationFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PhotographerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PhotographerFiltersInput>>>;
  photography_styles?: InputMaybe<PhotographyStyleFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PhotographerInput = {
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  photography_styles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  profileImg?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  totalComments?: InputMaybe<Scalars['Int']['input']>;
};

export type PhotographerRelationResponseCollection = {
  __typename?: 'PhotographerRelationResponseCollection';
  data: Array<PhotographerEntity>;
};

export type PhotographyStyle = {
  __typename?: 'PhotographyStyle';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PhotographyStyleRelationResponseCollection>;
  photographers?: Maybe<PhotographerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};


export type PhotographyStyleLocalizationsArgs = {
  filters?: InputMaybe<PhotographyStyleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PhotographyStylePhotographersArgs = {
  filters?: InputMaybe<PhotographerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PhotographyStyleEntity = {
  __typename?: 'PhotographyStyleEntity';
  attributes?: Maybe<PhotographyStyle>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PhotographyStyleEntityResponse = {
  __typename?: 'PhotographyStyleEntityResponse';
  data?: Maybe<PhotographyStyleEntity>;
};

export type PhotographyStyleEntityResponseCollection = {
  __typename?: 'PhotographyStyleEntityResponseCollection';
  data: Array<PhotographyStyleEntity>;
  meta: ResponseCollectionMeta;
};

export type PhotographyStyleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PhotographyStyleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PhotographyStyleFiltersInput>;
  not?: InputMaybe<PhotographyStyleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PhotographyStyleFiltersInput>>>;
  photographers?: InputMaybe<PhotographerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type PhotographyStyleInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  photographers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PhotographyStyleRelationResponseCollection = {
  __typename?: 'PhotographyStyleRelationResponseCollection';
  data: Array<PhotographyStyleEntity>;
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
  carClass?: Maybe<CarClassEntityResponse>;
  carClasses?: Maybe<CarClassEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  club?: Maybe<ClubEntityResponse>;
  clubs?: Maybe<ClubEntityResponseCollection>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  companyPromotionCard?: Maybe<CompanyPromotionCardEntityResponse>;
  companyPromotionCards?: Maybe<CompanyPromotionCardEntityResponseCollection>;
  eventCard?: Maybe<EventCardEntityResponse>;
  eventCards?: Maybe<EventCardEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  hotspotsPage?: Maybe<HotspotsPageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  language?: Maybe<LanguageEntityResponse>;
  languages?: Maybe<LanguageEntityResponseCollection>;
  location?: Maybe<LocationEntityResponse>;
  locations?: Maybe<LocationEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  medication?: Maybe<MedicationEntityResponse>;
  medicationCategories?: Maybe<MedicationCategoryEntityResponseCollection>;
  medicationCategory?: Maybe<MedicationCategoryEntityResponse>;
  medications?: Maybe<MedicationEntityResponseCollection>;
  pharmaciesPage?: Maybe<PharmaciesPageEntityResponse>;
  photographer?: Maybe<PhotographerEntityResponse>;
  photographers?: Maybe<PhotographerEntityResponseCollection>;
  photographyStyle?: Maybe<PhotographyStyleEntityResponse>;
  photographyStyles?: Maybe<PhotographyStyleEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  supportService?: Maybe<SupportServiceEntityResponse>;
  supportServices?: Maybe<SupportServiceEntityResponseCollection>;
  taxiDriver?: Maybe<TaxiDriverEntityResponse>;
  taxiDrivers?: Maybe<TaxiDriverEntityResponseCollection>;
  taxiService?: Maybe<TaxiServiceEntityResponse>;
  taxiServices?: Maybe<TaxiServiceEntityResponseCollection>;
  tourGuide?: Maybe<TourGuideEntityResponse>;
  tourGuides?: Maybe<TourGuideEntityResponseCollection>;
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


export type QueryCarClassArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryCarClassesArgs = {
  filters?: InputMaybe<CarClassFiltersInput>;
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


export type QueryClubArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryClubsArgs = {
  filters?: InputMaybe<ClubFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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


export type QueryLocationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMedicationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMedicationCategoriesArgs = {
  filters?: InputMaybe<MedicationCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMedicationCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMedicationsArgs = {
  filters?: InputMaybe<MedicationFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPharmaciesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPhotographerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPhotographersArgs = {
  filters?: InputMaybe<PhotographerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPhotographyStyleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPhotographyStylesArgs = {
  filters?: InputMaybe<PhotographyStyleFiltersInput>;
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


export type QuerySupportServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySupportServicesArgs = {
  filters?: InputMaybe<SupportServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTaxiDriverArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTaxiDriversArgs = {
  filters?: InputMaybe<TaxiDriverFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTaxiServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTaxiServicesArgs = {
  filters?: InputMaybe<TaxiServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTourGuideArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTourGuidesArgs = {
  filters?: InputMaybe<TourGuideFiltersInput>;
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
  clubs?: Maybe<ClubRelationResponseCollection>;
  company_promotion_card?: Maybe<CompanyPromotionCardEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ServiceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceClubsArgs = {
  filters?: InputMaybe<ClubFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  clubs?: InputMaybe<ClubFiltersInput>;
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
  clubs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
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

export type SupportService = {
  __typename?: 'SupportService';
  category: Enum_Supportservice_Category;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SupportServiceRelationResponseCollection>;
  location: Scalars['String']['output'];
  mapLink?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SupportServiceLocalizationsArgs = {
  filters?: InputMaybe<SupportServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SupportServiceEntity = {
  __typename?: 'SupportServiceEntity';
  attributes?: Maybe<SupportService>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SupportServiceEntityResponse = {
  __typename?: 'SupportServiceEntityResponse';
  data?: Maybe<SupportServiceEntity>;
};

export type SupportServiceEntityResponseCollection = {
  __typename?: 'SupportServiceEntityResponseCollection';
  data: Array<SupportServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type SupportServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SupportServiceFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SupportServiceFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  mapLink?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SupportServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SupportServiceFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SupportServiceInput = {
  category?: InputMaybe<Enum_Supportservice_Category>;
  image?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  mapLink?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SupportServiceRelationResponseCollection = {
  __typename?: 'SupportServiceRelationResponseCollection';
  data: Array<SupportServiceEntity>;
};

export type TaxiDriver = {
  __typename?: 'TaxiDriver';
  averageRating: Scalars['Float']['output'];
  carModel: Scalars['String']['output'];
  carName: Scalars['String']['output'];
  car_class?: Maybe<CarClassEntityResponse>;
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isNotWorking: Scalars['Boolean']['output'];
  languages?: Maybe<LanguageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TaxiDriverRelationResponseCollection>;
  name: Scalars['String']['output'];
  passengersNum: Scalars['Int']['output'];
  preferences?: Maybe<Array<Maybe<ComponentHelpersStringArray>>>;
  profileImg: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  schedule?: Maybe<Array<Maybe<ComponentComponentsWorkSchedule>>>;
  slug: Scalars['String']['output'];
  socialLinks: Array<Maybe<ComponentHelpersSocialMedia>>;
  taxi_services?: Maybe<TaxiServiceRelationResponseCollection>;
  totalComments: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TaxiDriverCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiDriverLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiDriverLocalizationsArgs = {
  filters?: InputMaybe<TaxiDriverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiDriverPreferencesArgs = {
  filters?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiDriverScheduleArgs = {
  filters?: InputMaybe<ComponentComponentsWorkScheduleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiDriverSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiDriverTaxi_ServicesArgs = {
  filters?: InputMaybe<TaxiServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TaxiDriverEntity = {
  __typename?: 'TaxiDriverEntity';
  attributes?: Maybe<TaxiDriver>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TaxiDriverEntityResponse = {
  __typename?: 'TaxiDriverEntityResponse';
  data?: Maybe<TaxiDriverEntity>;
};

export type TaxiDriverEntityResponseCollection = {
  __typename?: 'TaxiDriverEntityResponseCollection';
  data: Array<TaxiDriverEntity>;
  meta: ResponseCollectionMeta;
};

export type TaxiDriverFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TaxiDriverFiltersInput>>>;
  averageRating?: InputMaybe<FloatFilterInput>;
  carModel?: InputMaybe<StringFilterInput>;
  carName?: InputMaybe<StringFilterInput>;
  car_class?: InputMaybe<CarClassFiltersInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isNotWorking?: InputMaybe<BooleanFilterInput>;
  languages?: InputMaybe<LanguageFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TaxiDriverFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TaxiDriverFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TaxiDriverFiltersInput>>>;
  passengersNum?: InputMaybe<IntFilterInput>;
  preferences?: InputMaybe<ComponentHelpersStringArrayFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  schedule?: InputMaybe<ComponentComponentsWorkScheduleFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  taxi_services?: InputMaybe<TaxiServiceFiltersInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TaxiDriverInput = {
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  carModel?: InputMaybe<Scalars['String']['input']>;
  carName?: InputMaybe<Scalars['String']['input']>;
  car_class?: InputMaybe<Scalars['ID']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isNotWorking?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  passengersNum?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Array<InputMaybe<ComponentHelpersStringArrayInput>>>;
  profileImg?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  schedule?: InputMaybe<Array<InputMaybe<ComponentComponentsWorkScheduleInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  taxi_services?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  totalComments?: InputMaybe<Scalars['Int']['input']>;
};

export type TaxiDriverRelationResponseCollection = {
  __typename?: 'TaxiDriverRelationResponseCollection';
  data: Array<TaxiDriverEntity>;
};

export type TaxiService = {
  __typename?: 'TaxiService';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon: UploadFileEntityResponse;
  key: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TaxiServiceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  subTitle: Scalars['String']['output'];
  taxi_drivers?: Maybe<TaxiDriverRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TaxiServiceLocalizationsArgs = {
  filters?: InputMaybe<TaxiServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaxiServiceTaxi_DriversArgs = {
  filters?: InputMaybe<TaxiDriverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TaxiServiceEntity = {
  __typename?: 'TaxiServiceEntity';
  attributes?: Maybe<TaxiService>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TaxiServiceEntityResponse = {
  __typename?: 'TaxiServiceEntityResponse';
  data?: Maybe<TaxiServiceEntity>;
};

export type TaxiServiceEntityResponseCollection = {
  __typename?: 'TaxiServiceEntityResponseCollection';
  data: Array<TaxiServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type TaxiServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TaxiServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TaxiServiceFiltersInput>;
  not?: InputMaybe<TaxiServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TaxiServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subTitle?: InputMaybe<StringFilterInput>;
  taxi_drivers?: InputMaybe<TaxiDriverFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TaxiServiceInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  taxi_drivers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TaxiServiceRelationResponseCollection = {
  __typename?: 'TaxiServiceRelationResponseCollection';
  data: Array<TaxiServiceEntity>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  nei?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

export type TourGuide = {
  __typename?: 'TourGuide';
  averageRating: Scalars['Float']['output'];
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<LanguageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TourGuideRelationResponseCollection>;
  name: Scalars['String']['output'];
  profileImg: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  socialLinks: Array<Maybe<ComponentHelpersSocialMedia>>;
  totalComments: Scalars['Int']['output'];
  tours: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TourGuideCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TourGuideLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TourGuideLocalizationsArgs = {
  filters?: InputMaybe<TourGuideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TourGuideSocialLinksArgs = {
  filters?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TourGuideEntity = {
  __typename?: 'TourGuideEntity';
  attributes?: Maybe<TourGuide>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TourGuideEntityResponse = {
  __typename?: 'TourGuideEntityResponse';
  data?: Maybe<TourGuideEntity>;
};

export type TourGuideEntityResponseCollection = {
  __typename?: 'TourGuideEntityResponseCollection';
  data: Array<TourGuideEntity>;
  meta: ResponseCollectionMeta;
};

export type TourGuideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TourGuideFiltersInput>>>;
  averageRating?: InputMaybe<FloatFilterInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  languages?: InputMaybe<LanguageFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TourGuideFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TourGuideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TourGuideFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  socialLinks?: InputMaybe<ComponentHelpersSocialMediaFiltersInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  tours?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TourGuideInput = {
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImg?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentHelpersSocialMediaInput>>>;
  totalComments?: InputMaybe<Scalars['Int']['input']>;
  tours?: InputMaybe<Scalars['String']['input']>;
};

export type TourGuideRelationResponseCollection = {
  __typename?: 'TourGuideRelationResponseCollection';
  data: Array<TourGuideEntity>;
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


export type GetAnimatorBySlugQuery = { __typename?: 'Query', animators?: { __typename?: 'AnimatorEntityResponseCollection', data: Array<{ __typename?: 'AnimatorEntity', attributes?: { __typename?: 'Animator', slug: string, name: string, description: string, workingAtClub: boolean, hotelName: string, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, animation_company?: { __typename?: 'AnimationCompanyEntityResponse', data?: { __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', key: string, value: string } | null } | null } | null, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, skills: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null>, entertainmentServices?: Array<{ __typename?: 'ComponentComponentsEntertainmentService', serviceName: string, place: string, price: string, duration: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null } | null }> } | null };

export type GetAnimatorsByFilterQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  companyKey?: InputMaybe<Scalars['String']['input']>;
  slugToExclude?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAnimatorsByFilterQuery = { __typename?: 'Query', animators?: { __typename?: 'AnimatorEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'AnimatorEntity', id?: string | null, attributes?: { __typename?: 'Animator', slug: string, name: string, hotelName: string, averageRating: number, totalComments: number, workingAtClub: boolean, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, animation_company?: { __typename?: 'AnimationCompanyEntityResponse', data?: { __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', value: string } | null } | null } | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type GetAnimatorsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimatorsSlugsQuery = { __typename?: 'Query', animators?: { __typename?: 'AnimatorEntityResponseCollection', data: Array<{ __typename?: 'AnimatorEntity', attributes?: { __typename?: 'Animator', slug: string } | null }> } | null };

export type AnimatorPreviewFragment = { __typename?: 'Animator', slug: string, name: string, hotelName: string, averageRating: number, totalComments: number, workingAtClub: boolean, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, animation_company?: { __typename?: 'AnimationCompanyEntityResponse', data?: { __typename?: 'AnimationCompanyEntity', attributes?: { __typename?: 'AnimationCompany', value: string } | null } | null } | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type AnnouncementFragment = { __typename?: 'Announcement', title?: string | null, text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null };

export type GetClubBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetClubBySlugQuery = { __typename?: 'Query', clubs?: { __typename?: 'ClubEntityResponseCollection', data: Array<{ __typename?: 'ClubEntity', attributes?: { __typename?: 'Club', about: string, food: string, phoneNumber: string, slug: string, clubName: string, location: string, totalComments: number, averageRating: number, workingDays: Array<{ __typename?: 'ComponentHelpersWeekDay', day: Enum_Componenthelpersweekday_Day } | null>, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, services?: { __typename?: 'ServiceRelationResponseCollection', data: Array<{ __typename?: 'ServiceEntity', attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, workingTime: { __typename?: 'ComponentHelpersTimeSlot', startTime: any, endTime: any } } | null }> } | null };

export type GetClubsByDaysQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetClubsByDaysQuery = { __typename?: 'Query', clubs?: { __typename?: 'ClubEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'ClubEntity', attributes?: { __typename?: 'Club', slug: string, clubName: string, location: string, totalComments: number, averageRating: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, workingTime: { __typename?: 'ComponentHelpersTimeSlot', startTime: any, endTime: any } } | null }> } | null };

export type ClubPreviewFragment = { __typename?: 'Club', slug: string, clubName: string, location: string, totalComments: number, averageRating: number, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, workingTime: { __typename?: 'ComponentHelpersTimeSlot', startTime: any, endTime: any } };

export type GetEventCardsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetEventCardsQuery = { __typename?: 'Query', eventCards?: { __typename?: 'EventCardEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'EventCardEntity', attributes?: { __typename?: 'EventCard', date: string, title: string, price: string, location: string, description?: string | null, mapUrl?: string | null, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type EventCardFragment = { __typename?: 'EventCard', date: string, title: string, price: string, location: string, description?: string | null, mapUrl?: string | null, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } };

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

export type GetLanguagesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetLanguagesQuery = { __typename?: 'Query', languages?: { __typename?: 'LanguageEntityResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string } | null }> } | null };

export type GetCarClassesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCarClassesQuery = { __typename?: 'Query', carClasses?: { __typename?: 'CarClassEntityResponseCollection', data: Array<{ __typename?: 'CarClassEntity', attributes?: { __typename?: 'CarClass', key: string, value: string } | null }> } | null };

export type GetPhotographyStylesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetPhotographyStylesQuery = { __typename?: 'Query', photographyStyles?: { __typename?: 'PhotographyStyleEntityResponseCollection', data: Array<{ __typename?: 'PhotographyStyleEntity', attributes?: { __typename?: 'PhotographyStyle', key: string, value: string } | null }> } | null };

export type GetLocationsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetLocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'LocationEntityResponseCollection', data: Array<{ __typename?: 'LocationEntity', attributes?: { __typename?: 'Location', key: string, value: string } | null }> } | null };

export type GetMedicationCategoriesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetMedicationCategoriesQuery = { __typename?: 'Query', medicationCategories?: { __typename?: 'MedicationCategoryEntityResponseCollection', data: Array<{ __typename?: 'MedicationCategoryEntity', attributes?: { __typename?: 'MedicationCategory', key: string, value: string } | null }> } | null };

export type GetHomePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetHomePageQuery = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', heroTitle: string, eventCardsTitle: string, promotionsTitle: string, announcementsTitle: string, mapTitle: string, event_cards?: { __typename?: 'EventCardRelationResponseCollection', data: Array<{ __typename?: 'EventCardEntity', attributes?: { __typename?: 'EventCard', date: string, title: string, price: string, location: string, description?: string | null, mapUrl?: string | null, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, banner1: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, announcements?: { __typename?: 'AnnouncementRelationResponseCollection', data: Array<{ __typename?: 'AnnouncementEntity', attributes?: { __typename?: 'Announcement', title?: string | null, text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null } | null }> } | null, banner2: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, homeNavMenu?: Array<{ __typename?: 'ComponentComponentsHomeNavMenu', text: string, link: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null } | null } | null } | null };

export type HomePageFragment = { __typename?: 'Home', heroTitle: string, eventCardsTitle: string, promotionsTitle: string, announcementsTitle: string, mapTitle: string, event_cards?: { __typename?: 'EventCardRelationResponseCollection', data: Array<{ __typename?: 'EventCardEntity', attributes?: { __typename?: 'EventCard', date: string, title: string, price: string, location: string, description?: string | null, mapUrl?: string | null, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, banner1: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, announcements?: { __typename?: 'AnnouncementRelationResponseCollection', data: Array<{ __typename?: 'AnnouncementEntity', attributes?: { __typename?: 'Announcement', title?: string | null, text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks?: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null } | null }> } | null, banner2: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } }, homeNavMenu?: Array<{ __typename?: 'ComponentComponentsHomeNavMenu', text: string, link: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null> | null };

export type GetHotspotsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetHotspotsPageQuery = { __typename?: 'Query', hotspotsPage?: { __typename?: 'HotspotsPageEntityResponse', data?: { __typename?: 'HotspotsPageEntity', attributes?: { __typename?: 'HotspotsPage', eventsTitle: string, clubsTitle: string, clubsInfo: string, mapTitle?: string | null, bottomBanner?: { __typename?: 'ComponentComponentsBanner', title: string, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null } | null } | null } | null };

export type HotspotsPageFragment = { __typename?: 'HotspotsPage', eventsTitle: string, clubsTitle: string, clubsInfo: string, mapTitle?: string | null, bottomBanner?: { __typename?: 'ComponentComponentsBanner', title: string, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null };

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

export type GetMedicationBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetMedicationBySlugQuery = { __typename?: 'Query', medications?: { __typename?: 'MedicationEntityResponseCollection', data: Array<{ __typename?: 'MedicationEntity', attributes?: { __typename?: 'Medication', slug: string, name: string, price: string, analogs?: string | null, location: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, medication_categories?: { __typename?: 'MedicationCategoryRelationResponseCollection', data: Array<{ __typename?: 'MedicationCategoryEntity', attributes?: { __typename?: 'MedicationCategory', key: string, value: string } | null }> } | null, indications?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, dosage?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, contraindications?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, sideEffects?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, storage?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, warnings?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null } | null }> } | null };

export type GetMedicationsByFilterQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  nameFilter?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMedicationsByFilterQuery = { __typename?: 'Query', medications?: { __typename?: 'MedicationEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'MedicationEntity', id?: string | null, attributes?: { __typename?: 'Medication', slug: string, name: string, price: string, analogs?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, medication_categories?: { __typename?: 'MedicationCategoryRelationResponseCollection', data: Array<{ __typename?: 'MedicationCategoryEntity', attributes?: { __typename?: 'MedicationCategory', value: string } | null }> } | null } | null }> } | null };

export type GetMedicationsNamesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  nameFilter?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMedicationsNamesQuery = { __typename?: 'Query', medications?: { __typename?: 'MedicationEntityResponseCollection', data: Array<{ __typename?: 'MedicationEntity', id?: string | null, attributes?: { __typename?: 'Medication', slug: string, name: string } | null }> } | null };

export type MedicationFragment = { __typename?: 'Medication', slug: string, name: string, price: string, analogs?: string | null, location: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, medication_categories?: { __typename?: 'MedicationCategoryRelationResponseCollection', data: Array<{ __typename?: 'MedicationCategoryEntity', attributes?: { __typename?: 'MedicationCategory', key: string, value: string } | null }> } | null, indications?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, dosage?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, contraindications?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, sideEffects?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, storage?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, warnings?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null };

export type MedicationPreviewFragment = { __typename?: 'Medication', slug: string, name: string, price: string, analogs?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, medication_categories?: { __typename?: 'MedicationCategoryRelationResponseCollection', data: Array<{ __typename?: 'MedicationCategoryEntity', attributes?: { __typename?: 'MedicationCategory', value: string } | null }> } | null };

export type GetPharmaciesPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetPharmaciesPageQuery = { __typename?: 'Query', pharmaciesPage?: { __typename?: 'PharmaciesPageEntityResponse', data?: { __typename?: 'PharmaciesPageEntity', attributes?: { __typename?: 'PharmaciesPage', mapTitle: string, medicationsTitle: string, supportServicesTitle: string, embassiesDescription: string, assistanceDescription: string, emergencyDescription: string, filterTitle: string, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string, value: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, markerIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null } | null } | null } | null };

export type PharmaciesPageFragment = { __typename?: 'PharmaciesPage', mapTitle: string, medicationsTitle: string, supportServicesTitle: string, embassiesDescription: string, assistanceDescription: string, emergencyDescription: string, filterTitle: string, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string, value: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, markerIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type GetPhotographerBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetPhotographerBySlugQuery = { __typename?: 'Query', photographers?: { __typename?: 'PhotographerEntityResponseCollection', data: Array<{ __typename?: 'PhotographerEntity', attributes?: { __typename?: 'Photographer', slug: string, name: string, description?: string | null, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, photography_styles?: { __typename?: 'PhotographyStyleRelationResponseCollection', data: Array<{ __typename?: 'PhotographyStyleEntity', attributes?: { __typename?: 'PhotographyStyle', key: string, value: string } | null }> } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', attributes?: { __typename?: 'Location', key: string, value: string } | null }> } | null } | null }> } | null };

export type GetPhotographersByFiltersQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  styles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  slugToExclude?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPhotographersByFiltersQuery = { __typename?: 'Query', photographers?: { __typename?: 'PhotographerEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'PhotographerEntity', attributes?: { __typename?: 'Photographer', slug: string, name: string, description?: string | null, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, photography_styles?: { __typename?: 'PhotographyStyleRelationResponseCollection', data: Array<{ __typename?: 'PhotographyStyleEntity', attributes?: { __typename?: 'PhotographyStyle', key: string, value: string } | null }> } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', attributes?: { __typename?: 'Location', key: string, value: string } | null }> } | null } | null }> } | null };

export type PhotographerFragment = { __typename?: 'Photographer', slug: string, name: string, description?: string | null, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, photography_styles?: { __typename?: 'PhotographyStyleRelationResponseCollection', data: Array<{ __typename?: 'PhotographyStyleEntity', attributes?: { __typename?: 'PhotographyStyle', key: string, value: string } | null }> } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', attributes?: { __typename?: 'Location', key: string, value: string } | null }> } | null };

export type GetPhotographersSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhotographersSlugsQuery = { __typename?: 'Query', photographers?: { __typename?: 'PhotographerEntityResponseCollection', data: Array<{ __typename?: 'PhotographerEntity', attributes?: { __typename?: 'Photographer', slug: string } | null }> } | null };

export type CompanyPromotionCardQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type CompanyPromotionCardQuery = { __typename?: 'Query', companyPromotionCards?: { __typename?: 'CompanyPromotionCardEntityResponseCollection', data: Array<{ __typename?: 'CompanyPromotionCardEntity', id?: string | null, attributes?: { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, description?: string | null, youTubeVideoId?: string | null, touchText?: string | null, touchLink?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, discountBanner?: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null, services?: { __typename?: 'ServiceRelationResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string } | null }> } | null } | null }> } | null };

export type GetCompanyPromotionCardsByFilterQueryVariables = Exact<{
  areaKey?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  slugToExclude?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCompanyPromotionCardsByFilterQuery = { __typename?: 'Query', companyPromotionCards?: { __typename?: 'CompanyPromotionCardEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'CompanyPromotionCardEntity', id?: string | null, attributes?: { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string, markerIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type GetPromotionCardsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPromotionCardsSlugsQuery = { __typename?: 'Query', companyPromotionCards?: { __typename?: 'CompanyPromotionCardEntityResponseCollection', data: Array<{ __typename?: 'CompanyPromotionCardEntity', attributes?: { __typename?: 'CompanyPromotionCard', slug: string } | null }> } | null };

export type CompanyCardFragment = { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, description?: string | null, youTubeVideoId?: string | null, touchText?: string | null, touchLink?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, discountBanner?: { __typename?: 'ComponentComponentsBanner', title: string, buttonText?: string | null, buttonLink?: string | null, bannerImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null, services?: { __typename?: 'ServiceRelationResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string } | null }> } | null };

export type CompanyCardPreviewFragment = { __typename?: 'CompanyPromotionCard', title: string, discount?: string | null, averageRating: number, totalComments: number, slug: string, location?: string | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> }, position?: { __typename?: 'ComponentHelpersPosition', lat?: string | null, lng?: string | null } | null, area?: { __typename?: 'AreaEntityResponse', data?: { __typename?: 'AreaEntity', attributes?: { __typename?: 'Area', key: string, value: string } | null } | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', key: string, markerIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type ServiceFragment = { __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', text: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null };

export type CommentFragment = { __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null };

export type GetSupportServicesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetSupportServicesQuery = { __typename?: 'Query', supportServices?: { __typename?: 'SupportServiceEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'SupportServiceEntity', attributes?: { __typename?: 'SupportService', name: string, phoneNumber: string, location: string, mapLink?: string | null, category: Enum_Supportservice_Category, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type SupportServiceFragment = { __typename?: 'SupportService', name: string, phoneNumber: string, location: string, mapLink?: string | null, category: Enum_Supportservice_Category, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } };

export type GetDriverBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetDriverBySlugQuery = { __typename?: 'Query', taxiDrivers?: { __typename?: 'TaxiDriverEntityResponseCollection', data: Array<{ __typename?: 'TaxiDriverEntity', attributes?: { __typename?: 'TaxiDriver', slug: string, name: string, carModel: string, carName: string, isNotWorking: boolean, passengersNum: number, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, car_class?: { __typename?: 'CarClassEntityResponse', data?: { __typename?: 'CarClassEntity', attributes?: { __typename?: 'CarClass', key: string, value: string, circleIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null } | null } | null, preferences?: Array<{ __typename?: 'ComponentHelpersStringArray', value: string } | null> | null, schedule?: Array<{ __typename?: 'ComponentComponentsWorkSchedule', dayOfWeek: Enum_Componentcomponentsworkschedule_Dayofweek, timeSlots: Array<{ __typename?: 'ComponentHelpersTimeSlot', startTime: any, endTime: any } | null> } | null> | null, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null, taxi_services?: { __typename?: 'TaxiServiceRelationResponseCollection', data: Array<{ __typename?: 'TaxiServiceEntity', attributes?: { __typename?: 'TaxiService', title: string, subTitle: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type GetDriversByFiltersQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  languageKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  timeFilters?: InputMaybe<ComponentComponentsWorkScheduleFiltersInput>;
  carClasses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  slugToExclude?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetDriversByFiltersQuery = { __typename?: 'Query', taxiDrivers?: { __typename?: 'TaxiDriverEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'TaxiDriverEntity', attributes?: { __typename?: 'TaxiDriver', slug: string, name: string, totalComments: number, averageRating: number, isNotWorking: boolean, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, schedule?: Array<{ __typename?: 'ComponentComponentsWorkSchedule', dayOfWeek: Enum_Componentcomponentsworkschedule_Dayofweek, timeSlots: Array<{ __typename?: 'ComponentHelpersTimeSlot', startTime: any, endTime: any } | null> } | null> | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, car_class?: { __typename?: 'CarClassEntityResponse', data?: { __typename?: 'CarClassEntity', attributes?: { __typename?: 'CarClass', value: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null } | null } | null } | null }> } | null };

export type TaxiDriverPreviewFragment = { __typename?: 'TaxiDriver', slug: string, name: string, totalComments: number, averageRating: number, isNotWorking: boolean, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, schedule?: Array<{ __typename?: 'ComponentComponentsWorkSchedule', dayOfWeek: Enum_Componentcomponentsworkschedule_Dayofweek, timeSlots: Array<{ __typename?: 'ComponentHelpersTimeSlot', startTime: any, endTime: any } | null> } | null> | null, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, car_class?: { __typename?: 'CarClassEntityResponse', data?: { __typename?: 'CarClassEntity', attributes?: { __typename?: 'CarClass', value: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null } | null } | null };

export type GetDriversSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDriversSlugsQuery = { __typename?: 'Query', taxiDrivers?: { __typename?: 'TaxiDriverEntityResponseCollection', data: Array<{ __typename?: 'TaxiDriverEntity', attributes?: { __typename?: 'TaxiDriver', slug: string } | null }> } | null };

export type GetTourGuideBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetTourGuideBySlugQuery = { __typename?: 'Query', tourGuides?: { __typename?: 'TourGuideEntityResponseCollection', data: Array<{ __typename?: 'TourGuideEntity', attributes?: { __typename?: 'TourGuide', slug: string, name: string, tours: string, description?: string | null, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null } | null }> } | null };

export type GetTourGuidesByFiltersQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  slugToExclude?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTourGuidesByFiltersQuery = { __typename?: 'Query', tourGuides?: { __typename?: 'TourGuideEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'TourGuideEntity', attributes?: { __typename?: 'TourGuide', slug: string, name: string, tours: string, description?: string | null, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null } | null }> } | null };

export type TourGuideFragment = { __typename?: 'TourGuide', slug: string, name: string, tours: string, description?: string | null, averageRating: number, totalComments: number, profileImg: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null }, socialLinks: Array<{ __typename?: 'ComponentHelpersSocialMedia', socialLink: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null>, languages?: { __typename?: 'LanguageRelationResponseCollection', data: Array<{ __typename?: 'LanguageEntity', attributes?: { __typename?: 'Language', key: string, value: string, flagIcon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null, comments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text: string, rating: number, createdAt?: any | null } | null }> } | null };

export type GetTourGuidesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTourGuidesSlugsQuery = { __typename?: 'Query', tourGuides?: { __typename?: 'TourGuideEntityResponseCollection', data: Array<{ __typename?: 'TourGuideEntity', attributes?: { __typename?: 'TourGuide', slug: string } | null }> } | null };

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
export const ClubPreviewFragmentDoc = new TypedDocumentString(`
    fragment ClubPreview on Club {
  slug
  image {
    ...StrapiImage
  }
  clubName
  location
  workingTime {
    startTime
    endTime
  }
  totalComments
  averageRating
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"ClubPreview"}) as unknown as TypedDocumentString<ClubPreviewFragment, unknown>;
export const EventCardFragmentDoc = new TypedDocumentString(`
    fragment EventCard on EventCard {
  date
  title
  price
  location
  description
  mapUrl
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
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
  homeNavMenu {
    text
    link
    image {
      ...StrapiImage
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
  description
  mapUrl
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
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
  mapTitle
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
export const MedicationFragmentDoc = new TypedDocumentString(`
    fragment Medication on Medication {
  slug
  name
  price
  image {
    ...StrapiImage
  }
  analogs
  medication_categories {
    data {
      attributes {
        key
        value
      }
    }
  }
  location
  indications {
    value
  }
  dosage {
    value
  }
  contraindications {
    value
  }
  sideEffects {
    value
  }
  storage {
    value
  }
  warnings {
    value
  }
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"Medication"}) as unknown as TypedDocumentString<MedicationFragment, unknown>;
export const MedicationPreviewFragmentDoc = new TypedDocumentString(`
    fragment MedicationPreview on Medication {
  slug
  name
  price
  analogs
  image {
    ...StrapiImage
  }
  medication_categories {
    data {
      attributes {
        value
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
}`, {"fragmentName":"MedicationPreview"}) as unknown as TypedDocumentString<MedicationPreviewFragment, unknown>;
export const PharmaciesPageFragmentDoc = new TypedDocumentString(`
    fragment PharmaciesPage on PharmaciesPage {
  mapTitle
  medicationsTitle
  supportServicesTitle
  embassiesDescription
  assistanceDescription
  emergencyDescription
  categories {
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
  filterTitle
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"PharmaciesPage"}) as unknown as TypedDocumentString<PharmaciesPageFragment, unknown>;
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
export const PhotographerFragmentDoc = new TypedDocumentString(`
    fragment Photographer on Photographer {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  socialLinks {
    icon {
      ...StrapiImage
    }
    socialLink
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
  photography_styles {
    data {
      attributes {
        key
        value
      }
    }
  }
  locations {
    data {
      attributes {
        key
        value
      }
    }
  }
  description
  averageRating
  totalComments
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
}`, {"fragmentName":"Photographer"}) as unknown as TypedDocumentString<PhotographerFragment, unknown>;
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
  categories {
    data {
      attributes {
        key
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
}`, {"fragmentName":"CompanyCardPreview"}) as unknown as TypedDocumentString<CompanyCardPreviewFragment, unknown>;
export const SupportServiceFragmentDoc = new TypedDocumentString(`
    fragment SupportService on SupportService {
  name
  phoneNumber
  location
  mapLink
  image {
    ...StrapiImage
  }
  category
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"SupportService"}) as unknown as TypedDocumentString<SupportServiceFragment, unknown>;
export const TaxiDriverPreviewFragmentDoc = new TypedDocumentString(`
    fragment TaxiDriverPreview on TaxiDriver {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  schedule {
    dayOfWeek
    timeSlots {
      startTime
      endTime
    }
  }
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
  car_class {
    data {
      attributes {
        value
        icon {
          ...StrapiImage
        }
      }
    }
  }
  totalComments
  averageRating
  isNotWorking
}
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`, {"fragmentName":"TaxiDriverPreview"}) as unknown as TypedDocumentString<TaxiDriverPreviewFragment, unknown>;
export const TourGuideFragmentDoc = new TypedDocumentString(`
    fragment TourGuide on TourGuide {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  socialLinks {
    icon {
      ...StrapiImage
    }
    socialLink
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
  tours
  description
  averageRating
  totalComments
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
}`, {"fragmentName":"TourGuide"}) as unknown as TypedDocumentString<TourGuideFragment, unknown>;
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
              key
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
          price
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
    query GetAnimatorsByFilter($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $sort: [String], $companyKey: String, $slugToExclude: String) {
  animators(
    locale: $locale
    sort: $sort
    pagination: {page: $page, pageSize: $pageSize}
    filters: {animation_company: {key: {eq: $companyKey}}, slug: {ne: $slugToExclude}}
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
export const GetClubBySlugDocument = new TypedDocumentString(`
    query GetClubBySlug($slug: String!, $locale: I18NLocaleCode!) {
  clubs(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        ...ClubPreview
        workingDays {
          day
        }
        about
        food
        phoneNumber
        socialLinks {
          socialLink
          icon {
            ...StrapiImage
          }
        }
        services {
          data {
            attributes {
              icon {
                ...StrapiImage
              }
              text
            }
          }
        }
      }
    }
  }
}
    fragment ClubPreview on Club {
  slug
  image {
    ...StrapiImage
  }
  clubName
  location
  workingTime {
    startTime
    endTime
  }
  totalComments
  averageRating
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetClubBySlugQuery, GetClubBySlugQueryVariables>;
export const GetClubsByDaysDocument = new TypedDocumentString(`
    query GetClubsByDays($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $day: String) {
  clubs(
    locale: $locale
    filters: {workingDays: {day: {eq: $day}}}
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      attributes {
        ...ClubPreview
      }
    }
  }
}
    fragment ClubPreview on Club {
  slug
  image {
    ...StrapiImage
  }
  clubName
  location
  workingTime {
    startTime
    endTime
  }
  totalComments
  averageRating
}
fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
    }
  }
}`) as unknown as TypedDocumentString<GetClubsByDaysQuery, GetClubsByDaysQueryVariables>;
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
  description
  mapUrl
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
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
  areas(locale: $locale, sort: "index:asc") {
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
  categories(locale: $locale, sort: "index:asc") {
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
  animationCompanies(sort: "index:asc") {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetAnimationCompaniesQuery, GetAnimationCompaniesQueryVariables>;
export const GetLanguagesDocument = new TypedDocumentString(`
    query GetLanguages($locale: I18NLocaleCode!) {
  languages(locale: $locale, sort: "index:asc") {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const GetCarClassesDocument = new TypedDocumentString(`
    query GetCarClasses($locale: I18NLocaleCode!) {
  carClasses(locale: $locale) {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCarClassesQuery, GetCarClassesQueryVariables>;
export const GetPhotographyStylesDocument = new TypedDocumentString(`
    query GetPhotographyStyles($locale: I18NLocaleCode!) {
  photographyStyles(locale: $locale) {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetPhotographyStylesQuery, GetPhotographyStylesQueryVariables>;
export const GetLocationsDocument = new TypedDocumentString(`
    query GetLocations($locale: I18NLocaleCode!) {
  locations(locale: $locale) {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetMedicationCategoriesDocument = new TypedDocumentString(`
    query GetMedicationCategories($locale: I18NLocaleCode!) {
  medicationCategories(locale: $locale) {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetMedicationCategoriesQuery, GetMedicationCategoriesQueryVariables>;
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
  description
  mapUrl
  socialLinks {
    socialLink
    icon {
      ...StrapiImage
    }
  }
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
  homeNavMenu {
    text
    link
    image {
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
  mapTitle
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
export const GetMedicationBySlugDocument = new TypedDocumentString(`
    query GetMedicationBySlug($slug: String!, $locale: I18NLocaleCode!) {
  medications(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        ...Medication
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
fragment Medication on Medication {
  slug
  name
  price
  image {
    ...StrapiImage
  }
  analogs
  medication_categories {
    data {
      attributes {
        key
        value
      }
    }
  }
  location
  indications {
    value
  }
  dosage {
    value
  }
  contraindications {
    value
  }
  sideEffects {
    value
  }
  storage {
    value
  }
  warnings {
    value
  }
}`) as unknown as TypedDocumentString<GetMedicationBySlugQuery, GetMedicationBySlugQueryVariables>;
export const GetMedicationsByFilterDocument = new TypedDocumentString(`
    query GetMedicationsByFilter($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $categories: [String], $nameFilter: String) {
  medications(
    locale: $locale
    pagination: {page: $page, pageSize: $pageSize}
    filters: {medication_categories: {key: {in: $categories}}, or: [{name: {contains: $nameFilter}}, {slug: {contains: $nameFilter}}]}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        ...MedicationPreview
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
fragment MedicationPreview on Medication {
  slug
  name
  price
  analogs
  image {
    ...StrapiImage
  }
  medication_categories {
    data {
      attributes {
        value
      }
    }
  }
}`) as unknown as TypedDocumentString<GetMedicationsByFilterQuery, GetMedicationsByFilterQueryVariables>;
export const GetMedicationsNamesDocument = new TypedDocumentString(`
    query GetMedicationsNames($locale: I18NLocaleCode!, $nameFilter: String) {
  medications(
    locale: $locale
    filters: {or: [{name: {contains: $nameFilter}}, {slug: {contains: $nameFilter}}]}
  ) {
    data {
      id
      attributes {
        slug
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetMedicationsNamesQuery, GetMedicationsNamesQueryVariables>;
export const GetPharmaciesPageDocument = new TypedDocumentString(`
    query GetPharmaciesPage($locale: I18NLocaleCode!) {
  pharmaciesPage(locale: $locale) {
    data {
      attributes {
        ...PharmaciesPage
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
fragment PharmaciesPage on PharmaciesPage {
  mapTitle
  medicationsTitle
  supportServicesTitle
  embassiesDescription
  assistanceDescription
  emergencyDescription
  categories {
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
  filterTitle
}`) as unknown as TypedDocumentString<GetPharmaciesPageQuery, GetPharmaciesPageQueryVariables>;
export const GetPhotographerBySlugDocument = new TypedDocumentString(`
    query GetPhotographerBySlug($slug: String!, $locale: I18NLocaleCode!) {
  photographers(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        ...Photographer
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
fragment Photographer on Photographer {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  socialLinks {
    icon {
      ...StrapiImage
    }
    socialLink
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
  photography_styles {
    data {
      attributes {
        key
        value
      }
    }
  }
  locations {
    data {
      attributes {
        key
        value
      }
    }
  }
  description
  averageRating
  totalComments
}
fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}`) as unknown as TypedDocumentString<GetPhotographerBySlugQuery, GetPhotographerBySlugQueryVariables>;
export const GetPhotographersByFiltersDocument = new TypedDocumentString(`
    query GetPhotographersByFilters($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $sort: [String], $styles: [String], $locations: [String], $slugToExclude: String) {
  photographers(
    sort: $sort
    locale: $locale
    pagination: {page: $page, pageSize: $pageSize}
    filters: {photography_styles: {key: {in: $styles}}, locations: {key: {in: $locations}}, slug: {ne: $slugToExclude}}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      attributes {
        ...Photographer
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
fragment Photographer on Photographer {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  socialLinks {
    icon {
      ...StrapiImage
    }
    socialLink
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
  photography_styles {
    data {
      attributes {
        key
        value
      }
    }
  }
  locations {
    data {
      attributes {
        key
        value
      }
    }
  }
  description
  averageRating
  totalComments
}
fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}`) as unknown as TypedDocumentString<GetPhotographersByFiltersQuery, GetPhotographersByFiltersQueryVariables>;
export const GetPhotographersSlugsDocument = new TypedDocumentString(`
    query GetPhotographersSlugs {
  photographers {
    data {
      attributes {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetPhotographersSlugsQuery, GetPhotographersSlugsQueryVariables>;
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
    query GetCompanyPromotionCardsByFilter($areaKey: String, $category: [String], $locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $slugToExclude: String) {
  companyPromotionCards(
    locale: $locale
    filters: {area: {key: {eq: $areaKey}}, categories: {key: {in: $category}}, slug: {ne: $slugToExclude}}
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
    fragment StrapiImage on UploadFileEntityResponse {
  data {
    attributes {
      url
      alternativeText
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
  categories {
    data {
      attributes {
        key
        markerIcon {
          ...StrapiImage
        }
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
export const GetSupportServicesDocument = new TypedDocumentString(`
    query GetSupportServices($locale: I18NLocaleCode!, $page: Int, $pageSize: Int) {
  supportServices(locale: $locale, pagination: {page: $page, pageSize: $pageSize}) {
    meta {
      pagination {
        total
      }
    }
    data {
      attributes {
        ...SupportService
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
fragment SupportService on SupportService {
  name
  phoneNumber
  location
  mapLink
  image {
    ...StrapiImage
  }
  category
}`) as unknown as TypedDocumentString<GetSupportServicesQuery, GetSupportServicesQueryVariables>;
export const GetDriverBySlugDocument = new TypedDocumentString(`
    query GetDriverBySlug($slug: String!, $locale: I18NLocaleCode!) {
  taxiDrivers(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        slug
        name
        profileImg {
          ...StrapiImage
        }
        carModel
        carName
        car_class {
          data {
            attributes {
              key
              value
              circleIcon {
                ...StrapiImage
              }
            }
          }
        }
        isNotWorking
        passengersNum
        preferences {
          value
        }
        schedule {
          dayOfWeek
          timeSlots {
            startTime
            endTime
          }
        }
        socialLinks {
          icon {
            ...StrapiImage
          }
          socialLink
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
        taxi_services {
          data {
            attributes {
              title
              subTitle
              icon {
                ...StrapiImage
              }
            }
          }
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
}
fragment Comment on CommentEntity {
  id
  attributes {
    text
    rating
    createdAt
  }
}`) as unknown as TypedDocumentString<GetDriverBySlugQuery, GetDriverBySlugQueryVariables>;
export const GetDriversByFiltersDocument = new TypedDocumentString(`
    query GetDriversByFilters($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $sort: [String], $languageKeys: [String], $timeFilters: ComponentComponentsWorkScheduleFiltersInput, $carClasses: [String], $slugToExclude: String) {
  taxiDrivers(
    sort: $sort
    locale: $locale
    pagination: {page: $page, pageSize: $pageSize}
    filters: {languages: {key: {in: $languageKeys}}, schedule: $timeFilters, car_class: {key: {in: $carClasses}}, slug: {ne: $slugToExclude}}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      attributes {
        ...TaxiDriverPreview
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
fragment TaxiDriverPreview on TaxiDriver {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  schedule {
    dayOfWeek
    timeSlots {
      startTime
      endTime
    }
  }
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
  car_class {
    data {
      attributes {
        value
        icon {
          ...StrapiImage
        }
      }
    }
  }
  totalComments
  averageRating
  isNotWorking
}`) as unknown as TypedDocumentString<GetDriversByFiltersQuery, GetDriversByFiltersQueryVariables>;
export const GetDriversSlugsDocument = new TypedDocumentString(`
    query GetDriversSlugs {
  taxiDrivers {
    data {
      attributes {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetDriversSlugsQuery, GetDriversSlugsQueryVariables>;
export const GetTourGuideBySlugDocument = new TypedDocumentString(`
    query GetTourGuideBySlug($slug: String!, $locale: I18NLocaleCode!) {
  tourGuides(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        ...TourGuide
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
}
fragment TourGuide on TourGuide {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  socialLinks {
    icon {
      ...StrapiImage
    }
    socialLink
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
  tours
  description
  averageRating
  totalComments
}`) as unknown as TypedDocumentString<GetTourGuideBySlugQuery, GetTourGuideBySlugQueryVariables>;
export const GetTourGuidesByFiltersDocument = new TypedDocumentString(`
    query GetTourGuidesByFilters($locale: I18NLocaleCode!, $page: Int, $pageSize: Int, $sort: [String], $slugToExclude: String) {
  tourGuides(
    sort: $sort
    locale: $locale
    pagination: {page: $page, pageSize: $pageSize}
    filters: {slug: {ne: $slugToExclude}}
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      attributes {
        ...TourGuide
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
}
fragment TourGuide on TourGuide {
  slug
  name
  profileImg {
    ...StrapiImage
  }
  socialLinks {
    icon {
      ...StrapiImage
    }
    socialLink
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
  tours
  description
  averageRating
  totalComments
}`) as unknown as TypedDocumentString<GetTourGuidesByFiltersQuery, GetTourGuidesByFiltersQueryVariables>;
export const GetTourGuidesSlugsDocument = new TypedDocumentString(`
    query GetTourGuidesSlugs {
  tourGuides {
    data {
      attributes {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetTourGuidesSlugsQuery, GetTourGuidesSlugsQueryVariables>;