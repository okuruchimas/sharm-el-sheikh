// components
import NextImage from '../../../layout/image';
// utils
import styled from '@emotion/styled';
import { DEFAULT_IMAGE } from '../../../../constants/images.constants';

type PlaceholderProps = {
  title?: string;
};

const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <Wrap>
      <NextImage
        src={DEFAULT_IMAGE}
        alt="background"
        width="100%"
        height="370px"
        mWidth="100%"
        mHeight="25vh"
      />
      {title ? <Title>{title}</Title> : null}
    </Wrap>
  );
};

const Wrap = styled('div')({
  width: '100%',
  display: 'flex',
  gap: '6px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Title = styled('h3')(({ theme }) => ({
  fontWeight: '700',
  textAlign: 'center',
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export default Placeholder;
