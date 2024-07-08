import Head from "next/head";
import styled from "@emotion/styled";
import Main from "../components/sections/main";
import Header from "../components/layout/header";
import Footer, { FooterProps } from "../components/layout/footer";
import { EventCardProps } from "../components/sections/main/children/types";
import Banner from "../components/sections/banner";
import StickyContainer from "../components/layout/header/children/sticky-container";
import Promotions from "../components/sections/promotions";
import Announcements from "../components/sections/announcements";
import FeedbackForm from "../components/sections/feedback";
import Map from "../components/sections/map";
import { AnnouncementCardProps } from "../components/sections/announcements/children/types";
import { dataPromCards, PromCardProps } from "./api/prom-cards";
import { fetchAPI } from "../utils/fetchApi";
import SectionsWrapper from "../components/layout/section-wrapper";
import LazyLoadComponent from "../components/layout/lazy-load-component";

type Props = EventCardProps &
  PromCardProps &
  AnnouncementCardProps &
  FooterProps;

const Home = ({ eventCards, promCards, announcementsCards }: Props) => {
  return (
    <Wrap id="/">
      <Head>
        <title>Sharm El Sheikh</title>
      </Head>
      {eventCards ? <Main eventCards={eventCards} /> : null}
      <SectionsWrapper
        url="images/background/background-gradient.svg"
        mobUrl="images/background/mobile-background-gradient.svg"
      >
        <LazyLoadComponent>
          <Promotions promCards={promCards} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Banner
            imgLink="images/banners/banner1.webp"
            title="Need a Ride? Click Here to Find a Taxi Now!"
            buttonText="Find Taxi"
            isBottomContent
          />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Announcements announcementsCards={announcementsCards} />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Banner
            imgLink="images/banners/banner2.webp"
            title="Learn more important information"
            buttonText="Contact us"
          />
        </LazyLoadComponent>
        {/*<LazyLoadComponent>*/}
        {/*  <Map promCards={promCards} />*/}
        {/*</LazyLoadComponent>*/}
        <LazyLoadComponent>
          <FeedbackForm />
        </LazyLoadComponent>
      </SectionsWrapper>
    </Wrap>
  );
};

export async function getStaticProps() {
  const eventCards = [
    {
      logo: "images/event-cards/event-card1.webp",
      date: "09 Aug, 11:00",
      title: "Desert party",
      price: "30",
      location: "Dolche Vita club",
    },
    {
      logo: "images/event-cards/event-card2.webp",
      date: "04 Jul, 11:00",
      title: "Hamo Vika",
      price: "15",
      location: "Marquee",
    },
    {
      logo: "images/event-cards/event-card3.webp",
      date: "Every friday, 23:00",
      title: "Friday night",
      price: "15",
      location: "Taj Mahal Sharm",
    },
  ];

  const announcementsCards = [
    {
      image: "images/announcement-cards/announce-card1.webp",
      title: "Photographer in Sharm El Sheikh",
      text: "A photo session in Sharm El Sheikh in the best locations of the city will give you a storm of emotions and beautiful photos and videos as a keepsake",
      icons: [
        { iconSrc: "icons/social-icons/instagram.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/telegram.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/facebook.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/youtube.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/tiktok.svg", socialLink: "/" },
      ],
    },
    {
      image: "images/announcement-cards/announce-card2.webp",
      title: 'Team "Sea of Personnel"',
      text: "The call is free Book your photo session without prepayment! You will receive ready photos via 3 -5 days!",
      icons: [
        { iconSrc: "icons/social-icons/instagram.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/telegram.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/facebook.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/youtube.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/tiktok.svg", socialLink: "/" },
      ],
    },
    {
      image: "images/announcement-cards/announce-card3.webp",
      title: "Camel riding in Sharm El Sheikh",
      text: "Rocking peacefully across the sands on a soft-footed camel, it's the perfect way to explore the enchanting desert",
      icons: [
        { iconSrc: "icons/social-icons/instagram.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/telegram.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/facebook.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/youtube.svg", socialLink: "/" },
        { iconSrc: "icons/social-icons/tiktok.svg", socialLink: "/" },
      ],
    },
  ];

  const promCards = dataPromCards;

  return {
    props: {
      eventCards,
      promCards,
      announcementsCards,
    },
  };
}

export default Home;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
