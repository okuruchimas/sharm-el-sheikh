import React from "react";
import Link from "next/link";
import { EventCardI } from "./types";
import styled from "@emotion/styled";

const EventCard = ({ logo, date, title, price, location }: EventCardI) => {
  return (
    <Wrap>
      <Logo src={logo} alt="" />
      <InfoWrap>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <BottomWrap>
          <BottomText>Price: {price} $</BottomText>
          <BottomText>Location: {location}</BottomText>
        </BottomWrap>
      </InfoWrap>
      <Link href="/">
        <LinkIcon src="images/icons/link.webp" />
      </Link>
    </Wrap>
  );
};

export default EventCard;

const Wrap = styled.div`
  width: 500px;
  max-width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 106px;
  width: 106px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 80px;
    width: 80px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-left: 16px;
  margin-right: auto;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    margin-left: 8px;
    padding: 4px 0;
  }
`;

const Date = styled.span`
  font-family: Comfortaa, serif;
  color: ${({ theme: { colors } }) => colors.grey1};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  font-weight: 500;
  margin-bottom: 4px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS14};
    font-weight: 600;
  }
`;

const Title = styled.h2`
  font-family: Comfortaa, serif;
  color: ${({ theme: { colors } }) => colors.black1};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS24};
  font-weight: 700;
  margin: 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
    font-weight: 600;
  }
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    gap: 4px;
  }
`;

const BottomText = styled.span`
  font-family: Comfortaa, serif;
  color: ${({ theme: { colors } }) => colors.grey2};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  font-weight: 600;
  width: max-content;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: auto;
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS12};
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.grey3};
  }
`;

const LinkIcon = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
  align-self: baseline;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 30px;
    width: 30px;
  }
`;
