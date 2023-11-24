import { styled } from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  border-top: 1px solid #eee;
  padding: 10px 0;
  background-color: #f2f2f2;
`;

export const GithubBtn = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  padding: 0;
`;

export const modalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const modalAnchor = styled.button`
  width: 100%;
  padding: 20px;
  background: none;
  border-radius: 10px;
  border: 1px solid black;

  &:hover {
    background-color: antiquewhite;
  }
`;
