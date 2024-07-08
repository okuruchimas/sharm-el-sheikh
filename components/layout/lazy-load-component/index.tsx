import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

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

  return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazyLoadComponent;
