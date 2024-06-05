import React, {useState} from 'react';
import styled from "@emotion/styled";
import Link from "next/link";
import {css, Global} from "@emotion/react";

import LanguageSelector from "../../../context/LanguageSelector";
import {NavMenu} from "./navigation/NavMenu";

const hiddenOverflow = css`
  body {
    overflow: hidden;
  }
`;

const Header = () => {

    const [isNavbar, setIsNavbar] = useState<boolean>(false);

    return (
        <Wrap>
            <WrapperUp>
                <Link href={'/'} style={{width: '80%'}} >
                    <LogoSharm src="images/logo.svg"/>
                </Link>
                <BurgerIcon
                    src={isNavbar ? "images/close.svg" : "images/burger.svg"}
                    onClick={()=>setIsNavbar(prevState => !prevState)}
                />
                {isNavbar && <Global styles={hiddenOverflow}/>}
                <Buttons>
                    <LanguageSelector/>
                    <SearchButton src='images/search_button.svg'/>
                    <ContactButton>Contact us</ContactButton>
                </Buttons>
            </WrapperUp>

            <hr style={{boxShadow:'none', border: 'none', height: '1.1px', backgroundColor:'#0B7287'}}/>

            <NavMenu isNavbar={isNavbar} />
        </Wrap>
    );
};

export default Header;


const Wrap = styled.div`
    width: 92vw;
    background-color: rgba(255, 255, 255, 40%);
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

const LogoSharm = styled.img`
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



const WrapperUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        cursor: pointer;
        height: 2.5vh;
        width: auto;
    }

`;

