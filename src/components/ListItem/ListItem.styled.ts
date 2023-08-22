import { styled } from 'styled-components';

export const ListTitle = styled.h3``;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
