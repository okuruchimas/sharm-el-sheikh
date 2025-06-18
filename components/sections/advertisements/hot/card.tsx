import styled from "@emotion/styled";
import Image from "next/image";
import TextAndIcon from "../../../layout/text-and-icon";
import { formatDate } from "../../../../utils/formateDate";
import { AdvertisementFragment } from "../../../../gql/graphql";

const OfferCard = ({
  images,
  title,
  description,
  category,
  price,
  location,
  createdAt,
}: AdvertisementFragment) => {
  const imageUrl =
    images?.data[0]?.attributes?.url ||
    "/images/background/background-prom.svg";

  return (
    <Card>
      <TopContent>
        <ImageWrap>
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          <VipStar>
            <Image
              src="/icons/starg.svg"
              alt="star"
              width={20}
              height={20}
              objectFit="cover"
            />
          </VipStar>
        </ImageWrap>
        <Title>{title}</Title>
        <Details>
          <TextAndIcon
            src="/icons/promotions-section/location.svg"
            text={location || ""}
          />
          <TextAndIcon src="/icons/cash.svg" text={price || ""} />
          <TextAndIcon
            src="/icons/time.svg"
            text={formatDate(createdAt) || ""}
          />
        </Details>
      </TopContent>
      <Content>
        <CategoryTag>{category}</CategoryTag>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};

export default OfferCard;

const Card = styled.div(({ theme }) => ({
  borderRadius: 16,
  overflow: "hidden",
  background: theme.colors.white,
  border: "1px solid",
  borderColor: theme.colors.yellow,
  display: "flex",
  flexDirection: "row",
  padding: "16px",
  gap: 16,

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    padding: "12px",
    maxHeight: 612,
    minHeight: 612,
  },
}));

const ImageWrap = styled.div(({ theme }) => ({
  position: "relative",
  width: 268,
  height: 298,
  borderBottom: "1px solid #eee",
  img: {
    borderRadius: 16,
  },
  [theme.breakpoints.mobile]: {
    width: "100%",
    height: 220,
  },
}));

const VipStar = styled.div(({ theme }) => ({
  position: "absolute",
  top: 16,
  left: 16,
  backgroundColor: "white",
  border: "1px solid gold",
  borderRadius: "50%",
  alignContent: "center",
  textAlign: "center",
  height: 40,
  width: 40,
  fontSize: 16,
  lineHeight: 1,
}));

const Content = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
}));

const TopContent = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
}));

const CategoryTag = styled.div(({ theme }) => ({
  height: 36,
  width: "min-content",
  background: "#f7e9d3",
  color: theme.colors.blue,
  alignContent: "center",
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: 8,
  fontSize: theme.fontSize.fontS16,
}));

const Description = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
  lineHeight: "20px",

  [theme.breakpoints.mobile]: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "9",
  },
}));

const Title = styled.h3(({ theme }) => ({
  fontSize: theme.fontSize.fontS20,
  color: theme.colors.blue,
}));

const Details = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 8,
}));
