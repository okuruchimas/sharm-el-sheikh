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

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 155px;
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 144px;
  height: 36px;
  background-color: ${({ theme: { colors } }) => colors.white2};
  padding: 8px 16px;
  border-radius: 12px;
  font-family: Comfortaa, serif;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 48px;
    height: 24px;
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
  }
`;

const NextSlideButton = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  right: 16px;
  height: 40px;
  width: 40px;
  background: ${({ theme: { colors } }) => colors.grey4};
  border-radius: 100px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
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
  background-color: ${({ theme: { colors } }) => colors.blue4};
  border: 1px solid ${({ theme: { colors } }) => colors.blue5};
  border-top-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px 24px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 10px;
    height: 122px;
    gap: 4px;
  }
`;

const UpSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const DownSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Title = styled.h4`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS24};
  color: ${({ theme: { colors } }) => colors.blue};
  margin: 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
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

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 18px;
    width: 18px;
  }
`;

const RatingPoints = styled.span`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS24};
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
  align-items: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 18px;
  }
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
