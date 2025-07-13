import { memo } from 'react';
import Image, { type ImageProps } from 'next/image';
// utils
import styled from '@emotion/styled';

interface NextImageProps extends ImageProps {
  width: string;
  height: string;
  mWidth?: string;
  mHeight?: string;
}

interface WrapperProps
  extends Pick<NextImageProps, 'width' | 'height' | 'mWidth' | 'mHeight'> {}

const NextImage = ({
  alt = '',
  width,
  height,
  mWidth,
  mHeight,
  ...props
}: NextImageProps) => (
  <LogoWrapper
    width={width}
    height={height}
    mWidth={mWidth ?? width}
    mHeight={mHeight ?? height}
    className="image-wrapper"
  >
    <Image {...props} alt={alt} layout="fill" />
  </LogoWrapper>
);

const LogoWrapper = styled('div', {
  shouldForwardProp: prop =>
    !['mHeight', 'mWidth', 'width', 'height'].includes(prop),
})<WrapperProps>(({ theme, width, height, mHeight, mWidth }) => ({
  position: 'relative',
  width,
  height,

  [theme.breakpoints.mobile]: {
    width: mWidth,
    height: mHeight,
    minWidth: mWidth,
    minHeight: mHeight,
  },
}));

export default memo(NextImage);
