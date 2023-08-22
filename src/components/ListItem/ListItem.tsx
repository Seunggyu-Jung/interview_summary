import React from 'react';

import { Category } from 'types/dataTypes';

import * as S from './ListItem.styled';

const ListItem = ({ data }: { data: Category }) => {
  return (
    <div id={data.title}>
      <S.ListTitle>{data.title}</S.ListTitle>
      <S.List>
        {data.items.map(item => (
          <li>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </S.List>
    </div>
  );
};

export default ListItem;
