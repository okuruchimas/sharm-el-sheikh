import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';

const AdditionalInfo = () => {
  return (
    <SectionWrapper>
      <FooterBlock>
        <Brand>Lovely Holiday</Brand>
        <Copy>
          Your trusted partner for exceptional travel experiences in Sharm El
          Sheikh, Egypt.
        </Copy>

        <Meta>
          <MetaItem>
            <Label>Contact information</Label>
            <Value>+20 100 555 88 97 · hello@lovelyholiday.eg</Value>
          </MetaItem>

          <MetaItem>
            <Label>Location</Label>
            <Value>Sharm El Sheikh, South Sinai, Egypt</Value>
          </MetaItem>
        </Meta>

        <Icons>
          <i aria-hidden></i>
          <i aria-hidden></i>
          <i aria-hidden></i>
        </Icons>
      </FooterBlock>
    </SectionWrapper>
  );
};

export default AdditionalInfo;

const Section = styled('section')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 16px 40px',
});

const Inner = styled('div')({
  width: '100%',
  maxWidth: 1152,
});

const FooterBlock = styled('div')(({ theme }) => ({
  borderRadius: 16,
  border: `1px solid red`,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}));

const Brand = styled('div')(({ theme }) => ({
  fontWeight: 800,
  fontSize: 16,
  color: 'red',
}));

const Copy = styled('div')(({ theme }) => ({
  fontSize: 14,
}));

const Meta = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 12,
});

const MetaItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

const Label = styled('div')(({ theme }) => ({
  fontSize: 12,
}));

const Value = styled('div')(({ theme }) => ({
  fontSize: 14,
}));

const Icons = styled('div')(({ theme }) => ({
  marginTop: 4,
  display: 'flex',
  gap: 8,
}));
