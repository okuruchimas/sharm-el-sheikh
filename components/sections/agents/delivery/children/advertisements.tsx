import styled from "@emotion/styled";
import ShortAdd from "./short-add";
import Image from "next/image";
import type { AdvertisementFragment } from "../../../../../gql/graphql";

interface Props {
  advertisements: AdvertisementFragment[];
}

const Advertisements = ({ advertisements }: Props) => {
  return (
    <Wrapper>
      {advertisements.map((add, id) => {
        const { sellerName, title, price, location, createdAt, images } = add;
        return (
          <CardWrapper
            isFirst={id === 0}
            key={id}
            align={id % 2 === 0 ? "left" : "right"}
          >
            <Avatar>
              <Image
                width={24}
                height={24}
                src="/icons/agents/human.svg"
                alt="human icon"
              />
            </Avatar>
            <CardSection align={id % 2 === 0 ? "left" : "right"}>
              <SellerName>{sellerName}</SellerName>
              <ShortAdd
                isEven={id % 2 === 0}
                title={title}
                price={price}
                location={location}
                date={createdAt}
                imageUrl={
                  images?.data[0]?.attributes?.url ||
                  "/images/background/background-prom.svg"
                }
                imageAlt={
                  images?.data[0]?.attributes?.alternativeText || "photo of add"
                }
              />
            </CardSection>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Advertisements;

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.mobile]: {
    gap: 16,
  },
}));

const CardWrapper = styled("div")<{
  align: "left" | "right";
  isFirst: boolean;
}>(({ theme, align, isFirst }) => ({
  marginTop: isFirst ? "unset" : -78,
  display: "flex",
  flexDirection: align === "left" ? "row" : "row-reverse",
  alignSelf: align === "left" ? "flex-start" : "flex-end",
  minWidth: "554px",
  width: "100%",
  gap: 8,

  [theme.breakpoints.mobile]: {
    marginTop: "unset",
    minWidth: "100%",
    maxWidth: "100%",
    alignSelf: "center",
  },
}));

const CardSection = styled("div")<{ align: "left" | "right" }>(
  ({ theme, align }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: align === "left" ? "flex-start" : "flex-end",
    gap: 8,
    [theme.breakpoints.mobile]: {
      marginTop: "unset",

      maxWidth: "100%",
      alignSelf: "center",
    },
  }),
);

const Avatar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  minWidth: 50,
  minHeight: 50,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 185, 1, 0.08)",
  border: "1px solid",
  borderColor: theme.colors.yellow,
}));

const SellerName = styled("div")(({ theme }) => ({}));
