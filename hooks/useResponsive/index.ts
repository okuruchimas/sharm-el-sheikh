import { useState, useEffect } from "react";

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return { isMobile };
};

export default useResponsive;
