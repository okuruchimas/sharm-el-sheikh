import {
  type Animator,
  GetAnimatorBySlugDocument,
  GetAnimatorsSlugsDocument,
} from "../../../../gql/graphql";
import { toast, ToastContainer } from "react-toastify";
// hooks
import { useTranslation } from "next-i18next";
// components
import Reviews from "../../../../components/sections/company/reviews";
import ReviewForm from "../../../../components/sections/company/review";
import SectionsWrapper from "../../../../components/layout/sections-wrapper";
// constants
import { REVALIDATE_TIME } from "../../../../constants/page.constants";
// utils
import styled from "@emotion/styled";
import { addComment } from "../../../../utils/add-comment";
import { fetchData } from "../../../../utils/fetchApi";
// styles
import "react-toastify/dist/ReactToastify.css";
// config
import nextI18NextConfig from "../../../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface Props {
  animator: Animator;
}

const AnimatorPage = ({
  animator: { comments, name, slug, averageRating, totalComments },
}: Props) => {
  const { t } = useTranslation("animator");
  const { t: tCommon } = useTranslation("common");

  const categories = [
    { name: "service", label: tCommon("reviewForm.categories.service") },
    { name: "price", label: tCommon("reviewForm.categories.price") },
    { name: "quality", label: tCommon("reviewForm.categories.programQuality") },
    { name: "comm", label: tCommon("reviewForm.categories.communication") },
    { name: "prof", label: tCommon("reviewForm.categories.professionalism") },
  ];

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

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <div>
        <h1>{name}</h1>
        <h2>averageRating: {averageRating}</h2>
        <h2>totalComments: {totalComments}</h2>
        <h2>comments?.data.length: {comments?.data.length}</h2>
      </div>
      <Reviews
        title={t("reviewsSectionTitle")}
        comments={comments?.data || []}
      />
      <ReviewForm
        title={t("reviewFormTitle")}
        categories={categories}
        handleAddComment={handleAddComment}
      />
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  paddingTop: "236px",

  [theme.breakpoints.mobile]: {
    paddingTop: "80px",
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

  const data = await fetchData(GetAnimatorBySlugDocument, {
    slug,
    locale,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["animator", "common"])),
      animator: data?.animators?.data[0].attributes,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default AnimatorPage;
