// hooks
import { useTranslation } from 'next-i18next';
// utils
import styled from '@emotion/styled';
// types
import {
  getVisibleTabs,
  Tab,
} from '../../../entertainers-tour-guides/children/tabs';
import useResponsive from '../../../../../hooks/useResponsive';

const types = [
  { type: 'default', value: 'feedbackForm.feedbackForm' },
  { type: 'local', value: 'feedbackForm.localBusinessForm' },
  { type: 'international', value: 'feedbackForm.internationalForm' },
];

interface Props {
  currentType: string;
  setType: (type: string) => void;
  typesProp?: Tab[];
}
const TypeSwitcher = ({ currentType, setType, typesProp = types }: Props) => {
  const { t } = useTranslation('home-page');
  const { isMobile } = useResponsive();

  const activeIndex = typesProp.findIndex(({ type }) => type === currentType);

  const visibleTabs =
    activeIndex !== -1 ? getVisibleTabs(activeIndex, typesProp) : [];

  const tabsToMap = isMobile ? visibleTabs : typesProp;

  const handleClick = (type: string) => () => {
    if (type !== currentType) {
      setType(type);
    }
  };

  return (
    <Wrap>
      {tabsToMap.map(({ type, value, icon }) => (
        <Type
          isActive={type === currentType}
          key={type}
          onClick={handleClick(type)}
        >
          {icon ? icon : null}
          {t(value)}
        </Type>
      ))}
    </Wrap>
  );
};

const Wrap = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  borderBottom: `1px solid ${theme.colors.grey}`,
  cursor: 'pointer',

  [theme.breakpoints.mobile]: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
    borderBottom: `none`,
    width: 'calc(100% + 32px)',
    marginLeft: -16,
    justifyContent: 'space-between',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const Type = styled('span', {
  shouldForwardProp: prop => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: '33.3333%',
  minWidth: 'max-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  fontSize: theme.fontSize.fontS16,
  color: isActive ? theme.colors.black : theme.colors.grey,
  paddingBottom: isActive ? '12px' : 'initial',
  borderBottom: isActive ? '4px solid' + theme.colors.yellow2 : 'none',

  svg: {
    marginRight: 8,
    path: {
      stroke: isActive ? theme.colors.black : theme.colors.grey,
    },

    [theme.breakpoints.mobile]: {
      marginBottom: -8,
    },
  },

  [theme.breakpoints.mobile]: {
    display: 'initial',
    padding: '16px 4px',
    borderBottom: isActive
      ? `4px solid ${theme.colors.yellow}`
      : `2px solid ${theme.colors.grey}`,
    fontSize: isActive ? theme.fontSize.fontS16 : theme.fontSize.fontS14,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 'unset',
    width: isActive ? '56%' : '18%',
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
}));

export default TypeSwitcher;
