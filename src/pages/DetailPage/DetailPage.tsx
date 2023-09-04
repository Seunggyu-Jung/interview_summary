import React, { useState } from 'react';
import * as S from './DetailPage.styled';
import Button from 'components/Button/Button';
import Slider from 'components/Slider/Slider';
import hamburger from 'image/hamburgerBTN.svg';
import guide from 'image/guideBTN.svg';
import GuidePopup from 'components/GuidePopup/GuidePopup';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import content from 'data/contents.json';
import { IContent } from 'types/dataTypes';
import ContentItem from 'components/ContentItem/ContentItem';

export default function DetailPage() {
  const [sliderActive, setSliderActive] = useState(false);
  const [isGuidePopupOpen, setIsGuidePopupOpen] = useState(false);
  const Tcontent: IContent[] = content;

  function toggleSlider() {
    setSliderActive(!sliderActive);
  }

  function toggleGuidePopup() {
    setIsGuidePopupOpen(!isGuidePopupOpen);
  }

  return (
    <>
      <Header></Header>
      <S.Wrapper type={sliderActive ? 'active' : 'default'}>
        {isGuidePopupOpen && <GuidePopup />}
        <S.SliderWrapper type={sliderActive ? 'active' : 'default'}>
          <Slider />
        </S.SliderWrapper>

        <div>
          <S.BtnSection type={sliderActive ? 'active' : 'default'}>
            <Button onClick={toggleSlider}>
              <img src={hamburger} alt="Menu" />
            </Button>
            <Button onClick={toggleGuidePopup}>
              <img src={guide} alt="Guide" />
            </Button>
          </S.BtnSection>
        </div>

        <S.Content type={sliderActive ? 'active' : 'default'}>
          <div>
            <section>
              <div>
                <ContentItem />
              </div>
            </section>
          </div>
        </S.Content>
      </S.Wrapper>
      <Footer />
    </>
  );
}
