import Link from "next/link";
import styled from "@emotion/styled";

const navMenu: { text: string; to: string }[] = [
    {text: "Hotspots", to: "hotspots"},
    {text: "Retail Outlets", to: "retailOutlets"},
    {text: "Emergency Services", to: "emergencyServices"},
    {text: "Community", to: "community"},
    {text: "Promotions", to: "promotions"},
    {text: "Entertainers & Tour Guides", to: "tourGuides"},
];

const MobNavMenu = () => {
    return (
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
    );
};

export {MobNavMenu};

const WrapperDown = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
`

const ItemList = styled.text`
    cursor: pointer;
    font-size: 1.1vw;
    font-family: Comfortaa,serif;
    color: #054E5C;
    margin: 1.5vw;
`