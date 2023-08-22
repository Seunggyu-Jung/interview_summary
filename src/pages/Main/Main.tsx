import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ListItem from 'components/ListItem/ListItem';
import { Category } from 'types/dataTypes';

import * as S from './Main.styled';

import mockData from '../../data/mockData.json';

const Main = () => {
  const data: Category[] = mockData;

  return (
    <>
      <Header></Header>
      <S.MainContentsWrapper>
        <section>
          <S.InnerWrapper>
            <h2>IT 집현전</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, tempora.
            </p>
            <div>
              <input type="text" />
              <button>Search</button>
            </div>
            <h3>목차</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              exercitationem!
            </p>
          </S.InnerWrapper>
        </section>
        <section>
          <S.Nav>
            <S.NavItem href="#tab-1">HTML/CSS</S.NavItem>
            <S.NavItem href="#tab-2">JavaScript</S.NavItem>
            <S.NavItem href="#tab-3">React</S.NavItem>
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
