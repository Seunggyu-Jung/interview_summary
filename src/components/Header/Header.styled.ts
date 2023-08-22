import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 2px solid #eee;
  background-color: ${({ theme }) => {
    return theme.backgroundColor;
  }};
`;

export const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 16px;
`;
