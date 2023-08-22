import * as S from './Slider.styled';

interface SliderProps {
  isActive: boolean;
}

export default function Slider({ isActive }: SliderProps) {
  return (
    <>
      <S.Slider type={isActive ? 'active' : 'default'}>
        <h3>주제탐색</h3>
        <S.Navigate>
          <p>정의</p>
          <p>내용</p>
          <p>QnA</p>
        </S.Navigate>
      </S.Slider>
    </>
  );
}
