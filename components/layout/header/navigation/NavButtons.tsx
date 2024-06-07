import React, {FC} from "react";
import styled from "@emotion/styled";

import LanguageSelector from "../../../../context/LanguageSelector";

interface IProps {
    isNavbar: boolean
}

const NavButtons: FC<IProps> = ({isNavbar}) => {
    return (
        <Buttons isNavbar={isNavbar}>
            <LanguageSelector/>
            <SearchButton src='images/search_button.svg'/>
            <ContactButton isNavbar={isNavbar}>Contact us</ContactButton>
        </Buttons>
    );
};

export {NavButtons};

const Buttons = styled.div<{ isNavbar: boolean }>`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;


    @media screen and (max-width: 1024px) {
        display: ${({isNavbar}) => (isNavbar ? "flex" : "none")};
        width: 100%;
        gap: 15px;
        justify-content: space-evenly;
        align-items: center;
    }

`

const SearchButton = styled.img`

`
const ContactButton = styled.button<{ isNavbar: boolean }>`
    width: 10vw;
    height: 5vh;
    border-radius: 15px;
    border: none;
    background: #FFB901;
    font-family: Comfortaa, serif;


    @media screen and (max-width: 1024px) {
        width: ${({isNavbar}) => (isNavbar ? "27%" : "none")};
    }

`