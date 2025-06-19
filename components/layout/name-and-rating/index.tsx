import Rating from '../rating';
import { Title } from '../title';
import styled from '@emotion/styled';

type NameAndRating = {
  name: string;
  averageRating: number;
  totalComments: number;
};

const NameAndRating = ({
  name,
  averageRating,
  totalComments,
}: NameAndRating) => {
  return (
    <NameWrap>
      <Name as="h2">{name}</Name>
      <RatingWrapper>
        <Rating points={averageRating} users={totalComments} />
      </RatingWrapper>
    </NameWrap>
  );
};

export default NameAndRating;

const NameWrap = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const Name = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS28,
  },
}));

const RatingWrapper = styled('div')(({ theme }) => ({
  span: {
    fontSize: theme.fontSize.fontS24,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS18,
    },
  },
}));
