// hooks
import { useInView } from "react-intersection-observer";
// utils
import styled from "@emotion/styled";
// types
import type { ReactNode } from "react";

interface LazyLoadComponentProps {
  children: ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
}

const LazyLoadComponent = ({
  children,
  threshold = 0.1,
  triggerOnce = true,
}: LazyLoadComponentProps) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  return <Wrapper ref={ref}>{inView ? children : null}</Wrapper>;
};

export default LazyLoadComponent;

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "340px",

  [`@media (${theme.breakpoints.mobile})`]: {
    minHeight: "240px",
  },
}));
