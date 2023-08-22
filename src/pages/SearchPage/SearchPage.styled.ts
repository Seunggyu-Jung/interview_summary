import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
`;

export const Title = styled.h1`
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 70%;
  height: 50px;
  margin-right: 30px;
  padding: 0 10px;

  &:focus {
    border-color: #0982f0;
    outline: none;
  }
`;
