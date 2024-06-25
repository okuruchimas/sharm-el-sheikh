import Head from "next/head";
import styled from "@emotion/styled";
import Main from "../components/sections/main";
import Header from "../components/layout/header";
import Footer, { FooterProps } from "../components/layout/footer";
import { EventCardProps } from "../components/sections/main/children/types";
import Banner from "../components/sections/banner";
import StickyContainer from "../components/layout/header/children/sticky-container";
import Promotions from "../components/sections/promotions";
import { PromCardProps } from "../components/sections/promotions/children/types";
import Announcements from "../components/sections/announcements";
import { AnnouncementCardProps } from "../components/sections/announcements/children/types";

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
          imgLink="images/banner/banner1.png"
          title="Need a Ride? Click Here to Find a Taxi Now!"
          buttonText="Find Taxi"
          isBottomContent
        />
        <Announcements announcementsCards={announcementsCards} />
        <Banner
          imgLink="images/banner/banner2.png"
          title="Learn more important information"
          buttonText="Contact us"
        />
        <Footer socialIcons={socialIcons} />
      </SectionsWrap>
    </Wrap>
  );
};

export async function getStaticProps() {
  const eventCards = [
    {
      logo: "images/event/event-card-icon.svg",
      date: "09 Aug, 11:00",
      title: "Desert party",
      price: "30",
      location: "Dolche Vita club",
    },
    {
      logo: "images/event/event-card-icon2.svg",
      date: "04 Jul, 11:00",
      title: "Hamo Vika",
      price: "15",
      location: "Marquee",
    },
    {
      logo: "images/event/event-card-icon3.svg",
      date: "Every friday, 23:00",
      title: "Friday night",
      price: "15",
      location: "Taj Mahal Sharm",
    },
  ];

  const promCards = [
    {
      discount: "20% discount",
      images: [
        { src: "images/prom/promcard1.png" },
        { src: "images/prom/promcard2.png" },
        { src: "images/prom/promcard3.png" },
      ],
      title: "Sharm Dreams resort",
      location: "South Sinai Governorate",
    },
    {
      discount: "30% discount",
      images: [
        { src: "images/prom/promcard2.png" },
        { src: "images/prom/promcard1.png" },
        { src: "images/prom/promcard3.png" },
      ],
      title: "El Ezaby Pharmacy",
      location: "صيدلية العزبي",
    },
    {
      discount: "special gift",
      images: [
        { src: "images/prom/promcard3.png" },
        { src: "images/prom/promcard2.png" },
        { src: "images/prom/promcard1.png" },
      ],
      title: "Manny’s Burger",
      location: "61 El-Salam, Street",
    },
  ];

  const announcementsCards = [
    {
      image: "images/announce/announce-card1.webp",
      title: "Photographer in Sharm El Sheikh",
      text: "A photo session in Sharm El Sheikh in the best locations of the city will give you a storm of emotions and beautiful photos and videos as a keepsake",
      icons: [
        { iconSrc: "images/icons/footer/insta.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/telegram.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/faceBook.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/youtube.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/tiktok.svg", socialLink: "/" },
      ],
    },
    {
      image: "images/announce/announce-card2.webp",
      title: 'Team "Sea of Personnel"',
      text: "The call is free Book your photo session without prepayment! You will receive ready photos via 3 -5 days!",
      icons: [
        { iconSrc: "images/icons/footer/insta.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/telegram.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/faceBook.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/youtube.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/tiktok.svg", socialLink: "/" },
      ],
    },
    {
      image: "images/announce/announce-card3.webp",
      title: "Camel riding in Sharm El Sheikh",
      text: "Rocking peacefully across the sands on a soft-footed camel, it's the perfect way to explore the enchanting desert",
      icons: [
        { iconSrc: "images/icons/footer/insta.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/telegram.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/faceBook.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/youtube.svg", socialLink: "/" },
        { iconSrc: "images/icons/footer/tiktok.svg", socialLink: "/" },
      ],
    },
  ];

  const socialIcons = [
    { iconSrc: "images/icons/footer/insta.svg", socialLink: "/" },
    { iconSrc: "images/icons/footer/telegram.svg", socialLink: "/" },
    { iconSrc: "images/icons/footer/faceBook.svg", socialLink: "/" },
    { iconSrc: "images/icons/footer/youtube.svg", socialLink: "/" },
    { iconSrc: "images/icons/footer/tiktok.svg", socialLink: "/" },
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
  background-image: url("images/background-gradient.svg");
  background-size: cover;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 32px 16px;
    gap: 32px;
    background-image: url("images/mobile-background-gradient.svg");
  }
`;
