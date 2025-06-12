import styled from "@emotion/styled";
import ShortAdd from "./short-add";
import Image from "next/image";
import type { DeliveryFragment } from "../../../../gql/graphql";
import { AvatarWrap } from "./seller-info";
import Loader from "../../../layout/loader";

interface Props {
  deliveries: DeliveryFragment[];
  isLoading: boolean;
}

const Deliveries = ({ deliveries, isLoading }: Props) => {
  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <Wrapper>
      {deliveries.map((add, id) => (
        <CardWrapper
          isFirst={id === 0}
          key={id}
          align={id % 2 === 0 ? "left" : "right"}
        >
          <AvatarWrap>
            <Image
              width={24}
              height={24}
              src="/icons/agents/human.svg"
              alt="human icon"
            />
          </AvatarWrap>
          <CardSection align={id % 2 === 0 ? "left" : "right"}>
            <SellerName>{add.name}</SellerName>
            <ShortAdd isEven={id % 2 === 0} add={add} />
          </CardSection>
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default Deliveries;

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

const SellerName = styled("div")(({ theme }) => ({}));

const LoaderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: "350px",

  [theme.breakpoints.mobile]: {
    minHeight: "437px",
  },
}));
