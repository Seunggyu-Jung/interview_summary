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
  padding-top: 65px;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  height: 100vh;
`;

export const BtnSection = styled.section<IBtnSection>`
  ${props => isType[props.type]}
  position: sticky;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
