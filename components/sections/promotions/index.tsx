import styled from "@emotion/styled";
import PromCard from "./children/prom-card";
import { PromCardProps } from "./children/types";
import Button from "../../layout/button";
import LinkButton from "../../layout/link-button";
import Filters from "../../layout/filters";

const Promotions = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <TopWrap>
        <Title>Promotions and Discounts</Title>

        <FiltersWrap>
          <Filters />
          <MobLink>
            <LinkButton text="View more" link="/" />
          </MobLink>
        </FiltersWrap>
      </TopWrap>

      <DownWrap>
        {promCards.map(({ discount, images, location, title }, index) => (
          <PromCard
            discount={discount}
            images={images}
            title={title}
            location={location}
            key={index}
          />
        ))}
      </DownWrap>

      <ButtonWrap>
        <Button text="View more" color="white" />
      </ButtonWrap>
    </WrapSection>
  );
};

export default Promotions;

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

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: column;
    align-items: normal;
    gap: 16px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS40};
  color: ${({ theme: { colors } }) => colors.blue};
  font-family: Comfortaa, serif;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  }
`;

const FiltersWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MobLink = styled.div`
  a,
  span {
    display: none;
  }
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    a,
    span {
      display: initial;
    }
  }
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
