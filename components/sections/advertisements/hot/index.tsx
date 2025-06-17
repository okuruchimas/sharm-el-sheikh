import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import OfferCard from "./card";

const TEXTS = [
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
  "Hot Offers",
];

const offerCardsData = [
  {
    image: "/images/announcement-cards/announce-card1.webp",
    title: "New iPhone 14",
    description:
      "For sale: iPhone 14 (512GB, Starlight). This phone is in pristine condition, with no visible scratches or dents, and has been used with a screen protector and case since day one. It’s fully unlocked and can be used with any carrier. The battery health is still at a strong 93%, ensuring great performance. Comes with the original box, charger, and all accessories included. The phone has never been repaired, reset, or opened.",
    category: "Electronics",
    price: "1400 $",
    location: "Meet place",
    date: "13.09.2024",
  },
  {
    image: "/images/announcement-cards/announce-card2.webp",
    title: "Dell XPS 15 Laptop",
    description:
      "For sale: Dell XPS 15 (i7, 16GB RAM, 1TB SSD). This laptop is in excellent condition, barely used, with no signs of wear or damage. It comes with Windows 11 pre-installed and has a long battery life. Perfect for work, content creation, or gaming. Includes original charger, packaging, and a protective sleeve. Device has never been opened or modified, and functions like new.",
    category: "Electronics",
    price: "1250 $",
    location: "Gent",
    date: "20.09.2024",
  },
];

const Hot = () => {
  return (
    <Wrapper>
      <MarqueeWrapper>
        <TextTrack>
          {[...TEXTS, ...TEXTS].map((text, i) => (
            <TextItem key={i}>{text}</TextItem>
          ))}
        </TextTrack>
      </MarqueeWrapper>
      <CardsWrapper>
        {offerCardsData.map((item, i) => (
          <OfferCard key={i} {...item} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Hot;

const scrollText = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
}));

const CardsWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  paddingTop: 64,
  gap: 16,
}));

const MarqueeWrapper = styled.div(({ theme }) => ({
  position: "absolute",
  left: -100,
  backgroundColor: "#ffc800",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100vw",
  height: 40,
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.mobile]: {
    left: -16,
  },
}));

const TextTrack = styled.div(({ theme }) => ({
  display: "inline-flex",
  animation: `${scrollText} 30s linear infinite`,
}));

const TextItem = styled.div(({ theme }) => ({
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "clamp(14px, 2.5vw, 22px)",
  color: "black",
  padding: "0 2vw",
  whiteSpace: "nowrap",
}));
