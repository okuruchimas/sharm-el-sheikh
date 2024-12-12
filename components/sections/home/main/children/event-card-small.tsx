// hooks
import { useTranslation } from "next-i18next";
// components
import NextImage from "../../../../layout/image";
// utils
import styled from "@emotion/styled";
// types
import type { EventCardI } from "./types";
import LinkIcon from "../../../../layout/link-icon";

const EventCardSmall = ({
  logo,
  date,
  title,
  price,
  logoAlt,
  location,
  onClick,
}: EventCardI) => {
  const { t } = useTranslation("common");

  return (
    <Wrap>
      <NextImage
        src={logo}
        alt={logoAlt}
        width="106px"
        height="106px"
        mWidth="80px"
        mHeight="80px"
      />
      <InfoWrap>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <BottomWrap>
          <BottomText>{`${t("labels.price")}: ${price}`}</BottomText>
          <BottomText>{`${t("labels.location")}: ${location}`}</BottomText>
        </BottomWrap>
      </InfoWrap>
      <LinkIcon onClick={onClick} />
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

const BottomText = styled("h3")(({ theme }) => ({
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

export default EventCardSmall;
