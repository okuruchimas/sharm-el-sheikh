import Link from 'next/link';
import styled from '@emotion/styled';

type BackRouteProps = {
  href: string;
  name: string;
  baseRoute: string;
  subRoute: string;
};
const BackRoute = ({ href, baseRoute, subRoute, name }: BackRouteProps) => (
  <Route>
    <Link href={href} passHref>
      <a>
        <BaseRoute>{baseRoute}</BaseRoute>
        {subRoute}
      </a>
    </Link>
    <span>{name}</span>
  </Route>
);

export default BackRoute;

const Route = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.blue,
  width: '100%',
  marginBottom: '40px',

  a: {
    color: 'inherit',
    opacity: 0.7,
    textDecoration: 'none',

    ':hover': {
      opacity: 1,
    },
  },

  [theme.breakpoints.mobile]: {
    marginTop: '14px',
    marginBottom: '24px',
    fontSize: theme.fontSize.fontS18,
    lineHeight: 1.4,
  },
}));

const BaseRoute = styled('span')(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    display: 'none',
  },
}));
