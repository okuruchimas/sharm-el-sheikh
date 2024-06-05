import styled from "@emotion/styled";
import LanguageSelector from "../../../../context/LanguageSelector";
import React from "react";
import {MobNavMenu} from "../navigation/MobNavMenu";

const MobileMenu = () => {
    return (
        <MobileMenuWrapper>
            <WrapperUp>
                <Buttons>
                    <SearchButton src='images/search_button.svg'/>
                    <LanguageSelector/>
                    <ContactButton>Contact us</ContactButton>
                </Buttons>
            </WrapperUp>
            <MobNavMenu/>
        </MobileMenuWrapper>
    );
};

export {MobileMenu};


const MobileMenuWrapper = styled.div`
    background-color: #B6D5DB;
    width: 20vw;
    height: 100vh;
    margin-top: 20vh;
   
`

const WrapperUp = styled.div`
    margin-top: 5vh;
`

const Buttons = styled.div`
   display: flex;
    justify-content: space-evenly;
    align-items: center;
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