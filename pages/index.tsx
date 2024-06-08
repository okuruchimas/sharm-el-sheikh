import Head from "next/head";
import styled from "@emotion/styled";
import Main from "../components/sections/main";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { EventCardProps } from "../components/sections/main/children/types";

interface Props extends EventCardProps {}
const Home = ({ eventCards }: Props) => {
  return (
    <Wrap id="/">
      <Head>
        <title>Sharm El Sheikh</title>
      </Head>
      <Header />
      {eventCards ? <Main eventCards={eventCards} /> : null}
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
      title: "Festival Music Festival",
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

  return {
    props: {
      eventCards,
    },
  };
}

export default Home;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
