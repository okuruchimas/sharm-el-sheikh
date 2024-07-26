import { dataPromCards, PromCardI } from "../api/prom-cards";
import styled from "@emotion/styled";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import Promo from "../../components/sections/company/promo";
import Banner from "../../components/sections/home/banner";
import Services from "../../components/sections/company/services";
import Reviews from "../../components/sections/company/reviews";
import ReviewForm from "../../components/sections/company/review";
import Button from "../../components/layout/button";

interface Props {
  card: PromCardI;
}
const CompanyPage = ({
  card: { images, title, location, discount, slug },
}: Props) => {
  return (
    <Wrap
      url="images/background/background-gradient.svg"
      mobUrl="images/background/mobile-background-gradient.svg"
    >
      <Promo
        slug={slug}
        discount={discount}
        images={images}
        title={title}
        location={location}
      />
      <Banner
        title="To receive a discount, open this card and show it to the seller"
        buttonText="Open Card"
      />
      <Services />
      <Reviews />
      <ReviewForm />
      <ContactSection>
        <span>Get in Touch with {title}</span>
        <Button text="Contact" backgroundColor="white" />
      </ContactSection>
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

  return {
    props: {
      card,
    },
  };
}

export default CompanyPage;
