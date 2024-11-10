import styled from "@emotion/styled";
import NextImage from "../../../layout/image";

type TaxiServiceProps = {
  iconSrc: string;
  title: string;
  subTitle: string;
};
const TaxiService = ({ iconSrc, title, subTitle }: TaxiServiceProps) => {
  return (
    <Wrapper>
      <NextImage
        src={iconSrc}
        width="64px"
        height="64px"
        mHeight="40px"
        mWidth="40px"
        alt={""}
      />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
};

export default TaxiService;

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "8px",

  [theme.breakpoints.mobile]: {},
}));

const Title = styled("span")(({ theme }) => ({
  color: theme.colors.blue,
  fontWeight: 700,
  fontSize: theme.fontSize.fontS24,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
    fontWeight: 600,
  },
}));

const SubTitle = styled("span")(({ theme }) => ({
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS18,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));
