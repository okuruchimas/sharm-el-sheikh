import styled from "@emotion/styled";
import { PromCard } from "./children/prom-card";
import { PromCardProps } from "./children/types";
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
      <ButtonWrap>
        <Button>View more</Button>
      </ButtonWrap>
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

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: none;
  }
`;

const Button = styled.button`
  width: 152px;
  height: 52px;
  margin: 0 auto;
  padding: 16px 32px;
  border-radius: 16px;
  border: 1px solid ${({ theme: { colors } }) => colors.yellow};
  background-color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  font-family: Comfortaa, serif;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.blue};
`;
