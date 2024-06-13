import { PromCardI } from "./types";
import styled from "@emotion/styled";

const PromCard = ({ photo, location, title }: PromCardI) => {
  return (
    <Wrap>
      <UpWrap imgUrl={photo}>
        <Discount>30%</Discount>
        <NextSlideButton onClick={() => console.log("click")}>
          <img
            src={"images/icons/prom-disc-section/next-slide.svg"}
            alt={"next-slide-button"}
          />
        </NextSlideButton>
      </UpWrap>

      <DownWrap>
        <UpSection>
          <Title>{title}</Title>
          <RatingWrap>
            <RatingStar
              src={"images/icons/prom-disc-section/star-rating.svg"}
              alt="star-rating"
            />
            <RatingPoints>4.5</RatingPoints>
            <RatingViews>(600)</RatingViews>
          </RatingWrap>
        </UpSection>

        <DownSection>
          <Location>
            <LocIcon src="images/icons/prom-disc-section/location.svg" />
            <LocationPlace>{location}</LocationPlace>
          </Location>

          <Button
            src={"images/icons/prom-disc-section/button.svg"}
            alt="prom-disc-button"
          />
        </DownSection>
      </DownWrap>
    </Wrap>
  );
};

export { PromCard };

const Wrap = styled.div``;

const UpWrap = styled.div<{ imgUrl: string }>`
  height: 266px;
  width: 100%;
  border-radius: 16px 16px 0 0;
  position: relative;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1024px) {
    height: 155px;
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

  @media (max-width: 1024px) {
    width: 48px;
    height: 24px;
    font-size: 12px;
  }
`;

const NextSlideButton = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  right: 16px;
  height: 40px;
  width: 40px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;

  @media (max-width: 1024px) {
    height: 30px;
    width: 30px;
    top: calc(50% + 15px);
    right: 10px;
    img {
      height: 30px;
      width: 30px;
    }
  }
`;

const DownWrap = styled.div`
  border-radius: 0 0 16px 16px;
  background-color: rgba(41, 169, 194, 0.06);
  border: 1px solid #29a9c2;
  border-top-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px 24px;

  @media (max-width: 1024px) {
    padding: 10px;
    height: 122px;
    gap: 4px;
  }
`;

const UpSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const DownSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Title = styled.h4`
  font-family: Comfortaa, serif;
  font-size: 24px;
  color: #054e5c;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
  }
`;

const RatingStar = styled.img`
  height: 24px;
  width: 24px;

  @media (max-width: 1024px) {
    height: 18px;
    width: 18px;
  }
`;

const RatingPoints = styled.span`
  font-family: Comfortaa, serif;
  font-size: 24px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const RatingViews = styled(RatingPoints)`
  color: #8f9193;
`;

const Location = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    height: 18px;
  }
`;
const LocIcon = styled.img`
  height: 30px;
  width: 30px;

  @media (max-width: 1024px) {
    height: 18px;
    width: 18px;
  }
`;

const LocationPlace = styled.div`
  font-family: Comfortaa, serif;
  font-size: 16px;
  margin-left: 8px;
  color: #191c1e;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Button = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 1024px) {
    height: 30px;
    width: 30px;
  }
`;
