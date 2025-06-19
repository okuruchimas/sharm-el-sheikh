import styled from '@emotion/styled';

const SubTitle = styled('h3')(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: '0',
  marginBottom: '8px',

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

export default SubTitle;
