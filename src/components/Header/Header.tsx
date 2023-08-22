import { useTheme } from 'contexts/ThemeContext';

import * as S from './Header.styled';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <S.Header>
      <S.HeaderContents>
        <S.HeaderTitle>IT 집현전</S.HeaderTitle>
        <S.HeaderButtons>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Lightmode' : 'Darkmode'}
          </button>
          <button>Search</button>
        </S.HeaderButtons>
      </S.HeaderContents>
    </S.Header>
  );
}
