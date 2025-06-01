// hooks
import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
// utils
import styled from "@emotion/styled";
// types
import type { EventCardI } from "../../../home/main/children/types";

const EventCard = ({
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
    <Card>
      <ImgWrapper>
        <StyledImage src={logo} alt={logoAlt} layout="fill" objectFit="cover" />
      </ImgWrapper>
      <Details onClick={onClick}>
        <Stack>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <PriceLocation>
            <BottomText>{`${t("labels.location")}: ${location}`}</BottomText>
            <BottomText>{`${t("labels.price")}: ${price}`}</BottomText>
          </PriceLocation>
        </Stack>
        {/*<LinkIcon onClick={onClick} />*/}
      </Details>
    </Card>
  );
};

const Card = styled("div")(({ theme }) => ({
  height: "558px",
  overflow: "clip",
  borderRadius: "16px",
  boxShadow: theme.shadows[0],
  backgroundColor: theme.colors.white,

  [theme.breakpoints.mobile]: {
    height: "470px",
  },
}));

const StyledImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ImgWrapper = styled("div")(({ theme }) => ({
  height: "60%",
  width: "100%",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.mobile]: {
    height: "70%",
  },
}));

const Details = styled("div")(({ theme }) => ({
  height: "40%",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "0 0 16px 16px",
  cursor: "pointer",

  img: {
    alignSelf: "end",
  },

  [theme.breakpoints.mobile]: {
    padding: "12px",
    height: "30%",
  },
}));

const Stack = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const Date = styled("span")(({ theme }) => ({
  fontWeight: "500",
  color: theme.colors.grey,
  fontSize: theme.fontSize.fontS18,

  [theme.breakpoints.mobile]: {
    fontWeight: "600",
    fontSize: theme.fontSize.fontS14,
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontWeight: "700",
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.black1,

  [theme.breakpoints.mobile]: {
    fontWeight: "600",
    fontSize: theme.fontSize.fontS16,
  },
}));

const PriceLocation = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",

  [theme.breakpoints.mobile]: {
    gap: "4px",
  },
}));

const BottomText = styled("h3")(({ theme }) => ({
  margin: 0,
  fontWeight: "600",
  fontSize: theme.fontSize.fontS18,
  color: theme.colors.grey2,

  [theme.breakpoints.mobile]: {
    width: "auto",
    fontWeight: "400",
    fontSize: theme.fontSize.fontS12,
  },
}));

export default EventCard;
