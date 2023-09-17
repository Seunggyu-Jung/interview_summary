import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
`;

export const Title = styled.h1`
  padding: 80px 0 20px;
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

export const resultBox = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  margin: 20px auto;
`;
