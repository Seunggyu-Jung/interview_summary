import React from 'react';
import s from './LargeButton.module.css';

interface ButtonProps {
  name: string;
}

const LargeButton: React.FC<ButtonProps> = ({ name }) => {
  return <button className={s.large}>{name}</button>;
};

export default LargeButton;
