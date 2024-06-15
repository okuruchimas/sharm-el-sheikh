import Head from "next/head";
import styled from "@emotion/styled";
import Main from "../components/sections/main";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { EventCardProps } from "../components/sections/main/children/types";
import Banner from "../components/sections/banner";
import StickyContainer from "../components/layout/header/children/sticky-container";
import Promotions from "../components/sections/promotions";
import { PromCardProps } from "../components/sections/promotions/children/types";

type Props = EventCardProps & PromCardProps;

const Home = ({ eventCards, promCards }: Props) => {
  return (
    <Wrap id="/">
      <Head>
        <title>Sharm El Sheikh</title>
      </Head>
      <StickyContainer>
        <Header />
      </StickyContainer>
      {eventCards ? <Main eventCards={eventCards} /> : null}
      <SectionsWrap>
        <Promotions promCards={promCards} />
        <Banner
          imgLink="images/banner1.png"
          title="Need a Ride? Click Here to Find a Taxi Now!"
          buttonText="Find Taxi"
          isBottomContent
        />
        <Banner
          imgLink="images/banner2.png"
          title="Learn more important information"
          buttonText="Contact us"
        />
      </SectionsWrap>
      <Footer />
    </Wrap>
  );
};

export async function getStaticProps() {
  const eventCards = [
    {
      logo: "images/event-card-icon.svg",
      date: "17 May, 18:00",
      title: "Music Festival",
      price: "50",
      location: "Bahama",
    },
    {
      logo: "images/event-card-icon.svg",
      date: "18 May, 20:00",
      title: "Music Festival",
      price: "106",
      location: "Marquee",
    },
    {
      logo: "images/event-card-icon.svg",
      date: "Every Friday",
      title: "Music Festival ",
      price: "50",
      location: "Dolche Vita club",
    },
  ];

  const promCards = [
    {
      discount: "30",
      images: [
        { src: "images/prom-card-icon.svg" },
        { src: "images/banner2.png" },
        { src: "images/banner1.png" },
      ],
      title: "Rangoli",
      location: "Naama Bay",
    },
    {
      discount: "23",
      images: [
        { src: "images/banner1.png" },
        { src: "images/banner2.png" },
        { src: "images/prom-card-icon.svg" },
      ],
      title: "Rangoli",
      location: "Naama Bay",
    },
    {
      discount: "42",
      images: [
        { src: "images/banner2.png" },
        { src: "images/prom-card-icon.svg" },
        { src: "images/banner1.png" },
      ],
      title: "Rangoli",
      location: "Naama Bay",
    },
    {
      discount: "54",
      images: [
        { src: "images/prom-card-icon.svg" },
        { src: "images/banner2.png" },
        { src: "images/banner1.png" },
      ],
      title: "Rangoli",
      location: "Naama Bay",
    },
  ];

  return {
    props: {
      eventCards,
      promCards,
    },
  };
}

export default Home;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SectionsWrap = styled(Wrap)`
  width: 100%;
  padding: 80px 100px;
  gap: 80px;
  @media (max-width: 1024px) {
    padding: 32px 16px;
    gap: 32px;
  }
`;
