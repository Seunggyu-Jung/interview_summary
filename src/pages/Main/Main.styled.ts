import { styled } from 'styled-components';

export const MainContentsWrapper = styled.main`
  padding-top: 80px;
`;

export const Nav = styled.nav`
  position: sticky;
  top: 65px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 2px solid #eee;
`;

export const NavLinkWrapper = styled.div`
  max-width: 992px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
`;

export const NavItem = styled.a`
  padding: 8px;

  &:hover {
    background-color: antiquewhite;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

export const ListItem = styled.div`
  scroll-margin-top: 110px;
`;
