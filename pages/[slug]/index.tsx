import { toast, ToastContainer } from "react-toastify";
// hooks
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// components
import Promo from "../../components/sections/company/promo";
import Banner from "../../components/sections/home/banner";
import Button from "../../components/layout/button";
import Reviews from "../../components/sections/company/reviews";
import Services from "../../components/sections/company/services";
import PromCard from "../../components/sections/promotions/children/prom-card";
import ReviewForm from "../../components/sections/company/review";
import Placeholder from "../../components/sections/promotions/children/placeholder";
import YouTubePlayer from "../../components/layout/player";
import SectionWrapper from "../../components/layout/section-wrapper";
import SectionsWrapper from "../../components/layout/sections-wrapper";
// utils
import styled from "@emotion/styled";
import { addComment } from "../../utils/add-comment";
import { fetchData } from "../../utils/fetchApi";
// styles
import "react-toastify/dist/ReactToastify.css";
// mock
import { REVIEWS } from "../../components/sections/company/reviews/children/mock-data";
import {
  type CompanyCardFragment,
  CompanyPromotionCardDocument,
  GetPromotionCardsSlugsDocument,
  GetCompanyPromotionCardsByFilterDocument,
} from "../../gql/graphql";
// config
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
interface Props {
  card: CompanyCardFragment;
  similarSuggestions: { attributes: CompanyCardFragment }[];
}

const CompanyPage = ({ card, similarSuggestions }: Props) => {
  const router = useRouter();
  const { t } = useTranslation("company-page");
  const { t: tCommon } = useTranslation("common");

  const handleAddComment = async (
    rating: number,
    text: string,
    email: string,
  ) => {
    try {
      // await addComment(card.slug, { rating, text, email });
      // router.reload();
      console.log({ rating, text, email });
      toast.success(t("feedbackSuccess"));
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error(t("feedbackError"));
    }
  };

  return (
    <Wrap
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <Promo
        totalComments={card.totalComments}
        averageRating={card.averageRating}
        discount={card.discount}
        images={card.images}
        title={card.title}
        location={card.location ?? ""}
      />
      {card.description ? (
        <DescriptionSection>
          <span>{t("description")}</span>
          <p>{card.description}</p>
        </DescriptionSection>
      ) : null}
      {card.youTubeVideoId ? (
        <YouTubePlayer videoId={card.youTubeVideoId} />
      ) : null}
      {card.discountBanner ? (
        <Banner
          title={card.discountBanner.title || ""}
          buttonText={card.discountBanner.buttonText || t("openCard")}
          buttonLink={card.discountBanner.buttonLink || ""}
        />
      ) : null}
      {card.services?.data.length ? (
        <Services services={card.services?.data} />
      ) : null}
      {/*<Reviews comments={card.comments?.data || []} />*/}
      <Reviews comments={REVIEWS} />
      <ReviewForm handleAddComment={handleAddComment} />
      <SectionWrapper title={t("similarSuggestions")}>
        {similarSuggestions.length ? (
          <SuggestionsWrapper>
            {similarSuggestions.slice(0, 3).map((card, index) => (
              <PromCard
                averageRating={card.attributes.averageRating}
                totalComments={card.attributes.totalComments}
                slug={card.attributes.slug}
                discount={card.attributes.discount}
                images={card.attributes.images}
                title={card.attributes.title}
                location={card.attributes.location}
                key={index}
              />
            ))}
          </SuggestionsWrapper>
        ) : (
          <Placeholder title={tCommon("noDiscounts")} />
        )}
      </SectionWrapper>
      <ContactSection>
        <span>
          {card.touchText
            ? card.touchText
            : `${t("getInTouchSection.title")} ${card.title}`}
        </span>
        <Button
          text={t("getInTouchSection.buttonText")}
          backgroundColor="white"
          onClick={() => router.push(card.touchLink ?? "/")}
        />
      </ContactSection>
      <ToastContainer />
    </Wrap>
  );
};

const Wrap = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: "80px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",

  [theme.breakpoints.mobile]: {
    paddingTop: "80px",
  },
}));

const ContactSection = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: 600,
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    gap: "44px",
  },
}));

const DescriptionSection = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "16px",

  span: {
    fontSize: theme.fontSize.fontS32,
    fontWeight: 700,
    lineHeight: 1.25,
    color: theme.colors.blue,
  },

  p: {
    fontSize: theme.fontSize.fontS21,
    lineHeight: 1.5,
    letterSpacing: "0.5px",
  },

  [theme.breakpoints.mobile]: {
    span: {
      fontSize: theme.fontSize.fontS24,
    },

    p: { fontSize: theme.fontSize.fontS14, lineHeight: 1.42 },
  },
}));

const SuggestionsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));

export async function getStaticPaths() {
  const { companyPromotionCards } = await fetchData(
    GetPromotionCardsSlugsDocument,
  );

  const locales = nextI18NextConfig.i18n.locales;

  const paths = companyPromotionCards?.data.flatMap((el) => {
    return locales.map((locale) => ({
      params: { slug: el?.attributes?.slug || "" },
      locale,
    }));
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: any) {
  const { slug: slugP } = params;

  const { companyPromotionCards } = await fetchData(
    CompanyPromotionCardDocument,
    {
      slug: slugP,
      locale: locale,
    },
  );

  const category =
    companyPromotionCards?.data[0].attributes?.categories?.data[0]?.attributes
      ?.key || "";

  const { companyPromotionCards: suggestions } = await fetchData(
    GetCompanyPromotionCardsByFilterDocument,
    {
      locale,
      category,
      page: 1,
      pageSize: 3,
    },
  );

  const filteredSuggestions = suggestions?.data.filter(
    (el) => el?.attributes?.slug !== slugP,
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
      card: companyPromotionCards?.data[0]?.attributes || {},
      similarSuggestions: filteredSuggestions,
    },
  };
}

export default CompanyPage;
