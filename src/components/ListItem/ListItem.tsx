import React from 'react';
import { IContent } from 'types/dataTypes';

import * as S from './ListItem.styled';
import { Link } from 'react-router-dom';

const ListItem = ({ data }: { data: IContent }) => {
  return (
    <div id={data.title}>
      <S.ListTitle>{data.title}</S.ListTitle>
      <S.List>
        {data.items.map(item => (
          <li>
            <Link to={`/detail/${item.id}`}>{item.topic}</Link>
          </li>
        ))}
      </S.List>
    </div>
  );
};

export default ListItem;
