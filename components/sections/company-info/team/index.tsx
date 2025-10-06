import Image from 'next/image';
import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';

type Member = { id: string; name: string; role: string; img: string };

const team: Member[] = [
  {
    id: '1',
    name: 'Nataliia Strutinska',
    role: 'Reception',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp',
  },
  {
    id: '2',
    name: 'Nataliia Strutinska',
    role: 'Designer',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp',
  },
  {
    id: '3',
    name: 'Nataliia Strutinska',
    role: 'Designer',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp',
  },
  {
    id: '4',
    name: 'Nataliia Strutinska',
    role: 'Designer',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp',
  },
  {
    id: '5',
    name: 'Nataliia Strutinska',
    role: 'Designer',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp',
  },
];

const Team = () => {
  return (
    <SectionWrapper title={'Meet Our Team'}>
      <Grid>
        {team.map(m => (
          <Card key={m.id}>
            <Avatar>
              <Image src={m.img} alt={m.name} sizes="96px" layout="fill" />
            </Avatar>
            <Name>{m.name}</Name>
            <Role>{m.role}</Role>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Team;

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0,1fr))',
  gap: 16,
  [theme.breakpoints.mobile]: {
    gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
  },
}));

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  padding: 12,
  borderRadius: 16,
  border: `1px solid red`,
}));

const Avatar = styled('div')({
  position: 'relative',
  width: 96,
  height: 96,
  borderRadius: '50%',
  overflow: 'hidden',
});

const Name = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
}));

const Role = styled('div')(({ theme }) => ({
  fontSize: 12,
}));
