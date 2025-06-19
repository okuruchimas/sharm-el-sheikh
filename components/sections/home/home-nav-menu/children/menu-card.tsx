import styled from '@emotion/styled';
import NextImage from '../../../../layout/image';

type MenuCardProps = {
  text: string;
  link: string;
  bgUrl: string;
};

const MenuCard = ({ text, link, bgUrl }: MenuCardProps) => (
  <Card bgImg={bgUrl} className="menu-nav-card">
    <Content>
      <Link href={link}>
        <NextImage
          src="/icons/arrow-up.svg"
          alt="arrow"
          width="24px"
          height="24px"
        />
        <span>{text}</span>
      </Link>
    </Content>
  </Card>
);

const Card = styled('div', {
  shouldForwardProp: prop => prop !== 'bgImg',
})<{ bgImg: string }>(({ bgImg }) => ({
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  borderRadius: '16px',
  overflow: 'hidden',
}));

const Content = styled('div')({
  width: '100%',
  height: '100%',
  padding: '90px 20px',
  backgroundColor: '#FFC01B33',
});

const Link = styled('a')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: '100px',
  padding: '8px 16px',
  color: theme.colors.blue,
  maxWidth: 'max-content',
  margin: '0 auto',
  cursor: 'pointer',
  textDecoration: 'none',
}));

export default MenuCard;
