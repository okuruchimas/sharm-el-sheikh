import Header from "../components/layout/header";
import Head from "next/head";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Wrap id='/'>
        <Head>
            <title>Sharm El Sheikh</title>
        </Head>
        <Header/>
    </Wrap>
  )
}

export default Home

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;