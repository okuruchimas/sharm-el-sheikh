import styled from '@emotion/styled';
import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactNode,
  Ref,
} from 'react';

type TitleProps<E extends ElementType> = {
  as?: E;
  children: ReactNode;
} & ComponentPropsWithoutRef<E>;

const TitleBase = <E extends ElementType = 'h1'>(
  { as, children, ...rest }: TitleProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: Ref<any>,
) => {
  const Component = as || 'h1';
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
};

const ForwardedTitle = forwardRef(TitleBase) as <E extends ElementType = 'h1'>(
  props: TitleProps<E> & { ref?: Ref<Element> },
) => JSX.Element;

export const Title = styled(ForwardedTitle)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  color: theme.colors.blue,
  fontWeight: 600,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));
