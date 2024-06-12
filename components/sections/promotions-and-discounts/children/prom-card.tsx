import { PromCardI } from "./types";
import styled from "@emotion/styled";

const PromCard = ({ photo, location, title }: PromCardI) => {
  return (
    <Wrap>
      <UpWrap>
        <Discount>30% discount</Discount>
        <NextSlideButton onClick={() => console.log("click")}>
          <img
            src={"images/icons/prom-disc-section/next-slide.svg"}
            alt={"next-slide-button"}
          />
        </NextSlideButton>
        <img src={photo} alt={title} />
      </UpWrap>
      <DownWrap>
        <UpSection>
          <Title>{title}</Title>
          <Rating>
            <RatingStar>
              <img
                src={"images/icons/prom-disc-section/star-rating.svg"}
                alt={"star-rating"}
              />
            </RatingStar>
            <RatingPoints>4.5 (600)</RatingPoints>
          </Rating>
        </UpSection>
        <DownSection>
          <Location>
            <img src={"images/icons/prom-disc-section/location.svg"} />
            <LocationPlace>{location}</LocationPlace>
          </Location>
          <Button>
            <img
              src={"images/icons/prom-disc-section/button.svg"}
              alt={"prom-disc-button"}
            />
          </Button>
        </DownSection>
      </DownWrap>
    </Wrap>
  );
};

export { PromCard };

const Wrap = styled.div`
  width: 100%;
  margin: 0;
`;

const UpWrap = styled.div`
  border-radius: 16px 16px 0 0;
  position: relative;
  background-color: pink;
  img {
    width: 100%;
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 144px;
  height: 36px;
  background-color: rgba(250, 231, 214, 1);
  padding: 8px 16px;
  border-radius: 12px;
  font-family: Comfortaa, serif;
  text-align: center;
  color: rgba(5, 78, 92, 1);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextSlideButton = styled.div`
  position: absolute;
  right: 16px;
  top: calc(50% - 20px);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownWrap = styled.div`
  border-radius: 0 0 16px 16px;
  background-color: rgba(41, 169, 194, 0.06);
  border: 1px solid rgba(41, 169, 194, 1);
  border-top-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 16px 24px;
`;

const UpSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: aquamarine;
`;

const DownSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: aquamarine;
  margin-top: 16px;
`;

const Title = styled.h1`
  font-family: Comfortaa, serif;
  color: rgba(5, 78, 92, 1);
  background-color: pink;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  background-color: pink;
`;

const RatingStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const RatingPoints = styled.div`
  font-family: Comfortaa, serif;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Location = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LocationPlace = styled.div`
  font-family: Comfortaa, serif;
  margin-left: 8px;
  color: rgba(25, 28, 30, 1);
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
