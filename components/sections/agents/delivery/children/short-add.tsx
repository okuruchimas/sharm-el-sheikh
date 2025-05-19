import TextAndIcon from "../../../../layout/text-and-icon";
import styled from "@emotion/styled";
import { Title } from "../../../../layout/title";
import Image from "next/image";

interface Props {
  isEven: boolean;
}
const ShortAdd = ({ isEven }: Props) => {
  return (
    <Wrapper isEven={isEven}>
      <Content>
        <ImageStyled
          even={isEven.toString()}
          width={240}
          height={210}
          src="/images/announcement-cards/announce-card1.webp"
          alt="photo of add"
        />
        <Info>
          <TitleStyled as="h3">Linen Dress</TitleStyled>
          <FlexContainer>
            <TextAndIcon
              src="/icons/promotions-section/location.svg"
              text={"Meet place"}
              iconSize="30px"
              iconSizeMobile="30px"
              fontSize="21px"
              fontSizeMobile="18px"
            />
            <TextAndIcon
              src="/icons/cash.svg"
              text={"120 $"}
              iconSize="30px"
              iconSizeMobile="30px"
              fontSize="21px"
              fontSizeMobile="18px"
            />
            <TextAndIcon
              src="/icons/time.svg"
              text={"10.10.2001"}
              iconSize="30px"
              iconSizeMobile="30px"
              fontSize="21px"
              fontSizeMobile="18px"
            />
          </FlexContainer>
          <ContactRow>
            <IconCircle>
              <Image
                width={24}
                height={24}
                src="/icons/agents/phone.svg"
                alt="phone icon"
              />
            </IconCircle>
            <IconCircle>
              <Image
                width={24}
                height={24}
                src="/icons/agents/mail.svg"
                alt="mail icon"
              />
            </IconCircle>
          </ContactRow>
        </Info>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ isEven: boolean }>(({ theme, isEven }) => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid",
  borderColor: theme.colors.blue5,
  borderRadius: "12px",
  borderTopLeftRadius: isEven ? "0" : "12px",
  borderTopRightRadius: isEven ? "12px" : "0",
  width: "100%",
  maxWidth: "calc(50% - 40px)",
  backgroundColor: "rgba(41, 169, 194, 0.06)",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  [theme.breakpoints.mobile]: {
    maxWidth: "100%",
  },
}));

const FlexContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  ".text-and-icon": {
    width: "max-content",
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.mobile]: {
    flexDirection: "column",
  },
}));

const ImageStyled = styled(Image)<{ even: string }>(({ theme, even }) => ({
  borderBottomLeftRadius: "12px",
  borderTopLeftRadius: even === "true" ? "" : "12px",

  [theme.breakpoints.mobile]: {
    borderBottomLeftRadius: "unset",
  },
}));

const Info = styled("div")(({ theme }) => ({
  padding: 16,
  display: "flex",
  flexDirection: "column",
}));

const TitleStyled = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  marginBottom: 16,
}));

const ContactRow = styled("div")(({ theme }) => ({
  marginTop: "auto",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  [theme.breakpoints.mobile]: {
    justifyContent: "flex-end",
  },
}));

const IconCircle = styled("div")(({ theme }) => ({
  height: 40,
  width: 40,
  borderRadius: "50%",
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.yellow,
}));

export default ShortAdd;
