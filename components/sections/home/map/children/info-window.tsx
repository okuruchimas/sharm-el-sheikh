// components
import Image from "next/image";
import Rating from "../../../../layout/rating";
// utils
import styled from "@emotion/styled";
// types
import type { FC } from "react";
import { PromCardI } from "../../../../../pages/api/prom-cards";

type InfoWindowProps = {
  location: PromCardI;
};

const InfoWindow: FC<InfoWindowProps> = ({ location }) => (
  <InfoWindowContent>
    <Image
      src={`/${location?.images[0].src}`}
      alt={location.title}
      width={172}
      height={113}
    />
    <DetailsWrapper>
      <NameRatingWrapper>
        <Name>{location.title}</Name>
        <RatingWrapper>
          <Rating points={4.5} users={660} />
        </RatingWrapper>
      </NameRatingWrapper>
      <LocationWrapper>
        <Image
          src="/icons/promotions-section/location.svg"
          alt="location-icon"
          width={14}
          height={14}
        />
        <LocationText>{location.location}</LocationText>
      </LocationWrapper>
    </DetailsWrapper>
  </InfoWindowContent>
);

const InfoWindowContent = styled("div")(({ theme }) => ({
  maxWidth: "172px",
  borderRadius: "8px",
  boxShadow: `1px 1px 16px ${theme.colors.black1}`,
  overflow: "hidden",
  backgroundColor: theme.colors.white3,

  [theme.breakpoints.mobile]: {
    borderRadius: "12px",
    maxWidth: "152px",
  },
}));

const DetailsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "8px 8px",
  justifyContent: "space-between",
  gap: "4px",
  backgroundColor: theme.colors.white3,

  [theme.breakpoints.mobile]: {
    padding: "10px 8px",
  },
}));

const NameRatingWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    gap: "4px",
  },
}));

const Name = styled("div")(({ theme }) => ({
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS12,
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.1px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const LocationWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const LocationText = styled("span")(({ theme }) => ({
  fontSize: theme.fontSize.fontS10,
  color: theme.colors.black1,
  marginLeft: "4px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const RatingWrapper = styled("div")(({ theme }) => ({
  span: { fontSize: theme.fontSize.fontS10 },

  [theme.breakpoints.mobile]: {
    span: { fontSize: theme.fontSize.fontS12 },
  },

  "& .image-wrapper": {
    width: "12px",
    height: "12px",
  },
}));

export default InfoWindow;
