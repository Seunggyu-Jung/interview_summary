import React from 'react';
import * as S from './Button.styled';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: 'circle' | 'middle' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  type = 'circle',
}) => {
  if (to) {
    return (
      <S.StyledLink to={to} type={type}>
        {children}
      </S.StyledLink>
    );
  } else {
    return (
      <S.Button onClick={onClick} type={type}>
        {children}
      </S.Button>
    );
  }
};

export default Button;
