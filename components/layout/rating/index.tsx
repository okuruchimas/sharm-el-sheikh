import NextImage from '../image';
// utils
import styled from '@emotion/styled';

type RatingProps = {
  points: number;
  users: number;
};

const Rating = ({ points, users }: RatingProps) => {
  return (
    <Wrapper>
      <NextImage
        src={'/icons/promotions-section/star-rating.svg'}
        alt="star-rating"
        height="24px"
        width="24px"
        mHeight="18px"
        mWidth="18px"
      />
      <RatingPoints>{points.toFixed(1)}&nbsp;</RatingPoints>
      <RatingViews>{`(${users})`}</RatingViews>
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'max-content',
});

const RatingPoints = styled('span')(({ theme }) => ({
  fontWeight: '600',
  fontSize: theme.fontSize.fontS18,
  textAlign: 'center',
  marginLeft: '3px',
}));

const RatingViews = styled(RatingPoints)(({ theme }) => ({
  color: theme.colors.grey,
  marginLeft: 0,
}));

export default Rating;
