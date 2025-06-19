import { useField } from 'formik';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

const VipSwitch = ({ label }: { label: string }) => {
  const [field, , helpers] = useField('isVip');
  const { t } = useTranslation('advertisements');

  return (
    <SwitchContainer>
      <Switch
        checked={field.value}
        onClick={() => helpers.setValue(!field.value)}
        role="switch"
        aria-checked={field.value}
      />
      <Description>
        <strong>{label}</strong>
        <small>{t('vipDescription')}</small>
      </Description>
    </SwitchContainer>
  );
};

export default VipSwitch;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  width: 100%;
`;

const Switch = styled.label<{ checked: boolean }>(({ checked }) => ({
  position: 'relative',
  display: 'inline-block',
  minWidth: 50,
  height: 28,
  backgroundColor: checked ? '#FFD700' : '#ccc',
  borderRadius: 28,
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: 22,
    height: 22,
    left: checked ? 26 : 4,
    bottom: 3,
    backgroundColor: '#fff',
    borderRadius: '50%',
    transition: 'left 0.2s',
  },
}));

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;
