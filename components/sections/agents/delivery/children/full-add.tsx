import Modal from "../../../../layout/modal";
import TextAndIcon from "../../../../layout/text-and-icon";
import Image from "next/image";
import styled from "@emotion/styled";
import { Title } from "../../../../layout/title";
import type { DeliveryFragment } from "../../../../../gql/graphql";
import { SellerInfo } from "./seller-info";
import { FlexContainer } from "./short-add";
import Button from "../../../../layout/button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  location: string;
  price: string;
  date: string;
  imageUrl: string;
  imageAlt?: string;
  otherAddInfo: OtherAdInfo;
}
type OtherAdInfo = Omit<DeliveryFragment, "title" | "price" | "location">;
const FullAdd = ({
  title,
  location,
  price,
  date,
  imageUrl,
  imageAlt,
  isOpen,
  onClose,
  otherAddInfo,
}: Props) => {
  const { description, contactMethod, name, mobile, email, personalCardLink } =
    otherAddInfo;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Content>
        <TopWrap>
          <ImgWrapper>
            <Image src={imageUrl} alt={imageAlt} layout="fill" />
          </ImgWrapper>
          <InfoWrap>
            <Title as="h2">{title}</Title>
            <FlexContainer gap="20px">
              <TextAndIcon
                src="/icons/promotions-section/location.svg"
                text={location}
                iconSize="36px"
                iconSizeMobile="30px"
                fontSize="21px"
                fontSizeMobile="18px"
              />
              <TextAndIcon
                src="/icons/cash.svg"
                text={price}
                iconSize="36px"
                iconSizeMobile="30px"
                fontSize="21px"
                fontSizeMobile="18px"
              />
              <TextAndIcon
                src="/icons/time.svg"
                text={date}
                iconSize="36px"
                iconSizeMobile="30px"
                fontSize="21px"
                fontSizeMobile="18px"
              />
            </FlexContainer>
          </InfoWrap>
        </TopWrap>
        <Description>{description}</Description>
        <SellerInfo
          sellerName={name}
          email={email}
          mobile={mobile}
          personalCardLink={personalCardLink}
        />
        <Description>
          <b>My preferred contact method:</b> <br />
          {contactMethod || "-"}
        </Description>
        <Button
          text="Back"
          type="reset"
          backgroundColor="white"
          color="blue"
          onClick={onClose}
        />
      </Content>
    </Modal>
  );
};

export default FullAdd;

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "flex-start",
  width: "100%",

  button: {
    alignSelf: "flex-end",
  },

  [theme.breakpoints.mobile]: {},
}));

const TopWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "340px",
  borderRadius: "16px",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },
  border: `2px solid ${theme.colors.yellow}`,

  [theme.breakpoints.mobile]: {
    minHeight: "200px",
    width: "100%",
  },
}));

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  alignItems: "flex-start",

  [theme.breakpoints.mobile]: {
    gap: "16px",
    alignSelf: "flex-start",
  },
}));

const Description = styled("span")(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  fontWeight: 400,
  lineHeight: "32px",
  [theme.breakpoints.mobile]: {},
}));
