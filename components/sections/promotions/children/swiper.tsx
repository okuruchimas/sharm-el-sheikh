// components
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// modules
import { Autoplay, Navigation } from "swiper/modules";
// utils
import styled from "@emotion/styled";
// types
import type { FC } from "react";
// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

type ImagesI = {
  src: string;
};
// TODO: remove duplicated type

type SwiperProps = {
  images: ImagesI[];
  discount?: string;
};

const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <PrevSlideButton onClick={() => swiper.slidePrev()}>
        <NavIcon src="icons/promotions-section/arrow.svg" />
      </PrevSlideButton>
      <NextSlideButton onClick={() => swiper.slideNext()}>
        <NavIcon src="icons/promotions-section/arrow.svg" />
      </NextSlideButton>
    </>
  );
};

const ImageSwiper: FC<SwiperProps> = ({ images, discount }) => (
  <Wrapper
    slidesPerView={"auto"}
    spaceBetween={0}
    navigation={false}
    pagination={{
      clickable: true,
    }}
    autoplay={{ delay: 4600 }}
    loop
    modules={[Autoplay, Navigation]}
  >
    <SwiperButtons />
    {discount ? <Promotion>{discount}</Promotion> : null}
    {images.map((el, index) => (
      <Slide key={index}>
        <StyledImage src={`/${el.src}`} alt="" loading="lazy" layout="fill" />
      </Slide>
    ))}
  </Wrapper>
);

const StyledImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Slide = styled(SwiperSlide)({
  width: "100%",
  height: "100%",
});

const Wrapper = styled(Swiper)({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "16px 16px 0 0",
});

const NextSlideButton = styled.div(({ theme }) => ({
  cursor: "pointer",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "calc(50% - 20px)",
  right: "16px",
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  backdropFilter: "blur(8px)",
  zIndex: 10,
  backgroundColor: theme.colors.grey4,
  transition: "transform 0.3s ease",

  [theme.breakpoints.mobile]: {
    height: "30px",
    width: "30px",
    right: "10xp",
    top: "calc(50% - 15px)",
  },

  "&:active": {
    transform: "scale(1.3)",
  },
}));

const PrevSlideButton = styled(NextSlideButton)(({ theme }) => ({
  left: "16px",
  right: "unset",

  [theme.breakpoints.mobile]: {
    right: "unset",
    left: "10xp",
  },

  img: {
    transform: "rotate(180deg)",
  },
}));

const NavIcon = styled("img")({
  width: "12px",
  height: "20px",
  objectFit: "cover",
});

const Promotion = styled.div(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  height: "36px",
  padding: "8px 16px",
  borderRadius: "8px",
  backgroundColor: theme.colors.white2,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textAlign: "center",
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS16,
  zIndex: 10,

  [theme.breakpoints.mobile]: {
    height: "24px",
    top: "10px",
    right: "10px",
    padding: "4px 12px",
    fontSize: theme.fontSize.fontS12,
  },
}));

export default ImageSwiper;
