import {
  type TaxiDriver,
  type TaxiDriverPreviewFragment,
  GetDriversSlugsDocument,
  GetDriverBySlugDocument,
  GetDriversByFiltersDocument,
} from "../../../../gql/graphql";
import { toast, ToastContainer } from "react-toastify";
// hooks
import { useTranslation } from "next-i18next";
// components
import Reviews from "../../../../components/sections/company/reviews";
import TaxiCard from "../../../../components/sections/entertainers-tour-guides/taxi-drivers/card";
import BackRoute from "../../../../components/sections/entertainers-tour-guides/children/back-route";
import ReviewForm from "../../../../components/sections/company/review";
import Placeholder from "../../../../components/sections/promotions/children/placeholder";
import TaxiServices from "../../../../components/sections/taxi-driver/taxi-services";
import WorkSchedule from "../../../../components/sections/taxi-driver/work-schedule";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import SectionsWrapper from "../../../../components/layout/sections-wrapper";
import DriverInfoSection from "../../../../components/sections/taxi-driver/driver-info-section";
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
  taxiDriver: TaxiDriver;
  similarSuggestions: { attributes: TaxiDriverPreviewFragment }[];
}

const AnimatorPage = ({
  taxiDriver: {
    name,
    slug,
    carName,
    schedule,
    carModel,
    comments,
    languages,
    car_class,
    profileImg,
    preferences,
    socialLinks,
    isNotWorking,
    taxi_services,
    passengersNum,
    averageRating,
    totalComments,
  },
  similarSuggestions,
}: Props) => {
  const { t } = useTranslation("driver");
  const { t: tCommon } = useTranslation("common");

  const categories = [
    { name: "service", label: tCommon("reviewForm.categories.service") },
    { name: "price", label: tCommon("reviewForm.categories.price") },
    { name: "quality", label: tCommon("reviewForm.categories.quality") },
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
        collectionType: "taxi-driver",
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
            href={"/entertainers-tour-guides/taxi-drivers"}
            baseRoute={`${tCommon("text.entertainersTourGuides")} / `}
            subRoute={`${t("taxiDrivers")} / `}
            name={name}
          />
          <DriverInfoSection
            name={name}
            schedule={schedule}
            imgSrs={profileImg.data?.attributes?.url || ""}
            languages={languagesMapped || []}
            socialLinks={socialLinks}
            totalComments={totalComments}
            averageRating={averageRating}
            isNotWorking={isNotWorking}
            preferences={preferences}
          />
        </div>
        <TaxiServices
          carName={carName}
          carModel={carModel}
          car_class={car_class}
          passengersNum={passengersNum}
          taxi_services={taxi_services}
        />
        <WorkSchedule schedule={schedule} />
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
                <TaxiCard key={el.attributes.slug} driver={el.attributes} />
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
  const { taxiDrivers } = await fetchData(GetDriversSlugsDocument);

  const paths = getLocalizedPaths(taxiDrivers);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: any) {
  const { slug } = params;

  const { taxiDrivers } = await fetchData(GetDriverBySlugDocument, {
    slug,
    locale,
  });

  const { taxiDrivers: suggestions } = await fetchData(
    GetDriversByFiltersDocument,
    {
      locale,
      page: 1,
      pageSize: 4,
      sort: ["averageRating:desc"],
      carClasses: [
        taxiDrivers?.data[0].attributes?.car_class?.data?.attributes?.key || "",
      ],
      slugToExclude: slug,
    },
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "driver"])),
      taxiDriver: taxiDrivers?.data[0].attributes,
      similarSuggestions: suggestions?.data,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default AnimatorPage;
