import Link from "next/link";
import styled from "@emotion/styled";
import React, {FC} from "react";

import {NavButtons} from "./NavButtons";

const navMenu: { text: string; to: string }[] = [
    {text: "Hotspots", to: "hotspots"},
    {text: "Retail Outlets", to: "retailOutlets"},
    {text: "Emergency Services", to: "emergencyServices"},
    {text: "Community", to: "community"},
    {text: "Promotions", to: "promotions"},
    {text: "Entertainers & Tour Guides", to: "tourGuides"},
];

interface IProps{
    isNavbar: boolean
}

const NavMenu:FC<IProps> = ({isNavbar}) => {

    return (
        <WrapperDown isNavbar={isNavbar}>
            {isNavbar ? <NavButtons isNavbar={isNavbar}/>: null}
            {navMenu.map((item, index) => (
                <Link
                    href={item.to}
                    key={index}
                >
                    <ItemList>{item.text}</ItemList>
                </Link>
            ))}
        </WrapperDown>
    );
};
export {NavMenu};


const WrapperDown = styled.div<{isNavbar:boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1024px) {
        display: ${({ isNavbar }) => (isNavbar ? "flex" : "none")};
        flex-direction: ${({ isNavbar }) => (isNavbar ? "column" : "none")}; ;
        margin-top:  ${({ isNavbar }) => (isNavbar ? "3vh" : "none")};
        background-color: ${({ isNavbar }) => (isNavbar ? "#B6D5DB" : "none")};
        width: 100%;
        height: 80vh;
        align-items: flex-start;
        gap: 15px;
        justify-content: normal;
        padding-top: 5vh;
    }
`

const ItemList = styled.text`
    cursor: pointer;
    font-size: 1.1vw;
    margin-top: 0.5vw;
    font-family: Comfortaa, serif;
    color: #054E5C;

    @media screen and (max-width: 1024px) {
        cursor: pointer;
        font-size: 1em;
        font-family: Comfortaa, serif;
        color: #054E5C;
        margin: 4vw 10vw;
        
    }
    

`