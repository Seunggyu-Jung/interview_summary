import * as S from './Slider.styled';

export default function Slider() {
  return (
    <>
      <S.Slider>
        <h3>주제탐색</h3>
        <S.Navigate>
          <S.NavBtn href="#title">제목</S.NavBtn>
          <S.NavBtn href="#content">내용</S.NavBtn>
          <S.NavBtn href="#qna">QnA</S.NavBtn>
        </S.Navigate>
      </S.Slider>
    </>
  );
}
