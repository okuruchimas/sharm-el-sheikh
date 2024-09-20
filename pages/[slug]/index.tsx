import { toast, ToastContainer } from "react-toastify";
import { dataPromCards } from "../api/prom-cards";
// hooks
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// components
import Promo from "../../components/sections/company/promo";
import Banner from "../../components/sections/home/banner";
import Button from "../../components/layout/button";
import Reviews from "../../components/sections/company/reviews";
import Services from "../../components/sections/company/services";
import ReviewForm from "../../components/sections/company/review";
import Promotions from "../../components/sections/promotions";
import YouTubePlayer from "../../components/layout/player";
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
} from "../../gql/graphql";
// config
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
interface Props {
  card: CompanyCardFragment;
}

const CompanyPage = ({ card }: Props) => {
  const router = useRouter();
  const { t } = useTranslation("company-page");

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
      {card.services ? <Services services={card.services?.data} /> : null}
      {/*<Reviews comments={card.comments?.data || []} />*/}
      <Reviews comments={REVIEWS} />
      <ReviewForm handleAddComment={handleAddComment} />
      <Promotions
        promCards={dataPromCards}
        title={t("similarSuggestions")}
        disableFilters
        disableViewMore
      />
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

export async function getStaticPaths() {
  const promCards = dataPromCards;

  const locales = nextI18NextConfig.i18n.locales;

  const paths = promCards.flatMap((el: CompanyCardFragment) => {
    return locales.map((locale) => ({
      params: { slug: el.slug },
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

  const data = await fetchData(CompanyPromotionCardDocument, {
    slug: slugP,
    locale: locale,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
      card: data.companyPromotionCards?.data[0]?.attributes || {},
    },
  };
}

export default CompanyPage;
