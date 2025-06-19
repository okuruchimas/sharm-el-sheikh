import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import useResponsive from '../../../../hooks/useResponsive';
import useTabs from '../../../../hooks/useTabs';

export const getVisibleTabs = (
  activeIndex: number,
  tabs: { text: string; link: string }[],
) => {
  const left = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
  const right = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
  return [tabs[left], tabs[activeIndex], tabs[right]];
};

const Tabs = () => {
  const { pathname } = useRouter();
  const { isMobile } = useResponsive();
  const { tabsArr } = useTabs();

  const activePage = pathname.split('/').pop();

  const activeIndex = tabsArr.findIndex(({ link }) => link === activePage);

  const visibleTabs =
    activeIndex !== -1 ? getVisibleTabs(activeIndex, tabsArr) : [];

  const tabsToMap = isMobile ? visibleTabs : tabsArr;

  return (
    <Wrap>
      {tabsToMap.map(({ link, text }) => (
        <Link key={link} href={link}>
          <Text isActive={pathname?.includes(link)}>{text}</Text>
        </Link>
      ))}
    </Wrap>
  );
};

const Wrap = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  margin: '80px 0 40px',
  borderBottom: `1px solid ${theme.colors.grey}`,
  overflowX: 'auto',

  [theme.breakpoints.mobile]: {
    width: 'calc(100% + 32px)',
    alignSelf: 'flex-start',
    borderBottom: 'none',
    margin: '32px 0 32px -16px',
  },
}));

const Text = styled('span', {
  shouldForwardProp: prop => !['isActive'].includes(prop),
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  minWidth: '310px',
  height: '48px',
  borderBottom: isActive ? `4px solid ${theme.colors.yellow}` : 'none',
  cursor: 'pointer',
  fontSize: '21px',
  textAlign: 'center',
  alignContent: 'center',
  color: isActive ? theme.colors.black2 : theme.colors.grey,

  [theme.breakpoints.mobile]: {
    padding: '0 4px',
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
  },
}));

export default Tabs;
