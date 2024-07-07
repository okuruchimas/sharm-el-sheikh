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
import { AnnouncementCardProps } from "../components/sections/announcements/children/types";
import FeedbackForm from "../components/sections/feedback";
// import Map from "../components/sections/map";
import { PromCardProps } from "../components/types/promCard";
import { Categories } from "../components/sections/map/children/constants";

type Props = EventCardProps &
  PromCardProps &
  AnnouncementCardProps &
  FooterProps;

const Home = ({
  eventCards,
  promCards,
  socialIcons,
  announcementsCards,
}: Props) => {
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
          imgLink="images/banners/banner1.webp"
          title="Need a Ride? Click Here to Find a Taxi Now!"
          buttonText="Find Taxi"
          isBottomContent
        />
        <Announcements announcementsCards={announcementsCards} />
        <Banner
          imgLink="images/banners/banner2.webp"
          title="Learn more important information"
          buttonText="Contact us"
        />
        {/*<Map promCards={promCards} />*/}
        <FeedbackForm />
        <Footer socialIcons={socialIcons} />
      </SectionsWrap>
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

  const promCards = [
    {
      id: 1,
      title: "Sharm Dreams resort",
      discount: "20% discount",
      location: "South Sinai Governorate",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.HOOKAHS,
      position: { lat: 25.28, lng: 55.328 },
    },
    {
      id: 2,
      title: "El Ezaby Pharmacy",
      discount: "30% discount",
      location: "صيدلية العزبي",
      images: [
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.HOOKAHS,
      position: { lat: 25.26, lng: 55.4129 },
    },
    {
      id: 3,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card3.webp" },
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
      ],
      category: Categories.HOOKAHS,
      position: { lat: 25.242, lng: 55.35295 },
      discount: "40% discount",
    },
    {
      id: 4,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.MEDICATIONS,
      position: { lat: 25.2826, lng: 55.3923 },
      discount: "20% discount",
    },
    {
      id: 5,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.MEDICATIONS,
      position: { lat: 25.2916, lng: 55.313 },
      discount: "20% discount",
    },
    {
      id: 6,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.MEDICATIONS,
      position: { lat: 25.25236, lng: 55.329293 },
      discount: "20% discount",
    },
    {
      id: 7,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.FRUITS,
      position: { lat: 25.269, lng: 55.389 },
      discount: "20% discount",
    },
    {
      id: 8,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.FRUITS,
      position: { lat: 25.25, lng: 55.32 },
      discount: "20% discount",
    },
    {
      id: 9,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.FRUITS,
      position: { lat: 25.2427, lng: 55.29 },
      discount: "20% discount",
    },
    {
      id: 10,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.COSMETOLOGY,
      position: { lat: 25.2826, lng: 55.3923 },
      discount: "20% discount",
    },
    {
      id: 11,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.COSMETOLOGY,
      position: { lat: 25.25213, lng: 55.326 },
      discount: "20% discount",
    },
    {
      id: 12,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.COSMETOLOGY,
      position: { lat: 25.263183, lng: 55.363 },
      discount: "20% discount",
    },
    {
      id: 13,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.SOUVENIRS,
      position: { lat: 25.273, lng: 55.36455 },
      discount: "20% discount",
    },
    {
      id: 14,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.SOUVENIRS,
      position: { lat: 25.243176, lng: 55.3154956 },
      discount: "20% discount",
    },
    {
      id: 15,
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.SOUVENIRS,
      position: { lat: 25.28, lng: 55.35 },
      discount: "20% discount",
    },
    {
      id: 16,
      title: "Sharm Dreams resort",
      location: "South Sinai Governorate",
      images: [
        { src: "images/prom-cards/prom-card1.webp" },
        { src: "images/prom-cards/prom-card2.webp" },
        { src: "images/prom-cards/prom-card3.webp" },
      ],
      category: Categories.HOOKAHS,
      position: { lat: 25.183, lng: 55.32428 },
      discount: "20% discount",
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

  const socialIcons = [
    { iconSrc: "icons/social-icons/instagram.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/telegram.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/facebook.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/youtube.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/tiktok.svg", socialLink: "/" },
  ];

  return {
    props: {
      eventCards,
      promCards,
      announcementsCards,
      socialIcons,
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
  background-image: url("images/background/background-gradient.svg");
  background-size: cover;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 32px 16px;
    gap: 32px;
    background-image: url("images/background/mobile-background-gradient.svg");
  }
`;
