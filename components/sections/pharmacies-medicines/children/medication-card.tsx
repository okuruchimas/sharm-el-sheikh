// components
import Image from "next/image";
import TextAndIcon from "../../../layout/text-and-icon";
// utils
import styled from "@emotion/styled";
import type { KeyboardEvent } from "react";

interface MedicationCardProps {
  title: string;
  price: string;
  imgSrc: string;
  analogs: string;
  category: string;
  onClick?: () => void;
}

const MedicationCard = ({
  title,
  price,
  imgSrc,
  analogs,
  category,
  onClick,
}: MedicationCardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onClick) {
      onClick();
    }
  };

  return (
    <Wrap>
      <StyledImage src={imgSrc} loading="lazy" height={265} width={266} />
      <InfoWrap>
        <div>
          <CardTitle>{title}</CardTitle>
          <GreyText>{analogs}</GreyText>
        </div>
        <Row>
          <Category>{category}</Category>
          <TextAndIcon src="/icons/cash.svg" text={price} />
        </Row>
        <LinkIconStyled
          src="/icons/main-section/circle-arrow.svg"
          alt={title}
          onClick={onClick}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        />
      </InfoWrap>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: 470,
  width: "100%",
  minWidth: 300,
  background: theme.colors.white,
  borderRadius: 16,
  position: "relative",
  boxShadow: theme.shadows[0],
  border: `1px solid ${theme.colors.blue5}`,
}));

const LinkIconStyled = styled("img")(({ theme }) => ({
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
  height: "57%",
});

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
  height: "43%",
  maxHeight: "50%",
  borderTop: `1px solid ${theme.colors.blue5}`,
  backgroundColor: theme.colors.blue4,
}));

const GreyText = styled("div")(({ theme }) => ({
  width: "max-content",
  fontSize: theme.fontSize.fontS16,
  color: theme.colors.grey,
}));

const Category = styled("div")(({ theme }) => ({
  padding: "6px 12px",
  color: theme.colors.blue,
  backgroundColor: theme.colors.white2,
  borderRadius: "8px",
}));

const Row = styled("div")({
  display: "flex",
  justifyContent: "space-between",

  ".text-and-icon": {
    width: "unset",
  },
});

export default MedicationCard;
