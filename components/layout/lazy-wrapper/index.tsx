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
  minHeight?: number;
}

const LazyWrapper = ({
  children,
  threshold = 0.1,
  triggerOnce = true,
  minHeight = 340,
}: LazyLoadComponentProps) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  return (
    <Wrapper minHeight={minHeight} ref={ref}>
      {inView ? children : null}
    </Wrapper>
  );
};

export default LazyWrapper;

const Wrapper = styled("div")<{ minHeight: number }>(
  ({ theme, minHeight }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `450px`,

    [`@media (${theme.breakpoints.mobile})`]: {
      minHeight: `${minHeight}px`,
    },
  }),
);
