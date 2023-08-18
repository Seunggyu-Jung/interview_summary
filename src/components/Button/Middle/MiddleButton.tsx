import React from 'react';
import s from './MiddleButton.module.css';

interface ButtonProps {
  name: string;
}

const MiddleButton: React.FC<ButtonProps> = ({ name }) => {
  return <button className={s.middle}>{name}</button>;
};

export default MiddleButton;
