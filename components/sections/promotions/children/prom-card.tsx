// libs
import Link from "next/link";
// components
import Image from "next/image";
import Swiper from "./swiper";
// utils
import styled from "@emotion/styled";
// types
import type { CompanyCardFragment } from "../../../../gql/graphql";
import TitleRating from "../../../layout/title-and-rating";

type PromCardProps = Pick<
  CompanyCardFragment,
  "discount" | "location" | "title" | "slug" | "averageRating" | "totalComments"
> & { images?: CompanyCardFragment["images"] };
const PromCard = ({
  slug,
  title,
  images,
  location,
  discount,
  totalComments,
  averageRating,
}: PromCardProps) => {
  return (
    <Wrap>
      <SwiperWrapper>
        {images ? (
          <Swiper images={images} discount={discount} />
        ) : (
          <Image
            src="/images/background/background-prom.svg"
            alt="placeholder"
            layout="fill"
          />
        )}
      </SwiperWrapper>
      <DownWrap>
        <TitleRating
          title={title}
          averageRating={averageRating}
          totalComments={totalComments}
        />
        <Down>
          <Location>
            <LocIcon
              src="/icons/promotions-section/location.svg"
              alt="Location image"
            />
            <LocationPlace>{location}</LocationPlace>
          </Location>
          <Link href={slug || ""}>
            <IconButton
              src={"/icons/promotions-section/circle-arrow-outlined.svg"}
              alt="promotions-button"
            />
          </Link>
        </Down>
      </DownWrap>
    </Wrap>
  );
};

const Wrap = styled("div")({
  height: "420px",
});

const SwiperWrapper = styled("div")({
  height: "60%",
  width: "100%",
  borderRadius: "16px 16px 0 0",
  position: "relative",
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
  },
}));

const Down = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const Location = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  height: "max-content",
});

const LocIcon = styled("img")(({ theme }) => ({
  height: "30px",
  width: "30px",

  [theme.breakpoints.mobile]: {
    height: "18px",
    width: "18px",
  },
}));

const LocationPlace = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
  fontWeight: "400",
  color: theme.colors.black,
  alignSelf: "center",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS12,
  },

  "@media (max-width: 1250px)": {
    fontSize: theme.fontSize.fontS14,
  },
}));

const IconButton = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",
  transition: "transform 0.3s ease",

  [theme.breakpoints.mobile]: {
    width: "30px",
    height: "30px",
  },

  "&:active, &:focus": {
    transform: "scale(1.3)",
  },
}));

export default PromCard;
