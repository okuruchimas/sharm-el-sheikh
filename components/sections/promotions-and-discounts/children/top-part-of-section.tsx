import Link from "next/link";
import styled from "@emotion/styled";

const TopPartOfSection = () => {
  return (
    <TopWrap>
      <Title>Promotions and Discounts</Title>
      <FilterWrap>
        <Filter>
          <FilteredCity>Sharm El Maya</FilteredCity>
          <img src={"images/icons/prom-disc-section/arrow-down.svg"} />
        </Filter>
        <Link href="/">
          <ViewMore src="images/icons/prom-disc-section/view-more.svg" />
        </Link>
      </FilterWrap>
    </TopWrap>
  );
};

export { TopPartOfSection };

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: normal;
    gap: 16px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  color: rgba(5, 78, 92, 1);
  font-family: Comfortaa, serif;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filter = styled.div`
  width: 246px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Comfortaa, serif;
  border: 1px solid rgba(143, 145, 147, 1);
  border-radius: 12px;

  @media (max-width: 1024px) {
    width: 167px;
    height: 42px;
  }
`;

const FilteredCity = styled.div`
  width: 130px;
  height: 20px;
  margin: 18px 65px 18px 16px;
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const ViewMore = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    cursor: pointer;
  }
`;
