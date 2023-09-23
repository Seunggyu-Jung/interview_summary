import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'contexts/ThemeContext';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Main from 'pages/Main/Main';
import DetailPage from 'pages/DetailPage/DetailPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/detail/:id" element={<DetailPage />}></Route>
            <Route path="/search/" element={<SearchPage />}></Route>
            <Route path="/search/:search" element={<SearchPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
