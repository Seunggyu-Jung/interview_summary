import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultLink = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
    color: orange;
  }
`;

export const ResultTexture = styled.div`
  padding-top: 10px;
  display: block;
`;

export const Mark = styled.mark`
  background: antiquewhite;
`;
