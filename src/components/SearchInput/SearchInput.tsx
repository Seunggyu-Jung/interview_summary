import React from 'react';

import * as S from './SearchInput.styled';

export default function SearchInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <S.Input {...props} />;
}
