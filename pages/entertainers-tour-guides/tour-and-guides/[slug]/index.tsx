import {
  GetTourGuidesSlugsDocument,
  GetTourGuideBySlugDocument,
  GetTourGuidesByFiltersDocument,
  type TourGuideFragment,
} from "../../../../gql/graphql";
import { toast, ToastContainer } from "react-toastify";
// hooks
import { useTranslation } from "next-i18next";
// components
import Reviews from "../../../../components/sections/company/reviews";
import BackRoute from "../../../../components/sections/entertainers-tour-guides/children/back-route";
import GuideCard from "../../../../components/sections/entertainers-tour-guides/tour-and-guides/card";
import ReviewForm from "../../../../components/sections/company/review";
import Placeholder from "../../../../components/sections/promotions/children/placeholder";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import SectionsWrapper from "../../../../components/layout/sections-wrapper";
import WorkerInfoSection from "../../../../components/layout/worker-info";
// constants
import { REVALIDATE_TIME } from "../../../../constants/page.constants";
// utils
import styled from "@emotion/styled";
import { addComment } from "../../../../utils/add-comment";
import { fetchData } from "../../../../utils/fetchApi";
import { getLocalizedPaths } from "../../../../utils/get-loocalized-paths";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// styles
import "react-toastify/dist/ReactToastify.css";

interface TourGuidePageProps {
  tourGuide: TourGuideFragment;
  similarSuggestions: { attributes: TourGuideFragment }[];
}

const TourGuidePage = ({
  tourGuide: {
    name,
    slug,
    comments,
    languages,
    profileImg,
    description,
    socialLinks,
    averageRating,
    totalComments,
    tours,
  },
  similarSuggestions,
}: TourGuidePageProps) => {
  const { t } = useTranslation("entertainers-tour-guides");
  const { t: tCommon } = useTranslation("common");
  const toursMapped = tours.split(", ").map((el) => ({ value: el }));

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
        collectionType: "tour-guides",
      });
      toast.success(tCommon("toasts.feedbackSuccess"));
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error(tCommon("toasts.feedbackError"));
    }
  };

  return (
    <>
      <Wrapper
        url="/images/background/background-gradient.svg"
        mobUrl="/images/background/mobile-background-gradient.svg"
      >
        <div style={{ width: "100%" }}>
          <BackRoute
            href={"/entertainers-tour-guides/tour-and-guides"}
            baseRoute={`${tCommon("text.entertainersTourGuides")} / `}
            subRoute={`${t("tabs.tourOperators")} / `}
            name={name}
          />
          <WorkerInfoSection
            imgSrs={profileImg.data?.attributes?.url || ""}
            name={name}
            pillsTitle={`${t("tourGuide.tours")}:`}
            languages={languagesMapped || []}
            pillsText={toursMapped}
            description={description || ""}
            socialLinks={socialLinks}
            totalComments={totalComments}
            averageRating={averageRating}
          />
        </div>
        <Reviews
          title={tCommon("text.reviews")}
          comments={comments?.data || []}
        />
        <ReviewForm
          title={t("tourGuide.reviewFormTitle")}
          categories={categories}
          handleAddComment={handleAddComment}
        />
        <SectionWrapper title={tCommon("text.similarSuggestions")}>
          {similarSuggestions.length ? (
            <SuggestionsWrapper>
              {similarSuggestions.map((el) => (
                <GuideCard key={el.attributes.slug} tourGuide={el.attributes} />
              ))}
            </SuggestionsWrapper>
          ) : (
            <Placeholder />
          )}
        </SectionWrapper>
      </Wrapper>
      <ToastContainer />
    </>
  );
};

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
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

export async function getStaticPaths() {
  const { tourGuides } = await fetchData(GetTourGuidesSlugsDocument);

  const paths = getLocalizedPaths(tourGuides);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: any) {
  const { slug } = params;

  const { tourGuides } = await fetchData(GetTourGuideBySlugDocument, {
    slug,
    locale,
  });

  const { tourGuides: suggestions } = await fetchData(
    GetTourGuidesByFiltersDocument,
    {
      locale,
      page: 1,
      pageSize: 4,
      sort: ["averageRating:desc"],
      slugToExclude: slug,
    },
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "entertainers-tour-guides",
        "common",
      ])),
      tourGuide: tourGuides?.data[0].attributes,
      similarSuggestions: suggestions?.data,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default TourGuidePage;
