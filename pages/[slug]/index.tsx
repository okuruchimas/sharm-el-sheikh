import { fetchAPI } from "../../utils/fetchApi";
import { dataPromCards, PromCardI } from "../api/prom-cards";
import styled from "@emotion/styled";
import SectionsWrapper from "../../components/layout/section-wrapper";

interface Props {
  card: PromCardI;
}
const CardPage = ({ card }: Props) => {
  return (
    <Wrap
      url="images/background/background-gradient.svg"
      mobUrl="images/background/mobile-background-gradient.svg"
    >
      <h1>{card.title}</h1>
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

  const { slug } = params;

  const card = promCards.find(({ slug }: PromCardI) => slug === slug);

  return {
    props: {
      card,
    },
  };
}

export default CardPage;
