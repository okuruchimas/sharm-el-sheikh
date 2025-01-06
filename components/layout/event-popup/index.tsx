// hooks
import { useTranslation } from "next-i18next";
// utils
import styled from "@emotion/styled";
// components
import Link from "next/link";
import Image from "next/image";
import Button from "../button";
import TextPill from "../text-pill";
import TextAndIcon from "../text-and-icon";
// types
import type { EventCardI } from "../../sections/home/main/children/types";
import type { SocialLink } from "../../types/images";
import SocialIcon from "../social-icon";

type EventPopupProps = Omit<EventCardI, "onClick"> & {
  description: string;
  socialLinks?: (SocialLink | null)[];
  mapUrl: string;
  onClose: () => void;
};

const EventPopup = ({
  logo,
  date,
  title,
  price,
  logoAlt,
  mapUrl,
  location,
  description,
  socialLinks,
  onClose,
}: EventPopupProps) => {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Stack gap="16px">
        <TopSection>
          <ImgWrapper>
            <Image src={logo} alt={logoAlt} layout="fill" />
          </ImgWrapper>
          <Stack>
            <Name>{title}</Name>
            <TextPillStyled>{date}</TextPillStyled>
            <LinkStyled href={mapUrl} target="_blank">
              <TextAndIcon
                src="/icons/promotions-section/location.svg"
                text={location}
                fontSize="21px"
                iconSize="36px"
              />
            </LinkStyled>
            <TextAndIcon
              src="/icons/cash.svg"
              text={price}
              fontSize="21px"
              iconSize="36px"
            />
            <IconsWrapper>
              {socialLinks?.map((el, index) => (
                <SocialIcon
                  key={index}
                  iconSrc={el?.icon.data?.attributes?.url || ""}
                  iconAlt={el?.icon.data?.attributes?.alternativeText || ""}
                  socialLink={el?.socialLink || ""}
                />
              ))}
            </IconsWrapper>
          </Stack>
        </TopSection>
        <Title>{t("labels.description")}</Title>
        <Text>{description}</Text>
        <AnimatorLink>{t("text.findAnimatorForTicket")}</AnimatorLink>
      </Stack>
      <BackButton
        text={t("buttons.back")}
        onClick={onClose}
        color="blue"
        backgroundColor="yellow"
      />
    </Wrapper>
  );
};

export default EventPopup;

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "24px",
  position: "relative",

  [theme.breakpoints.mobile]: {
    gap: "16px",
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",

  [theme.breakpoints.mobile]: {
    position: "sticky",
    bottom: 0,
    right: 0,
    opacity: 0.9,
    minWidth: "130px",
  },
}));

const TopSection = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "340px 1fr",
  gap: "24px",
  marginBottom: "8px",

  ".icon-text": {
    color: theme.colors.black,
  },

  [theme.breakpoints.mobile]: {
    gap: "16px",
    gridTemplateColumns: "1fr",
  },
}));

const Stack = styled("div", {
  shouldForwardProp: (prop) => prop !== "gap",
})<{ gap?: string }>(({ theme, gap }) => ({
  display: "flex",
  flexDirection: "column",
  gap: gap || "16px",

  [theme.breakpoints.mobile]: {
    gap: gap || "8px",
  },
}));

const IconsWrapper = styled("div")({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",

  img: {
    width: "36px",
    height: "36px",
  },
});

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "340px",
  borderRadius: "16px",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },

  [theme.breakpoints.mobile]: {
    height: "300px",
  },
}));

const TextPillStyled = styled(TextPill)({
  width: "max-content",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
});

const Title = styled("h2", {
  shouldForwardProp: (prop) => prop !== "marginBottom",
})<{ marginBottom?: string }>(({ theme, marginBottom }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
  color: theme.colors.blue,
  marginBottom: marginBottom || "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));

const Name = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  width: "100%",
  marginTop: "10px",
  marginBottom: "45px",

  [theme.breakpoints.mobile]: {
    marginTop: "0",
    marginBottom: "8px",
    fontSize: theme.fontSize.fontS28,
  },
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  width: "100%",
  lineHeight: 1.5,
  letterSpacing: "0.5px",
  marginBottom: "8px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const AnimatorLink = styled("p")(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  marginBottom: "8px",
  color: theme.colors.blue,
  textDecoration: "underline",
  fontWeight: 600,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));