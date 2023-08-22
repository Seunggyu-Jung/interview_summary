import React from 'react';
import * as S from './Button.styled';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'circle' | 'middle' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'circle',
}) => {
  return (
    <S.Button onClick={onClick} type={type}>
      {children}
    </S.Button>
  );
};

export default Button;
