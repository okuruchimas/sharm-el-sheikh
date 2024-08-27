import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { dataPromCards, type PromCardI } from "../api/prom-cards";
import { addComment, getComments, type Comment } from "../api/comments";
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
// styles
import "react-toastify/dist/ReactToastify.css";
// mock
import { REVIEWS } from "../../components/sections/company/reviews/children/mock-data";

interface Props {
  card: PromCardI;
  initialComments: Comment[];
}

const mockDescription =
  "For families, we provide a range of activities and facilities, including dedicated kids' areas and engaging animation programs, so that every member of the family can have a fun and enjoyable stay. Adventure seekers can explore the vibrant coral reefs and marine life through our guided snorkeling and diving tours.";

const CompanyPage = ({ card, initialComments }: Props) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleAddComment = async (
    rating: number,
    text: string,
    email: string,
  ) => {
    try {
      // ========= FEATURE COMING SOON =========
      // const updatedData = await addComment(
      //   card.slug || "",
      //   rating,
      //   text,
      //   email,
      // );
      // setComments(updatedData.comments);

      console.log({ rating, text, email });
      toast.success("Thank you for your feedback");
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Error adding comment");
    }
  };

  return (
    <Wrap
      url="images/background/background-gradient.svg"
      mobUrl="images/background/mobile-background-gradient.svg"
    >
      <Promo
        slug={card.slug}
        discount={card.discount}
        images={card.images}
        title={card.title}
        location={card.location}
      />
      <DescriptionSection>
        <span>Description</span>
        <p>{card.description || mockDescription}</p>
        {/* TODO: remove mock*/}
      </DescriptionSection>
      <YouTubePlayer videoId="70KWN-_YrPg" />
      <Banner
        title="To receive a discount, open this card and show it to the seller"
        buttonText="Open Card"
      />
      <Services />
      <Reviews comments={comments} />
      <ReviewForm handleAddComment={handleAddComment} />
      <Promotions
        promCards={dataPromCards}
        title="Similar Suggestions"
        disableFilters
        disableViewMore
      />
      <ContactSection>
        <span>Get in Touch with {card.title}</span>
        <Button text="Contact" backgroundColor="white" />
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

  const paths = promCards.map((el: PromCardI) => {
    return { params: { slug: el.slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const promCards = dataPromCards;

  const { slug: slugP } = params;

  const card = promCards.find(({ slug }: PromCardI) => slug === slugP);

  // ========= FEATURE COMING SOON =========
  // const reviewsData = await getComments(slugP).catch((e) => {
  //   return { comments: [] };
  // });
  // const initialComments = reviewsData.comments;

  const initialComments = REVIEWS;

  return {
    props: {
      card,
      initialComments,
    },
  };
}

export default CompanyPage;
