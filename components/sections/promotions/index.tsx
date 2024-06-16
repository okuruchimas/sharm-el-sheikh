import styled from "@emotion/styled";
import PromCard from "./children/prom-card";
import { PromCardProps } from "./children/types";
import Filters from "./children/filters";
import Button from "../../layout/button";
import LinkButton from "../../layout/link-button";

const Promotions = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <Filters />

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
