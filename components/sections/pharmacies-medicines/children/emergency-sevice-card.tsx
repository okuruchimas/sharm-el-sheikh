import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
import TextAndIcon from "../../../layout/text-and-icon";
// utils
import styled from "@emotion/styled";
import NextImage from "../../../layout/image";
import type { KeyboardEvent } from "react";

interface MedicationCardProps {
  title: string;
  imgSrc: string;
  phoneNum: string;
  location: string;
  onClick?: () => void;
}

const EmergencyServiceCard = ({
  title,
  imgSrc,
  phoneNum,
  location,
  onClick,
}: MedicationCardProps) => {
  const { t } = useTranslation("medications");

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onClick) {
      onClick();
    }
  };

  return (
    <Wrap>
      <StyledImage src={imgSrc} loading="lazy" height={265} width={266} />
      <InfoWrap>
        <CardTitle>{title}</CardTitle>
        <TextAndIcon fontSize="18px" src="/icons/phone.svg" text={phoneNum} />
        <TextAndIcon
          fontSize="18px"
          src="/icons/promotions-section/location.svg"
          text={location}
        />
        <MapLink
          onClick={onClick ? () => onClick() : undefined}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <NextImage
            src="/icons/arrow-up.svg"
            alt={t("showOnMap")}
            width="24px"
            height="24px"
          />
          <span>{t("showOnMap")}</span>
        </MapLink>
      </InfoWrap>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 250,
  background: theme.colors.white,
  borderRadius: 16,
  position: "relative",
  boxShadow: theme.shadows[3],
}));

const CardTitle = styled("h3")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: "0",
  marginBottom: "4px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    marginBottom: "8px",
  },
}));

const StyledImage = styled(Image)({
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  objectFit: "cover",
  height: "54%",
});

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
  gap: 12,
  height: "auto",
  maxHeight: "50%",
  backgroundColor: theme.colors.white,
  borderRadius: 16,
  ".icon-text": {
    color: theme.colors.black,
  },
}));

const MapLink = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: theme.colors.blue,
  alignSelf: "end",
  cursor: "pointer",
}));

export default EmergencyServiceCard;
