import styled from "@emotion/styled";
import PromCard from "./children/prom-card";

import Button from "../../layout/button";
import LinkButton from "../../layout/link-button";
import Filters from "../../layout/filters";
import Background from "./children/background";
import Title from "../../layout/title";
import { PromCardProps } from "../../types/promCard";

const sortArr = [
  { display_value: "Monday", key: "monday" },
  { display_value: "Tuesday", key: "tuesday" },
  { display_value: "Wednesday", key: "wednesday" },
  { display_value: "Thursday", key: "thursday" },
  { display_value: "Friday", key: "friday" },
  { display_value: "Saturday", key: "saturday" },
  { display_value: "Sunday", key: "sunday" },
];

const Promotions = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <TopWrap>
        <Title>Promotions and Discounts</Title>

        <FiltersWrap>
          <Filters options={sortArr} />
          <MobLink>
            <LinkButton text="View more" link="/" />
          </MobLink>
        </FiltersWrap>
      </TopWrap>

      <DownWrap>
        {promCards
          .slice(0, 3)
          .map(({ discount, images, location, title }, index) => (
            <PromCard
              discount={discount}
              images={images}
              title={title}
              location={location}
              key={index}
            />
          ))}
      </DownWrap>

      {!promCards ? <Background /> : null}

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

const FiltersWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    grid-template-columns: 1fr;
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
