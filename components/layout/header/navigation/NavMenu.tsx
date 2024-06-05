import Link from "next/link";
import styled from "@emotion/styled";
import {FC} from "react";

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

    console.log(isNavbar)

    return (
        <WrapperDown isNavbar={isNavbar}>
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

    @media screen and (max-width: 960px) {
        left: ${({ isNavbar }) => (isNavbar ? "100%" : "-100%")};
        display: flex;
        flex-direction: column;
        margin-top: 2vh;
        width: 100%;
        height: 100vh;
        background-color: #B6D5DB;
        transition: left 1s;
        top: 0;
        right: 0;
        bottom: 0;
    }
`

const ItemList = styled.text`
    cursor: pointer;
    font-size: 1.1vw;
    margin-top: 0.5vw;
    font-family: Comfortaa, serif;
    color: #054E5C;

    @media screen and (max-width: 960px) {
        cursor: pointer;
        font-size: 2vw;
        font-family: Comfortaa, serif;
        color: #054E5C;
        margin: 1.5vw;
    }

`