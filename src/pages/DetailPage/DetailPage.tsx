import React, { useState, useEffect } from 'react';

import * as S from './DetailPage.styled';
import Button from 'components/Button/Button';
import Slider from 'components/Slider/Slider';
import hamburger from 'image/hamburgerBTN.svg';
import up from 'image/arrowUp.svg';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ContentItem from 'components/ContentItem/ContentItem';

export default function DetailPage() {
  const [sliderActive, setSliderActive] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  function toggleSlider() {
    setSliderActive(!sliderActive);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header></Header>
      <S.Wrapper type={sliderActive ? 'active' : 'default'}>
        <S.SliderWrapper type={sliderActive ? 'active' : 'default'}>
          <Slider />
        </S.SliderWrapper>

        <div>
          <S.BtnSection type={sliderActive ? 'active' : 'default'}>
            <Button onClick={toggleSlider}>
              <img src={hamburger} alt="Menu" />
            </Button>
            {isVisible && (
              <Button onClick={scrollToTop}>
                <img src={up} alt="up" />
              </Button>
            )}
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
