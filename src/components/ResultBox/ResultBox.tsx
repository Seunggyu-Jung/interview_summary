import React from 'react';
import data from 'data/contents.json';
import * as S from './ResultBox.styled';

export default function ResultBox({ search }: { search: string }) {
  const resultArr = data[0].items.filter(
    item => item.topic.includes(search) || item.texture.includes(search)
  );

  const highlightText = (text: string, searchKeyword: string) => {
    const regex = new RegExp(searchKeyword, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      index !== parts.length - 1 ? (
        <>
          {part}
          <S.Mark>{searchKeyword}</S.Mark>
        </>
      ) : (
        part
      )
    );
  };

  if (resultArr.length === 0) {
    return (
      <div>
        <p>검색하신 내용은 없는 내용입니다.</p>
      </div>
    );
  }

  return (
    <>
      {resultArr.map(result => (
        <S.ResultBox>
          <S.ResultLink to={`/detail/${result?.id}`}>
            {result?.topic}
          </S.ResultLink>
          <S.ResultTexture>
            {highlightText(
              result?.texture
                .slice(0, 300)
                .replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/gi, '') + '...',
              search
            )}
          </S.ResultTexture>
        </S.ResultBox>
      ))}
    </>
  );
}
