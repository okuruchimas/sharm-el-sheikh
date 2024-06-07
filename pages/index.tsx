import Head from "next/head";
import styled from "@emotion/styled";

import {Header} from "../components";
import {FirstSection} from "../components/FirstSection/FirstSection";

const Home = () => {
  return (
    <Wrap id='/'>
        <Head>
            <title>Sharm El Sheikh</title>
        </Head>
        <Header/>
        <FirstSection/>
    </Wrap>
  )
}

export default Home


const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;