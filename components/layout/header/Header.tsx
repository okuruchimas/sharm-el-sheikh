import {useState} from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import {css, Global} from "@emotion/react";

import {NavMenu,NavButtons} from "./navigation";

const Header = () => {

    const [isNavbar, setIsNavbar] = useState<boolean>(false);

    return (
        <Wrap isNavbar={isNavbar}>
            <WrapperUp>
                <Link href={'/'} style={{width: '80%'}}>
                    <Logo src="images/logo.svg"/>
                </Link>
                {isNavbar ? <Global styles={hiddenOverflow}/> : null}
                <BurgerIcon
                    src={isNavbar ? "images/icons/close.svg" : "images/icons/burger.svg"}
                    onClick={() => setIsNavbar(prevState => !prevState)}
                />
                {isNavbar ? null : <NavButtons isNavbar={isNavbar}/>}
            </WrapperUp>
            <hr style={{boxShadow: 'none', border: 'none', height: '1.1px', backgroundColor: '#0B7287' }}/>
            <NavMenu isNavbar={isNavbar}/>
        </Wrap>
    );
};

export {Header};



const hiddenOverflow = css`
    body {
        overflow: hidden;
    }
`;

const Wrap = styled.div<{ isNavbar: boolean }>`
    width: 92vw;
    background-color: rgba(255, 255, 255, 40%);
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 2vh 4vw;
    height: 12vh;
    border-radius: 0 0 30px 30px;

    @media (max-width: 1024px) {
        height: 5vh;
    }
`

const Logo = styled.img`
    width: 25vw;
    cursor: pointer;


    @media screen and (max-width: 1024px) {
        display: block;
        height: 35px;
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

const BurgerIcon = styled.img`
    display: none;


    @media screen and (max-width: 1024px) {
        display: block;
        cursor: pointer;
        width: auto;
    }

`;

