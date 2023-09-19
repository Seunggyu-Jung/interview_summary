import { css, styled } from 'styled-components';

export const Slider = styled.section`
  margin-left: 20px;
`;

export const Navigate = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavBtn = styled.a`
  display: inline-block;
  text-align: center;
  padding: 0;
  width: 50px;
  background: none;
  border-style: none;
  font-size: 20px;

  &:hover {
    background-color: #f3f4f6;
    cursor: pointer;
  }
`;
