import Head from "next/head";
import styled from "@emotion/styled";
import { FirstSection } from "../components/sections/first-section";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

const Home = () => {
  return (
    <Wrap id="/">
      <Head>
        <title>Sharm El Sheikh</title>
      </Head>
      <Header />
      <FirstSection />
      <Footer />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
