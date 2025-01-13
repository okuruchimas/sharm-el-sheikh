// hooks
import { useTranslation } from "next-i18next";
// utils
import styled from "@emotion/styled";
// components
import Image from "next/image";
import Button from "../button";
import SocialIcon from "../social-icon";
import TextAndIcon from "../text-and-icon";
// types
import type { CompanyPreviewFragment } from "../../../gql/graphql";

type EventPopupProps = Pick<
  CompanyPreviewFragment,
  "discount" | "socialLinks" | "location" | "position"
> & {
  onClose: () => void;
};

const Discount = ({
  position,
  location,
  discount,
  socialLinks,
  onClose,
}: EventPopupProps) => {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <ImgWrapper>
        <Image
          src={
            discount?.image?.data?.attributes?.url ||
            "/images/background/background-prom.svg"
          }
          alt="discount"
          layout="fill"
          objectFit="cover"
        />
      </ImgWrapper>
      <Title>{discount?.title}</Title>
      <TextAndIcon
        src="/icons/promotions-section/location.svg"
        text={location || ""}
      />
      <SocialIconsWrapper>
        {socialLinks
          ? socialLinks.map((el, index) => (
              <SocialIcon
                key={index}
                iconSrc={el?.icon.data?.attributes?.url || ""}
                socialLink={el?.socialLink || ""}
              />
            ))
          : null}
      </SocialIconsWrapper>
      {discount?.terms ? (
        <>
          <SubTitle>{t("text.discountTerms")}</SubTitle>
          <Terms>{discount.terms}</Terms>
        </>
      ) : null}
      <BackButton text={t("buttons.back")} onClick={onClose} />
    </Wrapper>
  );
};

export default Discount;

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SocialIconsWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "24px",
  marginTop: "16px",
  marginBottom: "24px",
});

const Terms = styled("p")(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  fontWeight: 400,
  letterSpacing: "0.5px",
  lineHeight: 1.5,
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",

  [theme.breakpoints.mobileS]: {
    minWidth: "100%",
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  height: "400px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    height: "200px",
    marginBottom: "16px",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  fontWeight: 700,
  color: theme.colors.blue,
  marginBottom: "40px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
    marginBottom: "16px",
  },
}));

const SubTitle = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS32,
  marginBottom: "16px",

  [theme.breakpoints.mobile]: {
    marginBottom: "8px",
  },
}));
