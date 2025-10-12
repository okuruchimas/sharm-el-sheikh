// components
import NavButtons from './nav-buttons';
// utils
import styled from '@emotion/styled';
// types
import type {
  ComponentHeaderNavigationMenu,
  HeaderFragment,
} from '../../../../gql/graphql';
import { useRouter } from 'next/router';
import React, { Fragment, ReactNode, useState } from 'react';
import useTabs from '../../../../hooks/useTabs';
import { Arrow } from './language-selector';
import useResponsive from '../../../../hooks/useResponsive';

type IProps = {
  isOpen: boolean;
  navMenu: HeaderFragment['Menu'];
  onClose: () => void;
};

const NavMenu = ({ isOpen, navMenu, onClose }: IProps) => {
  const [isSubMenu, setSubMenu] = useState<boolean>(false);
  const { push, route } = useRouter();
  const { tabsArr } = useTabs();
  const { isMobile } = useResponsive();

  const handleClick = (link: string) => () => {
    onClose();
    push(link);
  };

  const handleSubClick = (link: string) => () => {
    onClose();

    if (link.startsWith('/')) {
      return push(link);
    }

    if (link.startsWith('entertainers-tour-guides')) {
      return push(`/${link}`);
    }

    return push(`/entertainers-tour-guides/${link}`);
  };

  const isActive = (str: string) => {
    if (str === '/') {
      return route === str;
    }
    return route?.includes(str || '');
  };
  const menuItemRender = (
    item: ComponentHeaderNavigationMenu | null,
  ): ReactNode | null => {
    if (!item) return null;

    const itemLink = item?.Link?.split('/')?.[1].replace(/\s+/g, '');

    if (isMobile && item?.Link?.includes('entertainers-tour-guides')) {
      return (
        <>
          <ListItem
            isActive={isActive(itemLink || '/')}
            onClick={() => setSubMenu(!isSubMenu)}
          >
            <ImgMenu src={`/icons/header/menu/${itemLink}.svg`} alt="" />

            <Text>{item?.Text}</Text>

            <ArrowStyled
              src={'/icons/header/dropdown-arrow.svg'}
              alt={'arrow'}
              menuVisible={isSubMenu}
            />
          </ListItem>
          {isSubMenu
            ? tabsArr.map(item => (
                <SubListItem
                  key={item.value}
                  isActive={isActive(item?.type?.split('/')?.[1] || '/')}
                  onClick={handleSubClick(item?.type || '')}
                >
                  <ImgMenu
                    src={`/icons/header/menu/${item?.type}.svg`}
                    alt=""
                  />

                  <Text>{item?.value}</Text>
                </SubListItem>
              ))
            : null}
        </>
      );
    }

    return (
      <ListItem
        isActive={isActive(itemLink || '/')}
        onClick={handleClick(item?.Link || '')}
      >
        {isMobile ? (
          <ImgMenu src={`/icons/header/menu/${itemLink || 1}.svg`} alt="" />
        ) : null}
        <Text>{item?.Text}</Text>
      </ListItem>
    );
  };

  return (
    <WrapperDown isOpen={isOpen}>
      <ButtonsWrap>
        <NavButtons onClose={onClose} />
      </ButtonsWrap>
      {navMenu?.map(item => (
        <Fragment key={item?.id}>{menuItemRender(item)}</Fragment>
      ))}
      <InfoPage isActive={isActive('company-info')}>Company Info</InfoPage>
    </WrapperDown>
  );
};

export const WrapperDown = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '32px',
  transition: 'height 0.5s ease, opacity 0.5s ease',

  [theme.breakpoints.mobile]: {
    position: 'relative',
    top: -56,
    overflow: 'hidden',
    height: isOpen ? '100dvh' : '0px',
    opacity: isOpen ? 1 : 0.7,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: '24px',
  },

  [theme.breakpoints.desktop]: {
    maxHeight: '44px',
  },
}));

const ButtonsWrap = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.mobile]: {
    display: 'initial',
  },
}));

export const ListItem = styled('span', {
  shouldForwardProp: prop => !['isActive'].includes(prop),
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  cursor: 'pointer',
  fontSize: theme.fontSize.fontS20,
  color: isActive ? theme.colors.blue6 : theme.colors.blue,
  width: 'auto',
  textAlign: 'center',
  transition: 'height 0.5s ease, color 0.25s ease',

  '&:hover': {
    color: theme.colors.blue3,
  },

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
    maxWidth: '100%',

    '&:hover': {
      color: theme.colors.blue,
    },
  },
}));

const InfoPage = styled(ListItem)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.mobile]: {},
}));

const SubListItem = styled(ListItem)(({ theme }) => ({
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    paddingLeft: 24,
    fontWeight: 300,
  },
}));

const Text = styled('span')(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    display: 'inline-block',
    textWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const ImgMenu = styled('img')(({ theme }) => ({
  [theme.breakpoints.mobile]: {},
}));

const ArrowStyled = styled(Arrow)(({ theme }) => ({
  marginTop: 4,
  alignSelf: 'center',
  [theme.breakpoints.mobile]: {},
}));
export default NavMenu;
