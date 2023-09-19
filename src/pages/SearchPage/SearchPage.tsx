import React, { useEffect } from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './SearchPage.styled';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import ResultBox from 'components/ResultBox/ResultBox';
import { useParams } from 'react-router-dom';

export default function SearchPage() {
  const { search } = useParams();

  const [searchInput, setSearchInput] = useState(search || '');

  const [isRight, setIsRight] = useState(false);

  const switchBox = () => {
    if (searchInput.length !== 0) {
      setIsRight(true);
    }
  };

  useEffect(() => {
    switchBox();
  }, []);

  return (
    <>
      <Header></Header>
      <S.Wrapper>
        <S.Title>검색 결과</S.Title>
        <S.Form>
          <S.Input
            type="text"
            placeholder="무엇이 궁금하신가요?"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />

          <Link to={`/search/${searchInput}`} onClick={switchBox}>
            <Button type="middle">찾기</Button>
          </Link>
        </S.Form>
        {isRight && (
          <S.resultBox>
            <ResultBox />
          </S.resultBox>
        )}
      </S.Wrapper>
    </>
  );
}
