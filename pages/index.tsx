import Head from "next/head";
import styled from "@emotion/styled";

import Header from "../components/layout/header/Header";
import {MobileMenu} from "../components/layout/header/mobile-menu/MobileMenu";

const Home = () => {
  return (
    <Wrap id='/'>
        <Head>
            <title>Sharm El Sheikh</title>
        </Head>
        <Header/>
        <MobileMenu/>
    </Wrap>
  )
}

export default Home





const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;