import React from 'react';
import data from 'data/contents.json';
import { useParams } from 'react-router-dom';
import * as S from './ResultBox.styled';

export default function ResultBox() {
  const { search } = useParams();

  const result = data[0].items.find(item => item.topic === search);

  if (!result) {
    return (
      <div>
        <p>검색하신 내용은 없는 내용입니다.</p>
      </div>
    );
  }

  return (
    <div>
      <S.ResultLink to={`/detail/${result?.id}`}>{result?.topic}</S.ResultLink>
      <S.ResultTexture>
        {result?.texture
          .slice(0, 300)
          .replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/gi, '') + '...'}
      </S.ResultTexture>
    </div>
  );
}
