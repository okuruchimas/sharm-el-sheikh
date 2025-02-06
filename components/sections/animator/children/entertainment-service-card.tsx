// components
import Image from "next/image";
import TextAndIcon from "../../../layout/text-and-icon";
// utils
import styled from "@emotion/styled";

type PromCardProps = {
  title: string;
  price: string;
  place: string;
  imgSrc: string;
  duration: string;
  groupSize?: string;
};
const EntertainmentServiceCard = ({
  price,
  title,
  place,
  imgSrc,
  duration,
  groupSize,
}: PromCardProps) => {
  return (
    <Wrap>
      <ImgWrapper>
        <Image src={imgSrc} alt="placeholder" layout="fill" />
      </ImgWrapper>
      <DownWrap>
        <CardTitle>{title}</CardTitle>
        <Down>
          <TextAndIcon
            src="/icons/promotions-section/location.svg"
            text={duration || ""}
          />
          <TextAndIcon
            src="/icons/promotions-section/location.svg"
            text={price || ""}
          />
          <TextAndIcon
            src="/icons/promotions-section/location.svg"
            text={place || ""}
          />
          {groupSize ? (
            <TextAndIcon
              src="/icons/promotions-section/location.svg"
              text={groupSize}
            />
          ) : null}
        </Down>
      </DownWrap>
    </Wrap>
  );
};

const CardTitle = styled("h3")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },

  "@media (max-width: 1250px)": {
    fontSize: theme.fontSize.fontS20,
    lineHeight: 1,
  },
}));

const Wrap = styled("div")(({ theme }) => ({
  height: "420px",
  boxShadow: theme.shadows[0],
  backgroundColor: theme.colors.white,
  borderRadius: "16px",

  [theme.breakpoints.mobile]: {
    height: "364px",
  },
}));

const ImgWrapper = styled("div")({
  height: "60%",
  width: "100%",
  borderRadius: "16px 16px 0 0",
  position: "relative",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },
});

const DownWrap = styled("div")(({ theme }) => ({
  height: "40%",
  borderRadius: "0 0 16px 16px",
  backgroundColor: theme.colors.blue4,
  border: `1px solid ${theme.colors.blue5}`,
  borderTopStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "8px",
  padding: "24px 16px",
  overflow: "hidden",

  [theme.breakpoints.mobile]: {
    padding: "12px",
    gap: "4px",

    img: {
      alignSelf: "end",
    },
  },
}));

const Down = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

export default EntertainmentServiceCard;
