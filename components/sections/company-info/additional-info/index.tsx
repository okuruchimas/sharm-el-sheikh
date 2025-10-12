import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';
import TextAndIcon from '../../../layout/text-and-icon';

type Props = {
  title: string;
  footerText: string;
  phoneNumber: string;
  contactPerson: string;
  footerLocation: string;
};
const AdditionalInfo = ({
  title,
  footerText,
  footerLocation,
  phoneNumber,
  contactPerson,
}: Props) => {
  return (
    <SectionWrapper>
      <FooterBlock>
        <Left>
          <Brand>{title}</Brand>
          <Copy>{footerText}</Copy>
        </Left>
        <Meta>
          <Label>Contact information</Label>
          <TextAndIcon
            fontSize="16px"
            src="/icons/phone.svg"
            text={phoneNumber}
          />
          <TextAndIcon
            fontSize="16px"
            src="/icons/agents/human.svg"
            text={contactPerson}
          />
          <TextAndIcon
            fontSize="16px"
            src="/icons/promotions-section/location.svg"
            text={footerLocation}
          />
        </Meta>
      </FooterBlock>
    </SectionWrapper>
  );
};

export default AdditionalInfo;

const FooterBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 12,
  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
    gap: 40,
  },
}));

const Left = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: 12,
});

const Brand = styled('div')(({ theme }) => ({
  fontWeight: 800,
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
}));

const Copy = styled('div')(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
}));

const Meta = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const Label = styled('div')(({ theme }) => ({
  fontSize: theme.fontSize.fontS18,
}));
