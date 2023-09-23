import React, { useEffect } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ListItem from 'components/ListItem/ListItem';

import { IContent } from 'types/dataTypes';

import * as S from './Main.styled';

import contents from 'data/contents.json';
import Button from 'components/Button/Button';
import SearchInput from 'components/SearchInput/SearchInput';

const Main = () => {
  const data: IContent[] = contents;

  return (
    <>
      <Header></Header>
      <S.MainContentsWrapper>
        <section>
          <S.InnerWrapper>
            <h2>IT 집현전</h2>
            <p>
              CS스터디 IT집현전에서 프론트엔드 기술 면접에 자주 나오는 질문들을
              공부하며 정리한 공간입니다.
            </p>
            <div>
              <SearchInput type="text" />
              <Button type="middle">Search</Button>
            </div>
          </S.InnerWrapper>
        </section>
        <section>
          <S.Nav>
            <S.NavLinkWrapper>
              <S.NavItem href="#tab-1">HTML/CSS</S.NavItem>
              <S.NavItem href="#JavaScript">JavaScript</S.NavItem>
              <S.NavItem href="#React">React</S.NavItem>
              <S.NavItem href="#CS">CS</S.NavItem>
            </S.NavLinkWrapper>
          </S.Nav>
          <S.InnerWrapper>
            {data.map(item => (
              <ListItem data={item} />
            ))}
          </S.InnerWrapper>
        </section>
      </S.MainContentsWrapper>
      <Footer></Footer>
    </>
  );
};

export default Main;
