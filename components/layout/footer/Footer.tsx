import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
    return (
        <Wrap>
            <hr style={{boxShadow: 'none', border: 'none', height: '1.1px', backgroundColor: '#0B7287'}}/>

            Footer
        </Wrap>
    );
};

export {Footer};

const Wrap = styled.div`
    width: 92vw;
    position: fixed;
    bottom: 0;
    padding: 2vh 4vw;
    height: 10vh;
`

