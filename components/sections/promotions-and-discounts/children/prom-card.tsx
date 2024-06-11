import { PromCardI } from "./types";
import styled from "@emotion/styled";

const PromCard = ({ photo, location, title }: PromCardI) => {
  return (
    <Wrap>
      <UpWrap>
        <img src={photo} alt={title} />
      </UpWrap>
      <DownWrap>
        <TopSection>
          <Title>{title}</Title>
          <Rating>
            <RatingStar>
              <img
                src={"images/icons/prom-star-rating.svg"}
                alt={"star-rating"}
              />
            </RatingStar>
            <RatingPoints>4.5 (600)</RatingPoints>
          </Rating>
        </TopSection>
        <BottomSection>
          <Location>
            <img src={"images/icons/prom-location.svg"} />
            <LocationPlace>{location}</LocationPlace>
          </Location>
          <Button>
            <img
              src={"images/icons/prom-button.svg"}
              alt={"prom-disc-button"}
            />
          </Button>
        </BottomSection>
      </DownWrap>
    </Wrap>
  );
};

export { PromCard };

const Wrap = styled.div`
  width: 403px;
  height: 391px;
  margin: 0;
`;

const UpWrap = styled.div`
  width: 402px;
  height: 265px;
  border-radius: 16px 16px 0 0;
`;

const DownWrap = styled.div`
  width: 402px;
  height: 126px;
  border-radius: 0 0 16px 16px;
  background-color: rgba(41, 169, 194, 0.06);
  border: 1px solid rgba(41, 169, 194, 1);
  border-top-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopSection = styled.div`
  width: 370px;
  height: 30px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: Comfortaa, serif;
  font-size: 24px;
  color: rgba(5, 78, 92, 1);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  width: 106px;
  height: 24px;
  gap: 8px;
`;

const RatingStar = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RatingPoints = styled.div`
  width: 74px;
  height: 24px;
  font-family: Comfortaa, serif;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const BottomSection = styled.div`
  width: 370px;
  height: 40px;
  margin: 0 16px 24px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Location = styled.div`
  width: 320px;
  height: 30px;
  margin: 5px 10px 5px 0;
  display: flex;
  align-items: center;
`;

const LocationPlace = styled.div`
  font-family: Comfortaa, serif;
  font-size: 16px;
  margin: 5px 181px 5px 8px;
  color: rgba(25, 28, 30, 1);
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
