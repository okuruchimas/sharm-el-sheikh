import { dataPromCards, PromCardI } from "../api/prom-cards";
import styled from "@emotion/styled";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import Promo from "../../components/sections/company/promo";
import Banner from "../../components/sections/home/banner";
import Services from "../../components/sections/company/services";
import Reviews from "../../components/sections/company/reviews";
import ReviewForm from "../../components/sections/company/review";

interface Props {
  card: PromCardI;
}
const CompanyPage = ({ card }: Props) => {
  return (
    <Wrap
      url="images/background/background-gradient.svg"
      mobUrl="images/background/mobile-background-gradient.svg"
    >
      <h1>{card.title}</h1>
      <Promo />
      <Banner
        imgLink="images/banners/banner2.webp"
        title="To receive a discount, open this card and show it to the seller"
        buttonText="Open Card"
      />
      <Services />
      <Reviews />
      <ReviewForm />
    </Wrap>
  );
};

const Wrap = styled(SectionsWrapper)`
  min-height: 100vh;
  padding-top: 80px;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding-top: 80px;
  }
`;

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
