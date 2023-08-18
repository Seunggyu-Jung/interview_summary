import React, { useState } from 'react';
import s from './DetailPage.module.css';
import CircleButton from 'components/Button/Circle/CircleButton';
import Slider from 'components/Slider/Slider';
import hamburger from 'image/hamburgerBTN.svg';
import guide from 'image/guideBTN.svg';

export default function DetailPage() {
  const [sliderActive, setSliderActive] = useState(false);

  function toggleSlider() {
    setSliderActive(!sliderActive);
  }

  return (
    <div className={s.detail}>
      <Slider isActive={sliderActive} onToggle={toggleSlider} />
      <section className={`${s.navigate} ${sliderActive ? s.active : ''}`}>
        <CircleButton
          icon={<img src={hamburger} alt="Menu" />}
          name="메뉴"
          onClick={toggleSlider}
        />
        <CircleButton icon={<img src={guide} alt="Menu" />} name="가이드" />
      </section>

      <div className={s.content}>
        <h1>자바스크립트란</h1>
        <section>
          <h2>정의</h2>
        </section>
        <section>
          <h2>내용</h2>
        </section>
        <section>
          <h2>QnA</h2>
        </section>
      </div>
    </div>
  );
}
