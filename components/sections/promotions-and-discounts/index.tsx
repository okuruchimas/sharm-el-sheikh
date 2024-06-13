import styled from "@emotion/styled";
import { PromCard } from "./children/prom-card";
import { PromCardProps } from "./children/types";
import { useState } from "react";
import { TopPartOfSection } from "./children/top-part-of-section";

const PromotionsAndDiscounts = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <TopPartOfSection />
      <DownWrap>
        {promCards.map(({ photo, location, title }, index) => (
          <PromCard
            photo={photo}
            title={title}
            location={location}
            key={index}
          />
        ))}
      </DownWrap>
      <Button>View more</Button>
    </WrapSection>
  );
};

export { PromotionsAndDiscounts };

const WrapSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const DownWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Button = styled.button`
  width: 152px;
  height: 52px;
  margin: 0 auto;
  padding: 16px 32px;
  border-radius: 16px;
  border: 1px solid #ffb901;
  background-color: #ffffff;
  font-size: 16px;
  font-family: Comfortaa, serif;
  text-align: center;
  color: #054e5c;

  @media (max-width: 1024px) {
    display: none;
  }
`;
