import {
  type Animator,
  type AnimatorPreviewFragment,
  GetAnimatorBySlugDocument,
  GetAnimatorsSlugsDocument,
  GetAnimatorsByFilterDocument,
  type ComponentComponentsEntertainmentService,
} from "../../../../gql/graphql";
import { toast, ToastContainer } from "react-toastify";
// hooks
import { useState } from "react";
import { useTranslation } from "next-i18next";
// components
import Modal from "../../../../components/layout/modal";
import Reviews from "../../../../components/sections/company/reviews";
import BackRoute from "../../../../components/sections/entertainers-tour-guides/children/back-route";
import ReviewForm from "../../../../components/sections/company/review";
import Placeholder from "../../../../components/sections/promotions/children/placeholder";
import AnimatorCard from "../../../../components/sections/entertainers-tour-guides/animators/card";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import SectionsWrapper from "../../../../components/layout/sections-wrapper";
import AnimatorInfoSection from "../../../../components/sections/animator/animator-info-section";
import AnimatorServicePopup from "../../../../components/sections/animator/animator-service-popup";
import EntertainmentServiceCard from "../../../../components/sections/animator/children/entertainment-service-card";
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

interface Props {
  animator: Animator;
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
  similarSuggestions,
}: Props) => {
  const [selectedService, setSelectedService] =
    useState<ComponentComponentsEntertainmentService>();
  const { t } = useTranslation("animator");
  const { t: tCommon } = useTranslation("common");

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

  const handleServiceClick =
    (data: ComponentComponentsEntertainmentService) => () => {
      setSelectedService(data);
    };

  const handlePopupClose = () => setSelectedService(undefined);

  return (
    <>
      <Wrapper
        url="/images/background/background-gradient.svg"
        mobUrl="/images/background/mobile-background-gradient.svg"
      >
        <div style={{ width: "100%" }}>
          <BackRoute
            href={"/entertainers-tour-guides/animators"}
            baseRoute={`${tCommon("text.entertainersTourGuides")} / `}
            subRoute={`${t("animators")} / `}
            name={name}
          />
          <AnimatorInfoSection
            imgSrs={profileImg.data?.attributes?.url || ""}
            name={name}
            languages={languagesMapped || []}
            skills={skills}
            hotelName={hotelName}
            description={description}
            socialLinks={socialLinks}
            companyName={animation_company?.data?.attributes?.name || ""}
            totalComments={totalComments}
            averageRating={averageRating}
            workingAtClub={workingAtClub}
          />
        </div>
        {entertainmentServices?.length ? (
          <SectionWrapper title={t("entertainmentServices")}>
            <SuggestionsWrapper>
              {entertainmentServices?.map((el, index) =>
                el ? (
                  <EntertainmentServiceCard
                    key={index}
                    title={el.serviceName}
                    price={el.price}
                    place={el.place}
                    duration={el.duration}
                    imgSrc={el.images?.data[0]?.attributes?.url || ""}
                    onClick={handleServiceClick(el)}
                  />
                ) : null,
              )}
            </SuggestionsWrapper>
          </SectionWrapper>
        ) : null}
        <Reviews
          title={tCommon("text.reviews")}
          comments={comments?.data || []}
        />
        <ReviewForm
          title={t("reviewFormTitle")}
          categories={categories}
          handleAddComment={handleAddComment}
        />
        <SectionWrapper title={tCommon("text.similarSuggestions")}>
          {similarSuggestions.length ? (
            <SuggestionsWrapper>
              {similarSuggestions.map((el) => (
                <AnimatorCard
                  animator={el.attributes}
                  key={el.attributes.slug}
                />
              ))}
            </SuggestionsWrapper>
          ) : (
            <Placeholder />
          )}
        </SectionWrapper>
      </Wrapper>
      <ToastContainer />
      {selectedService ? (
        <Modal isOpen={!!selectedService} onClose={handlePopupClose}>
          <AnimatorServicePopup
            data={selectedService}
            onClose={handlePopupClose}
          />
        </Modal>
      ) : null}
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
  const { animators } = await fetchData(GetAnimatorsSlugsDocument);

  const paths = getLocalizedPaths(animators);

  return {
    paths,
    fallback: "blocking",
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
      pageSize: 4,
      sort: ["averageRating:desc"],
      companyKey:
        animators?.data[0].attributes?.animation_company?.data?.attributes
          ?.slug || undefined,
      slugToExclude: slug,
    },
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["animator", "common"])),
      animator: animators?.data[0].attributes,
      similarSuggestions: suggestions?.data,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default AnimatorPage;
