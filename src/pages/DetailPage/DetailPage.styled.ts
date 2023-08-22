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
`;

export const Content = styled.div`
  display: flex;
`;

export const BtnSection = styled.section<IBtnSection>`
  ${props => isType[props.type]}
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
