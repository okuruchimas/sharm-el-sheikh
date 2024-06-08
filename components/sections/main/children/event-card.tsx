import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { EventCardI } from "./types";

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
        <LinkIcon src="images/icons/link.svg" />
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
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 106px;
  width: 106px;

  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
    margin-left: 8px;
    padding: 4px 0;
  }
`;

const Date = styled.span`
  font-family: Comfortaa, serif;
  color: #8f9193;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
  @media (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

const Title = styled.h2`
  font-family: Comfortaa, serif;
  color: #191c1e;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  @media (max-width: 1024px) {
    gap: 4px;
  }
`;

const BottomText = styled.span`
  font-family: Comfortaa, serif;
  color: #5c5f61;
  font-size: 18px;
  font-weight: 600;
  width: max-content;
  @media (max-width: 1024px) {
    width: auto;
    font-size: 12px;
    font-weight: 400;
    color: #757779;
  }
`;

const LinkIcon = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
  align-self: baseline;
  @media (max-width: 1024px) {
    height: 30px;
    width: 30px;
  }
`;
