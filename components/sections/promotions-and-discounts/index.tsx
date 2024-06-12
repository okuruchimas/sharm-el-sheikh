import styled from "@emotion/styled";
import { PromCard } from "./children/prom-card";
import { PromCardProps } from "./children/types";

const PromotionsAndDiscounts = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <UpWrap>
        <Title>Promotions and Discounts</Title>
        <Filter>
          <FilteredCity>Sharm El Maya</FilteredCity>
          <img src={"images/icons/prom-disc-section/arrow-down.svg"} />
        </Filter>
      </UpWrap>
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
      <ButtonWrap>
        <Button>View more</Button>
      </ButtonWrap>
    </WrapSection>
  );
};

export { PromotionsAndDiscounts };

const WrapSection = styled.div`
  width: 100%;
`;

const UpWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DownWrap = styled.div`
  margin-top: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: rgba(5, 78, 92, 1);
  font-family: Comfortaa, serif;
`;

const Button = styled.button`
  width: 152px;
  height: 52px;
  padding: 16px 32px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid rgba(255, 185, 1, 1);
  background-color: rgba(254, 254, 254, 1);
  font-size: 16px;
  font-family: Comfortaa, serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba(5, 78, 92, 1);
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
`;

const Filter = styled.div`
  width: 245px;
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
