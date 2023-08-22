import { css, styled } from 'styled-components';

interface ISection {
  type: 'default' | 'active';
}

const isType = {
  default: css`
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  `,
  active: css`
    width: 200px;
    height: 100vh;
    background-color: antiquewhite;
    transform: translateX(0);
    transition: transform 0.5s ease;
  `,
};

export const Slider = styled.section<ISection>`
  ${props => isType[props.type]}
`;

export const Navigate = styled.nav`
  display: flex;
  flex-direction: column;
`;
