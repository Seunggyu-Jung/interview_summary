import React from 'react';
import s from './CircleButton.module.css';

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CircleButton: React.FC<ButtonProps> = ({ name, onClick, icon }) => {
  return (
    <button className={s.circle} onClick={onClick}>
      {icon || name}
    </button>
  );
};

export default CircleButton;
