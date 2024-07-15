// components
import Link from "next/link";
import NextImage from "../../../../layout/Image";
// utils
import styled from "@emotion/styled";
// types
import type { EventCardI } from "./types";

const EventCard = ({ logo, date, title, price, location }: EventCardI) => {
  return (
    <Wrap>
      <NextImage
        src={`/${logo}`}
        alt={logo}
        width="106px"
        height="106px"
        mWidth="80px"
        mHeight="80px"
      />
      <InfoWrap>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <BottomWrap>
          <BottomText>Price: {price} $</BottomText>
          <BottomText>Location: {location}</BottomText>
        </BottomWrap>
      </InfoWrap>
      <Link href="/">
        <LinkIcon src="icons/main-section/circle-arrow.svg" alt="Link" />
      </Link>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "500px",
  maxWidth: "100%",
  padding: "16px",
  borderRadius: "16px",
  backgroundColor: theme.colors.white,

  [theme.breakpoints.mobile]: {
    width: "100%",
  },
}));

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px 0",
  marginLeft: "16px",
  marginRight: "auto",

  [theme.breakpoints.mobile]: {
    marginLeft: "8px",
    padding: "4px 0",
  },
}));

const Date = styled("span")(({ theme }) => ({
  fontWeight: "500",
  color: theme.colors.grey1,
  fontSize: theme.fontSize.fontS18,
  marginBottom: "4px",

  [theme.breakpoints.mobile]: {
    fontWeight: "600",
    fontSize: theme.fontSize.fontS14,
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontWeight: "700",
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.black1,
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontWeight: "600",
    fontSize: theme.fontSize.fontS16,
  },
}));

const BottomWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "8px",

  [theme.breakpoints.mobile]: {
    gap: "4px",
  },
}));

const BottomText = styled("h4")(({ theme }) => ({
  margin: 0,
  fontWeight: "600",
  fontSize: theme.fontSize.fontS18,
  color: theme.colors.grey2,
  width: "max-content",

  [theme.breakpoints.mobile]: {
    width: "auto",
    fontWeight: "400",
    fontSize: theme.fontSize.fontS12,
  },
}));

const LinkIcon = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",
  alignSelf: "baseline",
  transition: "scale 0.3s ease",
  borderRadius: "50%",

  boxShadow: "0 1px 3px 1px #00000026, 0 1px 2px 0 #0000004d",

  [theme.breakpoints.mobile]: {
    height: "30px",
    width: "30px",
  },

  "&:active, &:focus": {
    scale: "1.3",
  },
}));

export default EventCard;
