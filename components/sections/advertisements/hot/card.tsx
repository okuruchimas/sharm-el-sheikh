import styled from "@emotion/styled";
import Image from "next/image";
import TextAndIcon from "../../../layout/text-and-icon";

type OfferCardProps = {
  image: string;
  title: string;
  description: string;
  category: string;
  price: string;
  location: string;
  date: string;
};

const OfferCard = ({
  image,
  title,
  description,
  category,
  price,
  location,
  date,
}: OfferCardProps) => {
  return (
    <Card>
      <TopContent>
        <ImageWrap>
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
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
          <TextAndIcon src="/icons/time.svg" text={date || ""} />
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
  boxShadow: theme.shadows[0],
  display: "flex",
  flexDirection: "row",
  padding: "16px",
  gap: 16,
}));

const ImageWrap = styled.div({
  position: "relative",
  width: 268,
  height: 298,
  borderBottom: "1px solid #eee",
  img: {
    borderRadius: 16,
  },
});

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
