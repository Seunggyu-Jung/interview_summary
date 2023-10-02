import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
`;

export const Title = styled.button`
  margin: 0;
  padding: 80px 0 20px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  font-size: 30px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const resultBox = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  margin: 20px auto;
`;
