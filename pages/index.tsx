import { dataPromCards, type PromCardProps } from "./api/prom-cards";
// components
import Head from "next/head";
import Main from "../components/sections/main";
import Loader from "../components/layout/loader";
import Promotions from "../components/sections/promotions";
import SectionsWrapper from "../components/layout/section-wrapper";
import LazyWrapper from "../components/layout/lazy-wrapper";
// utils
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
// types
import type { FooterProps } from "../components/layout/footer";
import type { EventCardProps } from "../components/sections/main/children/types";
import type { AnnouncementCardProps } from "../components/sections/announcements/children/types";

const DynamicBanner = dynamic(() => import("../components/sections/banner"), {
  loading: () => <Loader />,
});

const DynamicAnnouncements = dynamic(
  () => import("../components/sections/announcements"),
  {
    loading: () => <Loader />,
  },
);

const DynamicFeedbackForm = dynamic(
  () => import("../components/sections/feedback"),
  {
    loading: () => <Loader />,
  },
);

// const DynamicMap = dynamic(() => import('../components/sections/map'), {
//   ssr: true,
//   loading: () => <Loader />,
// });

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
        <Promotions promCards={promCards} />
        <LazyWrapper>
          <DynamicBanner
            imgLink="images/banners/banner1.webp"
            title="Need a Ride? Click Here to Find a Taxi Now!"
            buttonText="Find Taxi"
            isBottomContent
          />
        </LazyWrapper>
        <LazyWrapper minHeight={600}>
          <DynamicAnnouncements announcementsCards={announcementsCards} />
        </LazyWrapper>
        <LazyWrapper>
          <DynamicBanner
            imgLink="images/banners/banner2.webp"
            title="Learn more important information"
            buttonText="Contact us"
          />
        </LazyWrapper>
        {/*<LazyWrapper>*/}
        {/*  <DynamicMap promCards={promCards} />*/}
        {/*</LazyWrapper>*/}
        <LazyWrapper minHeight={560}>
          <DynamicFeedbackForm />
        </LazyWrapper>
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

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Home;
