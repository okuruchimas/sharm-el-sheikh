import "swiper/css";
// hooks
import useResponsive from "../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
import Button from "../../../layout/button";
import { Title } from "../../../layout/title";
import TextAndIcon from "../../../layout/text-and-icon";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
// utils
import styled from "@emotion/styled";
// types
import type { ComponentComponentsEntertainmentService } from "../../../../gql/graphql";

type Props = {
  data: ComponentComponentsEntertainmentService;
  onClose: () => void;
};
const AnimatorServicePopup = ({ data, onClose }: Props) => {
  const { t } = useTranslation("common");
  const { isMobile } = useResponsive();

  const renderItem = (src: string, text: string) => (
    <TextAndIcon
      src={src}
      text={text}
      fontSize="24px"
      fontSizeMobile="16px"
      iconSize="36px"
      iconSizeMobile="30px"
    />
  );

  const slidesPerView = () => {
    if (data.images?.data.length < 2 && isMobile) {
      return 1;
    }
    return isMobile ? 1.2 : 2.5;
  };

  return (
    <Wrapper>
      <Stack>
        <SwiperStyled
          slidesPerView={slidesPerView()}
          spaceBetween={12}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {data.images?.data.map((el, index) => (
            <SwiperSlide key={index}>
              <Image
                src={el.attributes?.url || ""}
                alt={el.attributes?.alternativeText || ""}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "16px" }}
                className="photo"
              />
            </SwiperSlide>
          ))}
        </SwiperStyled>
        <Name as="h2">{data.serviceName}</Name>
        <IconsGrid>
          {renderItem("/icons/time.svg", data.duration || "")}
          {renderItem("/icons/cash.svg", data.price || "")}
          {renderItem(
            "/icons/promotions-section/location.svg",
            data.place || "",
          )}
        </IconsGrid>
        <Section>
          <h2>{t("text.about")}</h2>
          <ReactMarkdown>{data.about}</ReactMarkdown>
        </Section>
        <BackButton text={t("buttons.back")} onClick={onClose} />
      </Stack>
    </Wrapper>
  );
};

export default AnimatorServicePopup;

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 40,
  position: "relative",

  [theme.breakpoints.mobile]: {
    gap: 24,
  },
}));

const SwiperStyled = styled(Swiper)({
  width: "100%",
  height: "300px",
});

const Stack = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  [theme.breakpoints.mobileS]: {
    gap: "24px",
  },
}));

const IconsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr 1fr",

  [theme.breakpoints.mobileS]: {
    gap: "8px",
    gridTemplateColumns: "1fr",
  },
}));

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  p: {
    fontSize: theme.fontSize.fontS21,
    lineHeight: 1.5,
  },

  h2: {
    fontSize: theme.fontSize.fontS32,
    fontWeight: 700,
    color: theme.colors.blue,
  },

  [theme.breakpoints.mobileS]: {
    gap: "8px",

    p: {
      fontSize: theme.fontSize.fontS16,
    },

    h2: {
      fontSize: theme.fontSize.fontS24,
      fontWeight: 700,
    },
  },
}));

const Name = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS28,
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",
  zIndex: 2,

  [theme.breakpoints.mobile]: {
    position: "sticky",
    bottom: 0,
    right: 0,
    opacity: 0.9,
    minWidth: "130px",
  },
}));
