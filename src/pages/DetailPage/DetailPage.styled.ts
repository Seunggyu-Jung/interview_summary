import { styled, css } from 'styled-components';

interface IBtnSection {
  type: 'default' | 'active';
}

const isType = {
  default: css`
    margin-right: 350px;
  `,
  active: css`
    margin-right: 200px;
  `,
};

export const Wrapper = styled.div`
  display: flex;
  gap: 200px;
  padding-top: 65px;
`;

export const SliderWrapper = styled.div`
  width: 0;
  overflow: hidden;
  height: 100vh;
  background-color: red;
`;

export const ButtonWrapper = styled.div`
  flex-basis: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const BtnSection = styled.section<IBtnSection>`
  ${props => isType[props.type]}
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
`;
