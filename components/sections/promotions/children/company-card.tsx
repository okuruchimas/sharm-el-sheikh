// components
import Image from "next/image";
import Swiper from "./swiper";
import TitleRating from "../../../layout/title-and-rating";
import TextAndIcon from "../../../layout/text-and-icon";
// utils
import styled from "@emotion/styled";
// types
import type { KeyboardEvent } from "react";
import type { CompanyPreviewFragment } from "../../../../gql/graphql";

type CompanyCardProps = Pick<
  CompanyPreviewFragment,
  | "discount"
  | "location"
  | "title"
  | "averageRating"
  | "totalComments"
  | "categories"
  | "images"
> & {
  time?: string;
  isPage: boolean;
  handleClick?: () => void;
  onOpenDiscount: () => void;
};
const CompanyCard = ({
  isPage,
  time,
  title,
  images,
  location,
  discount,
  totalComments,
  averageRating,
  handleClick,
  onOpenDiscount,
}: CompanyCardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && handleClick) {
      handleClick();
    }
  };

  return (
    <Wrap>
      <SwiperWrapper>
        {images ? (
          <Swiper
            images={images}
            discount={discount?.title}
            onOpenDiscount={onOpenDiscount}
          />
        ) : (
          <Image
            src="/images/background/background-prom.svg"
            alt="placeholder"
            layout="fill"
          />
        )}
      </SwiperWrapper>
      <DownWrap onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0}>
        <TitleRating
          title={title}
          averageRating={averageRating}
          totalComments={totalComments}
        />
        <Down>
          <InfoWrap>
            <TextAndIcon
              src="/icons/promotions-section/location.svg"
              text={location || ""}
            />
            {time ? (
              <TextAndIcon src="/icons/time.svg" text={time || ""} />
            ) : null}
          </InfoWrap>
          {isPage ? (
            <IconButton
              src={"/icons/promotions-section/circle-arrow-outlined.svg"}
              alt="promotions-button"
            />
          ) : null}
        </Down>
      </DownWrap>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  height: "420px",
  boxShadow: theme.shadows[0],
  backgroundColor: theme.colors.white,
  borderRadius: "16px",

  [theme.breakpoints.mobile]: {
    height: "364px",
  },
}));

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  span: {
    color: theme.colors.black,
  },
}));

const SwiperWrapper = styled("div")({
  height: "60%",
  width: "100%",
  borderRadius: "16px 16px 0 0",
  position: "relative",
  overflow: "hidden",
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
  cursor: "pointer",

  [theme.breakpoints.mobile]: {
    padding: "12px",
    gap: "4px",

    img: {
      alignSelf: "end",
    },
  },
}));

const Down = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
  },
}));

const IconButton = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",

  [theme.breakpoints.mobile]: {
    width: "30px",
    height: "30px",
  },
}));

export default CompanyCard;