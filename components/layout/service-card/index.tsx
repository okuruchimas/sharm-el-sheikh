import NextImage from '../image';
import styled from '@emotion/styled';

type ServiceCardProps = {
  title: string;
  iconSrc: string;
  iconAlt?: string;
};

const ServiceCard = ({ title, iconSrc, iconAlt }: ServiceCardProps) => {
  return (
    <Card className="service-card">
      <NextImage
        src={iconSrc}
        alt={iconAlt ?? 'icon'}
        width="60px"
        height="60px"
      />
      <Title className="card-title">{title}</Title>
    </Card>
  );
};

const Card = styled('div')(({ theme }) => ({
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.colors.blue5}`,
  borderRadius: '30px',
  backgroundColor: theme.colors.blue4,
  gap: '16px',
  overflow: 'hidden',
  minHeight: '120px',

  [theme.breakpoints.mobile]: {
    padding: '24px 16px',
    minHeight: '172px',
    flexDirection: 'column',
  },
}));

const Title = styled('span')(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: theme.fontSize.fontS21,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export default ServiceCard;
