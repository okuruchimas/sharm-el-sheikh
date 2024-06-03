import React, {useState} from 'react';
import styled from "@emotion/styled";
import Link from "next/link";
import LanguageSelector from "../../../context/LanguageSelector";
import useWindowDimensions from "../../../hooks/useWindowDimensons";
import {css, Global} from "@emotion/react";

const navMenu: { text: string; to: string }[] = [
    {text: "Hotspots", to: "hotspots"},
    {text: "Retail Outlets", to: "retailOutlets"},
    {text: "Emergency Services", to: "emergencyServices"},
    {text: "Community", to: "community"},
    {text: "Promotions", to: "promotions"},
    {text: "Entertainers & Tour Guides", to: "tourGuides"},
];

const hiddenOverflow = css`
  body {
    overflow: hidden;
  }
`;

const Header = () => {

    const [isNavbar, setIsNavbar] = useState<boolean>(false);
    const { isDesktop } = useWindowDimensions();


    return (
        <Wrap>
            <WrapperUp>
                <Link href={'/'} style={{width: '80%'}}>
                    <LogoSharlem src="images/logo.svg"/>
                </Link>
                <BurgerIcon
                    src={isNavbar ? "" : "images/burger.svg"}
                    onClick={() => console.log('kekek')}
                />
                {isNavbar && <Global styles={hiddenOverflow} />}
                <Buttons>
                    <LanguageSelector/>
                    <SearchButton src='images/search_button.svg'/>
                    <ContactButton>Contact</ContactButton>
                </Buttons>
            </WrapperUp>
            <Line src='/images/header_line.svg'/>
            <WrapperDown>
                {navMenu.map((item, index) => (
                    <Link
                        href={item.to}
                        key={index}
                    >
                        <ItemList>{item.text}</ItemList>
                    </Link>
                ))}
            </WrapperDown>
        </Wrap>
    );
};

export default Header;


const Wrap = styled.div`
    background-color: #FFB90166;
    width: 92vw;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 2vh 4vw;
    height: 10vh;
    border-radius: 0 0 30px 30px;

    @media (max-width: 960px) {
        height: 5vh;
    }
`

const LogoSharlem = styled.img`
    width: 20vw;
    
    @media screen and (max-width: 960px) {
        display: block;
        height: 4vh;
        width: auto;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const Line = styled.img`
    width: 100%;
    
    @media screen and (max-width: 960px) {
        display: none;
    }
`

const ItemList = styled.text`
    cursor: pointer;
    font-size: 1.1vw;
    margin-top: 0.5vw;  
    font-family: Comfortaa,serif;
    color: #054E5C;

    @media screen and (max-width: 960px) {
        display: none;
    }
    
`

const WrapperUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const WrapperDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Buttons = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 960px) {
        display: none;
    }

`

const SearchButton = styled.img`

`
const ContactButton = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 15px;
    border: none;
    background: #FFB901;
    font-family: Comfortaa, serif;
`
const BurgerIcon = styled.img`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    height: 2.5vh;
    width: auto;
  }
`;

