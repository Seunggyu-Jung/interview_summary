import React from 'react';
import * as S from './SearchPage.styled';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function SearchPage() {
  return (
    <>
      <Header></Header>
      <S.Wrapper>
        <S.Title>검색 결과</S.Title>
        <S.Form>
          <S.Input type="text" placeholder="무엇이 궁금하신가요?" />
          <Button type="middle">찾기</Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
