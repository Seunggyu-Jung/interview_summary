import { useTheme } from 'contexts/ThemeContext';
import { Link } from 'react-router-dom';

import * as S from './Header.styled';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <S.Header>
      <S.HeaderContents>
        <S.HeaderTitle>
          <Link to="/">IT 집현전</Link>
        </S.HeaderTitle>
        <S.HeaderButtons>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Lightmode' : 'Darkmode'}
          </button>
          <Link to={'/search'}>
            <button>Search</button>
          </Link>
        </S.HeaderButtons>
      </S.HeaderContents>
    </S.Header>
  );
}
