// components
import { Hr } from '../hr';
import SocialIcon from '../social-icon';
// utils
import styled from '@emotion/styled';
// types
import type { FooterFragment } from '../../../gql/graphql';

type FooterProps = Pick<FooterFragment, 'socialIcons'>;

const Footer = ({ socialIcons }: FooterProps) => (
  <Wrap>
    <Hr isFooter />
    <Wrapper>
      {socialIcons?.map((el, index) => (
        <SocialIcon
          key={index}
          iconSrc={el?.icon.data?.attributes?.url || ''}
          socialLink={el?.socialLink || ''}
        />
      ))}
    </Wrapper>
  </Wrap>
);

const Wrap = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 100px',
  gap: '24px',

  [theme.breakpoints.mobile]: {
    padding: '0 16px',
  },
}));

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '24px',
});

export default Footer;
