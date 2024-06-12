import styled from "@emotion/styled";
import { PromCard } from "./children/prom-card";
import { PromCardProps } from "./children/types";

const PromotionsAndDiscounts = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <TopWrap>
        <Title>Promotions and Discounts</Title>
        <Filter>
          <FilteredCity>Sharm El Maya</FilteredCity>
          <img src={"images/icons/prom-disc-section/arrow-down.svg"} />
        </Filter>
      </TopWrap>
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

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DownWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  color: rgba(5, 78, 92, 1);
  font-family: Comfortaa, serif;
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
`;

const Filter = styled.div`
  width: 246px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: Comfortaa, serif;
  border: 1px solid rgba(143, 145, 147, 1);
  border-radius: 12px;
`;

const FilteredCity = styled.div`
  width: 128px;
  height: 20px;
  margin: 18px 65px 18px 16px;
  font-size: 16px;
`;
