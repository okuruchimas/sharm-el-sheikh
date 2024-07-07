import styled from "@emotion/styled";
import { SubTitle } from "../../../layout/subtitle";
import Swiper from "./swiper";
import { PromCardI } from "../../../../pages/api/prom-cards";
import Link from "next/link";

const PromCard = ({ discount, images, location, title, slug }: PromCardI) => {
  return (
    <Wrap>
      <SwiperWrapper>
        <Swiper images={images} discount={discount} />
      </SwiperWrapper>
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
          <Link href={slug || ""}>
            <IconButton
              src={"icons/promotions-section/circle-arrow-outlined.svg"}
              alt="promotions-button"
            />
          </Link>
        </Down>
      </DownWrap>
    </Wrap>
  );
};

export default PromCard;

const Wrap = styled.div`
  height: 420px;
`;

const SwiperWrapper = styled.div`
  height: 60%;
  width: 100%;
  border-radius: 16px 16px 0 0;
  position: relative;
`;

const DownWrap = styled.div`
  height: 40%;
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

const IconButton = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
  transition: transform 0.3s ease;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 30px;
    width: 30px;
  }

  &:active,
  &:focus {
    transform: scale(1.3);
  }
`;
