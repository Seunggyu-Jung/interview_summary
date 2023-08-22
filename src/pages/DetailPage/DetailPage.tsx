import React, { useState } from 'react';
import * as S from './DetailPage.styled';
import Button from 'components/Button/Button';
import Slider from 'components/Slider/Slider';
import hamburger from 'image/hamburgerBTN.svg';
import guide from 'image/guideBTN.svg';
import GuidePopup from 'components/GuidePopup/GuidePopup';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function DetailPage() {
  const [sliderActive, setSliderActive] = useState(false);
  const [isGuidePopupOpen, setIsGuidePopupOpen] = useState(false);

  function toggleSlider() {
    setSliderActive(!sliderActive);
  }

  function toggleGuidePopup() {
    setIsGuidePopupOpen(!isGuidePopupOpen);
  }

  return (
    <>
      <Header></Header>
      <S.Wrapper>
        {isGuidePopupOpen && <GuidePopup />}
        <S.SliderWrapper>
          <Slider isActive={sliderActive} />
        </S.SliderWrapper>

        <S.ButtonWrapper>
          <S.BtnSection type={sliderActive ? 'active' : 'default'}>
            <Button onClick={toggleSlider}>
              <img src={hamburger} alt="Menu" />
            </Button>
            <Button onClick={toggleGuidePopup}>
              <img src={guide} alt="Guide" />
            </Button>
          </S.BtnSection>
        </S.ButtonWrapper>

        <S.Content>
          <div>
            <h1>자바스크립트란</h1>
            <section>
              <h2>정의</h2>
              <p>정의에 대한 내용 API 받아옴</p>
            </section>
            <section>
              <h2>내용</h2>
              <p>내용 API 받아옴</p>
            </section>
            <section>
              <h2>QnA</h2>
              <p>QnA API 받아옴</p>
            </section>
          </div>
          <Footer></Footer>
        </S.Content>
      </S.Wrapper>
      {/* <Footer></Footer> */}
    </>
  );
}
