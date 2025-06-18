import { useState, useEffect } from "react";

const getSlidesPerView = (width: number): number => {
  if (width >= 1344) return 3;
  if (width >= 1024) return 2;
  return 1;
};

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setSlidesPerView(getSlidesPerView(width));
      setIsMobile(width < 1024);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return { windowWidth, slidesPerView, isMobile };
};

export default useResponsive;
