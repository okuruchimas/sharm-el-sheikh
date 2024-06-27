import { PromCardI } from "./types";
import styled from "@emotion/styled";
import { useState } from "react";
import { SubTitle } from "../../../layout/subtitle";

const PromCard = ({ discount, images, location, title }: PromCardI) => {
  const [currentId, setCurrentId] = useState<number>(0);

  const next = () => {
    return setCurrentId((prev) => {
      if (images.length > prev + 1) {
        return prev + 1;
      }
      if (images.length === prev + 1) {
        return 0;
      }
      return prev;
    });
  };

  const prev = () => {
    return setCurrentId((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <Wrap>
      <UpWrap key={images[currentId].src} imgUrl={images[currentId].src}>
        <PrevSlide
          src="icons/promotions-section/next-slide.webp"
          onClick={prev}
        />
        <Promotion>{discount}</Promotion>
        <NextSlide
          src="icons/promotions-section/next-slide.webp"
          onClick={next}
        />
      </UpWrap>

      <DownWrap>
        <Up>
          <SubTitle>{title}</SubTitle>
          <RatingWrap>
            <RatingStar
              src={"icons/promotions-section/star-rating.svg"}
              alt="star-rating"
            />
            <RatingPoints>4.5&nbsp;</RatingPoints>
            <RatingViews>(600)</RatingViews>
          </RatingWrap>
        </Up>

        <Down>
          <Location>
            <LocIcon src="icons/promotions-section/location.svg" />
            <LocationPlace>{location}</LocationPlace>
          </Location>

          <Button
            src={"icons/promotions-section/button.webp"}
            alt="promotions-button"
          />
        </Down>
      </DownWrap>
    </Wrap>
  );
};

export default PromCard;

const Wrap = styled.div`
  height: 420px;
`;

const UpWrap = styled.div<{ imgUrl: string }>`
  height: 64%;
  width: 100%;
  border-radius: 16px 16px 0 0;
  position: relative;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Promotion = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.white2};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-family: Comfortaa, serif;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 24px;
    top: 10px;
    right: 10px;
    padding: 4px 12px;
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  }
`;

const NextSlide = styled.img`
  position: absolute;
  top: calc(50% - 20px);
  right: 16px;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  opacity: 0.4;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 30px;
    width: 30px;
    right: 10px;
    top: 60%;
  }
`;
const PrevSlide = styled(NextSlide)`
  position: absolute;
  top: calc(50% - 20px);
  left: 16px;
  right: unset;
  opacity: 0.4;
  transform: rotate(180deg);

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    left: 10px;
  }
`;

const DownWrap = styled.div`
  height: 36%;
  border-radius: 0 0 16px 16px;
  background-color: ${({ theme: { colors } }) => colors.blue4};
  border: 1px solid ${({ theme: { colors } }) => colors.blue5};
  border-top-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 16px 24px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 10px;
    gap: 4px;
  }
`;

const Up = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
  }
`;

const RatingStar = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 18px;
    width: 18px;
  }
`;

const RatingPoints = styled.span`
  font-family: Comfortaa, serif;
  font-weight: 600;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  }
`;

const RatingViews = styled(RatingPoints)`
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const Location = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LocIcon = styled.img`
  height: 30px;
  width: 30px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 18px;
    width: 18px;
  }
`;

const LocationPlace = styled.div`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  font-weight: 400;
  margin-left: 8px;
  color: ${({ theme: { colors } }) => colors.black1};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  }
`;

const Button = styled.img`
  height: 40px;
  width: 40px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 30px;
    width: 30px;
  }
`;
