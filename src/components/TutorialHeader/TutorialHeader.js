'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Three Coves Consulting LLC">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="">Three Coves Consulting LLC</HeaderName>
        </Link>
        <HeaderNavigation aria-label="Three Coves Consulting LLC">
          <Link href="/projects" passHref legacyBehavior>
            <HeaderMenuItem>Projects</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <HeaderNavigation aria-label="Three Coves Consulting LLC">
          <Link href="/repos" passHref legacyBehavior>
            <HeaderMenuItem>Code Repositories</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/projects" passHref legacyBehavior>
                <HeaderMenuItem>Projects</HeaderMenuItem>
              </Link>
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem>Code Repositories</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
    )}
  />
);

export default TutorialHeader;
