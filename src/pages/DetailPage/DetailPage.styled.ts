import { styled, css } from 'styled-components';

interface IBoolean {
  type: 'default' | 'active';
}

const isWrapper = {
  default: css`
    gap: 600px;
    transition: 0.3s ease;
  `,
  active: css`
    gap: 400px;
    transition: 0.3s ease;
  `,
};

const isSlider = {
  default: css`
    transform: translateX(-100%);
  `,
  active: css`
    transform: translateX(0);
    transition: transform 0.3s ease;
    width: 200px;
    height: 100vh;
    background-color: antiquewhite;
  `,
};

const isBtnSection = {
  default: css`
    transform: translateX(0);
  `,
  active: css`
    transform: translateX(200px);
  `,
};

const isContnet = {
  default: css`
    transform: translateX(-200px);
    transition: 0.3s ease;
  `,
  active: css`
    transform: translateX(0);
    transition: 0.3s ease;
    margin-right: 200px;
  `,
};

export const Wrapper = styled.div<IBoolean>`
  ${props => isWrapper[props.type]}
  display: flex;
  padding-top: 65px;
`;

export const SliderWrapper = styled.div<IBoolean>`
  ${props => isSlider[props.type]}
  position: fixed;
`;

export const Content = styled.div<IBoolean>`
  ${props => isContnet[props.type]}
  display: flex;
  flex-direction: column;
  /* max-width: 1200px; */
  z-index: -1;
`;

export const BtnSection = styled.section<IBoolean>`
  ${props => isBtnSection[props.type]}
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
`;
