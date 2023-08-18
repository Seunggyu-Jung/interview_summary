import React, { useState } from 'react';
import s from './Slider.module.css';

interface SliderProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function Slider({ isActive, onToggle }: SliderProps) {
  return (
    <>
      <section className={`${s.wrapper} ${isActive ? s.active : ''}`}>
        <h3>주제탐색</h3>
        <nav className={s.nav}>
          <p>정의</p>
          <p>내용</p>
          <p>QnA</p>
        </nav>
      </section>
    </>
  );
}
