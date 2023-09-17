import { Link } from 'react-router-dom';

import { useTheme } from 'contexts/ThemeContext';
import Button from 'components/Button/Button';

import * as S from './Header.styled';
import lightmodIcon from '../../image/lightmode.svg';
import darkmodeIcon from '../../image/darkmode.svg';
import searchIcon from '../../image/search.svg';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <S.Header>
      <S.HeaderContents>
        <S.HeaderTitle>
          <Link to="/">IT 집현전</Link>
        </S.HeaderTitle>
        <S.HeaderButtons>
          <Button onClick={toggleDarkMode}>
            <img
              src={isDarkMode ? lightmodIcon : darkmodeIcon}
              alt="다크모드 토글"
            />
          </Button>
          <Button to="/search">
            <img src={searchIcon} alt="검색" />
          </Button>
        </S.HeaderButtons>
      </S.HeaderContents>
    </S.Header>
  );
}
