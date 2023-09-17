import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

interface IButton {
  type: 'circle' | 'middle' | 'large';
}

const isType = {
  middle: css`
    width: 200px;
    height: 50px;
    background-color: aqua;
  `,
  large: css`
    width: 300px;
    height: 100px;
    background-color: salmon;
  `,
  circle: css`
    width: 50px;
    height: 50px;
    background-color: #ffff;
    &:hover {
      background-color: antiquewhite;
    }
    border-radius: 50px;
  `,
};

export const Button = styled.button<IButton>`
  border-radius: 10px;
  ${props => isType[props.type]}
  border: 0px;
  padding: 10px;
`;

export const StyledLink = styled(Link)<IButton>`
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  border-radius: 10px;
  ${props => isType[props.type]}
  border: 0px;
  padding: 10px;
`;
