import {
  type Animator,
  type AnimatorPreviewFragment,
  type ComponentHeaderNavigationMenu,
  GetHeaderDocument,
  GetAnimatorBySlugDocument,
  GetAnimatorsSlugsDocument,
  GetAnimatorsByFilterDocument,
} from "../../../../gql/graphql";
import { toast, ToastContainer } from "react-toastify";
// hooks
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// components
import Link from "next/link";
import Reviews from "../../../../components/sections/company/reviews";
import ReviewForm from "../../../../components/sections/company/review";
import AnimatorCard from "../../../../components/sections/entertainers-tour-guides/animators/card";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import SectionsWrapper from "../../../../components/layout/sections-wrapper";
import AnimatorInfoSection from "../../../../components/sections/animator/animator-info-section";
import EntertainmentServiceCard from "../../../../components/sections/animator/children/entertainment-service-card";
// constants
import { REVALIDATE_TIME } from "../../../../constants/page.constants";
// utils
import styled from "@emotion/styled";
import { addComment } from "../../../../utils/add-comment";
import { fetchData } from "../../../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// styles
import "react-toastify/dist/ReactToastify.css";
// config
import nextI18NextConfig from "../../../../next-i18next.config";

interface Props {
  animator: Animator;
  navigation: ComponentHeaderNavigationMenu[];
  similarSuggestions: { attributes: AnimatorPreviewFragment }[];
}

const AnimatorPage = ({
  animator: {
    name,
    slug,
    skills,
    comments,
    languages,
    hotelName,
    profileImg,
    description,
    socialLinks,
    averageRating,
    workingAtClub,
    totalComments,
    animation_company,
    entertainmentServices,
  },
  navigation,
  similarSuggestions,
}: Props) => {
  const { t } = useTranslation("animator");
  const { t: tCommon } = useTranslation("common");
  const router = useRouter();

  const categories = [
    { name: "service", label: tCommon("reviewForm.categories.service") },
    { name: "price", label: tCommon("reviewForm.categories.price") },
    { name: "quality", label: tCommon("reviewForm.categories.programQuality") },
    { name: "comm", label: tCommon("reviewForm.categories.communication") },
    { name: "prof", label: tCommon("reviewForm.categories.professionalism") },
  ];

  const languagesMapped = languages?.data.map((el) => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || "",
    alt: el.attributes?.value || "",
  }));

  const handleAddComment = async (
    rating: number,
    text: string,
    email: string,
  ) => {
    try {
      await addComment({
        slug,
        comment: { rating, text, email },
        collectionType: "animators",
      });
      toast.success(tCommon("toasts.feedbackSuccess"));
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error(tCommon("toasts.feedbackError"));
    }
  };

  const backRoute = navigation.find((el) =>
    router.route?.includes(el?.Link || ""),
  );

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <div style={{ width: "100%" }}>
        <BackRoute>
          <Link
            href={backRoute?.Link || ""}
          >{`${t("entertainersTourGuides")} / ${t("animators")} / `}</Link>
          <span>{name}</span>
        </BackRoute>
        <AnimatorInfoSection
          imgSrs={profileImg.data?.attributes?.url || ""}
          name={name}
          languages={languagesMapped || []}
          skills={skills}
          hotelName={hotelName}
          description={description}
          socialLinks={socialLinks}
          companyName={animation_company?.data?.attributes?.value || ""}
          totalComments={totalComments}
          averageRating={averageRating}
          workingAtClub={workingAtClub}
        />
      </div>
      {entertainmentServices?.length ? (
        <SectionWrapper title={t("entertainmentServices")}>
          <SuggestionsWrapper>
            {entertainmentServices?.map((el) => (
              <EntertainmentServiceCard
                key={el?.id}
                title={el?.serviceName || ""}
                price={el?.price || ""}
                place={el?.place || ""}
                duration={el?.duration || ""}
                imgSrc={el?.image?.data?.attributes?.url || ""}
              />
            ))}
          </SuggestionsWrapper>
        </SectionWrapper>
      ) : null}
      <Reviews
        title={t("reviewsSectionTitle")}
        comments={comments?.data || []}
      />
      <ReviewForm
        title={t("reviewFormTitle")}
        categories={categories}
        handleAddComment={handleAddComment}
      />
      <SuggestionsWrapper>
        {similarSuggestions.map((el) => (
          <AnimatorCard animator={el.attributes} key={el.attributes.slug} />
        ))}
      </SuggestionsWrapper>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  paddingTop: "236px",

  [theme.breakpoints.mobile]: {
    paddingTop: "80px",
  },
}));

const SuggestionsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));

const BackRoute = styled("div")(({ theme }) => ({
  cursor: "pointer",
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.blue,
  width: "100%",
  marginBottom: "40px",

  a: {
    color: "inherit",
    opacity: 0.7,
    textDecoration: "none",

    ":hover": {
      opacity: 1,
    },
  },

  [theme.breakpoints.mobile]: {
    marginBottom: "24px",
    fontSize: theme.fontSize.fontS18,
  },
}));

export async function getStaticPaths() {
  const { animators } = await fetchData(GetAnimatorsSlugsDocument);

  const locales = nextI18NextConfig.i18n.locales;

  const paths = animators?.data.flatMap((el) => {
    return locales.map((locale) => ({
      params: { slug: el?.attributes?.slug || "" },
      locale,
    }));
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: any) {
  const { slug } = params;

  const { animators } = await fetchData(GetAnimatorBySlugDocument, {
    slug,
    locale,
  });

  const { animators: suggestions } = await fetchData(
    GetAnimatorsByFilterDocument,
    {
      locale,
      page: 1,
      pageSize: 3,
      sort: ["averageRating:desc"],
      companyKey:
        animators?.data[0].attributes?.animation_company?.data?.attributes
          ?.key || undefined,
    },
  );

  const filteredSuggestions = suggestions?.data.filter(
    (el) => el?.attributes?.slug !== slug,
  );

  const headerData = await fetchData(GetHeaderDocument, { locale });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["animator", "common"])),
      animator: animators?.data[0].attributes,
      navigation: headerData.header?.data?.attributes?.Menu,
      similarSuggestions: filteredSuggestions,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default AnimatorPage;
