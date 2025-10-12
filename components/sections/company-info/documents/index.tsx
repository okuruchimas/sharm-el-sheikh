import Image from 'next/image';
import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';

type Props = { documents: string[] };

const Documents = ({ documents }: Props) => {
  return (
    <SectionWrapper title={'Official Registration Documents'}>
      <Grid>
        {documents.map(s => (
          <Card key={s}>
            <Preview>
              <Image
                src={s}
                alt={'Registration image'}
                sizes="(max-width:768px) 100vw, 520px"
                layout="fill"
              />
            </Preview>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Documents;

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

const Card = styled('div')(({ theme }) => ({
  padding: 12,
  borderRadius: 16,
  overflow: 'hidden',
  border: `1px solid ${theme.colors.yellow}`,
}));

const Preview = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '4 / 3',
});
