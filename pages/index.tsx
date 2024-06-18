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
import { FooterProps } from "../components/layout/footer/children/types";

type Props = EventCardProps & PromCardProps & FooterProps;

const Home = ({ eventCards, promCards, socialIcons }: Props) => {
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
        <Footer socialIcons={socialIcons} />
      </SectionsWrap>
    </Wrap>
  );
};

export async function getStaticProps() {
  const eventCards = [
    {
      logo: "images/event-card-icon.svg",
      date: "09 Aug, 11:00",
      title: "Desert party",
      price: "30",
      location: "Dolche Vita club",
    },
    {
      logo: "images/event-card-icon2.svg",
      date: "04 Jul, 11:00",
      title: "Hamo Vika",
      price: "15",
      location: "Marquee",
    },
    {
      logo: "images/event-card-icon3.svg",
      date: "Every friday, 23:00",
      title: "Friday night",
      price: "15",
      location: "Taj Mahal Sharm",
    },
  ];

  const promCards = [
    {
      discount: "20",
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
  @media (max-width: 1024px) {
    padding: 32px 16px;
    gap: 32px;
  }
`;
