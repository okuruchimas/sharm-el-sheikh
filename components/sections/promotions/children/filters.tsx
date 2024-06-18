import Link from "next/link";
import styled from "@emotion/styled";
import LinkButton from "../../../layout/link-button";

const Filters = () => {
  return (
    <TopWrap>
      <Title>Promotions and Discounts</Title>

      <FilterWrap>
        <Filter>
          <FilteredCity>Sharm El Maya</FilteredCity>
          <img src={"images/icons/promotions-section/arrow-down.svg"} />
        </Filter>
        <LinkButton text="View more" link="/" />
      </FilterWrap>
    </TopWrap>
  );
};

export default Filters;

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

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;

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

const Filter = styled.div`
  width: 246px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Comfortaa, serif;
  border: 1px solid ${({ theme: { colors } }) => colors.grey1};
  border-radius: 12px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 167px;
    height: 42px;
  }
`;

const FilteredCity = styled.div`
  width: 130px;
  height: 20px;
  margin: 18px 65px 18px 16px;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
    margin: 14px 14px 14px 16px;
    text-align: center;
    display: flex;
    align-items: center;
  }
`;

const ViewMore = styled.img`
  display: none;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: block;
    cursor: pointer;
  }
`;

const ButtonWrap = styled.div`
  display: none;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
